/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ProjectCard = ({ project, index, isLast }) => (
  <div className="relative">
    <div className="mb-24">
      {/* Case Study Header */}
      <div className="mb-4">
        <div className="text-gray-500 font-['Public Sans'] text-lg">
          case study
          <div className="font-['Public Sans'] font-bold">N°{String(index + 1).padStart(2, '0')}</div>
        </div>
        
        <div className="mt-6">
        <h2 className={`font-['Public Sans'] uppercase text-7xl mb-2 font-black tracking-wide ${project.customStyle?.brand || 'text-bordeaux'}`}>
            {project.brand}
          </h2>
          <h2 className="font-['Public Sans'] mb-5 text-gray-500 font-extralight tracking-wide">{project.brandDes}</h2>
          <h1 className={`font-['Public Sans'] text-4xl mb-6 font-bold tracking-tight ${project.customStyle?.title || ''}`}>
            {project.title}
          </h1>
          
          <p className="font-['Public Sans'] text-lg max-w-3xl mb-6 font-light leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2">
            <p className = "font-['Public Sans'] text-lg text-gray-400 font-bold">{project.role}</p>
            <div className="font-['Public Sans'] text-lg text-bordeaux font-light">
              {project.technologies.join(' • ')}
            </div>
            
            {project.collaborators && (
              <div className="font-['Public Sans'] text-sm text-gray-600 font-light">
                Collaborator: {project.collaborators}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Image Container with Hover Effect */}
      <div className="relative w-full mt-8">
        {/* Container with 2:1 aspect ratio */}
        <div className="relative w-full pb-[50%]">
          <a 
            href={project.link}
            className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden group"
          >
            {/* Default Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            {/* Hover Image/Video */}
            {project.hoverMedia?.type === 'video' ? (
              <video
                src={project.hoverMedia.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            ) : (
              <img
                src={project.hoverImage || project.image}
                alt={`${project.title} - alternate view`}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            )}
          </a>
        </div>
      </div>
    </div>
    </div>
);

export default function Projects() {
  const projects = [
    {
      brand: "MUJI",
      brandDes: "minimalist lifestyle brand",
      title: "MERGING TRADITIONAL AND MODERN COMMUNICATION",
      description: "An interactive installation for Muji's new pen collection that reflects on the evolution of communication. Users type on a restored typewriter, and each keystroke creates a flowing pen stroke on a digital canvas.",
      technologies: ["touchDesigner", "p5.js"],
      role: "interaction designer",
      collaborators: "Alish Chhetri (hardware engineer), Emily Graber (project supervisor)",
      image: "/src/assets/typewriter.svg",
      hoverImage: "/src/assets/typewriter-hover.svg",
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
      image: "/src/assets/headphones.svg",
      hoverImage: "/src/assets/headphones-hover.svg",
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
        image: "/src/assets/headphones.svg",
        hoverImage: "/src/assets/headphones-hover.svg",
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
        description: "(Ongoing) Liberty Electronics provides electrical cable assemblies, wire haresses for demanding defense and commercial OEM. They want to modernize the company website and convert it into a bold, dynamic and professional user interface. ",
        technologies: ["Figma", "WordPress", "HTML", "CSS", "PHP"],
        role: "UI Designer, Front-end Web Developer",
        collaborators: "Bullmoose Marketing",
        image: "/src/assets/headphones.svg",
        hoverImage: "/src/assets/headphones-hover.svg",
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
        description: "Inspired by the classic movie 'Le Voyage dans la Lune' by Georges Méliès, I developed an augumented reality world, accessible thorugh the camera lens, which transported viewers to a captivating journey of walking amongst the stars.   ",
        technologies: ["Procreate", "Arobe Aero"],
        role: "AR Designer",
        collaborators: "",
        image: "/src/assets/headphones.svg",
        hoverImage: "/src/assets/headphones-hover.svg",
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
        description: "Wouldn’t it be nice if digital art was accessible for everyone? This project is an ongoing no-cost workshop for all faculty and students in Allegheny College interested in learning digital art. Workshops run weekly since 2023.",
        technologies: ["Adobe Indesign", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe Photoshop", "Adobe After Effects"],
        role: "Curriculumn Developer, Designer",
        collaborators: "Funded through the Dean’s Fund for Student-Faculty Research, McCune Foundation Fund, and in Professor Heather Brand’s capacity as the Eila v. Bush Endowed Professor of Art",
        image: "/src/assets/headphones.svg",
        hoverImage: "/src/assets/headphones-hover.svg",
        link: "/projects/alic-workshop",
        customStyle: {
            brand: "text-[#FF5200]",
            title: "text-[#FFA51E]"
          }
      }
    
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}