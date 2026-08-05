import { Theme } from "../types/website";

type Props = {
  items: string[];
  theme: Theme;
};

const icons = [
  "⭐",
  "⚡",
  "🏆",
  "💎",
  "🚀",
  "🤝",
];

export default function WhyChooseSection({
  items,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <section
      className={`px-8 py-20 ${
        dark ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-wider font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Why Customers Trust Our Business
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We focus on quality, reliability and customer satisfaction
            in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${
                dark
                  ? "bg-[#111827] border border-cyan-900"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="text-5xl mb-5">
                {icons[index % icons.length]}
              </div>

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p
                className={`mt-4 ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Dedicated to delivering excellent service and long-term
                value for every customer.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}