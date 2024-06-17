import React from "react";
import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-black-400 to-gray-600 min-h-screen py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            <p className="mt-2 text-gray-100">Get in touch with us today!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <HiLocationMarker className="w-6 h-6 mr-3 text-blue-500" />
                  <span className="text-gray-700">
                    91, Tehran, Iran
                  </span>
                </li>
                <li className="flex items-center">
                  <HiPhone className="w-6 h-6 mr-3 text-green-500" />
                  <span className="text-gray-700">
                    <a href="tel:08510004495" className="font-semibold">
                      0255000XXXX
                    </a>
                    ,{" "}
                    <a href="tel:08510005495" className="font-semibold">
                      0251600XXXX
                    </a>
                  </span>
                </li>
                <li className="flex items-center">
                  <HiOutlineMail className="w-6 h-6 mr-3 text-red-500" />
                  <span className="text-gray-700">
                    <a
                      href="mailto:pardeepkumar4bjp@gmail.com"
                      className="font-semibold"
                    >
                      webdesignanddev2@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Send Us a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
    </section>
  );
};

export default Contact;
