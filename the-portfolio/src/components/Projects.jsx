/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Info - Full width on mobile, 5 cols on desktop */}
        <div className="lg:col-span-5 order-1">
          <div className="lg:sticky lg:top-8">
            <div className="mb-6">
              <span className="inline-block font-mono text-sm tracking-widest text-shiningknight border-b border-bloodbrother pb-1">
                N°{String(index + 1).padStart(2, '0')}
              </span>
            </div>
  
            <div className="space-y-6">
              <div>
                <h2 className={`font-['Public Sans'] text-7xl lg:text-6xl font-black tracking-tight ${project.customStyle?.brand || 'text-bloodbrother'}`}>
                  {project.brand}
                </h2>
                <p className="mt-2 text-base font[-'Public Sans'] font-light tracking-wide text-shiningknight">
                  {project.brandDes}
                </p>
              </div>
  
              <h3 className={`text-xl lg:text-2xl font-['Public Sans'] font-bold leading-tight ${project.customStyle?.title || 'text-darkvoid'}`}>
                {project.title}
              </h3>
  
              <p className="text-base font-light leading-relaxed text-darkvoid max-w-xl">
                {project.description}
              </p>
  
              <div className="pt-4 border-t border-mauimist space-y-4">
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-shiningknight">Role</span>
                  <p className="mt-1 text-sm text-darkvoid">{project.role}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-shiningknight">Technologies</span>
                  <p className="mt-1 text-sm text-bloodbrother">
                    {project.technologies.join(' • ')}
                  </p>
                </div>
  
                {project.collaborators && (
                  <div>
                    <span className="text-sm font-medium uppercase tracking-wider text-shiningknight">Collaborators</span>
                    <p className="mt-1 text-sm text-darkvoid">{project.collaborators}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
  
        {/* Project Image - Full width on mobile, 7 cols on desktop */}
        <div className="lg:col-span-7 order-2">
          <a 
            href={project.link}
            className="block relative aspect-[4/3] overflow-hidden  group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darkvoid/10 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
            {project.hoverMedia?.type === 'video' ? (
              <video
                src={project.hoverMedia.src}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : project.hoverImage && (
              <img
                src={project.hoverImage}
                alt={`${project.title} - alternate view`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
            
            {/* View Project Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-darkvoid/50 transition-opacity duration-500 z-20 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="text-white text-mono tracking-widest uppercase font-medium">
                View Project →
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  };

const Projects = () => {
  const projects = [
    {
      brand: "MUJI",
      brandDes: "minimalist lifestyle brand",
      title: "MERGING TRADITIONAL AND MODERN COMMUNICATION",
      description: "An interactive installation for Muji's new pen collection that reflects on the evolution of communication. Users type on a restored typewriter, and each keystroke creates a flowing pen stroke on a digital canvas.",
      technologies: ["touchDesigner", "p5.js"],
      role: "interaction designer",
      collaborators: "Alish Chhetri (hardware engineer), Emily Graber (project supervisor)",
      image: "/src/assets/items/typewriter.svg",
      hoverImage: "/src/assets/items/typewriter-hover.svg",
      link: "/projects/muji-project",
      customStyle: {
        brand: "text-[#AD7C59]",
        title: "text-bordeaux"
      }
    },
    {
      brand: "MARSHALL",
      brandDes: "sound technology",
      title: "BRINGING MUSIC TO LIFE",
      description: "An interactive touch-sensitive painting that visualizes music and lets users engage with sound in a tactile way.",
      technologies: ["Arduino Auditions", "Arduino IDE", "Adobe Aero"],
      role: "Designer & Engineer",
      collaborators: "Heather Brand (project supervisor)",
      image: "/src/assets/items/headphones.svg",
      hoverImage: "/src/assets/items/headphones-hover.svg",
      link: "/projects/marshall-project",
      customStyle: {
        brand: "text-[##27251F]",
        title: "text-[#693F23]"
      }
    },
    {
      brand: "My Heritage",
      brandDes: "family website",
      title: "THE CENTRAL RESOURCE FOR ALL GENERATIONS",
      description: "(Ongoing) A family archive for all generations of the McCarthy Family, integrating GoogleAPI for face recognition and photo retrieval.",
      technologies: ["Figma", "React", "TailwindCCSS", "NextJS"],
      role: "UI Designer, Front-end Web Developer",
      collaborators: "Trang Hoang (Back-end web developer), Bullmoose Marketing",
      image: "/src/assets/items/headphones.svg",
      hoverImage: "/src/assets/items/headphones-hover.svg",
      link: "/projects/marshall-project",
      customStyle: {
        brand: "text-furioustiger",
        title: "text-black"
      }
    },
    {
      brand: "Liberty Electronics",
      brandDes: "company website",
      title: "MODERNIZE COMPANY WEBSITE",
      description: "(Ongoing) Liberty Electronics provides electrical cable assemblies, wire haresses for demanding defense and commercial OEM. They want to modernize the company website and convert it into a bold, dynamic and professional user interface.",
      technologies: ["Figma", "WordPress", "HTML", "CSS", "PHP"],
      role: "UI Designer, Front-end Web Developer",
      collaborators: "Bullmoose Marketing",
      image: "/src/assets/items/headphones.svg",
      hoverImage: "/src/assets/items/headphones.svg",
      link: "/projects/libertyelectronics",
      customStyle: {
        brand: "text-[#0077C0]",
        title: "text-[#1b1b1b]"
      }
    },
    {
      brand: "Le Voyage dans la Lune",
      brandDes: "movie",
      title: "AUGMENTED REALITY: A WALK THROUGH THE STARS",
      description: "Inspired by the classic movie 'Le Voyage dans la Lune' by Georges Méliès, I developed an augumented reality world, accessible thorugh the camera lens, which transported viewers to a captivating journey of walking amongst the stars.",
      technologies: ["Procreate", "Arobe Aero"],
      role: "AR Designer",
      collaborators: "",
      image: "/src/assets/projects/aero_recording 2.gif",
      hoverImage: "/src/assets/projects/aero_recording 2.gif",
      link: "/projects/ARmoon",
      customStyle: {
        brand: "text-[#4D2DB7]",
        title: "text-[#0E21A0]"
      }
    },
    {
      brand: "Allegheny Lab for Innovation and Creativity",
      brandDes: "ALIC",
      title: "ALIC WORKSHOP SERIES",
      description: "Wouldn't it be nice if digital art was accessible for everyone? This project is an ongoing no-cost workshop for all faculty and students in Allegheny College interested in learning digital art. Workshops run weekly since 2023.",
      technologies: ["Adobe Indesign", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe Photoshop", "Adobe After Effects"],
      role: "Curriculumn Developer, Designer",
      collaborators: "Funded through the Dean's Fund for Student-Faculty Research, McCune Foundation Fund, and in Professor Heather Brand's capacity as the Eila v. Bush Endowed Professor of Art",
      image: "/src/assets/items/headphones.svg",
      hoverImage: "/src/assets/items/headphones-hover.svg",
      link: "/projects/alic-workshop",
      customStyle: {
        brand: "text-[#FF5200]",
        title: "text-[#FFA51E]"
      }
    }
  ];

  return (
    <section className="py-12 px-8 bg-mauimist">
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.brand} 
            project={project} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;