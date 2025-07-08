import React from "react";
import ProjectCard from "@/components/projectCard";
import ProjectJson from "@/assets/project.json";
export default function Projects() {
  return (
    <article
      id="projects"
      className="flex flex-col mt-20 font-montserrat gap-6"
    >
      <h2 className="text-white font-semibold font-spacemono text-2xl xl:text-5xl  flex flex-col">
        Projects
      </h2>

      <p className="text-justify  text-sm sm:text-base lg:text-lg text-[#b0b0b0]">
        Before showcasing my projects, I'd like to highlight the skills and
        technologies I've applied in creating impactful solutions. Each project
        represents a unique challenge and opportunity to grow. Below, you’ll
        find a selection of my work that I’m most proud of.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 my-6">
        {ProjectJson.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </article>
  );
}
