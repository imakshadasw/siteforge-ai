"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Theme, DesignSystem } from "../types/website";

type Props = {
  items: string[];
  theme: Theme;
  design?: DesignSystem;
};

export default function WhyChooseSection({
  items,
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
          ? "bg-[#030712]"
          : "bg-white"
      }`}
    >
      <div
        className="pointer-events-none absolute right-[-150px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl opacity-10"
        style={{
          backgroundColor: colors.accentColor,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
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
              Why Choose Us
            </div>

            <h2
              className={`mt-6 text-4xl font-bold leading-tight md:text-5xl ${
                dark
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Built around{" "}
              <span
                style={{
                  color: colors.primaryColor,
                }}
              >
                your success
              </span>
            </h2>

            <p
              className={`mt-6 max-w-xl text-lg leading-8 ${
                dark
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              We focus on quality, reliability, and creating
              experiences that make a real difference for our
              customers.
            </p>
          </motion.div>

          {/* Right */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`flex items-start gap-5 border p-5 transition ${
                  dark
                    ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                    : "border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md"
                } ${radius}`}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${colors.primaryColor}15`,
                    color: colors.primaryColor,
                  }}
                >
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <p
                    className={`font-semibold leading-7 ${
                      dark
                        ? "text-gray-200"
                        : "text-gray-800"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}

            {items.length === 0 && (
              <div
                className={`border p-8 text-center ${radius} ${
                  dark
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                No advantages available yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}