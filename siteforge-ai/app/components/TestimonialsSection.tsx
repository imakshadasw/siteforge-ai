"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import {
  DesignSystem,
  Testimonial,
  Theme,
} from "../types/website";

type Props = {
  testimonials: Testimonial[];
  theme: Theme;
  design?: DesignSystem;
};

export default function TestimonialsSection({
  testimonials,
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
          ? "bg-[#0b1120]"
          : "bg-slate-50"
      }`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[-150px] h-96 w-96 -translate-x-1/2 rounded-full blur-3xl opacity-10"
        style={{
          backgroundColor: colors.primaryColor,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex justify-center"
          >
            <div
              className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold ${radius}`}
              style={{
                borderColor: `${colors.primaryColor}55`,
                backgroundColor: `${colors.primaryColor}15`,
                color: colors.primaryColor,
              }}
            >
              <Quote size={16} />
              Customer Reviews
            </div>
          </motion.div>

          <h2
            className={`mt-6 text-4xl font-bold md:text-5xl ${
              dark
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            What our customers{" "}
            <span
              style={{
                color: colors.primaryColor,
              }}
            >
              say
            </span>
          </h2>

          <p
            className={`mt-5 text-lg ${
              dark
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Real experiences from people who chose to work
            with us.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className={`border p-7 ${radius} ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill={colors.primaryColor}
                    style={{
                      color: colors.primaryColor,
                    }}
                  />
                ))}
              </div>

              <p
                className={`mt-6 text-lg leading-8 ${
                  dark
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                "{testimonial.review}"
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full font-bold"
                  style={{
                    backgroundColor: `${colors.primaryColor}20`,
                    color: colors.primaryColor,
                  }}
                >
                  {testimonial.name
                    ?.charAt(0)
                    .toUpperCase() || "C"}
                </div>

                <div>
                  <p className="font-bold">
                    {testimonial.name || "Customer"}
                  </p>

                  <p
                    className={`text-sm ${
                      dark
                        ? "text-gray-500"
                        : "text-gray-500"
                    }`}
                  >
                    Verified Customer
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

          {testimonials.length === 0 && (
            <div
              className={`md:col-span-2 border p-10 text-center ${radius} ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-gray-200 bg-white"
              }`}
            >
              No testimonials available yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}