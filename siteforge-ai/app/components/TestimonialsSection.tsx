"use client";

import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";
import { Theme, Testimonial } from "../types/website";

type Props = {
  testimonials: Testimonial[];
  theme: Theme;
};

export default function TestimonialsSection({
  testimonials,
  theme,
}: Props) {
  const dark = theme === "Dark";

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
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
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
            Customer Reviews
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            What our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              customers say
            </span>
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              dark
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Real experiences from people who trusted us with
            their business.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
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
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 ${
                dark
                  ? "border-cyan-900 bg-white/[0.04] hover:border-cyan-500 hover:bg-white/[0.07]"
                  : "border-gray-200 bg-slate-50 hover:border-cyan-400 hover:bg-white hover:shadow-xl"
              }`}
            >
              {/* Decorative quote */}
              <div className="absolute -right-4 -top-4 text-cyan-500/10 transition-transform duration-300 group-hover:scale-110">
                <Quote size={110} />
              </div>

              <div className="relative">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={17}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 font-bold text-cyan-400">
                  {testimonial.name
                    ? testimonial.name.charAt(0).toUpperCase()
                    : "C"}
                </div>

                <p
                  className={`mt-6 text-lg leading-8 ${
                    dark
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  “{testimonial.review}”
                </p>

                <div className="mt-7 border-t border-gray-500/10 pt-5">
                  <p className="font-bold">
                    {testimonial.name || "Happy Customer"}
                  </p>

                  <p
                    className={`mt-1 text-sm ${
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
        </div>

        {/* Empty state */}
        {testimonials.length === 0 && (
          <div
            className={`mt-16 rounded-3xl border p-12 text-center ${
              dark
                ? "border-cyan-900 bg-white/[0.04]"
                : "border-gray-200 bg-slate-50"
            }`}
          >
            <Quote className="mx-auto text-cyan-400" size={40} />

            <p className="mt-5 text-lg font-semibold">
              Customer testimonials will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}