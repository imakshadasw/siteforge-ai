type Props = {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    about: string;
    services: string[];
    whyChooseUs: string[];
    testimonials: {
      name: string;
      review: string;
    }[];
    contact: {
      phone: string;
      email: string;
      address: string;
    };
  };
  city: string;
  theme: string;
};

export default function WebsitePreview({
  data,
  city,
  theme,
}: Props) {
  const dark = theme === "Dark";

  return (
    <div
      className={`mt-10 rounded-3xl overflow-hidden shadow-2xl border ${
        dark
          ? "bg-[#030712] text-white border-cyan-900"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-10 py-6 ${
          dark ? "bg-[#0b1120]" : "bg-gray-100"
        }`}
      >
        <h1 className="text-3xl font-extrabold text-cyan-400">
          {city} Business
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          <span>Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-10 text-center bg-gradient-to-b from-cyan-900/20 to-transparent">
        <h2 className="text-6xl font-extrabold leading-tight">
          {data.heroTitle}
        </h2>

        <p className="mt-6 text-xl opacity-80 max-w-3xl mx-auto">
          {data.heroSubtitle}
        </p>

        <button className="mt-10 px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-10 py-16">
        <h3 className="text-4xl font-bold text-cyan-400 mb-6">
          About Us
        </h3>

        <p className="text-lg leading-9 opacity-90">
          {data.about}
        </p>
      </section>

      {/* Services */}
      <section className="px-10 py-16">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg transition hover:scale-105 ${
                dark ? "bg-[#111827]" : "bg-gray-100"
              }`}
            >
              <div className="text-4xl mb-4">⭐</div>

              <h4 className="text-xl font-bold">
                {service}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-10 py-16">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Why Choose Us
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {data.whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${
                dark ? "bg-[#111827]" : "bg-gray-100"
              }`}
            >
              <div className="text-green-400 text-2xl mb-3">✔</div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-10 py-16">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Testimonials
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                dark ? "bg-[#111827]" : "bg-gray-100"
              }`}
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="italic">
                "{testimonial.review}"
              </p>

              <p className="mt-6 font-bold text-cyan-400">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-10 py-16">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Contact Us
        </h3>

        <div className="max-w-xl mx-auto space-y-4 text-lg">
          <p>📞 {data.contact.phone}</p>
          <p>📧 {data.contact.email}</p>
          <p>📍 {data.contact.address}</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 text-center ${
          dark ? "bg-[#0b1120]" : "bg-gray-100"
        }`}
      >
        <p className="text-lg">
          © {new Date().getFullYear()} {city} Business. Powered by SiteForge AI.
        </p>
      </footer>
    </div>
  );
}