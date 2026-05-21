"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const EmailSection = () => {
  const [] = useState(false);

  return (
    <section id="contact" className="my-12 md:my-12 py-24">
      <div className="max-w-lg mx-auto border border-primary rounded-lg p-8 text-white bg-transparent shadow-lg">
        
        <h5 className="text-2xl font-bold mb-4 text-center">
          Let&apos;s Connect
        </h5>

        <p className="text-[#E0E7FF] mb-8 text-center leading-relaxed">
          I&apos;m currently open to opportunities in software development where I can apply my skills in building
          reliable and efficient web applications. I enjoy solving problems, collaborating with teams, and delivering
          clean, high-quality solutions. Let&apos;s connect and explore possibilities.
        </p>

        {/* Email Card (fixed styling issue) */}
        <div className="mb-6 flex justify-center">
          <div className="border border-primary/40 rounded-md px-4 py-3 bg-[#0f172a]/40">
            <p className="text-purple-300 font-semibold text-center">
              Email:{" "}
              <a
                href="mailto:stephengichia85@gmail.com"
                className="text-white hover:text-purple-300 transition"
              >
                stephengichia85@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/Stephen Gichia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-blue-400 transition"
          >
            <FaLinkedin style={{ fontSize: "20px", color: "#0077b5" }} />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-pink-400 transition"
          >
            <FaInstagram style={{ fontSize: "20px", color: "#833ab4" }} />
            Instagram
          </a>

          <a
            href="tel:254708952268"
            className="flex items-center gap-2 text-sm hover:text-green-400 transition"
          >
            <FaWhatsapp style={{ fontSize: "20px", color: "#25d366" }} />
            +254 758827458
          </a>
        </div>

        <p className="text-white text-center text-sm opacity-70">
          Thanks for visiting — looking forward to connecting.
        </p>
      </div>
    </section>
  );
};

export default EmailSection;
