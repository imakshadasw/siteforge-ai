export default function Features() {
  return (
    <section className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Why Choose SiteForge AI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8 hover:border-cyan-400 transition">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold mb-3">
            Instant Websites
          </h3>
          <p className="text-gray-400">
            Generate beautiful business websites in under one minute using AI.
          </p>
        </div>

        <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8 hover:border-cyan-400 transition">
          <div className="text-5xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold mb-3">
            Stunning Design
          </h3>
          <p className="text-gray-400">
            Modern layouts optimized for conversions and mobile devices.
          </p>
        </div>

        <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8 hover:border-cyan-400 transition">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-3">
            Deploy Instantly
          </h3>
          <p className="text-gray-400">
            Publish your website with one click using Vercel hosting.
          </p>
        </div>

      </div>

    </section>
  );
}