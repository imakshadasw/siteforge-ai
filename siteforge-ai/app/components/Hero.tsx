export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-blue-900/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">

        <span className="bg-cyan-500/20 border border-cyan-500 px-4 py-2 rounded-full text-cyan-300 text-sm">
          🚀 AI Powered Website Builder
        </span>

        <h1 className="text-6xl md:text-7xl font-extrabold mt-8 leading-tight">
          Build Professional
          <br />
          Business Websites
          <br />
          <span className="text-cyan-400">
            in Seconds
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-8">
          Describe your business, choose a theme,
          and let AI generate a beautiful website
          instantly.
        </p>

        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          <button className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl text-black font-bold transition">
            Start Building
          </button>

          <button className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            Live Demo
          </button>

        </div>

      </div>

    </section>
  );
}