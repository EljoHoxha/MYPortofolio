import React, { useEffect } from "react";
import { ProjectType } from "./constant";
import ProjectCard from "./ProjectCard";

const ProjectWrapper = ({ data }: { data: ProjectType[] }) => {
  const [projects, setProjects] = React.useState<ProjectType[]>([]);

  function shuffleArray(array: ProjectType[]) {
    const shuffled = [...array]; // Create a copy to avoid mutating the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate a random index
      // Swap the elements
      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
    return shuffled;
  }

  useEffect(() => {
    const randomProjects = shuffleArray(data);
    setProjects(randomProjects);
  }, [data]);

  return (
    <div className="grid gap-4  sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectWrapper;
