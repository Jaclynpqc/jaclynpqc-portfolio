/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Adding dynamic position for web layout
  const containerRef = useRef(null);

  const designSkills = [
    {
      name: 'Figma',
      imgPath: '/src/assets/figma_logo.png',
      path: {
        initial: { x: 100, y: -50, rotate: 0 },
        animate: { x: 80, y: -120, rotate: 12 }
      }
    },
    {
      name: 'TouchDesigner',
      imgPath: '/src/assets/touchdesigner.webp',
      path: {
        initial: { x: 120, y: -30, rotate: 0 },
        animate: { x: 140, y: -80, rotate: 6 }
      }
    },
    {
      name: 'Adobe Illustrator',
      imgPath: '/src/assets/adobeAI.png',
      path: {
        initial: { x: 140, y: 0, rotate: 0 },
        animate: { x: 160, y: -20, rotate: -6 }
      }
    },
    {
      name: 'Adobe Premiere Pro',
      imgPath: '/src/assets/adobePremierPro.png',
      path: {
        initial: { x: 120, y: 30, rotate: 0 },
        animate: { x: 140, y: 40, rotate: -12 }
      }
    },
    {
      name: 'Adobe Aero',
      imgPath: '/src/assets/adobeAero.png',
      path: {
        initial: { x: 100, y: 50, rotate: 0 },
        animate: { x: 80, y: 80, rotate: -18 }
      }
    },
  ];

  const programmingSkills = [
    {
      name: 'React',
      imgPath: 'src/assets/react.svg',
      path: {
        initial: { x: -100, y: -50, rotate: 0 },
        animate: { x: -80, y: -120, rotate: -12 }
      }
    },
    {
      name: 'TailwindCSS',
      imgPath: '/src/assets/tailwind.webp',
      path: {
        initial: { x: -120, y: -30, rotate: 0 },
        animate: { x: -140, y: -80, rotate: -6 }
      }
    },
    {
      name: 'HTML5',
      imgPath: '/src/assets/html5.webp',
      path: {
        initial: { x: -140, y: 0, rotate: 0 },
        animate: { x: -160, y: -20, rotate: 6 }
      }
    },
    {
      name: 'CSS',
      imgPath: '/src/assets/css.webp',
      path: {
        initial: { x: -120, y: 30, rotate: 0 },
        animate: { x: -140, y: 40, rotate: 12 }
      }
    },
    {
      name: 'JavaScript',
      imgPath: '/src/assets/javascript.webp',
      path: {
        initial: { x: -100, y: 50, rotate: 0 },
        animate: { x: -80, y: 80, rotate: 18 }
      }
    },
  ];

  const products = [
    {
      id: 1,
      image: "/src/assets/baggu_black.svg",
      color: "black",
      alt: "Black handbag with flower accent",
      title: "Developer",
      skills: programmingSkills, 
      hover : 'className = brightness-50'
    },
    {
      id: 2,
      image: "/src/assets/baggu_red.svg",
      color: "red",
      alt: "Red handbag with strap details",
      title: "Designer",
      skills: designSkills
    }
  ];

  const SkillsAnimation = ({ skills, index }) => {
    return (
      <div className="absolute w-full h-full">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ 
              opacity: 0,
              scale: 0,
              ...skill.path.initial
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              ...skill.path.animate,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: i * 0.1,
                duration: 0.8
              }
            }}
            exit={{ 
              opacity: 0,
              scale: 0,
              ...skill.path.initial,
              transition: { duration: 0.3 }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative group">
              <img 
                src={skill.imgPath} 
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity duration-200 shadow-sm">
                {skill.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-8xl mx-auto p-4 md:p-8">
        <div className="flex flex-wrap">
          <h1 className="font-['Ballet'] mt-10 text-left text-6xl md:text-8xl mb-10 md:mb-4 tracking-wider text-bordeaux">
            I wear many Hats...
          </h1>
          <h1 className="md:mt-10 sm:mt-10 font-['Ballet'] text-left text-6xl md:text-8xl mb-5 md:mb-4 tracking-wider text-bordeaux">
            or Bags
          </h1>
          <div className="md:mt-20 sm:mt-30 mt-30 text-md font-['Karla'] mb-4 text-gray-600 italic">
            (hover to take a peek)
          </div>
        </div>
        
        <div className="relative min-h-[600px] md:min-h-[800px]">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`
                relative 
                transition-all 
                duration-300 
                max-w-[300px]
                ${index === 0 ? 'sm:right-10 md:right-0 lg:right-0 mt-5 right-1 md:absolute md:top-0 scale-150' : ''}
                ${index === 1 ? 'md:justify-self-center mb-5 mt-8 left-10 sm:left-10 md:left-0 right:left-0 scale-150 md:mt-0 md:ml-5' : ''}
                mx-auto
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
                
                {hoveredIndex === index && (
                    <div className = "absolute top-0 left-0 right-0 w-full h-full">
                  <SkillsAnimation 
                    skills={product.skills}
                    index={index}
                  />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;