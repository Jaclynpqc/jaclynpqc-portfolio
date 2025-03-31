/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ARHome = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  
  const menuItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Projects', path: '/projects' },
    { id: 3, label: 'About', path: '/about' }
  ];

  return (
    <div className="relative h-screen w-screen overflow-clip">
      {/* Base layer - Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/AR/Background_back.svg" 
          alt="Lake Brienz, Switzerland" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-20">
            <img 
            src="/assets/AR/Background_front.png" 
            alt="Lake Brienz, Switzerland" 
            className="w-full h-full object-cover"
            />
        </div>
      
      {/* Middle layer - Logo and Text Content - Centered */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-16 overflow-hidden">
        {/* Center container for logo and description */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Logo and description in horizontal flex arrangement */}
          <div className="flex flex-row items-center space-x-8">
            {/* Logo image */}
            <div className="w-[26rem]">
              <img 
                src="/assets/AR/Jaclyn_logo.png" 
                alt="Jaclyn Pham" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Description next to logo */}
            <div className="max-w-xl">
              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-8 text-white">
                <p className="text-2xl md:text-3xl font-sfpro">
                  Product designer and developer, born and raised in Vietnam, based in New York, specialising in UI/UX and experiential marketing
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Top layer - Person image and about me button */}
      <div className="absolute right-16 bottom-0 z-20">
        <img 
          src="/assets/AR/silouhette.png" 
          alt="Silhouette" 
          className="h-96 object-contain"
        />
        <div className="absolute top-24 right-0">
          <motion.div 
            className="relative backdrop-blur-lg bg-white/30 rounded-full w-32 h-32 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-white display text-center">
              <p className="font-['Poppins']">About me!</p>
            </div>
            <div className="absolute inset-0 border-2 border-dashed border-white/70 rounded-full animate-spin-slow"></div>
          </motion.div>
        </div>
        
      </div>
      
      {/* Optional: Custom cursor */}
      <div className="fixed w-8 h-8 rounded-full border-2 border-white/50 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out mix-blend-difference hidden lg:block" style={{ left: 'var(--x, 0)', top: 'var(--y, 0)' }} id="custom-cursor" />
    </div>
  );
};

export default ARHome;