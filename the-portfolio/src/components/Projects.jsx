/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProjectCard = ( {project}) => (
    <div className = "mb-24">
        <div className = "grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <a href = {project.link} className = {`block ${project.imageRight ? 'md:order-last' : ''}`}>
                <img 
                src = {project.image}
                alt = {project.title}
                className = " scale-125 w-full h-auto object-cover transition-opacity hover:scale-150 hover:brightness-50"
                />
            </a>

            {/* Content Section */}
            <div className = "space-y-6 pt-4">
                <h2 className = "font-['Inter'] text-2xl md:text-3xl tracking-tight uppercase font-light">
                    {project.title}
                </h2>
                <p className = "font-['Inter'] text-gray-700 text-base leading-relaxed max-2-md">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className = "flex flex-wrap gap-4">
                    {project.technologies.map((tech,index) => (
                        <span
                        key = {index}
                        className = "font-['Inter'] text-gray-700 font-bold text-base leading-relaxed max-2-md ">
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Role and Collaborators */}
                <div className = "font-['Inter'] text-sm text-gray-600 space-y-1">
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
            image: "src/assets/typewriter.png", 
            link: "/projects/muji-project",
            imageRight: false
        },
        {
            title: "MARSHALL BRINGS MUSIC TO LIFE",
            description: "An interactive touch-sensitive painting that visualize music and lets users engage with sound in a tactile way",
            technologies: ["Arduino Auditions","Arduino IDE", "Adobe Aero"],
            role: "Designer & Engineer",
            collaborators: "Heather Brand (project supervisor)", 
            image: "src/assets/headphones.png",
            link: "/projects/marshall-project",
            imageRight: true
        }
    ];

    return(
        <section className = "py-20 px-8 bg-white">
            <div className = "max-w-7xl mx-auto">
                <h1 className = "font-['Ballet'] text-6xl md:text-8xl mb-20 text-center tracking-wider italic text-red-800">
                    A collection of Senses
                </h1>
                <div className = "space-y-32">
                    {projects.map((project,index) => (
                        <ProjectCard key = {index} project = {project} />
                    ))}
                </div>
            </div>
        </section>
    );
}