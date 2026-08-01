export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        Loved by Business Owners
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8">
          <p className="text-gray-300 italic">
            "I launched my café website in minutes. It looked better than I expected."
          </p>
          <h4 className="mt-6 font-bold text-cyan-400">
            — Sarah, Café Owner
          </h4>
        </div>

        <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8">
          <p className="text-gray-300 italic">
            "No coding. No designer. Just described my business and the AI built the site."
          </p>
          <h4 className="mt-6 font-bold text-cyan-400">
            — Raj, Fitness Coach
          </h4>
        </div>

        <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-8">
          <p className="text-gray-300 italic">
            "This saved me days of work. I had my portfolio online the same afternoon."
          </p>
          <h4 className="mt-6 font-bold text-cyan-400">
            — Emma, Freelancer
          </h4>
        </div>

      </div>
    </section>
  );
}