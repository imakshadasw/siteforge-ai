export default function Stats() {
  return (
    <section className="py-24 bg-[#07101f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">500+</h2>
          <p className="text-gray-400 mt-3">Websites Generated</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">120+</h2>
          <p className="text-gray-400 mt-3">Happy Clients</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">99.9%</h2>
          <p className="text-gray-400 mt-3">Uptime</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-cyan-400">24/7</h2>
          <p className="text-gray-400 mt-3">AI Support</p>
        </div>

      </div>
    </section>
  );
}