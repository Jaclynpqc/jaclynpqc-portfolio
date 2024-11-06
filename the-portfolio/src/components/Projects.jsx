/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative border-b border-gray-200 py-12 flex flex-col md:flex-row items-start gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left side: Text content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-md tracking-widest text-gray-500">
            N°{String(index + 1).padStart(2, '0')}
          </span>
          <h2 className={`text-5xl md:text-6xl font-bold tracking-tight ${project.customStyle?.brand || 'text-black'}`}>
            {project.brand}
          </h2>
          <p className="text-gray-500 text-lg">
            {project.brandDes}
          </p>
        </div>

        <h3 className={`text-xl md:text-2xl font-medium ${project.customStyle?.title || 'text-gray-900'}`}>
          {project.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-4 pt-4">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Role</span>
            <p className="mt-1 text-gray-900">{project.role}</p>
          </div>
          
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Technologies</span>
            <p className="mt-1 text-gray-900">
              {project.technologies.join(' • ')}
            </p>
          </div>

          {project.collaborators && (
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Collaborators</span>
              <p className="mt-1 text-gray-900">{project.collaborators}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-1/2">
        <a 
          href={project.link}
          className="block relative aspect-[4/3] rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
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
          
          <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-500 z-20 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="text-white font-mono tracking-widest uppercase font-medium">
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
      title: "FROM BRUSHSTROKE TO KEYSTROKE",
      description: "An interactive installation for Muji's new pen collection that reflects on the evolution of communication. Users type on a restored typewriter, and each keystroke creates a flowing pen stroke on a digital canvas.",
      technologies: ["touchDesigner", "p5.js"],
      role: "interaction designer",
      collaborators: "Alish Chhetri (hardware engineer), Emily Graber (project supervisor)",
      image: "/assets/projects/Muji.svg",
      hoverImage: "/assets/projects/MujiHoveredPage.svg",
      link: "https://jaclyn-pham.notion.site/The-Typewriter-Piano-a-multisensory-interface-9935bac78f3b4ee3aaeb9ee2e6d223ac?pvs=25",
    },
    {
      brand: "MARSHALL",
      brandDes: "sound technology",
      title: "BRINGING MUSIC TO LIFE",
      description: "An interactive touch-sensitive painting that visualizes music and lets users engage with sound in a tactile way.",
      technologies: ["Arduino Auditions", "Arduino IDE", "Adobe Aero"],
      role: "Designer & Engineer",
      collaborators: "Heather Brand (project supervisor)",
      image: "/assets/projects/Marshal_initial.PNG",
      hoverImage: "/assets/projects/marshal_default.png",
      link: "https://jaclyn-pham.notion.site/Hiraeth-Acrylics-on-Wooden-Canvas-with-Touch-Sensitive-Sounds-Augmented-Reality-on-Tablet-8513ca00b6ed4686884a98bcd07b90c8?pvs=25",
    },
    {
      brand: "My Heritage",
      brandDes: "family website",
      title: "THE CENTRAL RESOURCE FOR ALL GENERATIONS",
      description: "(Ongoing) A family archive for all generations of the McCarthy Family, integrating GoogleAPI for face recognition and photo retrieval.",
      technologies: ["Figma", "React", "TailwindCCSS", "NextJS"],
      role: "UI Designer, Front-end Web Developer",
      collaborators: "Trang Hoang (Back-end web developer), Bullmoose Marketing",
      image: "/assets/projects/myHeritage_Image.svg",
      hoverImage: "/assets/projects/myHeritage_Layout.svg",
      link: "https://www.figma.com/proto/0JAnQNfkQoGDaJXri2cRhb/My-Heritage?node-id=86-3&node-type=canvas&t=tq4TR0pbFgFldjvf-1&scaling=min-zoom&content-scaling=fixed&page-id=86%3A2",
    },
    {
      brand: "Liberty Electronics",
      brandDes: "company website",
      title: "MODERNIZE COMPANY WEBSITE",
      description: "(Ongoing) Liberty Electronics provides electrical cable assemblies, wire haresses for demanding defense and commercial OEM. They want to modernize the company website and convert it into a bold, dynamic and professional user interface.",
      technologies: ["Figma", "WordPress", "HTML", "CSS", "PHP"],
      role: "UI Designer, Front-end Web Developer",
      collaborators: "Bullmoose Marketing",
      image: "/assets/projects/Liberty Electronics.svg",
      hoverImage: "/assets/projects/HoveredImage_LibertyElectronics.svg",
      link: "https://www.figma.com/proto/osKNrg756oDDcSSzDX2foX/Liberty-Electronics?node-id=137-23&node-type=canvas&t=2Qj2FpnCLnwQQX2w-1&scaling=min-zoom&content-scaling=fixed&page-id=137%3A2",
    },
    {
      brand: "Quarto Game",
      brandDes: "interactive game",
      title: "MAKE THE COFFEE WAITING TIME FUN - AN INTERACTIVE GAME WITH AI ",
      description: "(Ongoing) Liberty Electronics provides electrical cable assemblies, wire haresses for demanding defense and commercial OEM. They want to modernize the company website and convert it into a bold, dynamic and professional user interface.",
      technologies: ["Figma", "WordPress", "HTML", "CSS", "PHP"],
      role: "UI Designer, Front-end Web Developer",
      collaborators: "Bullmoose Marketing",
      image: "/assets/projects/QuartoGameImage.svg",
      hoverImage: "/assets/projects/Quarto Bakery Layout.svg",
      link: "https://github.com/Jaclynpqc/quarto-ai",
    },
    {
      brand: "Le Voyage dans la Lune",
      brandDes: "movie",
      title: "AUGMENTED REALITY: A WALK THROUGH THE STARS",
      description: "Inspired by the classic movie 'Le Voyage dans la Lune' by Georges Méliès, I developed an augumented reality world, accessible thorugh the camera lens, which transported viewers to a captivating journey of walking amongst the stars.",
      technologies: ["Procreate", "Arobe Aero"],
      role: "AR Designer",
      collaborators: "",
      image: "/assets/projects/aero_recording 2.gif",
      hoverImage: "/assets/projects/aero_recording 2.gif",
      link: "https://jaclyn-pham.notion.site/Le-Voyage-dans-la-Lune-767c950852de414694ebc6366774c005",
    },
    {
      brand: "Allegheny Lab for Innovation and Creativity",
      brandDes: "ALIC",
      title: "ALIC WORKSHOP SERIES",
      description: "Wouldn't it be nice if digital art was accessible for everyone? This project is an ongoing no-cost workshop for all faculty and students in Allegheny College interested in learning digital art. Workshops run weekly since 2023.",
      technologies: ["Adobe Indesign", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe Photoshop", "Adobe After Effects"],
      role: "Curriculumn Developer, Designer",
      collaborators: "Funded through the Dean's Fund for Student-Faculty Research, McCune Foundation Fund, and in Professor Heather Brand's capacity as the Eila v. Bush Endowed Professor of Art",
      image: "/assets/items/headphones.svg",
      hoverImage: "/assets/items/headphones-hover.svg",
      link: "https://jaclyn-pham.notion.site/Inclusive-Digital-Art-Workshop-for-All-Levels-df5b8b69ebad401a8c2792506e6e1041?pvs=25",
    }
  ];

  return (
    <section className="py-12 px-8 bg-mauimist">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-8xl font-['Ballet'] text-center font-bold text-bordeaux mb-4 tracking-widest">Case Studies</h1>
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