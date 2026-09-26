import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
