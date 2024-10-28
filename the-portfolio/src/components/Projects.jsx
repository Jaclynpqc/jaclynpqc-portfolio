/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProjectCard = ({project}) => (
    <div className = "mb-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Content Section */}
        <div className = "space-y-6 w-full md:w-1/2">
            <h2 className="font-['Inter'] text-2xl md:text-3xl tracking-tight uppercase font-light">
            {project.title}
             </h2>
             <p className="font-['Inter'] text-gray-700 text-base leading-relaxed max-w-md">
                {project.description}
            </p>

            {/* Technologies */}
            <div className = "flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => (
                    <span
                    key = {index}
                    className = "font-['Inter'] text-gray-700 font-bold text-base leading-relaxed max-w-md">
                        {tech}
                    </span>
                ))}
            </div>
            {/* Role and Collaborators */}
            <div className = "font-['Inter'] text-sm text-gray-600 space-y-1">
                <p>Role: {project.role}</p>
                {project.collaborators && <p>Collaborators: {project.collaborators}</p>}
            </div>
        </div>

        {/* Project Image */}
    </div>
)

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
                <h1 className = "font-['Ballet'] text-8xl md:text-8xl mb-20 text-center tracking-widest italic text-red-800">
                    Case Studies
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