"use client";

import { useState } from "react";

type GenerateResponse = {
  heroTitle: string;
  heroSubtitle: string;
  about: string;
  services: string[];
};

export default function GeneratorForm() {
  const [loading, setLoading] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Restaurant");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [generated, setGenerated] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          businessType,
          city,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate website");
      }

      const data: GenerateResponse = await response.json();

      setResult(data);
      setGenerated(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900 focus:outline-none focus:border-cyan-400"
          />

          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900 focus:outline-none focus:border-cyan-400"
          >
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            rows={5}
            placeholder="Describe your business..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900 focus:outline-none focus:border-cyan-400"
          />

          <button
            onClick={handleGenerate}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-xl font-bold text-black"
          >
            {loading ? "Generating..." : "✨ Generate Website"}
          </button>

          {generated && result && (
            <div className="mt-10 bg-[#111827] border border-cyan-700 rounded-xl p-8">

              <h2 className="text-3xl font-bold text-cyan-400">
                {result.heroTitle}
              </h2>

              <p className="mt-3 text-gray-300">
                {result.heroSubtitle}
              </p>

              <p className="mt-6 text-gray-400">
                {result.about}
              </p>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {result.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#0b1120] rounded-xl p-5 text-center"
                  >
                    {service}
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}