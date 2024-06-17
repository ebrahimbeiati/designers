import React from "react";
import { projects } from "../constants";
import ProjectCard from '../components/Projectcard'
const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black-400 to-gray-600 min-h-screen py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
