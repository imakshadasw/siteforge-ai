"use client";

import { useState } from "react";
import WebsitePreview from "./WebsitePreview";
import ThemeSelector from "./ThemeSelector";
import { WebsiteData, Theme } from "../types/website";

export default function GeneratorForm() {
  const [loading, setLoading] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Restaurant");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState<Theme>("Dark");

  const [generated, setGenerated] = useState(false);
  const [result, setResult] = useState<WebsiteData | null>(null);

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
          theme,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        console.error(json);
        alert(json.message || "Generation failed.");
        return;
      }

      setResult(json);
      setGenerated(true);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="generator" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-[#0b1120] border border-cyan-900 rounded-2xl p-10">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-8">
          Generate Your Website
        </h2>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          />

          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          >
            <option>Restaurant</option>
            <option>Cafe</option>
            <option>Gym</option>
            <option>Salon</option>
            <option>Clinic</option>
            <option>Real Estate</option>
            <option>Law Firm</option>
            <option>Construction</option>
          </select>

          <ThemeSelector
            theme={theme}
            setTheme={setTheme}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          />

          <textarea
            rows={5}
            placeholder="Describe your business..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-xl bg-[#111827] border border-cyan-900"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-xl font-bold text-black disabled:opacity-50"
          >
            {loading ? "Generating..." : "✨ Generate Website"}
          </button>

        </div>

        {generated && result && (
          <div className="mt-12">
            <WebsitePreview
              data={result}
              city={city}
              theme={theme}
            />
          </div>
        )}

      </div>
    </section>
  );
}