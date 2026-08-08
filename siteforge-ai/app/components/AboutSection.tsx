"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { DesignSystem, Theme } from "../types/website";

type Props = {
  about: string;
  theme: Theme;
  design?: DesignSystem;
};

export default function AboutSection({
  about,
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
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold ${radius}`}
              style={{
                borderColor: `${colors.primaryColor}55`,
                backgroundColor: `${colors.primaryColor}15`,
                color: colors.primaryColor,
              }}
            >
              <Sparkles size={16} />
              About Us
            </div>

            <h2
              className={`mt-6 text-4xl font-bold md:text-5xl ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              More than a service.
              <br />
              <span style={{ color: colors.primaryColor }}>
                A better experience.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`border p-8 ${radius} ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-gray-200 bg-slate-50"
            }`}
          >
            <p
              className={`text-lg leading-8 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {about ||
                "We are committed to delivering quality, reliability, and an exceptional experience for every customer."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}