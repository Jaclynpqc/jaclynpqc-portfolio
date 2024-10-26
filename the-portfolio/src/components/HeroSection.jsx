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
      className={`absolute cursor-move w-33 h-33 select-none transition-opacity ${isDragging ? 'opacity-80' : 'opacity-100'}`}
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

const HeroSection = () => {
  // Array of your flatlay images with their initial positions
  const flatlayElements = [
    { src: '/src/assets/laptop.svg', x: 100, y: 50 },
    { src: '/src/assets/glasses.svg', x: 300, y: 100 },
    { src: '/src/assets/lipbalm.svg', x: 500, y: 150 },
    { src: '/src/assets/digicam.svg', x: 500, y: 150 },
    { src: '/src/assets/clawclips.svg', x: 200, y: 150 },
    { src: '/src/assets/ballet_shoes.svg', x: 200, y: 150 },
    { src: '/src/assets/coffee.svg', x: 200, y: 150 },
    { src: '/src/assets/headphones.svg', x: 200, y: 150 },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
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
          <span className="font-['Inter'] font-light">Jaclyn is an</span>{' '}
          <span className="font-['Ballet'] text-6xl md:text-7xl lg:text-8xl text-bloodymary">Interactive engineer </span>{' '}
          <span className="font-['Inter'] font-light">and</span>{' '}
          <span className="font-['Ballet'] text-6xl md:text-7xl lg:text-8xl text-bloodymary">Experience designer </span>{' '}
          <span className="font-['Inter'] font-light">from Vietnam, </span>{' '}
          <span className="font-['Inter'] font-light">based in United States. </span>{' '}
          <br/>
          <span className="font-['Inter'] font-light">She specializes in </span>{' '}
          <span className="font-['Ballet'] text-5xl md:text-6xl lg:text-7xl text-bordeaux">tech-driven solutions</span>{' '}
          <span className="font-['Inter'] font-light">for activation campaigns and pop-up events. </span>
          <br />
          <span className="font-['Inter'] font-light">Passionate about enhancing </span>{' '}
          <span className="font-['Ballet'] text-5xl md:text-6xl lg:text-7xl text-bordeaux">user engagement, </span>{' '}
          <span className="font-['Inter'] font-light">Jaclyn creates experience that convey brand narratives and</span>{' '}
          <span className="font-['Ballet'] text-5xl md:text-6xl lg:text-7xl text-bordeaux"> connect </span>{' '}
          <span className="font-['Inter'] font-light"> with audiences.</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;