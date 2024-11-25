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
      className={`absolute cursor-move w-32 h-32 scale-150 select-none transition-opacity ${isDragging ? 'opacity-80' : 'opacity-100'}`}
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
      <div className="bg-bloodbrother border-bloodymary rounded-md shadow-lg">
        <p className="text-lg font-[Public Sans] text-mauimist">
          Try dragging the elements around! ✨
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  // Array of your flatlay images with their initial positions
  const flatlayElements = [
    { src: '/assets/items/laptop.svg', x:-100, y: 150},
    { src: '/assets/items/glasses.svg', x: 200, y: -50 },
    { src: '/assets/items/lipbalm.svg', x: 200, y: 100 },
    { src: '/assets/items/digicam.svg', x: 1100, y: 150 },
    { src: '/assets/items/clawclips.svg', x: 900, y: 290 },
    { src: '/assets/items/ballet_shoes.svg', x: 200, y: 300 },
    { src: '/assets/items/coffee.svg', x: 1000, y: 400 },
    { src: '/assets/items/headphones.svg', x: 900, y: -80 },
    { src: '/assets/polaroids/polaroid (2).svg', x: 450, y: -80 },
  ];

  return (
    <>
      <div className="h-[60vh] relative  bg-mauimist flex items-center justify-center overflow-hidden">
        <DragPrompt />
        <div className="max-w-6xl mx-auto text-center relative -mb-10 mt-5">
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
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl font-bold text-darkvoid tracking-widest">Hello, I&apos;m Jaclyn!</span>{' '}
            <br/>
            <span className="font-['Inter'] font-light text-darkvoid"> I am a product designer (UI/UX) & creative technologist based in United States, working worldwide. I enjoy creating meaningful narratives through experimenting with new technology. </span>{' '}
            <br/>
            <span className="font-['Inter'] font-extralight text-2xl md:text-3xl lg:text-4xl text-bloodymary">Contact me at jaclynpqc@gmail.com</span>{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;