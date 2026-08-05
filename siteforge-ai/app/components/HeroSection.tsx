import { WebsiteData, Theme } from "../types/website";

type Props = {
  data: WebsiteData;
  theme: Theme;
};

export default function HeroSection({ data, theme }: Props) {
  const dark = theme === "Dark";

  return (
    <section
      className={`relative overflow-hidden py-24 px-8 text-center ${
        dark
          ? "bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#111827] text-white"
          : "bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <span className="inline-block mb-5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
          AI Generated Website
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          {data.heroTitle}
        </h1>

        <p
          className={`mt-6 text-lg md:text-xl max-w-2xl mx-auto ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {data.heroSubtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">
            Get Started
          </button>

          <button
            className={`px-8 py-4 rounded-xl border transition ${
              dark
                ? "border-gray-600 hover:border-cyan-400"
                : "border-gray-300 hover:border-cyan-500"
            }`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}