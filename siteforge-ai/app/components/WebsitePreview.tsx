import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

import { Theme, WebsiteData } from "../types/website";

type Props = {
  data: WebsiteData;
  city: string;
  theme: Theme;
};

export default function WebsitePreview({
  data,
  city,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <div
      className={`mt-10 overflow-hidden rounded-2xl border shadow-2xl ${
        dark
          ? "bg-[#030712] border-cyan-900 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <header
        className={`flex items-center justify-between px-8 py-5 ${
          dark ? "bg-[#0b1120]" : "bg-gray-100"
        }`}
      >
        <h1 className="text-2xl font-bold text-cyan-400">
          {city || "Business"}
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </nav>
      </header>

      {/* Hero */}
      <HeroSection
        data={data}
        theme={theme}
      />

      {/* About */}
      <AboutSection
        about={data.about}
        theme={theme}
      />

      {/* Services */}
      <ServicesSection
        services={data.services}
        theme={theme}
      />

      {/* Why Choose Us */}
      <WhyChooseSection
        items={data.whyChooseUs}
        theme={theme}
      />

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={data.testimonials}
        theme={theme}
      />

      {/* Contact */}
      <ContactSection
        contact={data.contact}
        theme={theme}
      />

      {/* Footer */}
      <FooterSection
        businessName={city || "Business"}
        theme={theme}
      />
    </div>
  );
}