"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#121212]/70 border-b border-[#33353F]">
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-3">

        {/* Brand */}
        <ScrollLink
          to="main"
          smooth={true}
          duration={500}
          className="text-2xl md:text-4xl font-bold text-white cursor-pointer tracking-wide hover:text-purple-400 transition"
        >
          Steve <span className="text-purple-400">Dev</span>
        </ScrollLink>

        {/* simu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 rounded-md border border-slate-500 text-slate-200 hover:text-white hover:border-purple-400 transition"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/*deskii  */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <ScrollLink
                to={link.path}
                smooth={true}
                duration={800}
                className="text-slate-300 hover:text-purple-400 cursor-pointer transition relative group"
              >
                {link.title}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-purple-500"></span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

    
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
