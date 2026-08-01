import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { businessName, businessType, city, description } = body;

  return NextResponse.json({
    heroTitle: businessName,
    heroSubtitle: `The best ${businessType} in ${city}`,
    about: `${businessName} is a modern ${businessType.toLowerCase()} located in ${city}. ${description}`,

    services: [
      "Premium Service",
      "Friendly Staff",
      "Affordable Pricing"
    ]
  });
}