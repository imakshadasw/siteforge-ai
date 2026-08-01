"use client";

import { useState } from "react";

export default function GeneratorForm() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto bg-[#0b1120] border border-cyan-900 rounded-2xl p-10">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
          Generate Your Website
        </h2>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Business Name"
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          />

          <select className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900">
            <option>Restaurant</option>
            <option>Cafe</option>
            <option>Gym</option>
            <option>Salon</option>
            <option>Clinic</option>
            <option>Real Estate</option>
          </select>

          <input
            type="text"
            placeholder="City"
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          />

          <textarea
            rows={5}
            placeholder="Describe your business..."
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          />

          <button
            onClick={() => {
              setLoading(true);

              setTimeout(() => {
                setLoading(false);
                alert("Website Generated! 🚀");
              }, 2500);
            }}
            className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-xl font-bold text-black"
          >
            {loading ? "Generating..." : "✨ Generate Website"}
          </button>

        </div>
      </div>
    </section>
  );
}