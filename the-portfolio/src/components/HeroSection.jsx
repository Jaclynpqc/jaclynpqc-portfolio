/* eslint-disable no-unused-vars */
import React , {useState, useEffect} from 'react';
import { ReactComponent as FlowerFieldSVG } from '../assets/flower_field.svg';

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
    // Divide by 100 to make the movement more subtle
    const backgroundStyle = {
        transform: `translate(${mousePosition.x / 100}px, ${mousePosition.y / 100}px)`,
    };


    return(
        // Main container with full height and hidden overflow
        <div className = "relative h-screen overflow-hidden">
            {/*Moing SVG background*/}
            <FlowerFieldSVG 
            className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
            style={backgroundStyle}
            />

            {/*Content container */}
            <div className = "relative z-10 flex items-center justify-center h-full text-blue-300">
                <div className = "text-center">
                    <h1 className = "text-5xl font-bold mb-4"> Welcome to Our Flower Field</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;