import { NextResponse } from "next/server";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an expert website copywriter.

Generate professional website content for this business.

Business Name: ${body.businessName}
Business Type: ${body.businessType}
City: ${body.city}
Description: ${body.description}

Rules:
- Return ONLY valid JSON.
- No markdown.
- No explanations.
- Make the content specific to the business type.
- Generate exactly 6 services.
- Generate exactly 6 "why choose us" points.
- Generate exactly 3 testimonials.
- Create realistic contact information.

JSON format:

{
  "heroTitle": "",
  "heroSubtitle": "",
  "about": "",

  "services": [
    "",
    "",
    "",
    "",
    "",
    ""
  ],

  "whyChooseUs": [
    "",
    "",
    "",
    "",
    "",
    ""
  ],

  "testimonials": [
    {
      "name": "",
      "review": ""
    },
    {
      "name": "",
      "review": ""
    },
    {
      "name": "",
      "review": ""
    }
  ],

  "contact": {
    "phone": "",
    "email": "",
    "address": ""
  }
}
`;

    const completion = await client.chat.completions.create({
      model: "inclusionai/ling-3.0-flash:free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
    });

    const text = completion.choices[0].message.content;

    if (!text) {
      throw new Error("AI returned an empty response.");
    }

    console.log("===== AI RESPONSE =====");
    console.log(text);

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleaned);

    const project = await prisma.project.create({
      data: {
        businessName: body.businessName,
        businessType: body.businessType,
        city: body.city,
        description: body.description,

        theme: body.theme || "Dark",

        heroTitle: data.heroTitle,
        heroSubtitle: data.heroSubtitle,
        about: data.about,

        services: data.services,
        whyChooseUs: data.whyChooseUs,
        testimonials: data.testimonials,

        phone: data.contact.phone,
        email: data.contact.email,
        address: data.contact.address,
      },
    });

    return NextResponse.json({
      heroTitle: data.heroTitle,
      heroSubtitle: data.heroSubtitle,
      about: data.about,

      services: data.services,
      whyChooseUs: data.whyChooseUs,
      testimonials: data.testimonials,

      contact: data.contact,

      projectId: project.id,
    });
  } catch (error: any) {
    console.error("===== AI ERROR =====");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Unknown error",
        details: error?.error?.message || null,
      },
      {
        status: 500,
      }
    );
  }
}