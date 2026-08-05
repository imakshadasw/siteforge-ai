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

Generate a complete landing page for this business.

Business Name: ${body.businessName}
Business Type: ${body.businessType}
City: ${body.city}
Description: ${body.description}

Return ONLY valid JSON.

{
  "heroTitle": "",
  "heroSubtitle": "",
  "about": "",

  "services": [
    "",
    "",
    ""
  ],

  "whyChooseUs": [
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
    }
  ],

  "contact": {
    "phone": "",
    "email": "",
    "address": ""
  }
}

Rules:
- No markdown
- No explanations
- Return JSON only
- Make the content realistic and professional
- Services should be short titles
- Testimonials should sound genuine
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

        theme: body.theme ?? "Dark",

        heroTitle: data.heroTitle ?? "",
        heroSubtitle: data.heroSubtitle ?? "",
        about: data.about ?? "",

        services: data.services ?? [],

        whyChooseUs: data.whyChooseUs ?? [],

        testimonials: data.testimonials ?? [],

        phone: data.contact?.phone ?? "",
        email: data.contact?.email ?? "",
        address: data.contact?.address ?? "",
      },
    });

    return NextResponse.json({
      id: project.id,

      heroTitle: data.heroTitle ?? "",
      heroSubtitle: data.heroSubtitle ?? "",
      about: data.about ?? "",

      services: data.services ?? [],

      whyChooseUs: data.whyChooseUs ?? [],

      testimonials: data.testimonials ?? [],

      contact: {
        phone: data.contact?.phone ?? "",
        email: data.contact?.email ?? "",
        address: data.contact?.address ?? "",
      },
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