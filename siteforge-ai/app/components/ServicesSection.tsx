"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { Theme } from "../types/website";

type Props = {
  services: string[];
  theme: Theme;
  design?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    style: string;
    borderRadius: "rounded" | "soft" | "sharp";
  };
};

export default function ServicesSection({
  services,
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
        dark
          ? "bg-[#0b1120] text-white"
          : "bg-slate-50 text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-[-120px] top-20 h-80 w-80 rounded-full blur-3xl opacity-10"
          style={{
            backgroundColor: colors.primaryColor,
          }}
        />

        <div
          className="absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full blur-3xl opacity-10"
          style={{
            backgroundColor: colors.accentColor,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className={`mx-auto inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold ${radius}`}
            style={{
              borderColor: `${colors.primaryColor}55`,
              backgroundColor: `${colors.primaryColor}15`,
              color: colors.primaryColor,
            }}
          >
            <Sparkles size={16} />
            Our Services
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Everything you need to{" "}
            <span
              style={{
                color: colors.primaryColor,
              }}
            >
              succeed
            </span>
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              dark
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Professional solutions designed around your
            needs and delivered with care.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={`${service}-${index}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden border p-7 transition-all duration-300 ${radius} ${
                dark
                  ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                  : "border-gray-200 bg-white hover:shadow-xl"
              }`}
              style={{
                borderColor: dark
                  ? undefined
                  : `${colors.primaryColor}30`,
              }}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-bold"
                  style={{
                    color: colors.primaryColor,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight
                  size={20}
                  className="opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  style={{
                    color: colors.primaryColor,
                  }}
                />
              </div>

              {/* Icon */}
              <div
                className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${colors.primaryColor}15`,
                  color: colors.primaryColor,
                }}
              >
                <Check size={22} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {service}
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  dark
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Professional solutions tailored to deliver
                quality, reliability, and lasting results.
              </p>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{
                  backgroundColor: colors.primaryColor,
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {services.length === 0 && (
          <div
            className={`mt-16 border p-12 text-center ${radius} ${
              dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-gray-200 bg-white"
            }`}
          >
            <p
              className="font-semibold"
              style={{
                color: colors.primaryColor,
              }}
            >
              Services will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}