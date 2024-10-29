/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProjectCard = ( {project}) => (
    <div className = "mb-12">
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-3 items-start transition-all duration-300 ease-in-out px-2 py-2 hover:bg-bordeaux hover:rounded-xl group">
            {/* Project Image Container */}
            <a href={project.link} 
               className={`block aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 
                         ${project.imageRight ? 'md:order-last' : ''}`}>
                <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                />
            </a>

            {/* Content Section */}
            <div className = "space-y-4 pt-2">
                <h2 className = "font-['Inter'] text-2xl md:text-3xl tracking-tight uppercase font-light  group-hover:text-white">
                    {project.title}
                </h2>
                <p className = "font-['Inter'] text-gray-700 text-base leading-relaxed max-2-md group-hover:text-white">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className = "flex flex-wrap gap-2">
                    {project.technologies.map((tech,index) => (
                        <span
                        key = {index}
                        className = "font-['Inter'] text-gray-700 font-bold text-base leading-relaxed max-2-md group-hover:text-white ">
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Role and Collaborators */}
                <div className = "font-['Inter'] text-sm text-gray-600 space-y-1 group-hover:text-white">
                    <p> Role: {project.role} </p>
                    {project.collaborators && (
                        <p> Collaborators: {project.collaborators} </p>
                    )}
                </div>
            </div>
        </div>
    </div>
); 

export default function Projects (){
    const projects = [
        {
            title: "MUJI PAINTING EXPERIENCES",
            description: "An interactive installation for Muji's new pen collection that reflects on the evolution of communication. Users type on a restored typewriter, an each key creates a flowing pen stroke on a digital canvas ",
            technologies: ["TouchDesigner", "p5.js"],
            role: "Interaction Engineer",
            collaborators: "Alish Chhetri (hardware engineer), Emily Graber(project supervisor)",
            image: "/src/assets/typewriter.svg", 
            link: "/projects/muji-project",
            imageRight: false
        },
        {
            title: "MARSHALL BRINGS MUSIC TO LIFE",
            description: "An interactive touch-sensitive painting that visualize music and lets users engage with sound in a tactile way.",
            technologies: ["Arduino Auditions","Arduino IDE", "Adobe Aero"],
            role: "Designer & Engineer",
            collaborators: "Heather Brand (project supervisor)", 
            image: "/src/assets/headphones.svg",
            link: "/projects/marshall-project",
            imageRight: true
        }, 
        {
            title: "All Day Coffee: Waiting for your coffee can be fun",
            description: "All Day is known for creating inviting spaces and enhancing the cafe experience. The Bakery Qua",
            technologies: ["Adobe Premiere Pro", "HeadvyM"],
            role: "Interaction Engineer",
            collaborators: "Independent project in ART388: Current Topics in Art/Science", 
            image: "/src/assets/projects/Biophilians.gif",
            link: "/projects/edenia-project",
            imageRight: false
        }, 
        {
            title: "Ednia: Embracing a Positive Technological Future",
            description: "Inspired by TeamLab, this installation is my take on reimagining the relationship between humans, nature, and technology.",
            technologies: ["Adobe Premiere Pro", "HeadvyM"],
            role: "Designer",
            collaborators: "Independent project in ART388: Current Topics in Art/Science", 
            image: "/src/assets/projects/Biophilians.gif",
            link: "/projects/edenia-project",
            imageRight: true
        }, 
        {
            title: "Le Voyage Dans la Lune: Immersive Experience",
            description: "Stepping into the scene of the classic movie 'Le Voyage dans la Lune'  by Georges Méliès, this project transports viewers to a captivating journey of walking amongst the stars. ",
            technologies: ["Procreate", "Adobe Aero"],
            role: "AR Designer",
            collaborators: "", 
            image: "/src/assets/projects/aero_recording 2.gif",
            link: "/projects/moon-project",
            imageRight: false
        }, 

    ];

    return(
        <section className = "py-4 px-4 bg-white">
            <div className = "max-w-6xl mx-auto">
                <h1 className = "font-['Ballet'] text-6xl md:text-8xl mb-12 text-center tracking-wider italic text-red-800">
                    A collection of Senses
                </h1>
                <div className = "space-y-12">
                    {projects.map((project,index) => (
                        <ProjectCard key = {index} project = {project} />
                    ))}
                </div>
            </div>
        </section>
    );
}