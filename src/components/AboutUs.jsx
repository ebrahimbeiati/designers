import React from "react";
import aboutImage from "../assets/about.png"; // Update the path to where your image is located

const Card = ({ id, icon, title, description, imageUrl }) => (
  <>
    <input type="radio" name="slide" id={id} className="hidden" />
    <label htmlFor={id} className="card-label relative">
      <div className="card-row flex flex-col items-center sm:flex-row text-white">
        <div className="card-icon bg-gray-800 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center m-2 p-2 sm:p-4">
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
        width: 80%;
        max-width: 7rem;
        margin: 0.5rem;
        background-size: cover;
        cursor: pointer;
        overflow: hidden;
        border-radius: 1rem;
        transition: all 1s ease-in-out;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
        background-image: url(${imageUrl});
      }
      input:checked + label {
        width: 100%;
        max-width: 30rem;
        height: auto;
      }
      input:checked + label .card-description {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      @media (min-width: 640px) {
        .card-label {
          max-width: 9rem;
        }
        input:checked + label {
          max-width: 24rem;
        }
      }
      @media (min-width: 768px) {
        .card-label {
          max-width: 12rem;
        }
        input:checked + label {
          max-width: 32rem;
        }
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
        "ما یک تیم حرفه‌ای و مجرب در زمینه طراحی وب‌سایت، طراحی لوگو و طراحی کارت ویزیت هستیم. با بهره‌گیری از جدیدترین تکنولوژی‌ها و رویکردهای خلاقانه، هدف ما ارائه خدمات با کیفیت و منحصر به فرد به مشتریان عزیزمان است.",
      imageUrl:
        "https://images.unsplash.com/photo-1702933017536-44e01bff1111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU5OTUzMTR8&ixlib=rb-4.0.3&q=85",
    },
    {
      id: "c2",
      icon: "2",
      title: "طراحی وب‌سایت",
      description:
        "ایجاد وب‌سایت‌های واکنش‌گرا و کاربرپسند که به راحتی در تمامی دستگاه‌ها نمایش داده می‌شوند.",
      imageUrl:
        "https://images.unsplash.com/photo-1702933017536-44e01bff1111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU5OTUzMTR8&ixlib=rb-4.0.3&q=85",
    },
    {
      id: "c3",
      icon: "3",
      title: "طراحی لوگو",
      description:
        "طراحی لوگوهای منحصر به فرد و خلاقانه که هویت برند شما را به بهترین شکل ممکن نمایش می‌دهد.",
      imageUrl:
        "https://images.unsplash.com/photo-1702933017536-44e01bff1111?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU5OTUzMTR8&ixlib=rb-4.0.3&q=85",
    },
    {
      id: "c4",
      icon: "4",
      title: "طراحی کارت ویزیت",
      description:
        "طراحی کارت‌های ویزیت حرفه‌ای که تأثیری ماندگار در ذهن مخاطبان شما به جا می‌گذارد.",
      imageUrl: aboutImage,
    },
  ];

  return (
    <section
      className="text-white w-full flex flex-col items-center text-center p-4 sm:p-10 mt-12"
      id="about"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl max-w-2xl mx-auto">
            At <span className="font-semibold">WebDesignAndDev</span>, we
            believe in the power of innovative design and cutting-edge
            technology to transform your ideas into a digital reality.
          </p>
        </div>

        <div
          id="card-wrapper"
          className="w-full flex justify-center items-center flex-wrap"
        >
          <div className="card-container flex flex-wrap justify-center">
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
