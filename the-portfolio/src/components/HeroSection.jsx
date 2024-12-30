/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import SwitchFont from './SwitchFonts';
import Sticker from './Sticker';

const DragElem = ({children, src, initialX, initialY, isDraggingEnabled}) => {
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

  if (src) {
    return (
      <img
        ref={elementRef}
        src={src}
        className={`absolute ${cursorClass} h-96 select-none transition-opacity rounded-sm ${isDragging ? 'opacity-80' : 'opacity-100'}`}
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

  return (
    <div
      ref={elementRef}
      className={`absolute ${cursorClass} select-none transition-opacity ${isDragging ? 'opacity-80' : 'opacity-100'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 50 : 1
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

const DragPrompt = ({ isDraggingEnabled, screenWidth }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !isDraggingEnabled) return null;

  // Responsive positioning classes
  const positionClasses = screenWidth >= 768
    ? "top-20 right-20" // Desktop/large screens: bottom right
    : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"; // Mobile/tablet: center

  return (
    <div 
      className={`fixed ${positionClasses} transition-opacity duration-500`}
      style={{ zIndex: 150 }}
    >
      <SwitchFont 
        text="[drag and drop elements to create a collage]"
        initialFont="Redacted Script"
        targetFont="Oswald"
        switchLettersPerInterval={5}   
        intervalSpeed={100}
        className="text-3xl text-white"
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
      //Me
      { src: '/assets/polaroids/polaroid3.svg', x:-30, y: 275 },
      // Positions
      { component: 'sticker', text: 'UI/UX', x: 500, y: 150 },
      { component: 'sticker', text: 'Web Developer', x: 500, y: 200 },
      { component: 'sticker', text: 'Design & Engineering', x: 60, y: 650 },
      //Skills
      
      { component: 'sticker', text: 'HTML/CSS/JavaScript', x: 1400, y: 900 },
      { component: 'sticker', text: 'Figma/Adobe Creative Suite', x: 1000, y: 900 },
      { component: 'sticker', text: 'TouchDesigner', x: 1000, y: 950 },
      { component: 'sticker', text: 'Python', x: 1250, y: 950 },
      { component: 'sticker', text: 'Design Thinking', x: 1400, y: 950 },
      { component: 'sticker', text: 'Empathy', x: 1650, y: 950 },
        
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
          className="absolute inset-0 bg-cover bg-center scale-75"
          style={{ 
            backgroundImage: "url('/assets/hero/shoes.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            transformOrigin: "top center",
            zIndex: 100,
            pointerEvents: "none"
          }}
        />
        <DragPrompt isDraggingEnabled={isDraggingEnabled} screenWidth={width} />
        {/* Flatlay Elements Container */}
        <div className="absolute inset-0" style={{zIndex: 50}}>
          {flatlayElements.map((element, index) => {
            if (element.component === 'sticker') {
              return (
                <DragElem
                  key={index}
                  initialX={element.x}
                  initialY={element.y}
                  isDraggingEnabled={isDraggingEnabled}
                >
                  <Sticker 
                    text={element.text}
                    fontSize="text-3xl"
                    fontFamily="font-['Inter']"
                    textColor='white'
                    backgroundColor='transparent'
                    outlineColor='white'
                  />
                </DragElem>
              );
            }
            
            return (
              <DragElem
                key={index}
                src={element.src}
                initialX={element.x}
                initialY={element.y}
                isDraggingEnabled={isDraggingEnabled}
              />
            );
          })}
        </div>
        
        {/* Main text - responsive positioning */}

        <div className={`absolute  max-w-5xl text-left ${width >= 768 ? 'bottom-16 left-16' : 'top-16 left-8'}`}>
          <p className="space-y-5">
            <span className="block font-['Inter'] font-black lg:text-6xl sm:text-4xl md:text-5xl leading-tight tracking-wide text-mauimist">
              HI, I&apos;M JACLYN. I CREATE EXPERIENCES THAT INSPIRE CONNECTION AND ELEVATE MINDFULNESS.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;