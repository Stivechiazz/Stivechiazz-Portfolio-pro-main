"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 2,
    title: "eccomerce Website",
    image: "/images/projects/front.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Stivechiazz/ecomm",
    previewUrl: "https://digi-mall-beryl.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate",
    image: "/images/projects/real.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Stivechiazz/real-estate",
    previewUrl: "https://Stivechiazz.github.io/R.State/",
  },
  {
    id: 4,
    title: "Hotelier",
    image: "/images/projects/hotel.png",
    tag: ["All"],
    gitUrl: "https://github.com/Stivechiazz/Hotel",
    previewUrl: "https://hotilier.vercel.app/",
  },
  {
    id: 5,
    title: "Gym Website",
    image: "/images/projects/gym.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Stivechiazz/Gym",
    previewUrl: "https://gym-cyan-six.vercel.app/",
  },
  {
    id: 6,
    title: "Modern Bank App",
    image: "/images/projects/bank.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Stivechiazz/modern-bank/",
    previewUrl: "https://modern-app-three.vercel.app/"
  }, 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
