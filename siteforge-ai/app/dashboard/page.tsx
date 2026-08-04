import { prisma } from "@/lib/prisma";
import ProjectCard from "../components/ProjectCard";

export default async function Dashboard() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#030712] text-white p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-cyan-400">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-3">
              Your generated websites
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="mt-20 text-center text-gray-400 text-xl">
            No projects yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.businessName}
                type={project.businessType}
                city={project.city}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}