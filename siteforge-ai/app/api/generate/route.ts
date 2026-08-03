import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { businessName, businessType, city } = body;

  let heroTitle = "";
  let heroSubtitle = "";
  let about = "";
  let services: string[] = [];

  switch (businessType) {
    case "Restaurant":
      heroTitle = businessName || "My Restaurant";
      heroSubtitle = `Delicious food served fresh every day in ${city}.`;
      about =
        "We offer freshly prepared meals made with high-quality ingredients. Whether you're dining with family or friends, we provide a warm and welcoming experience.";
      services = [
        "Dine-In",
        "Home Delivery",
        "Online Reservation",
      ];
      break;

    case "Cafe":
      heroTitle = businessName || "My Cafe";
      heroSubtitle = `Fresh coffee and cozy vibes in ${city}.`;
      about =
        "Enjoy handcrafted coffee, delicious snacks, and a relaxing atmosphere perfect for work or catching up with friends.";
      services = [
        "Coffee",
        "Bakery",
        "Free Wi-Fi",
      ];
      break;

    case "Gym":
      heroTitle = businessName || "My Gym";
      heroSubtitle = `Achieve your fitness goals in ${city}.`;
      about =
        "Our gym features modern equipment, certified trainers, and personalized fitness programs to help you stay healthy.";
      services = [
        "Personal Training",
        "Cardio Zone",
        "Strength Training",
      ];
      break;

    case "Salon":
      heroTitle = businessName || "My Salon";
      heroSubtitle = `Beauty and style experts in ${city}.`;
      about =
        "We provide premium beauty and grooming services using professional products in a relaxing environment.";
      services = [
        "Hair Styling",
        "Skin Care",
        "Spa",
      ];
      break;

    case "Clinic":
      heroTitle = businessName || "My Clinic";
      heroSubtitle = `Professional healthcare services in ${city}.`;
      about =
        "Our experienced medical professionals are dedicated to providing quality healthcare with compassion and care.";
      services = [
        "General Checkup",
        "Diagnostics",
        "Emergency Care",
      ];
      break;

    case "Real Estate":
      heroTitle = businessName || "My Real Estate";
      heroSubtitle = `Helping you find the perfect property in ${city}.`;
      about =
        "We specialize in buying, selling, and renting residential and commercial properties with trusted local expertise.";
      services = [
        "Property Sales",
        "Property Rental",
        "Investment Consulting",
      ];
      break;

    default:
      heroTitle = businessName || "My Business";
      heroSubtitle = `Serving customers in ${city}.`;
      about =
        "We are committed to delivering quality services and excellent customer experiences.";
      services = [
        "Quality Service",
        "Professional Team",
        "Customer Support",
      ];
  }

  return NextResponse.json({
    heroTitle,
    heroSubtitle,
    about,
    services,
  });
}