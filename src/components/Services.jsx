import {
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaLifeRing,
} from "react-icons/fa"; // Importing icons from react-icons

const services = [
  {
    title: "Design",
    description:
      "With creative and unique designs, we turn your brand into a work of art. By combining art and expertise, we create beautiful and lasting images that attract all eyes.",
    icon: <FaPaintBrush size={50} />,
  },
  {
    title: "Web Development",
    description:
      "Your website is the digital representation of your business. With professional and modern development, we build a website for you that is both beautiful and efficient. With us, you will have a strong and attractive presence in the online world.",
    icon: <FaCode size={50} />,
  },
  {
    title: "Mobile and Computer Compatible Design",
    description:
      "User interaction with your website should be enjoyable and memorable. With attractive interactive designs, we create a unique and pleasant experience for your users that makes them always return to your website.",
    icon: <FaMobileAlt size={50} />,
  },
  {
    title: "SEO Optimization",
    description:
      "In the digital world, visibility is everything. With our SEO services, your website will always be at the top of search results. With precise and up-to-date strategies, we naturally increase your website traffic.",
    icon: <FaSearch size={50} />,
  },
  {
    title: "Support",
    description: "We are always here to ensure your website runs smoothly.",
    icon: <FaLifeRing size={50} />,
  },
];

const Services = () => {
  return (
    <section className="text-white py-20 px-6 min-h-screen" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl max-w-2xl mx-auto">
            We are a team of specialists and creatives working in the digital
            world. Our goal is to provide exceptional services that help you
            bring your website to the peak of success. With deep knowledge and a
            creative approach, we are with you on the way to achieving greater
            goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-16 flex flex-col items-center">
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p className="text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
