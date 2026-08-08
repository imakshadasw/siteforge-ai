"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Contact, DesignSystem, Theme } from "../types/website";

type Props = {
  businessName: string;
  contact: Contact;
  theme: Theme;
  design?: DesignSystem;
};

export default function FooterSection({
  businessName,
  contact,
  theme,
  design,
}: Props) {
  const dark = theme === "Dark";

  const colors = design ?? {
    primaryColor: "#06B6D4",
    secondaryColor: "#0F172A",
    accentColor: "#22D3EE",
    style: "Modern",
    borderRadius: "rounded" as const,
  };

  const radius =
    colors.borderRadius === "sharp"
      ? "rounded-none"
      : colors.borderRadius === "soft"
        ? "rounded-2xl"
        : "rounded-3xl";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`relative overflow-hidden border-t ${
        dark
          ? "border-white/10 bg-[#030712] text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-10"
          style={{
            backgroundColor: colors.primaryColor,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold">
              <span
                style={{
                  color: colors.primaryColor,
                }}
              >
                {businessName || "Business"}
              </span>
            </h2>

            <p
              className={`mt-5 max-w-md leading-7 ${
                dark
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Quality service, professional solutions, and a
              customer-first experience designed around your needs.
            </p>

            {/* Social placeholders */}
            <div className="mt-7 flex gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map(
                (social) => (
                  <button
                    key={social}
                    type="button"
                    className={`border px-4 py-2 text-xs font-semibold transition ${radius} ${
                      dark
                        ? "border-white/10 bg-white/5 text-gray-400 hover:text-white"
                        : "border-gray-200 bg-gray-50 text-gray-500 hover:text-gray-900"
                    }`}
                    style={{
                      borderColor: `${colors.primaryColor}30`,
                    }}
                  >
                    {social}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold">
              Quick Links
            </h3>

            <nav className="mt-5 space-y-3">
              <FooterLink
                label="Home"
                href="#preview-home"
                theme={theme}
                colors={colors}
              />

              <FooterLink
                label="About"
                href="#about"
                theme={theme}
                colors={colors}
              />

              <FooterLink
                label="Services"
                href="#services"
                theme={theme}
                colors={colors}
              />

              <FooterLink
                label="Reviews"
                href="#testimonials"
                theme={theme}
                colors={colors}
              />

              <FooterLink
                label="Contact"
                href="#contact"
                theme={theme}
                colors={colors}
              />
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <ContactItem
                icon={Phone}
                value={contact.phone}
                href={
                  contact.phone
                    ? `tel:${contact.phone}`
                    : undefined
                }
                theme={theme}
                colors={colors}
              />

              <ContactItem
                icon={Mail}
                value={contact.email}
                href={
                  contact.email
                    ? `mailto:${contact.email}`
                    : undefined
                }
                theme={theme}
                colors={colors}
              />

              <ContactItem
                icon={MapPin}
                value={contact.address}
                theme={theme}
                colors={colors}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-16 flex flex-col gap-5 border-t pt-8 md:flex-row md:items-center md:justify-between ${
            dark
              ? "border-white/10"
              : "border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${
              dark
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            © {new Date().getFullYear()}{" "}
            {businessName || "Business"}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span
              className={`text-sm ${
                dark
                  ? "text-gray-500"
                  : "text-gray-500"
              }`}
            >
              Powered by{" "}
              <span
                style={{
                  color: colors.primaryColor,
                }}
              >
                SiteForge AI
              </span>
            </span>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`flex h-10 w-10 items-center justify-center text-black ${radius}`}
              style={{
                backgroundColor: colors.primaryColor,
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  label,
  href,
  theme,
  colors,
}: {
  label: string;
  href: string;
  theme: Theme;
  colors: DesignSystem;
}) {
  const dark = theme === "Dark";

  return (
    <a
      href={href}
      className={`block text-sm transition ${
        dark
          ? "text-gray-400 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }`}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colors.primaryColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "";
      }}
    >
      {label}
    </a>
  );
}

function ContactItem({
  icon: Icon,
  value,
  href,
  theme,
  colors,
}: {
  icon: typeof Phone;
  value: string;
  href?: string;
  theme: Theme;
  colors: DesignSystem;
}) {
  const dark = theme === "Dark";

  const content = (
    <div className="flex items-start gap-3">
      <Icon
        size={18}
        className="mt-1 shrink-0"
        style={{
          color: colors.primaryColor,
        }}
      />

      <span
        className={`break-words text-sm leading-6 ${
          dark
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >
        {value || "Information coming soon"}
      </span>
    </div>
  );

  if (href && value) {
    return (
      <a
        href={href}
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}