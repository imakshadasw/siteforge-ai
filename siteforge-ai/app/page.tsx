export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <span className="text-cyan-400 font-semibold tracking-widest uppercase">
          AI Website Builder
        </span>

        <h1 className="text-6xl font-extrabold mt-6 leading-tight">
          Build Beautiful <br />
          Business Websites <br />
          with AI
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Generate stunning business websites in less than a minute.
          No coding. No designing.
          Just describe your business and let AI do the work.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/30">
            Get Started
          </button>

          <button className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500/10 transition">
            Live Demo
          </button>

        </div>

      </section>

    </main>
  );
}