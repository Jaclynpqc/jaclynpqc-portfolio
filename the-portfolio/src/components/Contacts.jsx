/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useState, useEffect, useRef } from 'react';

//Initial items config with image links
const IMAGE_PATHS = [
    '/contact/icon (2).svg',
    '/contact/icon (3).svg',
    '/contact/icon (4).svg',
    '/contact/icon (5).svg',
    '/contact/icon (6).svg',
];

// Physics configuration constants
const PHYSICS_CONFIG = {
  PUSH_THRESHOLD: 15,
  PUSH_MULTIPLIER: 2,
  FRICTION: 0.95,
  BOUNCE_DAMPENING: 0.5,
  BOUNDARY_PADDING: 2,
  VELOCITY_SCALE: 60
};

/**
 * Generates an array of randomly positioned items
 * @param {number} count - Number of items to generate
 * @param {number} padding - Padding from edges (percentage)
 * @returns {Array} Array of item objects with random positions
 */
const generateItems = (count, padding = 10) => {
  // Helper function to get random number between min and max
  const random = (min, max) => Math.random() * (max - min) + min;
  
  // Helper function to ensure minimum distance between items
  const getValidPosition = (existingItems, padding) => {
    const MIN_DISTANCE = 15; // Minimum distance between items
    let attempts = 0;
    let position;
    
    do {
      position = {
        x: random(padding, 100 - padding),
        y: random(padding, 100 - padding)
      };
      
      // Check if position is far enough from existing items
      const isValid = existingItems.every(item => {
        const dx = item.x - position.x;
        const dy = item.y - position.y;
        return Math.sqrt(dx * dx + dy * dy) > MIN_DISTANCE;
      });
      
      if (isValid || attempts > 100) return position;
      attempts++;
    } while (true);
  };
  
  const items = [];
  
  // Generate items with random positions
  for (let i = 0; i < count; i++) {
    const position = getValidPosition(items, padding);
    items.push({
      id: i + 1,
      image: IMAGE_PATHS[Math.floor(random(0, IMAGE_PATHS.length))], // Random image selection
      x: position.x,
      y: position.y,
      vx: 0,
      vy: 0,
      // Add random initial rotation for variety
      rotation: random(-30, 30)
    });
  }
  
  return items;
};

const Contact = () => {
  // Initialize with randomly generated items
  const [items, setItems] = useState(() => generateItems(30));
  
  const containerRef = useRef(null);
  const animationFrameRef = useRef();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(performance.now());

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // Regenerate items on window resize
  useEffect(() => {
    const handleResize = () => {
      setItems(generateItems(8));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mousePositionRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      };
    };

    const updatePhysics = (currentTime) => {
      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      setItems(prevItems => 
        prevItems.map(item => {
          const dx = mousePositionRef.current.x - item.x;
          const dy = mousePositionRef.current.y - item.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const pushForce = distance < PHYSICS_CONFIG.PUSH_THRESHOLD 
            ? (PHYSICS_CONFIG.PUSH_THRESHOLD - distance) * PHYSICS_CONFIG.PUSH_MULTIPLIER 
            : 0;
          const pushAngle = Math.atan2(dy, dx);
          
          let newVx = item.vx - (pushForce * Math.cos(pushAngle) * deltaTime);
          let newVy = item.vy - (pushForce * Math.sin(pushAngle) * deltaTime);
          
          newVx *= PHYSICS_CONFIG.FRICTION;
          newVy *= PHYSICS_CONFIG.FRICTION;
          
          let newX = item.x + newVx * deltaTime * PHYSICS_CONFIG.VELOCITY_SCALE;
          let newY = item.y + newVy * deltaTime * PHYSICS_CONFIG.VELOCITY_SCALE;
          
          if (newX < PHYSICS_CONFIG.BOUNDARY_PADDING || newX > (100 - PHYSICS_CONFIG.BOUNDARY_PADDING)) {
            newVx *= -PHYSICS_CONFIG.BOUNCE_DAMPENING;
            newX = clamp(newX, PHYSICS_CONFIG.BOUNDARY_PADDING, 100 - PHYSICS_CONFIG.BOUNDARY_PADDING);
          }
          if (newY < PHYSICS_CONFIG.BOUNDARY_PADDING || newY > (100 - PHYSICS_CONFIG.BOUNDARY_PADDING)) {
            newVy *= -PHYSICS_CONFIG.BOUNCE_DAMPENING;
            newY = clamp(newY, PHYSICS_CONFIG.BOUNDARY_PADDING, 100 - PHYSICS_CONFIG.BOUNDARY_PADDING);
          }
          
          // Add slight rotation based on velocity
          const rotationSpeed = Math.sqrt(newVx * newVx + newVy * newVy) * 0.5;
          const newRotation = item.rotation + rotationSpeed * (newVx > 0 ? 1 : -1);
          
          return {
            ...item,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: newRotation
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-[400px] bg-black flex items-center justify-center"> 
      <div 
        ref={containerRef}
        className="relative w-full h-[400px] max-w-8xl aspect-video border border-white rounded-lg overflow-hidden" 
      >
        {items.map(item => (
          <div
            key={item.id}
            className="absolute transform w-24 h-24 cursor-pointer"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <img 
              src={item.image} 
              alt={`Interactive item ${item.id}`}
              className="object-contain filter"
            />
          </div>
        ))}
        
        { /* Content */}
        <div className="absolute top-8 left-8">
          <p className="text-6xl font-[Inter] text-white font-bold">LET&apos;S CONNECT</p>
        </div>
        
        {/* Contact */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl font-[Inter] text-white font-italic">jaclynpqc@gmail.com</p>
        </div>
      </div>
    </div>
  );
  
};

export default Contact;