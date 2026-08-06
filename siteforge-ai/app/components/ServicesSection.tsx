"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Coffee,
  Dumbbell,
  Scissors,
  HeartPulse,
  Building2,
  Scale,
  Hammer,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { Theme } from "../types/website";

type Props = {
  services: string[];
  theme: Theme;
};

export default function ServicesSection({
  services,
  theme,
}: Props) {
  const dark = theme === "Dark";

  const getIcon = (service: string): LucideIcon => {
    const text = service.toLowerCase();

    if (
      text.includes("restaurant") ||
      text.includes("food") ||
      text.includes("dining")
    )
      return UtensilsCrossed;

    if (
      text.includes("cafe") ||
      text.includes("coffee")
    )
      return Coffee;

    if (
      text.includes("gym") ||
      text.includes("fitness")
    )
      return Dumbbell;

    if (
      text.includes("salon") ||
      text.includes("beauty") ||
      text.includes("hair")
    )
      return Scissors;

    if (
      text.includes("clinic") ||
      text.includes("medical") ||
      text.includes("health")
    )
      return HeartPulse;

    if (
      text.includes("real estate") ||
      text.includes("property")
    )
      return Building2;

    if (
      text.includes("law") ||
      text.includes("legal")
    )
      return Scale;

    if (
      text.includes("construction") ||
      text.includes("builder")
    )
      return Hammer;

    return Briefcase;
  };

  return (
    <section
      className={`py-24 px-8 ${
        dark
          ? "bg-[#0b1120]"
          : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 text-cyan-400 text-sm font-semibold">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            What We Offer
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto text-lg ${
              dark
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            High-quality services designed to help your business grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = getIcon(service);

            return (
              <motion.div
                key={index}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`group rounded-3xl border p-8 transition-all duration-300 ${
                  dark
                    ? "border-cyan-900 bg-white/5 hover:border-cyan-500"
                    : "border-gray-200 bg-white hover:border-cyan-400"
                }`}
              >
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {service}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    dark
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  Professional solutions tailored to your business
                  with quality, reliability, and customer satisfaction
                  at the core of everything we do.
                </p>

                <button className="mt-8 font-semibold text-cyan-400 hover:text-cyan-300 transition">
                  Learn More →
                </button>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}