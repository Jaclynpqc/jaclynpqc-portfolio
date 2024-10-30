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
      <a 
        href={project.link}
        className="block w-full aspect-video mt-8 bg-gray-100 rounded-lg overflow-hidden relative group"
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

    {/* Red Divider Line - only show if not the last item */}
    {!isLast && (
      <div className="absolute bottom-0 left-0 w-full h-px bg-bordeaux" />
    )}
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
        brand: "text-bordeaux",
        title: "text-black"
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
        brand: "text-black",
        title: "text-bordeaux"
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
        link: "/projects/marshall-project",
        customStyle: {
            brand: "text-[#0077C0]",
            title: "text-[#1b1b1b]"
          }
      }
    
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-8xl mx-auto">
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