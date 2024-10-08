/* eslint-disable no-unused-vars */
import React from 'react';
import {useState, useEffect} from 'react';
import flowerFieldSVG from './assets/flower_field.svg';


const HeroSection = () =>{
  // State to track the mouse position
  const [mousePosition, setMousePosition] = useState({x:0, y: 0});

  useEffect(() => {
      // Function to update mouse position
      const handleMouseMove = (event) => {
          setMousePosition({x: event.clientX, y: event.clientY});
      };

      // Add event listener when component mounts
      window.addEventListener('mousemove', handleMouseMove);

      // Clean up event listener when component unmounts
      return() => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []); // Empty dependency array means this effect runs once on mount


  //Calculate background position based on mouse movement
  // Divide by 50 to make the movement more subtle
  // Scale up image to avoid seeing edge
  const backgroundStyle = {
      transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px) scale(1.3)`,
  };


  return(
      // Main container with full height and hidden overflow
      <div className = "relative h-screen overflow-hidden">
          {/* Grainy gradient beige background */}
          {/*Content container */}
          <div className = "absolute inset-0 z-0 flex items-start justify-center pt-40">
            <h1 className = "text-6xl font-bold text-blue-100 font-sans">Welcome to Our Flower Field</h1>
          </div>

          {/*Moving SVG background*/}
          <img 
            src={flowerFieldSVG} 
            alt="Flower Field"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out"
            style={backgroundStyle}
          />
      </div>
  );
};

function App() {
  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default App
