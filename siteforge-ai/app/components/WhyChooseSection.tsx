"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Theme } from "../types/website";

type Props = {
  items: string[];
  theme: Theme;
};

export default function WhyChooseSection({
  items,
  theme,
}: Props) {
  const dark = theme === "Dark";

  const icons = [
    ShieldCheck,
    Sparkles,
    Users,
    Zap,
    CheckCircle2,
  ];

  return (
    <section
      className={`relative overflow-hidden px-8 py-28 ${
        dark
          ? "bg-[#0b1120] text-white"
          : "bg-slate-50 text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            <Sparkles size={16} />
            Why Choose Us
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            A better experience,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              every time
            </span>
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              dark
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            We focus on quality, reliability, and creating
            experiences that keep our customers coming back.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={`${item}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
                  dark
                    ? "border-cyan-900 bg-white/[0.04] hover:border-cyan-500 hover:bg-white/[0.07]"
                    : "border-gray-200 bg-white hover:border-cyan-400 hover:shadow-xl"
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={28} />
                    </div>

                    <span
                      className={`text-sm font-semibold ${
                        dark
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {item}
                  </h3>

                  <p
                    className={`mt-4 leading-7 ${
                      dark
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    We are committed to delivering dependable
                    results while keeping your goals and
                    satisfaction at the center of everything
                    we do.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                    <CheckCircle2 size={17} />
                    Trusted quality
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}