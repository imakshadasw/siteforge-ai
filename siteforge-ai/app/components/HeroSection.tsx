"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Theme, WebsiteData } from "../types/website";

type Props = {
  data: WebsiteData;
  theme: Theme;
};

export default function HeroSection({
  data,
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

  const radius =
    design.borderRadius === "sharp"
      ? "rounded-none"
      : design.borderRadius === "soft"
        ? "rounded-2xl"
        : "rounded-xl";

  return (
    <section
      className={`relative overflow-hidden px-8 py-28 text-center md:py-36 ${
        dark
          ? "text-white"
          : "text-gray-900"
      }`}
      style={{
        background: dark
          ? `linear-gradient(135deg, ${design.secondaryColor} 0%, #030712 65%)`
          : `linear-gradient(135deg, #ffffff 0%, ${design.secondaryColor}18 100%)`,
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-180px] h-[550px] w-[550px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            backgroundColor: design.primaryColor,
          }}
        />

        <div
          className="absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full blur-3xl opacity-10"
          style={{
            backgroundColor: design.accentColor,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* AI badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className={`mx-auto inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold ${radius}`}
          style={{
            borderColor: `${design.primaryColor}55`,
            backgroundColor: `${design.primaryColor}15`,
            color: design.primaryColor,
          }}
        >
          <Sparkles size={16} />
          {design.style} Experience
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
        >
          {data.heroTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className={`mx-auto mt-7 max-w-3xl text-lg leading-8 md:text-xl ${
            dark
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          {data.heroSubtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white shadow-lg ${radius}`}
            style={{
              backgroundColor: design.primaryColor,
              boxShadow: `0 15px 40px ${design.primaryColor}35`,
            }}
          >
            Get Started
            <ArrowRight size={19} />
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className={`inline-flex items-center justify-center border px-8 py-4 font-semibold transition ${radius} ${
              dark
                ? "border-white/20 bg-white/5 hover:bg-white/10"
                : "border-gray-300 bg-white hover:bg-gray-50"
            }`}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Style indicator */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className={`mt-8 text-xs uppercase tracking-[0.25em] ${
            dark
              ? "text-gray-500"
              : "text-gray-400"
          }`}
        >
          AI-crafted • {design.style}
        </motion.p>
      </div>
    </section>
  );
}