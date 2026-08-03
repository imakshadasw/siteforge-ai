const features = [
  {
    title: "⚡ Instant Generation",
    description: "Generate complete business websites in seconds.",
  },
  {
    title: "🎨 Multiple Themes",
    description: "Choose between Dark, Modern, Luxury and Corporate.",
  },
  {
    title: "🤖 AI Powered",
    description: "Generate content tailored to your business.",
  },
  {
    title: "📱 Responsive",
    description: "Looks great on desktop, tablet and mobile.",
  },
  {
    title: "⚙ Easy Customization",
    description: "Edit text, colors and layout anytime.",
  },
  {
    title: "🚀 Export Ready",
    description: "Download your website and deploy anywhere.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400">
          Why SiteForge AI?
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Everything you need to build beautiful business websites without writing code.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8 hover:border-cyan-400 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {feature.title}
              </h3>

              <p className="mt-5 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}