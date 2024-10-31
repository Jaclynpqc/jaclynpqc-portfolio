/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

const DragElem = ({src, initialX, initialY}) => {
  const [position, setPosition] = useState({x:initialX, y:initialY});
  const [isDragging, setIsDragging]= useState(false);
  const[dragStart, setDragStart] = useState({x:0, y:0});
  const elementRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if(isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return() => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <img
      ref={elementRef}
      src={src}
      className={`absolute cursor-move w-32 h-32 select-none transition-opacity ${isDragging ? 'opacity-80' : 'opacity-100'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 50 : 1
      }}
      onMouseDown={handleMouseDown}
      alt="Draggable element"
      draggable="false"
    />
  );
}

/* Add Prompt for Users */
const DragPrompt = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-10 mt-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500">
      <div className="bg-white/90 border-bloodymary rounded-md shadow-lg">
        <p className="text-lg font-[Public Sans] text-furioustiger">
          Try dragging the elements around! ✨
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  // Array of your flatlay images with their initial positions
  const flatlayElements = [
    { src: '/laptop.svg', x:-100, y: 150},
    { src: '/glasses.svg', x: 200, y: -50 },
    { src: '/lipbalm.svg', x: 200, y: 100 },
    { src: '/digicam.svg', x: 1100, y: 150 },
    { src: '/clawclips.svg', x: 900, y: 290 },
    { src: '/ballet_shoes.svg', x: 200, y: 300 },
    { src: '/coffee.svg', x: 1000, y: 400 },
    { src: '/headphones.svg', x: 900, y: -80 },
  ];

  return (
    <>
      <div className="h-[80vh] relative bg-stone-50 flex items-center justify-center overflow-hidden">
        <DragPrompt />
        <div className="max-w-6xl mx-auto text-center relative -mb-10">
          {/* Flatlay Elements */}
          {flatlayElements.map((element, index) => (
            <DragElem
              key={index}
              src={element.src}
              initialX={element.x}
              initialY={element.y}
            />
          ))}
          {/* Main text */}
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed relative">
            <span className="font-['Inter'] font-black text-black tracking-wide">Hello world! I&apos;m Jaclyn!</span>{' '}
            <br/>
            <span className="font-['Inter'] font-light text-black"> I am a product designer (UI/UX) & creative technologist based in United States, working worldwide. I enjoy creating meaningful narratives through experimenting with new technology. </span>{' '}
            <br/>
            <span className="font-['Inter'] font-extralight text-2xl md:text-3xl lg:text-4xl text-bloodymary">Contact me at jaclynpqc@gmail.com</span>{' '}
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-black px-2 py-8 -mt-10 flex overflow-hidden">
        <div className="max-w-8xl mx-auto p-6 rounded-lg transition-colors duration-300 cursor-pointer">
          <div className="flex gap-8 items-start">
            {/* Text content */}
            <div className="flex-1">
              <h2 className="text-2xl font-['Public Sans'] text-gray-500 font-medium mb-4 ">
                About Me
              </h2>
              <p className="max-w-7xl text-white text-2xl md:text-3xl lg:text-4xl font-['Inter'] font-light leading-relaxed ">
                BS in Software Engineering and BA in Art, Science, and Innovation at Allegheny College. With a background in marketing, I thrive on creating engaging brand activation campaigns and pop-up events that drive customer engagement.
              </p>
              <br/>
              <p className="max-w-7xl text-white text-2xl md:text-3xl lg:text-4xl font-['Inter'] font-light leading-relaxed ">
                I&apos;m also an avid traveler and speak Vietnamese, English, and French. When I&apos;m not studying, you can find me designing websites, creating merchandise, teaching workshops, or launching a tech club!
              </p>
            </div>

            {/* Circular Button */}
            <div className = "mt-10">
              <a 
                href="/path-to-your-resume.pdf" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex-shrink-0 w-60 h-60 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group/button"
              >
                <span className="text-2xl font-['Public Sans'] text-black text-center group-hover/button:scale-110 transition-transform duration-300">
                  View<br/>My Resume
                </span>
              </a>
            </div>
            
          </div>
        </div>
        </div>
    </>
  );
};

export default HeroSection;