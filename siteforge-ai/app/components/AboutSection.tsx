"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Theme } from "../types/website";

type Props = {
  about: string;
  theme: Theme;
};

export default function AboutSection({
  about,
  theme,
}: Props) {
  const dark = theme === "Dark";

  const highlights = [
    "Professional and reliable service",
    "Customer-focused approach",
    "Quality you can trust",
  ];

  return (
    <section
      className={`relative overflow-hidden px-8 py-28 ${
        dark
          ? "bg-[#030712] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl ${
            dark
              ? "bg-cyan-500/10"
              : "bg-cyan-400/10"
          }`}
        />

        <div
          className={`absolute -right-32 bottom-0 h-72 w-72 rounded-full blur-3xl ${
            dark
              ? "bg-blue-500/10"
              : "bg-blue-400/10"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              <Sparkles size={16} />
              About Us
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Built around your{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                success
              </span>
            </h2>

            <p
              className={`mt-7 text-lg leading-8 ${
                dark
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {about}
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={22}
                    className="shrink-0 text-cyan-400"
                  />

                  <span
                    className={
                      dark
                        ? "text-gray-200"
                        : "text-gray-700"
                    }
                  >
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className={`relative overflow-hidden rounded-3xl border p-8 md:p-10 ${
                dark
                  ? "border-cyan-900 bg-white/[0.04] backdrop-blur-xl"
                  : "border-gray-200 bg-slate-50"
              }`}
            >
              {/* Decorative glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Sparkles size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Why businesses choose us
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    dark
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  We combine experience, quality, and a
                  customer-first mindset to help businesses
                  create meaningful results.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div
                    className={`rounded-2xl border p-5 ${
                      dark
                        ? "border-cyan-900 bg-black/20"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="text-3xl font-bold text-cyan-400">
                      100%
                    </p>

                    <p className="mt-2 text-sm opacity-70">
                      Customer Focus
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl border p-5 ${
                      dark
                        ? "border-cyan-900 bg-black/20"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="text-3xl font-bold text-cyan-400">
                      24/7
                    </p>

                    <p className="mt-2 text-sm opacity-70">
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}