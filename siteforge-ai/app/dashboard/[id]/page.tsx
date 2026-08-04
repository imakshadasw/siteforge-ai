import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white p-10">
      <div className="max-w-4xl mx-auto bg-[#111827] rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-cyan-400">
          {project.businessName}
        </h1>

        <p className="text-gray-400 mt-3">
          {project.businessType} • {project.city}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-cyan-300">
            {project.heroTitle}
          </h2>

          <p className="mt-4 text-gray-300">
            {project.heroSubtitle}
          </p>

          <p className="mt-6 text-gray-400">
            {project.about}
          </p>
        </div>
      </div>
    </main>
  );
}