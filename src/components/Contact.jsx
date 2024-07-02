import React, { useState } from "react";
import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";
import { BiSend } from "react-icons/bi";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", form);
    // Add form submission logic here
  };

  return (
    <section
      className="bg-gradient-to-br from-black-800 to-blue-500 text-white py-20 min-h-screen"
      id="contact"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-8">
            We're here to assist you. Reach out to us using the form or contact
            details below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="col-span-2">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message..."
                className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center w-full md:w-auto h-12 px-6 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message <BiSend className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-16 m-2">
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center mb-4">
              <HiLocationMarker className="w-6 h-6 mr-3" />
              <p>123 Main Street, Cityville, State, 12345</p>
            </div>
            <div className="flex items-center mb-4">
              <HiPhone className="w-6 h-6 mr-3" />
              <p>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </div>
            <div className="flex items-center mb-4">
              <HiOutlineMail className="w-6 h-6 mr-3" />
              <p>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
