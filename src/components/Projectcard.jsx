import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${
          isHovered
            ? "from-gray-900 to-gray-800"
            : "from-transparent to-transparent"
        } opacity-90 transition-opacity duration-300`}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
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
