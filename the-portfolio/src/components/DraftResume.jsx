/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SwitchFont from './SwitchFonts';

const ProjectRow = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative">
      {/* Hover image container */}
      {isHovered && (
        <div className="fixed top-1/2 right-32 transform -translate-y-1/2 w-[600px] h-[400px] z-50">
          <div className="w-full h-full border-2 border-white p-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 " />
          </div>
        </div>
      )}
      
      
        <div className="grid grid-cols-12 gap-8 py-12 px-12 text-white group-hover:text-black transition-colors duration-300">
          {/* Year */}
          <div className="col-span-2">
            <span className="font-['Inter'] text-2xl font-bold">{project.year}</span>
          </div>
          
          {/* Title and Description */}
          <div className="col-span-5">
            <h3 className="font-['Inter'] text-3xl font-bold uppercase mb-4">
              {project.title}
            </h3>
            <p className="font-['Inter'] font-thin text-lg opacity-80">
              {project.description}
            </p>
          </div>
          
          {/* Type */}
          <div className="col-span-3">
            <span className="font-['Inter'] text-2xl font-bold">{project.category}</span>
          </div>
          
          {/* Company */}
          <div className="col-span-2">
            <span className="font-['Inter'] text-2xl font-bold">{project.brand}</span>
          </div>
        </div>
    </div>
  );
};


const CategorySection = ({ title, projects }) => (
  <div className="mb-24">
    <CategoryHeading text={title} />
    <div className="border-white/20">
      {projects.map((project, index) => (
        <ProjectRow key={project.title} project={project} index={index} />
      ))}
    </div>
  </div>
);

const CategoryHeading = ({ text }) => (
  <div className="relative text-center overflow-hidden mb-16 mt-24 px-8">
    <SwitchFont
      text={text}
      initialFont="Tiny5"
      targetFont="Inter"
      switchLettersPerInterval={4}
      intervalSpeed={100}
      className="sm:text-3xl md:text-4xl block lg:text-5xl text-white font-regular leading-tight"
    />
  </div>
);

const BrutalistProjectsSection = () => {
  const education = [
    {
      year: "2023",
      brand: "Liberty Electronics",
      role: "Product Designer",
      title: "Modernize Company Website",
      description: "A complete redesign focusing on modern user interface patterns and improved navigation structure.",
      category: "UX Design",
      image: "/assets/projects/Liberty Electronics.svg",
      link: "https://www.figma.com/proto/osKNrg756oDDcSSzDX2foX/Liberty-Electronics",
    },
  ];

  const installationProjects = [
    {
      year: "2022",
      brand: "MUJI",
      role: "Interaction Designer",
      title: "From Brushstroke to Keystroke",
      description: "Interactive installation exploring the evolution of written communication.",
      category: "Installation",
      image: "/assets/projects/Muji.svg",
      link: "https://jaclyn-pham.notion.site/The-Typewriter-Piano",
    },
    {
      year: "2022",
      brand: "TEAMLAB",
      role: "Installation Designer",
      title: "Edenia",
      description: "Immersive projection mapping installation merging art and technology.",
      category: "Installation",
      image: "/assets/projects/Edenia_default.gif",
      link: "https://jaclyn-pham.notion.site/Edenia",
    },
  ];

  return (
    <section className="w-full bg-black py-16">
      <CategorySection title="SELECTED UX WORK" projects={education} />
      <CategorySection title="INTERACTIVE INSTALLATION" projects={installationProjects} />
      
      {/* View All Projects Link */}
      <a 
        href="/all-projects"
        className="block border-t border-b border-white/20 py-12 px-12 font-['Inter'] text-3xl font-bold text-white hover:bg-white hover:text-black transition-colors duration-300"
      >
        VIEW ALL PROJECTS →
      </a>
    </section>
  );
};

export default BrutalistProjectsSection;