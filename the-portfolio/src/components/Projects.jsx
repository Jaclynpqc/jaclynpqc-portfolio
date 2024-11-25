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
      brand: "MUJI IMAGINE",
      brandDes: "minimalist lifestyle brand",
      title: "FROM BRUSHSTROKE TO KEYSTROKE",
      description: "(portfolio project) An interactive installation for Muji's new pen collection that reflects on the evolution of communication. Users type on a restored typewriter, and each keystroke creates a flowing pen stroke on a digital canvas.",
      technologies: ["touchDesigner", "p5.js"],
      role: "interaction designer",
      collaborators: "Alish Chhetri (hardware engineer), Emily Graber (project supervisor)",
      image: "/assets/projects/Muji.svg",
      hoverImage: "/assets/projects/MujiHoveredPage.svg",
      link: "https://jaclyn-pham.notion.site/The-Typewriter-Piano-a-multisensory-interface-9935bac78f3b4ee3aaeb9ee2e6d223ac?pvs=25",
    },
    {
      brand: "MARSHALL IMAGINE",
      brandDes: "sound technology",
      title: "BRINGING MUSIC TO LIFE",
      description: "(portfolio project) An interactive touch-sensitive painting that visualizes music and lets users engage with sound in a tactile way.",
      technologies: ["Arduino Auditions", "Arduino IDE", "Adobe Aero"],
      role: "Designer & Engineer",
      collaborators: "Heather Brand (project supervisor)",
      image: "/assets/projects/Marshal_initial.PNG",
      hoverImage: "/assets/projects/marshal_default.png",
      link: "https://jaclyn-pham.notion.site/Hiraeth-Acrylics-on-Wooden-Canvas-with-Touch-Sensitive-Sounds-Augmented-Reality-on-Tablet-8513ca00b6ed4686884a98bcd07b90c8?pvs=25",
    },
    {
      brand: "COMMA",
      brandDes: "academic semester research",
      title: "MUTATION SCORE PREDICTION WITH MACHINE LEARNING",
      description: "Mutation testing, a valuable software testing technique, can be computationally expensive. In collaboration with another student and Dr.Gregory M. Kapfhammer, I aimed to develop a tool that could predict mutation scores earlier in the testing process. ",
      technologies: ["Python", "scikit-learn", "pandas"],
      role: "Software Engineering",
      collaborators: "Dr. Gregory M. Kapfhammer(supervisor professor), Daniel Bekele( student)",
      image: "/assets/projects/SEERS_default.png",
      hoverImage: "/assets/projects/SEERS_hover.png",
      link: "https://jaclyn-pham.notion.site/COMMA-Mutation-Score-Prediction-with-Machine-Learning-Jan-2024-present-87fdc5c95d5c4f7eabebd0a71d1e4254",
    },
    {
      brand: "CHASTEN",
      brandDes: "open-source project",
      title: "STREAMLINE CODE ANALYSIS FOR COMPUTER SCIENCE STUDENTS",
      description: "The Computer and Information Science department at Allegheny College previously relied on regex-based tools to grade assignments, but these tools had vulnerabilities, allowing students to bypass checks. Collaborating with Dr. Gregory Kapfhammer and my Software Engineering class, we developed Chaster, an XPATH-based tool that analyzes AST structures to reliably detect specific code patterns.",
      technologies: ["Python"],
      role: "Software Engineering",
      collaborators: "Software Engineering student group, Dr. Gregory M. Kapfhammer",
      image: "/assets/projects/Chasten_default.svg",
      hoverImage: "/assets/projects/Chasten_hover.png",
      link: "https://jaclyn-pham.notion.site/Chasten-Python-tool-for-AST-pattern-detection-using-XPath-expressions-1bc167efd6d7447ebe72af5b7b132c8e",
    },
    {
      brand: "JACLYN PHAM",
      brandDes: "personal portfolio",
      title: "GET TO KNOW ME",
      description: "(portfolio project) I designed and developed this portfolio to showcase my skills and personality, and for the ✨ girly girls ✨ outthere. With its interactive components and girly aesthetic, I hope you'll enjoy exploring my work.",
      technologies: ["ReactJS", "Vite", "TailwindCSS", "Vercel", "JavaScript", "HTML", "CSS"],
      role: "Creator",
      collaborators: "",
      image: "/assets/projects/portfolio_default.png",
      hoverImage: "/assets/projects/portfolio_hovered.png",
      link: "https://github.com/Jaclynpqc/jaclynpqc-portfolio",
    },
    {
      brand: "Quarto Game",
      brandDes: "interactive game",
      title: "MAKE THE COFFEE WAITING TIME FUN - AN INTERACTIVE GAME WITH AI ",
      description: " I designed an interactive, AI-powered Quarto game using Minimax Algorithm to enhance the coffee shop experience. The concept flips the typical waiting time into a fun, engaging activity, encouraging customers to play instead of mindlessly scrolling on their phones. With a unique bakery-themed twist, this game seamlessly blends playful design with intuitive gameplay, creating a delightful moment while waiting for your coffee.",
      technologies: ["Pygame", "Python"],
      role: "Developer",
      collaborators: "",
      image: "/assets/projects/quarto-gif.gif",
      hoverImage: "/assets/projects/Quarto Bakery Layout.svg",
      link: "https://github.com/Jaclynpqc/quarto-ai",
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
      brand: "Golden Gate Restaurant Group ",
      brandDes: "Established in 2005, Golden Gate appies the restaurant chain model in Vietnam with five main casual dining cuisines which are Hotpot, BBQ, Asian, Western, and Cafeteria. ",
      title: "MARKETING CAMPAIGN Q4 2024",
      description: "As 1 of 2 interns in Hanoi Headquarter branch, I was in charge of the branding for Ashima Restaurant Chain (4 locations in Hanoi). As my final project during my internship, I applied marketing knowledge and assets from the brand to create a campaign that would reach potential audiences from different segments, establishing connections with current customers. ",
      technologies: ["Google Slides", "Canva", "Google Sheet"],
      role: "Branding Intern",
      collaborators: "Minh Chau Tran (Assistant Brand Manager), Hoa Tran (Brand Manager)",
      image: "/assets/projects/ashima.png",
      hoverImage: "/assets/projects/ashima-hovered.png",
      link: "https://www.notion.so/jaclyn-pham/Branding-Internship-June-2022-August-2022-7611210db3b14e40973d4e71012c2b70?pvs=4",
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
      brand: "Thai Ha Books",
      brandDes: "book publisher",
      title: "TRUST INC. HOW BUSINESS WINS RESPECT IN A SOCIAL MEDIA AGE (Matthew Yeoman)",
      description: "(Published in 2022) Working on this book not only taught me how to translate fluently between English and Vietnamese but also lessons about the upcoming era of sustainability and transparency in business- those lessons that still apply even when I’m not a business and marketing major at the moment.",
      technologies: [],
      role: "English-Vietnamese Translator",
      collaborators: "Professor Thao Pham (Foreign Trade University Vietnam)",
      image: "/assets/projects/Trust Inc_default.jpeg",
      hoverImage: "/assets/projects/TrustInc_hover.jpg",
      link: "https://tiki.vn/trust-inc-tu-niem-tin-den-vi-the-vung-ben-trong-thoi-dai-so-matthew-yeomans-phuong-thao-quynh-chi-dich-thai-ha-books-nxb-cong-thuong-p199552531.html",
    },
    {
      brand: "Allegheny Lab for Innovation and Creativity",
      brandDes: "ALIC",
      title: "ALIC WORKSHOP SERIES",
      description: "Wouldn't it be nice if digital art was accessible for everyone? This project is an ongoing no-cost workshop for all faculty and students in Allegheny College interested in learning digital art. Workshops run weekly since 2023.",
      technologies: ["Adobe Indesign", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe Photoshop", "Adobe After Effects"],
      role: "Curriculumn Developer, Designer",
      collaborators: "Funded through the Dean's Fund for Student-Faculty Research, McCune Foundation Fund, and in Professor Heather Brand's capacity as the Eila v. Bush Endowed Professor of Art",
      image: "/assets/projects/workshop.png",
      hoverImage: "/assets/projects/workshop_hovered.JPG",
      link: "https://jaclyn-pham.notion.site/Inclusive-Digital-Art-Workshop-for-All-Levels-df5b8b69ebad401a8c2792506e6e1041?pvs=25",
    },
    {
      brand: "Le Voyage dans la Lune",
      brandDes: "movie",
      title: "AUGMENTED REALITY: A WALK THROUGH THE STARS",
      description: "(portfolio project) Inspired by the classic movie 'Le Voyage dans la Lune' by Georges Méliès, I developed an augumented reality world, accessible thorugh the camera lens, which transported viewers to a captivating journey of walking amongst the stars.",
      technologies: ["Procreate", "Arobe Aero"],
      role: "AR Designer",
      collaborators: "",
      image: "/assets/projects/aero_recording 2.gif",
      hoverImage: "/assets/projects/aero_recording 2.gif",
      link: "https://jaclyn-pham.notion.site/Le-Voyage-dans-la-Lune-767c950852de414694ebc6366774c005",
    },
    {
      brand: "TEAMLAB IMAGINE",
      brandDes: "immersive installation",
      title: "EDENIA",
      description: "(portfolio project) I created an installation using projectiong mapping to explore the limitless boundaries of art and technology. The installation envisioned a positive future world with seamless technology integration.",
      technologies: ["Adobe Premier Pro"],
      role: "Designer",
      collaborators: "",
      image: "/assets/projects/Edenia_default.gif",
      hoverImage: "/assets/projects/Edenia_default.gif",
      link: "https://jaclyn-pham.notion.site/Edenia-Embracing-a-Positive-Technological-Future-6b4f54d98dcf40269380646df61ef437",
    },
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