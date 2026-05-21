"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1">
  <li>HTML5 & CSS3</li>
  <li>JavaScript</li>
  <li>React.js</li>
  <li>Python</li>
  <li>Django & Django REST Framework</li>
  <li>Node.js</li>
  <li>PostgreSQL</li>
  <li>REST API Development</li>
  <li>Docker & Containerization</li>
  <li>Git & GitHub</li>
  <li>Deployment</li>
  <li>Automation</li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Software Developer at Ubunifu College</li>
        {/* <li>Specialist Developer at Modcom Institute</li> */}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Ubunifu Cert</li>
        {/* <li>Modcom Cert</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg leading-relaxed">
              I am a Full Stack Developer with a strong passion for building responsive, scalable, and user-friendly web applications. 
              My strongest expertise is in Python and Django, where I enjoy developing powerful backend systems, REST APIs, 
              and database-driven applications. I also work with JavaScript, React, Node.js, HTML, CSS, and PostgreSQL to create 
              complete full stack solutions. 
              
              I have experience with Git, Docker, Vercel, Render, and automation tools like n8n, allowing me to efficiently deploy 
              and manage modern applications. I am a fast learner who enjoys solving real-world problems, improving my skills, 
              and collaborating with others to build impactful digital products.
            </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
