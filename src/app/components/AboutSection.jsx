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
  <li>Python</li>
  <li>Django & Django REST Framework</li>
  <li>JavaScript</li>
  <li>React.js</li>
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
              I am a Full-Stack Developer with a passion for architectural design, automation, and building scalable web applications.
              My core expertise lies in Python and Django, where I architect powerful backend systems, secure REST APIs, and optimized databases.
              I don't just build websites—I build complete, end-to-end systems. My toolkit spans across React, JavaScript, Node.js, and PostgreSQL,
              allowing me to deliver responsive user interfaces alongside heavy-lift backend logic.
              Beyond coding features, I focus on the entire development lifecycle. I utilize Docker for containerization,
              automate repetitive processes using n8n, and efficiently deploy modern applications.
              I love taking real-world problems, breaking them down into clean code, and engineering impactful digital products that scale.
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
