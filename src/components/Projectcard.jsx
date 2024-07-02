import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group mt-16">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white p-6">
          {/* <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-200 mb-4">{project.description}</p> */}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900  hover:text-blue-700 font-bold"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
