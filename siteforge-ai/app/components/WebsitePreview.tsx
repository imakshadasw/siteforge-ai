type Props = {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    about: string;
    services: string[];
  };
  city: string;
};

export default function WebsitePreview({ data, city }: Props) {
  return (
    <section className="mt-12 rounded-3xl overflow-hidden border border-cyan-900 bg-[#030712]">

      <div className="py-20 text-center bg-gradient-to-r from-cyan-600 to-blue-700">
        <h1 className="text-5xl font-extrabold text-white">
          {data.heroTitle}
        </h1>

        <p className="mt-5 text-xl text-cyan-100">
          {data.heroSubtitle}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            Visit Us
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Call Now
          </button>
        </div>
      </div>

      <div className="p-10">

        <h2 className="text-3xl font-bold text-cyan-400">
          About Us
        </h2>

        <p className="mt-4 text-gray-300">
          {data.about}
        </p>

        <h2 className="text-3xl font-bold text-cyan-400 mt-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl p-6 text-center"
            >
              {service}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-cyan-400 mt-12">
          Contact
        </h2>

        <p className="mt-4 text-gray-300">
          📍 {city}
        </p>

      </div>

    </section>
  );
}