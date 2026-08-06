"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { WebsiteData, Theme } from "../types/website";

type Props = {
  data: WebsiteData;
  theme: Theme;
};

export default function HeroSection({ data, theme }: Props) {
  const dark = theme === "Dark";

  return (
    <section
      className={`relative overflow-hidden py-28 px-8 ${
        dark
          ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white"
          : "bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400">
          <Sparkles size={18} />
          <span className="text-sm font-semibold">
            AI Generated Website
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-white bg-clip-text text-transparent">
            {data.heroTitle}
          </span>
        </h1>

        <p
          className={`mx-auto mt-8 max-w-3xl text-xl leading-9 ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {data.heroSubtitle}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black shadow-lg transition hover:bg-cyan-400"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-xl border px-8 py-4 transition ${
              dark
                ? "border-gray-700 hover:border-cyan-400 hover:bg-white/5"
                : "border-gray-300 hover:border-cyan-500 hover:bg-gray-100"
            }`}
          >
            Learn More
          </motion.button>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div
            className={`rounded-2xl border p-6 backdrop-blur-sm ${
              dark
                ? "border-cyan-900 bg-white/5"
                : "border-gray-200 bg-white"
            }`}
          >
            <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
            <p className="mt-2 text-sm opacity-80">
              AI Generated Content
            </p>
          </div>

          <div
            className={`rounded-2xl border p-6 backdrop-blur-sm ${
              dark
                ? "border-cyan-900 bg-white/5"
                : "border-gray-200 bg-white"
            }`}
          >
            <h3 className="text-3xl font-bold text-cyan-400">5 min</h3>
            <p className="mt-2 text-sm opacity-80">
              Average Build Time
            </p>
          </div>

          <div
            className={`rounded-2xl border p-6 backdrop-blur-sm ${
              dark
                ? "border-cyan-900 bg-white/5"
                : "border-gray-200 bg-white"
            }`}
          >
            <h3 className="text-3xl font-bold text-cyan-400">Modern</h3>
            <p className="mt-2 text-sm opacity-80">
              Responsive Design
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}