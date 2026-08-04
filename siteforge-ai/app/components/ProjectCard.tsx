"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
  name: string;
  type: string;
  city: string;
};

export default function ProjectCard({
  id,
  name,
  type,
  city,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
  console.log("Delete button clicked");

  const confirmed = window.confirm(
    "Are you sure you want to delete this project?"
  );

  if (!confirmed) return;


    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      alert("✅ Project deleted successfully!");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete project");
    }
  }

  return (
    <div className="bg-[#0b1120] border border-cyan-900 rounded-2xl p-6 hover:border-cyan-400 transition">
      <h2 className="text-2xl font-bold text-cyan-400">
        {name}
      </h2>

      <p className="text-gray-400 mt-2">
        {type}
      </p>

      <p className="mt-1">
        📍 {city}
      </p>

      <div className="flex gap-3 mt-6">
        <Link
          href={`/dashboard/${id}`}
          className="bg-cyan-500 px-4 py-2 rounded-lg text-black font-bold"
        >
          Open
        </Link>

        <Link
          href={`/dashboard/${id}/edit`}
          className="border border-cyan-500 px-4 py-2 rounded-lg"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="border border-red-500 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}