import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
