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
You are an expert website copywriter and UI/UX designer.

Generate a complete landing page and a matching visual design system for this business.

Business Name: ${body.businessName}
Business Type: ${body.businessType}
City: ${body.city}
Description: ${body.description}
User Theme Preference: ${body.theme ?? "Dark"}

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
  },

  "design": {
    "primaryColor": "",
    "secondaryColor": "",
    "accentColor": "",
    "style": "",
    "borderRadius": ""
  }
}

DESIGN SYSTEM RULES:

- Choose colors that naturally fit the business.
- primaryColor must be a valid HEX color such as "#06B6D4".
- secondaryColor must be a valid HEX color.
- accentColor must be a valid HEX color.
- Do not use color names. Use HEX values only.
- style should be a short description such as "Modern", "Luxury", "Minimal", "Corporate", "Elegant", "Bold", or "Professional".
- borderRadius MUST be exactly one of:
  "rounded"
  "soft"
  "sharp"

BUSINESS STYLE EXAMPLES:

Restaurant:
- warm colors such as red, orange, amber, cream, or dark brown.

Cafe:
- coffee, cream, beige, warm brown, or muted green.

Gym:
- bold colors such as red, orange, lime, electric blue, or black.

Salon:
- elegant colors such as rose, purple, champagne, beige, or black.

Clinic:
- trustworthy colors such as blue, teal, cyan, white, or green.

Law Firm:
- professional colors such as navy, charcoal, dark green, or gold.

Real Estate:
- premium colors such as navy, emerald, charcoal, gold, or slate.

Construction:
- strong colors such as orange, yellow, blue, charcoal, or steel.

IMPORTANT:
- Respect the user's Dark or Light theme preference.
- Do not make every business cyan.
- Make the design visually appropriate for the business type.
- Keep colors professional and readable.
- Avoid extremely bright backgrounds.
- Ensure primary and accent colors work well with the selected theme.

CONTENT RULES:

- No markdown.
- No explanations.
- Return JSON only.
- Make the content realistic and professional.
- Services should be short titles.
- Testimonials should sound natural.
- Do not invent specific real-world claims about the business.
- If contact information was not provided, use empty strings.
`;

    const completion = await client.chat.completions.create({
      model: "inclusionai/ling-3.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
    });

    const text = completion.choices[0]?.message?.content;

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

    const design = {
      primaryColor:
        data.design?.primaryColor ?? "#06B6D4",

      secondaryColor:
        data.design?.secondaryColor ?? "#0F172A",

      accentColor:
        data.design?.accentColor ?? "#22D3EE",

      style:
        data.design?.style ?? "Modern",

      borderRadius:
        ["rounded", "soft", "sharp"].includes(
          data.design?.borderRadius
        )
          ? data.design.borderRadius
          : "rounded",
    };

    const project = await prisma.project.create({
      data: {
        businessName: body.businessName ?? "",
        businessType: body.businessType ?? "",
        city: body.city ?? "",
        description: body.description ?? "",

        theme: body.theme ?? "Dark",

        heroTitle: data.heroTitle ?? "",
        heroSubtitle: data.heroSubtitle ?? "",
        about: data.about ?? "",

        services: Array.isArray(data.services)
          ? data.services
          : [],

        whyChooseUs: Array.isArray(data.whyChooseUs)
          ? data.whyChooseUs
          : [],

        testimonials: Array.isArray(data.testimonials)
          ? data.testimonials
          : [],

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

      services: Array.isArray(data.services)
        ? data.services
        : [],

      whyChooseUs: Array.isArray(data.whyChooseUs)
        ? data.whyChooseUs
        : [],

      testimonials: Array.isArray(data.testimonials)
        ? data.testimonials
        : [],

      contact: {
        phone: data.contact?.phone ?? "",
        email: data.contact?.email ?? "",
        address: data.contact?.address ?? "",
      },

      design,
    });
  } catch (error: any) {
    console.error("===== AI ERROR =====");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Failed to generate website content.",
        details: error?.error?.message || null,
      },
      {
        status: 500,
      }
    );
  }
}