import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditProjectForm from "@/app/components/EditProjectForm";

export default async function EditPage({
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          Edit Project
        </h1>

        <EditProjectForm project={project} />
      </div>
    </main>
  );
}