/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, BookOpen, Instagram } from 'lucide-react';

const IMAGE_PATHS = [
    '/contact/icon (2).svg',
    '/contact/icon (3).svg',
    '/contact/icon (4).svg',
    '/contact/icon (5).svg',
    '/contact/icon (6).svg',
];

// Physics configuration constants remain the same
const PHYSICS_CONFIG = {
  PUSH_THRESHOLD: 15,
  PUSH_MULTIPLIER: 2,
  FRICTION: 0.95,
  BOUNCE_DAMPENING: 0.5,
  BOUNDARY_PADDING: 2,
  VELOCITY_SCALE: 60
};

// generateItems function remains the same
const generateItems = (count, padding = 10) => {
  const random = (min, max) => Math.random() * (max - min) + min;
  
  const getValidPosition = (existingItems, padding) => {
    const MIN_DISTANCE = 15;
    let attempts = 0;
    let position;
    
    do {
      position = {
        x: random(padding, 100 - padding),
        y: random(padding, 100 - padding)
      };
      
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
  
  for (let i = 0; i < count; i++) {
    const position = getValidPosition(items, padding);
    items.push({
      id: i + 1,
      image: IMAGE_PATHS[Math.floor(random(0, IMAGE_PATHS.length))],
      x: position.x,
      y: position.y,
      vx: 0,
      vy: 0,
      rotation: random(-30, 30)
    });
  }
  
  return items;
};

const SocialButton = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
  >
    <Icon size={20} />
    <span>{label}</span>
  </a>
);

const Footer = () => {
  const [items, setItems] = useState(() => generateItems(30));
  const containerRef = useRef(null);
  const animationFrameRef = useRef();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(performance.now());

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // Previous useEffect hooks remain the same
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
    <footer className="w-full bg-darkvoid">
      <div 
        ref={containerRef}
        className="relative w-full h-[300px] max-w-8xl mx-auto border border-white rounded-lg overflow-hidden"
      >
        {/* Interactive background items */}
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
        
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          {/* Header */}
          <div>
            <h2 className="text-6xl font-[Inter] text-white font-bold mb-6">LET&apos;S CONNECT</h2>
            <div className="flex flex-wrap gap-4">
              <SocialButton 
                icon={Mail} 
                label="Email" 
                href="mailto:jaclynpqc@gmail.com" 
              />
              <SocialButton 
                icon={Github} 
                label="GitHub" 
                href="https://github.com/jaclynpqc" 
              />
              <SocialButton 
                icon={Linkedin} 
                label="LinkedIn" 
                href="https://www.linkedin.com/in/jaclyn-pham/" 
              />
              <SocialButton 
                icon={BookOpen} 
                label="Blog" 
                href="https://jaclynpham.netlify.app/blog.html" 
              />
              <SocialButton 
                icon={Instagram} 
                label="Instagram" 
                href="https://instagram.com/jaclynpqc" 
              />
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-wrap justify-between items-end text-white/70 text-sm">
            <div className="space-y-2">
              <p>© {new Date().getFullYear()} Jaclyn Pham. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;