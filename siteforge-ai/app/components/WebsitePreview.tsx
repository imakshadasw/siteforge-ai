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

  const businessName =
    data.heroTitle?.trim() ||
    city ||
    "Business";

  return (
    <div
      className={`mt-10 overflow-hidden rounded-2xl border shadow-2xl ${
        dark
          ? "border-cyan-900 bg-[#030712] text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {/* Preview Navbar */}
      <header
        className={`sticky top-0 z-30 flex items-center justify-between border-b px-6 py-5 backdrop-blur-xl md:px-8 ${
          dark
            ? "border-cyan-900 bg-[#0b1120]/90"
            : "border-gray-200 bg-white/90"
        }`}
      >
        <a
          href="#preview-home"
          className="text-xl font-extrabold text-cyan-400 md:text-2xl"
        >
          {city || "Business"}
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a
            href="#preview-home"
            className="transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#services"
            className="transition hover:text-cyan-400"
          >
            Services
          </a>

          <a
            href="#testimonials"
            className="transition hover:text-cyan-400"
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-400"
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
        />
      </div>

      {/* Services */}
      <div id="services">
        <ServicesSection
          services={data.services}
          theme={theme}
        />
      </div>

      {/* Why Choose Us */}
      <WhyChooseSection
        items={data.whyChooseUs}
        theme={theme}
      />

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialsSection
          testimonials={data.testimonials}
          theme={theme}
        />
      </div>

      {/* Contact */}
      <div id="contact">
        <ContactSection
          contact={data.contact}
          theme={theme}
        />
      </div>

      {/* Footer */}
      <FooterSection
        businessName={businessName}
        contact={data.contact}
        theme={theme}
      />
    </div>
  );
}