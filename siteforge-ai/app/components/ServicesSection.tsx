import { Theme } from "../types/website";

type Props = {
  services: string[];
  theme: Theme;
};

const icons = [
  "🚀",
  "⭐",
  "💼",
  "📈",
  "⚡",
  "🎯",
];

export default function ServicesSection({
  services,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <section
      className={`px-8 py-20 ${
        dark ? "bg-[#0b1120]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Solutions Designed For Your Business
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We provide high-quality services tailored to help your
            business grow faster and stand out from the competition.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                dark
                  ? "bg-[#111827] border border-cyan-900"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-5xl mb-6">
                {icons[index % icons.length]}
              </div>

              <h3 className="text-2xl font-bold">
                {service}
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Professional solutions designed to deliver
                measurable results for your business.
              </p>

              <button className="mt-6 text-cyan-400 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}