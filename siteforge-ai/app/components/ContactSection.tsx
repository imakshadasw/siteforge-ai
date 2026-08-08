"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Contact, DesignSystem, Theme } from "../types/website";

type Props = {
  contact: Contact;
  theme: Theme;
  design?: DesignSystem;
};

export default function ContactSection({
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

  return (
    <section
      className={`relative overflow-hidden px-8 py-28 ${
        dark ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`border p-8 ${radius} ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-gray-200 bg-slate-50"
            }`}
          >
            <h2 className="text-4xl font-bold">
              Let's talk.
            </h2>

            <p
              className={`mt-5 leading-7 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have a question or want to get started? Reach
              out and we'll be happy to help.
            </p>

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={Phone}
                value={contact.phone}
                href={contact.phone ? `tel:${contact.phone}` : undefined}
                colors={colors}
                theme={theme}
              />

              <ContactItem
                icon={Mail}
                value={contact.email}
                href={contact.email ? `mailto:${contact.email}` : undefined}
                colors={colors}
                theme={theme}
              />

              <ContactItem
                icon={MapPin}
                value={contact.address}
                colors={colors}
                theme={theme}
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className={`border p-8 ${radius} ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <h3 className="text-2xl font-bold">
              Send us a message
            </h3>

            <div className="mt-7 space-y-5">
              <input
                placeholder="Your Name"
                className={`w-full border px-4 py-3 outline-none transition ${radius} ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-gray-500"
                    : "border-gray-200 bg-gray-50"
                }`}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={`w-full border px-4 py-3 outline-none transition ${radius} ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-gray-500"
                    : "border-gray-200 bg-gray-50"
                }`}
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className={`w-full resize-none border px-4 py-3 outline-none transition ${radius} ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-gray-500"
                    : "border-gray-200 bg-gray-50"
                }`}
              />

              <button
                type="submit"
                className={`flex w-full items-center justify-center gap-2 px-6 py-4 font-bold text-white ${radius}`}
                style={{
                  backgroundColor: colors.primaryColor,
                }}
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  value,
  href,
  colors,
  theme,
}: {
  icon: typeof Phone;
  value: string;
  href?: string;
  colors: DesignSystem;
  theme: Theme;
}) {
  const dark = theme === "Dark";

  const content = (
    <div className="flex items-start gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${colors.primaryColor}15`,
          color: colors.primaryColor,
        }}
      >
        <Icon size={19} />
      </div>

      <span
        className={`pt-2 text-sm ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {value || "Information coming soon"}
      </span>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}