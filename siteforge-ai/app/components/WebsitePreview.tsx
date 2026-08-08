"use client";

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

  const design = data.design ?? {
    primaryColor: "#06B6D4",
    secondaryColor: "#0F172A",
    accentColor: "#22D3EE",
    style: "Modern",
    borderRadius: "rounded" as const,
  };

  const businessName =
    data.heroTitle?.trim() ||
    city ||
    "Business";

  return (
    <div
      style={
        {
          "--primary-color": design.primaryColor,
          "--secondary-color": design.secondaryColor,
          "--accent-color": design.accentColor,
        } as React.CSSProperties
      }
      className={`mt-10 overflow-hidden border shadow-2xl ${
        design.borderRadius === "sharp"
          ? "rounded-none"
          : design.borderRadius === "soft"
            ? "rounded-xl"
            : "rounded-2xl"
      } ${
        dark
          ? "bg-[#030712] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Preview Navbar */}
      <header
        className={`sticky top-0 z-30 flex items-center justify-between border-b px-6 py-5 backdrop-blur-xl md:px-8 ${
          dark
            ? "border-white/10 bg-[#0b1120]/90"
            : "border-gray-200 bg-white/90"
        }`}
      >
        <a
          href="#preview-home"
          className="text-xl font-extrabold md:text-2xl"
          style={{
            color: design.primaryColor,
          }}
        >
          {city || "Business"}
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a
            href="#preview-home"
            className="transition hover:opacity-70"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:opacity-70"
          >
            About
          </a>

          <a
            href="#services"
            className="transition hover:opacity-70"
          >
            Services
          </a>

          <a
            href="#testimonials"
            className="transition hover:opacity-70"
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="transition hover:opacity-70"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
          style={{
            backgroundColor: design.primaryColor,
          }}
        >
          Get Started
        </a>
      </header>

      {/* Hero */}
      <div id="preview-home">
        <HeroSection
          data={data}
          theme={theme}
        />
      </div>

      {/* About */}
      <div id="about">
        <AboutSection
  about={data.about}
  theme={theme}
  design={data.design}
/>
      </div>

      {/* Services */}
      <div id="services">
        <ServicesSection
  services={data.services}
  theme={theme}
  design={data.design}
/>
      </div>

      {/* Why Choose Us */}
      <WhyChooseSection
  items={data.whyChooseUs}
  theme={theme}
  design={data.design}
/>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialsSection
  testimonials={data.testimonials}
  theme={theme}
  design={data.design}
/>
      </div>

      {/* Contact */}
      <div id="contact">
        <ContactSection
  contact={data.contact}
  theme={theme}
  design={data.design}
/>
      </div>

      {/* Footer */}
      <FooterSection
  businessName={businessName}
  contact={data.contact}
  theme={theme}
  design={data.design}
/>
    </div>
  );
}