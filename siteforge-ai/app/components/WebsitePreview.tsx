type Props = {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    about: string;
    services: string[];
  };
  city: string;
  theme: string;
};

export default function WebsitePreview({
  data,
  city,
  theme,
}: Props) {
  const themes = {
    Dark: {
      hero: "from-cyan-600 to-blue-700",
      bg: "bg-[#030712]",
      card: "bg-[#111827]",
      text: "text-white",
    },
    Modern: {
      hero: "from-purple-600 to-pink-600",
      bg: "bg-white",
      card: "bg-gray-100",
      text: "text-gray-900",
    },
    Luxury: {
      hero: "from-yellow-500 to-amber-700",
      bg: "bg-black",
      card: "bg-zinc-900",
      text: "text-yellow-100",
    },
    Corporate: {
      hero: "from-blue-700 to-sky-500",
      bg: "bg-white",
      card: "bg-blue-50",
      text: "text-gray-900",
    },
  };

  const currentTheme =
    themes[theme as keyof typeof themes] || themes.Dark;

  return (
    <section
      className={`mt-12 rounded-3xl overflow-hidden shadow-2xl ${currentTheme.bg}`}
    >
      {/* Hero */}
      <div
        className={`bg-gradient-to-r ${currentTheme.hero} py-20 text-center`}
      >
        <h1 className="text-5xl font-extrabold text-white">
          {data.heroTitle}
        </h1>

        <p className="mt-5 text-xl text-white/90">
          {data.heroSubtitle}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
            Visit Us
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Contact
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`p-10 ${currentTheme.text}`}>

        {/* About */}
        <h2 className="text-3xl font-bold text-cyan-400">
          About Us
        </h2>

        <p className="mt-4 opacity-90 leading-8">
          {data.about}
        </p>

        {/* Services */}
        <h2 className="text-3xl font-bold text-cyan-400 mt-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {data.services.map((service, index) => (
            <div
              key={index}
              className={`${currentTheme.card} rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition`}
            >
              <p className="text-lg font-semibold">
                {service}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <h2 className="text-3xl font-bold text-cyan-400 mt-14">
          Customer Reviews
        </h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">

          <div className={`${currentTheme.card} p-6 rounded-2xl`}>
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Amazing service and friendly staff!
            </p>
          </div>

          <div className={`${currentTheme.card} p-6 rounded-2xl`}>
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Highly recommended. Will definitely visit again.
            </p>
          </div>

          <div className={`${currentTheme.card} p-6 rounded-2xl`}>
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              One of the best businesses in the city.
            </p>
          </div>

        </div>

        {/* Contact */}
        <h2 className="text-3xl font-bold text-cyan-400 mt-14">
          Contact
        </h2>

        <div className={`${currentTheme.card} mt-6 rounded-2xl p-6`}>
          <p>📍 {city}</p>
          <p className="mt-3">📞 +91 98765 43210</p>
          <p className="mt-3">📧 hello@example.com</p>
          <p className="mt-3">🕒 Mon - Sun : 9:00 AM - 8:00 PM</p>
        </div>

      </div>
    </section>
  );
}