import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-4">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 rounded-full mb-4 mx-auto"
          />
          <p className="text-center text-sm">
            Web-Design&Develop: A safe and trusted place to be together
          </p>
        </div>

        {/* Footer Links */}
        <div>
          <ul className="flex items-center mr-20 flex-wrap justify-center gap-5">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About Us</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
          </ul>
        </div>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-center mt-6">
      {socialMedia.map((social) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className="w-6 h-6 object-contain cursor-pointer mx-2"
          onClick={() => window.open(social.href)}
        />
      ))}
    </div>

    {/* Copyright */}
    <div className="text-center text-sm mt-6">
      &copy; {new Date().getFullYear()} All rights reserved | Web Design
    </div>
  </footer>
);

export default Footer;
