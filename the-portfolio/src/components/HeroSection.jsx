/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import SwitchFont from './SwitchFonts';

const DragElem = ({src, initialX, initialY, isDraggingEnabled}) => {
  const [position, setPosition] = useState({x:initialX, y:initialY});
  const [isDragging, setIsDragging]= useState(false);
  const [dragStart, setDragStart] = useState({x:0, y:0});
  const elementRef = useRef(null);

  const handleMouseDown = (e) => {
    if (!isDraggingEnabled) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if(isDragging && isDraggingEnabled) {
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
  }, [isDragging, isDraggingEnabled]);

  const cursorClass = isDraggingEnabled ? 'cursor-move' : 'cursor-default';

  return (
    <img
      ref={elementRef}
      src={src}
      className={`absolute ${cursorClass} h-96 select-none transition-opacity rounded-sm  ${isDragging ? 'opacity-80' : 'opacity-100'}`}
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

const DragPrompt = ({ isDraggingEnabled }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !isDraggingEnabled) return null;

  return (
    <div 
      className="fixed top-10 mt-10 left-1/2 transform -translate-x-1/2"
      style={{ zIndex: 150 }}
    >
      <SwitchFont 
        text="DRAG THE IMAGES AROUND TO CREATE YOUR OWN COLLAGE"
        initialFont="Redacted Script"
        targetFont="Oswald"
        switchLettersPerInterval={2}
        intervalSpeed={100}
        className="text-lg text-white"
      />
    </div>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const HeroSection = () => {
  const { width } = useWindowSize();
  const isDraggingEnabled = width >= 768; // Enable dragging only on tablets and larger

  // Responsive positions for elements
  const getFlatlayElements = (screenWidth) => {
    if (screenWidth >= 1280) { // Desktop
      return [
        { src: '/assets/hero/hobbies.svg', x: 1000, y: 200 },
        { src: '/assets/hero/education.svg', x: 1010, y: 500 },
        { src: '/assets/hero/experience.svg', x: 410, y: 275 },
        { src: '/assets/polaroids/polaroid (2).svg', x: 1450, y: 350 },
        
      ];
    } else if (screenWidth >= 768) { // Tablet
      return [
        { src: '/assets/hero/education.svg', x: -100, y: 150 },
        { src: '/assets/hero/experience.svg', x: 200, y: -50 },
      ];
    } else { // Mobile
      return [
        { src: '/assets/hero/education.svg', x: 50, y: 100 },
        { src: '/assets/hero/experience.svg', x: 200, y: 100 },
      ];
    }
  };

  const flatlayElements = getFlatlayElements(width);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Base background color */}
      <div className="absolute inset-0 bg-mauimist" />
      
      {/* Concrete texture background */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/hero/concrete4.jpeg')" }}
      />
      
      {/* Content container */}
      <div className="relative h-full">
        {/* Shoes background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/assets/hero/shoes.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            zIndex: 100,
            pointerEvents: "none"
          }}
        />
        <DragPrompt isDraggingEnabled={isDraggingEnabled} />
        {/* Flatlay Elements Container */}
        <div className="absolute inset-0" style={{zIndex: 50}}>
          {flatlayElements.map((element, index) => (
            <DragElem
              key={index}
              src={element.src}
              initialX={element.x}
              initialY={element.y}
              isDraggingEnabled={isDraggingEnabled}
            />
          ))}
        </div>
        
        {/* Main text - responsive positioning */}
        <div className={`absolute max-w-5xl text-left ${width >= 768 ? 'bottom-16 left-16' : 'top-16 left-8'}`}>
          <p className="space-y-5">
            <span className="block font-['Inter'] font-black text-6xl leading-tight tracking-wide text-mauimist">
              HI, I&apos;M JACLYN. I DESIGN EXPERIENCES THAT INSPIRED CONNECTION AND ELEVATE MINDFULNESS.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;