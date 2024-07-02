import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar p-8 ">
      <img src={logo} alt="logo" className="w-[80px] h-[80px] rounded-full" />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end  items-center flex-1 text-sky-300">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-2" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } p-6 absolute top-24 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-gradient-to-br from-blue-600 to-orange-900 shadow-lg transform transition-transform duration-300 hover:from-gray-600 hover:to-blue-900 hover:scale-105`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 text-white">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-6"
                }`}
              >
                <a href={`#${nav.id}`} onClick={() => setShowMenu(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
