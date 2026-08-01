import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    businessName,
    businessType,
    city,
    description,
  } = body;

  let heroSubtitle = "";
  let services: string[] = [];

  switch (businessType) {
    case "Cafe":
      heroSubtitle = `Fresh Coffee & Cozy Moments in ${city}`;
      services = [
        "☕ Specialty Coffee",
        "🥐 Fresh Bakery",
        "📶 Free Wi-Fi",
      ];
      break;

    case "Restaurant":
      heroSubtitle = `Delicious Food in ${city}`;
      services = [
        "🍕 Fine Dining",
        "🚚 Home Delivery",
        "🎉 Catering",
      ];
      break;

    case "Gym":
      heroSubtitle = `Transform Your Fitness Journey`;
      services = [
        "💪 Personal Training",
        "🏃 Cardio Zone",
        "🥗 Nutrition Plans",
      ];
      break;

    case "Salon":
      heroSubtitle = `Beauty That Inspires Confidence`;
      services = [
        "💇 Hair Styling",
        "💅 Nail Care",
        "💆 Spa Treatments",
      ];
      break;

    case "Clinic":
      heroSubtitle = `Professional Healthcare in ${city}`;
      services = [
        "🩺 Health Checkups",
        "👨‍⚕️ Specialist Doctors",
        "💊 Pharmacy",
      ];
      break;

    case "Real Estate":
      heroSubtitle = `Find Your Dream Property`;
      services = [
        "🏠 Property Sales",
        "🏢 Commercial Spaces",
        "📈 Investment Advice",
      ];
      break;

    default:
      heroSubtitle = `The Best ${businessType} in ${city}`;
      services = [
        "Premium Service",
        "Friendly Staff",
        "Affordable Pricing",
      ];
  }

  return NextResponse.json({
    heroTitle: businessName,
    heroSubtitle,
    about: `${businessName} is a professional ${businessType.toLowerCase()} located in ${city}. ${description}`,
    services,
  });
}