import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaLifeRing,
} from "react-icons/fa"; // Importing icons from react-icons

const services = [
  {
    title: "Web Design",
    description:
      "Our talented designers craft visually stunning websites that reflect your brand's identity and engage your audience. We focus on user-centric designs that provide an intuitive and seamless experience for your visitors.",
    icon: <FaPaintBrush size={50} />,
  },
  {
    title: "Web Development",
    description:
      "Our developers bring designs to life using the latest technologies and best practices. From custom-built websites to e-commerce platforms, we ensure your site is fast, secure, and scalable.",
    icon: <FaCode size={50} />,
  },
  {
    title: "Responsive Design",
    description:
      "In today's mobile-first world, we ensure your website looks and functions perfectly on any device. Our responsive designs adapt to various screen sizes, providing a consistent user experience across all platforms.",
    icon: <FaMobileAlt size={50} />,
  },
  {
    title: "SEO Optimization",
    description:
      "A beautiful website is only effective if it's visible to your audience. We implement SEO best practices to improve your site's ranking on search engines, driving more traffic and potential customers to your business.",
    icon: <FaSearch size={50} />,
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship with clients doesn't end after the launch. We offer ongoing support and maintenance to ensure your website stays updated, secure, and running smoothly.",
    icon: <FaLifeRing size={50} />,
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-blue-400 via-blue-700 to-blue-500 text-white py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl max-w-2xl mx-auto">
            We offer a range of services to help your business thrive in the
            digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p className="text-center">{service.description}</p>
              </div>
              <div className="p-6 bg-blue-500 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
