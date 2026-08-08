"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { DesignSystem, Theme, VisualContent } from "../types/website";

type Props = {
  visuals?: VisualContent;
  theme: Theme;
  design?: DesignSystem;
};

export default function VisualGallery({
  visuals,
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

  if (!visuals?.galleryImagePrompts?.length) {
    return null;
  }

  return (
    <section
      className={`px-8 py-28 ${
        dark ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mx-auto inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold ${radius}`}
            style={{
              borderColor: `${colors.primaryColor}55`,
              backgroundColor: `${colors.primaryColor}15`,
              color: colors.primaryColor,
            }}
          >
            <ImageIcon size={16} />
            Our Gallery
          </div>

          <h2
            className={`mt-6 text-4xl font-bold md:text-5xl ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            See what makes us{" "}
            <span style={{ color: colors.primaryColor }}>
              different
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visuals.galleryImagePrompts.map(
            (prompt, index) => (
              <motion.div
                key={`${prompt}-${index}`}
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
                className={`group relative aspect-[4/3] overflow-hidden border ${radius} ${
                  dark
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-gray-200 bg-gray-100"
                }`}
              >
                {visuals.galleryImages?.[index] ? (
                  <img
                    src={visuals.galleryImages[index]}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-8 text-center">
                    <div>
                      <ImageIcon
                        size={36}
                        className="mx-auto opacity-30"
                        style={{
                          color: colors.primaryColor,
                        }}
                      />

                      <p
                        className={`mt-4 text-sm ${
                          dark
                            ? "text-gray-500"
                            : "text-gray-500"
                        }`}
                      >
                        Visual {index + 1}
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
                  <p className="line-clamp-3 text-sm text-white">
                    {prompt}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}