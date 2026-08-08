"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Contact, Theme } from "../types/website";

type Props = {
  businessName: string;
  contact: Contact;
  theme: Theme;
};

export default function FooterSection({
  businessName,
  contact,
  theme,
}: Props) {
  const dark = theme === "Dark";

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
          ? "border-cyan-900 bg-[#030712] text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold">
              <span className="text-cyan-400">
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
              Professional service, quality solutions, and a
              customer-first experience designed to help you
              achieve your goals.
            </p>

            {/* Social buttons */}
            <div className="mt-7 flex gap-3">
              <SocialButton
                label="Instagram"
                theme={theme}
              />

              <SocialButton
                label="Facebook"
                theme={theme}
              />

              <SocialButton
                label="LinkedIn"
                theme={theme}
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold">
              Quick Links
            </h3>

            <nav className="mt-5 space-y-3">
              <FooterLink
                label="Home"
                href="#preview-home"
                theme={theme}
              />

              <FooterLink
                label="About"
                href="#about"
                theme={theme}
              />

              <FooterLink
                label="Services"
                href="#services"
                theme={theme}
              />

              <FooterLink
                label="Contact"
                href="#contact"
                theme={theme}
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
              />

              <ContactItem
                icon={MapPin}
                value={contact.address}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-16 flex flex-col gap-5 border-t pt-8 md:flex-row md:items-center md:justify-between ${
            dark
              ? "border-gray-800"
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
              Powered by SiteForge AI
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-black transition hover:bg-cyan-400"
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

type SocialButtonProps = {
  label: string;
  theme: Theme;
};

function SocialButton({
  label,
  theme,
}: SocialButtonProps) {
  const dark = theme === "Dark";

  return (
    <button
      type="button"
      aria-label={label}
      className={`flex h-11 items-center justify-center rounded-xl border px-4 text-xs font-semibold transition ${
        dark
          ? "border-gray-800 bg-white/5 text-gray-400 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
          : "border-gray-200 bg-gray-50 text-gray-500 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-500"
      }`}
    >
      {label}
    </button>
  );
}

type FooterLinkProps = {
  label: string;
  href: string;
  theme: Theme;
};

function FooterLink({
  label,
  href,
  theme,
}: FooterLinkProps) {
  const dark = theme === "Dark";

  return (
    <a
      href={href}
      className={`block text-sm transition ${
        dark
          ? "text-gray-400 hover:text-cyan-400"
          : "text-gray-600 hover:text-cyan-500"
      }`}
    >
      {label}
    </a>
  );
}

type ContactItemProps = {
  icon: typeof Phone;
  value: string;
  href?: string;
  theme: Theme;
};

function ContactItem({
  icon: Icon,
  value,
  href,
  theme,
}: ContactItemProps) {
  const dark = theme === "Dark";

  const content = (
    <div className="flex items-start gap-3">
      <Icon
        size={18}
        className="mt-1 shrink-0 text-cyan-400"
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