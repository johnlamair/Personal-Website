"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// The AboutSection component displays a profile image and tabs for “Skills,” “Education,” and “Certifications,” with content changing dynamically based on the selected tab.

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>Next</li>
        <li>React</li>
        <li>Git</li>
        <li>Microsoft Suite</li>
        <li>Google Suite</li>
        <li>Adobe Suite</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <div className="font-bold">New York University (2023-2026)</div>
        <li>Involvement: Student Energy, Program Board, HackNYU</li>
        <li>Coursework: Data Structures, Introduction to Computer Science, Calculus I-II, Discrete Math, Data: a History</li>
      
        <div className="font-bold">Liberal Arts and Science Academy (2019-2023)</div>
        <li>Involvement: National Merit Commended Scholars, Youth and Government</li>
        <li>Coursework: AP Physics 1-2, Logic and Problem Solving</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        Coming Soon..
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
    <section className="text-black sm:pt-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center py-8 px-4 sm:py-12 xl:px-12">
        {/* Centering Image */}
        <div className="flex justify-center">
          <div className="relative border-[10px] bg-white border-white rounded-lg">
            <Image 
              src="/images/hero-image.png" 
              width={350} 
              height={350} 
              alt="profile image" 
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Text and Tab Sections */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black text-center sm:text-left">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
          At NYU Gallatin, I’m concentrating in Computer Science and its applications in data, energy, and art. My coursework spans 
          computer science, mathematics, science and technology studies, and literature. I am 
          especially passionate about the intersection of art and technology, with a particular focus on how artificial intelligence and 
          mathematical concepts are reshaping the art world.
          <br /> <br />
          Outside academics, I enjoy skateboarding, filming and editing videos, and watching movies. I’m a big fan of live music, and love going to shows in NYC and my hometown, Austin.


          </p>

          {/* Tabs - Center on small screens */}
          <div className="flex flex-row sm:justify-start justify-center mt-5">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-5 pt-4">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;