/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';

const SkillsBag = () => {
    const [hoveredBag, setHoveredBag] = useState(false);

    //DESIGN SKILLS
    const designSkills = [
        {
            name: 'Figma',
            imgPath: '/src/assets/figma_logo.png',
            translateClass: '-translate-y-16 translate-x-8 rotate-12'
        },
        {
            name: 'TouchDesigner',
            imgPath: '/src/assets/touchdesigner.webp',
            translateClass: '-translate-y-24 translate-x-4 rotate-6'
        },
        {
            name: 'Adobe Illustrator',
            imgPath: '/src/assets/adobeAI.png',
            translateClass: '-translate-y-32 translate-x-2'
        },
        {
            name: 'Adobe Premiere Pro',
            imgPath: '/src/assets/adobeAI.png',
            translateClass: '-translate-y-24 -translate-x-8 -rotate-6'
        },
        {
            name: 'Adobe Aero',
            imgPath: '/src/assets/adobeAero.png',
            translateClass: '-translate-y-16 -translate-x-12 -rotate-12'
        },
    ];


    // Programming Skills
    const programmingSkills = [
        {
            name: 'React',
            imgPath: 'src/assets/react.svg',
            translateClass: '-translate-y-16 translate-x-8 rotate-12'
        },
        {
            name: 'TailwindCSS',
            imgPath: '/src/assets/tailwind.webpsrc/assets/react.svg',
            translateClass: '-translate-y-24 translate-x-4 rotate-6'
        },
        {
            name: 'HTML5',
            imgPath: '/src/assets/html5.webp',
            translateClass: '-translate-y-32 translate-x-2'
        },
        {
            name: 'CSS',
            imgPath: '/src/assets/css.webp',
            translateClass: '-translate-y-24 translate-x-8 -rotate-6'
        },
        {
            name: 'JavaScript',
            imgPath: '/src/assets/css.webp',
            translateClass: '-translate-y-24 translate-x-8 -rotate-6'
        },
        {
            name: 'Python',
            imgPath: '/src/assets/python.webp',
            translateClass: '-translate-y-24 translate-x-10 -rotate-6'
        },
        {
            name: 'Processing',
            imgPath: '/src/assets/processing.webp',
            translateClass: '-translate-y-24 translate-x-10 -rotate-12'
        },
    ];

    // Bag component
    const Bag = ({type, skills, imgPath}) => (
        <div className = "relative w-72 h-96">
            {/* Floating */}
            < div className = "absolute inset-0 flex items-center justify-center">
            { skills. map((skill, index) => (
                <div
                key = {skill.name}
                className = {`
                    absolute left-1/2 bottom-1/2
                    transform transition-all duration-500 ease-in-out
                    ${hoveredBag === type ? skill.translateClass : 'translate-y-0 translate-x-0 opacity-0'}
                    ${hoveredBag === type ? 'opacity-100' : 'opacity-0'}
                  `}
                style = {{
                    transitionDelay: '${index*100}ms'
                }}
                >
                    <img
                    src = {skill.imgPath}
                    alt={skill.name}
                    className = "w-12 h-12 object-contain"
                    />
                </div>
            ))}
            </div>

            {/* Bag Image */}
            <div
            className = "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer scale-150"
            onMouseEnter = {() => setHoveredBag(type)}
            onMouseLeave = {() => setHoveredBag(null)}
            >
                <img
                src = {imgPath}
                alt = {'${type} skills bag'}
                className = "w-48 h-auto transform transition-all duration-300 ease-in-out scale-150 hover:scale-175"
                />
            </div>
        </div>
    );

    return(
        <div className = "relative min-h-[600px] w-full flex flex-col items-center justify-center p-8">
            {/* Title */}
            <h2 className = "text-4xl font-['Inter'] text-gray-800 mb-4 "> I WEAR MANY HATS ... OR BAGS</h2>
            <p className = "font-['Inter'] text-3xl text-gray-700">hover to take a peak</p>

            {/* Bags container */}
            <div className = "flex flex-wrap justify-center gap-24">
                <Bag 
                type = "developer"
                skills = {programmingSkills}
                imgPath={"/src/assets/baggu_black.svg"}
                />
                <Bag
                type = "designer"
                skills = {designSkills}
                imgPath={"/src/assets/baggu_red.svg"}
                />
            </div>
        </div>
    );
};

export default SkillsBag;