"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Project = {
  id: number;
  businessName: string;
  businessType: string;
  city: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  about: string;
};

export default function EditProjectForm({
  project,
}: {
  project: Project;
}) {
  const router = useRouter();

  const [businessName, setBusinessName] = useState(project.businessName);
  const [businessType, setBusinessType] = useState(project.businessType);
  const [city, setCity] = useState(project.city);
  const [description, setDescription] = useState(project.description);
  const [heroTitle, setHeroTitle] = useState(project.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(project.heroSubtitle);
  const [about, setAbout] = useState(project.about);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName,
          businessType,
          city,
          description,
          heroTitle,
          heroSubtitle,
          about,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      alert("✅ Project updated successfully!");

      router.push(`/dashboard/${project.id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111827] rounded-2xl p-8 space-y-5">

      <input
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        placeholder="Business Name"
      />

      <input
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        placeholder="Business Type"
      />

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        placeholder="City"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        rows={4}
        placeholder="Description"
      />

      <input
        value={heroTitle}
        onChange={(e) => setHeroTitle(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        placeholder="Hero Title"
      />

      <input
        value={heroSubtitle}
        onChange={(e) => setHeroSubtitle(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        placeholder="Hero Subtitle"
      />

      <textarea
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f2937]"
        rows={6}
        placeholder="About"
      />

      <button
        onClick={handleSave}
        disabled={loading}
        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl"
      >
        {loading ? "Saving..." : "💾 Save Changes"}
      </button>

    </div>
  );
}