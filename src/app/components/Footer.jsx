import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] text-white mt-20">
      <div className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold">Steve Chiazz</span>
          <p className="text-slate-500 text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Built with Next JS
          </p>
        </div>

        
        <div className="flex gap-5 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a href="tel:254758827458">
            <FaWhatsapp className="hover:text-green-400 transition" />
          </a>
        </div>

        
        <div className="text-center md:text-right text-sm text-slate-500">
          <p>Let’s build something amazing 🚀</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
