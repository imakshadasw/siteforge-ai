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
You are an expert website copywriter, UI/UX designer, and visual art director.

Generate a complete landing page, visual design system, and image strategy for this business.

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
  },

  "visuals": {
    "heroImagePrompt": "",
    "galleryImagePrompts": [
      "",
      "",
      ""
    ]
  }
}

DESIGN SYSTEM RULES:

- Choose colors that naturally fit the business.
- primaryColor must be a valid HEX color.
- secondaryColor must be a valid HEX color.
- accentColor must be a valid HEX color.
- style should be a short description such as:
  "Modern", "Luxury", "Minimal", "Corporate",
  "Elegant", "Bold", or "Professional".
- borderRadius MUST be exactly one of:
  "rounded"
  "soft"
  "sharp"

BUSINESS STYLE GUIDELINES:

Restaurant:
- warm, appetizing, premium colors.
- Examples: red, orange, amber, cream, dark brown.

Cafe:
- cozy and welcoming.
- Examples: coffee brown, cream, beige, muted green.

Gym:
- energetic and powerful.
- Examples: red, orange, lime, electric blue, black.

Salon:
- elegant and sophisticated.
- Examples: rose, purple, champagne, beige, black.

Clinic:
- trustworthy and clean.
- Examples: blue, teal, cyan, white, green.

Law Firm:
- authoritative and premium.
- Examples: navy, charcoal, dark green, gold.

Real Estate:
- premium and trustworthy.
- Examples: navy, emerald, charcoal, gold, slate.

Construction:
- strong and practical.
- Examples: orange, yellow, blue, charcoal, steel.

VISUAL CONTENT RULES:

- Generate image prompts that are specifically relevant to the business.
- Do NOT use generic phrases like "beautiful business".
- Describe the actual subject, environment, lighting, composition, and visual style.
- Prompts should be suitable for an AI image generator.
- The hero image should represent the main identity of the business.
- Generate exactly 3 gallery image prompts.
- Each gallery image should show a different aspect of the business.
- Keep the imagery professional and realistic.
- Do not include text, logos, watermarks, or recognizable copyrighted characters.
- Do not invent specific awards, famous clients, or unverifiable claims.
- Do not request images of identifiable real people.
- Avoid overly generic stock-photo language.

EXAMPLES:

For a restaurant:

heroImagePrompt:
"Premium modern Indian restaurant interior, warm amber pendant lighting, elegant wooden tables, sophisticated dark green and brass details, cinematic architectural photography, realistic, high-end hospitality photography, no people, no text, no logos."

Gallery examples:
"Close-up of beautifully plated Indian cuisine on a dark ceramic plate, warm restaurant lighting, premium food photography, realistic, no text."

"Elegant Indian restaurant dining room with contemporary interior design, warm ambient lighting, sophisticated atmosphere, architectural photography, no people, no logos."

"Professional chef preparing fresh Indian cuisine in a modern restaurant kitchen, cinematic lighting, realistic editorial photography, no visible face, no text, no logos."

CONTENT RULES:

- No markdown.
- No explanations.
- Return JSON only.
- Make content realistic and professional.
- Services should be short titles.
- Testimonials should sound natural.
- If contact information was not provided, use empty strings.
- Do not invent specific real-world claims.
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

    const visuals = {
      heroImagePrompt:
        data.visuals?.heroImagePrompt ?? "",

      galleryImagePrompts:
        Array.isArray(data.visuals?.galleryImagePrompts)
          ? data.visuals.galleryImagePrompts.slice(0, 3)
          : [],
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

      visuals,
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