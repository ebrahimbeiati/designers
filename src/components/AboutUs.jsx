import React from "react";
import aboutImage from "../assets/about.png"; // Update the path to where your image is located

const Card = ({ id, icon, title, description, imageUrl }) => (
  <>
    <input type="radio" name="slide" id={id} className="hidden" />
    <label htmlFor={id} className="card-label relative">
      <div className="card-row flex items-start text-white">
        <div className="card-icon bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center m-2 p-4 ">
          {icon}
        </div>
        <div className="card-description flex flex-col justify-center opacity-0 transform translate-y-8 transition-opacity transition-transform duration-300 ease-in-out delay-150">
          <h2 className="uppercase font-bold">{title}</h2>
          <p className="text-gray-400 pt-1">{description}</p>
        </div>
      </div>
    </label>
    <style jsx>{`
      .card-label {
        width: 7rem;
        margin: 0 0.5rem;
        background-size: cover;
        cursor: pointer;
        overflow: hidden;
        border-radius: 1rem;
        transition: width 1s ease-in-out;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
        background-image: url(${imageUrl});
      }
      input:checked + label {
        width: 37.5rem;
        height: 27rem;
      }
      input:checked + label .card-description {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `}</style>
  </>
);

const AboutUs = () => {
  const cards = [
    {
      id: "c1",
      icon: "1",
      title: "Winter",
      description:
        "lorem lorem lorem loremloremloremloremem lorem loremloremloremloremem lorem loremloremloremloremem loremloremloremlorem lore",
      imageUrl:
        "https://images.unsplash.com/photo-1702933017536-44e01bff1111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU5OTUzMTR8&ixlib=rb-4.0.3&q=85",
    },
    {
      id: "c2",
      icon: "2",
      title: "Digital Technology",
      description: "lorem lorem loremloremlorm lorem",
      imageUrl:
        "https://images.unsplash.com/photo-1702933017536-44e01bff1111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU5OTUzMTR8&ixlib=rb-4.0.3&q=85",
    },
    {
      id: "c3",
      icon: "3",
      title: "Globalization",
      description: "lorem lorem loremloremlore lorem",
      imageUrl:
        "https://images.unsplash.com/photo-1702933017536-44e01bff1111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU5OTUzMTR8&ixlib=rb-4.0.3&q=85",
    },
    {
      id: "c4",
      icon: "4",
      title: "New Technologies",
      description: "lorem lorem lorelorem",
      imageUrl: aboutImage,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-300 text-white py-20 px-6 w-full flex flex-col items-center">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl max-w-2xl mx-auto">
            At <span className="font-semibold">WebDesignAndDev</span>, we
            believe in the power of innovative design and cutting-edge
            technology to transform your ideas into a digital reality.
          </p>
        </div>

        <div id="card-wrapper" className="w-full flex justify-center">
          <div className="card-container flex">
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
