import { useState } from "react"

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-2' : "mr-10"
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <div
          className={`${showMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
         
        <ul className="list-none flex flex-col justify-end items-center flex-1 text-white">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px ${index===navLinks.length -1 ? 'mr-0' : 'mb-6'}]`}>
              <a href={`#${nav.id}`} onClick={() => setShowMenu(false)}>{nav.title}</a>
            </li>
          ))}
        </ul>
      
        </div>
      </div>
    </nav>
  );
}

export default Navbar
