import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-400 via-blue-700 to-blue-500 text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl max-w-2xl mx-auto">
            At <span className="font-semibold">WebDesignAndDev</span>, we
            believe in the power of innovative design and cutting-edge
            technology to transform your ideas into a digital reality.
          </p>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-6">Our Story</h3>
          <p className="text-lg max-w-3xl mx-auto">
            Founded by a group of passionate web developers and designers,
            WebDesignAndDev started with a simple goal: to provide top-notch web
            solutions that cater to the unique needs of each client. With years
            of experience in the industry, our team combines creativity with
            technical expertise to deliver websites that stand out in the
            digital landscape.
          </p>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-6">Our Approach</h3>
          <ul className="list-none">
            {[
              {
                step: "1. Consultation:",
                description:
                  "We begin by understanding your business, goals, and target audience. This helps us tailor our solutions to meet your specific needs.",
              },
              {
                step: "2. Design:",
                description:
                  "Our creative team designs a unique, user-friendly website that aligns with your brand and captivates your audience.",
              },
              {
                step: "3. Development:",
                description:
                  "Using the latest technologies, our developers build a robust, responsive website that performs flawlessly.",
              },
              {
                step: "4. Launch:",
                description:
                  "We test extensively to ensure your site is ready for launch, then we make it live and accessible to the world.",
              },
              {
                step: "5. Support:",
                description:
                  "We provide continuous support and updates to keep your site running optimally and securely.",
              },
            ].map((approach, index) => (
              <li key={index} className="mb-4">
                <span className="font-bold">{approach.step}</span>{" "}
                {approach.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-6">Why Choose Us?</h3>
          <ul className="list-none">
            {[
              {
                reason: "Experience:",
                description:
                  "With years of industry experience, we have the knowledge and skills to deliver exceptional web solutions.",
              },
              {
                reason: "Quality:",
                description:
                  "We are committed to excellence, ensuring every project meets our high standards of quality and performance.",
              },
              {
                reason: "Client-Centric:",
                description:
                  "We prioritize our clients' needs, working closely with you to achieve your vision.",
              },
              {
                reason: "Innovation:",
                description:
                  "We stay ahead of industry trends, incorporating the latest technologies and design principles into our work.",
              },
              {
                reason: "Reliability:",
                description:
                  "We deliver projects on time and within budget, providing reliable and professional service.",
              },
            ].map((reason, index) => (
              <li key={index} className="mb-4">
                <span className="font-bold">{reason.reason}</span>{" "}
                {reason.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Join Us on Your Digital Journey
          </h3>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether you're looking to create a new website from scratch or
            revamp an existing one, WebDesignAndDev is here to help. Let's
            collaborate to bring your vision to life and achieve your digital
            goals. Contact us today to get started!
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-semibold transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
