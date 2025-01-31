"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

//This ProjectsSection component is responsible for displaying a collection of projects with filtering capabilities and animation effects.

const projectsData = [
  {
    id: 1,
    title: "Image Variation Generator",
    description: "Python app to generate variations of provided images through OpenAI's Dalle-2 API.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "https://github.com/johnlamair/Image-Variation-App",
    previewUrl: "https://raw.githubusercontent.com/johnlamair/Image-Variation-App/refs/heads/main/Image-Regen-teaser.png",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS, hosted with Vercel.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/johnlamair/Personal-Website",
    previewUrl: "https://johnlamair.com/",
  },
  {
    id: 3,
    title: "AI Literature Review",
    description: "This literature review explores how technology, especially AI, reshapes debates on agency, ownership, and creativity in art.",
    image: "/images/projects/3.png",
    tag: ["All", "Research"],
    gitUrl: "/",
    previewUrl: "https://docs.google.com/document/d/14Ex7eO7pqk7Ub-Pke7dCdrHoP93wuRoh0p3mOfCJXZ0/edit?usp=sharing",
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
    <section id="projects" className="pt-20 pb-20 sm:pt-30">
      <h2 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Research"}
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
              description={project.description}
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