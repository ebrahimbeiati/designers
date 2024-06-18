import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-4">{project.description}</p>
          <a
            href={project.link}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
