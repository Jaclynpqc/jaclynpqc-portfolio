/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

const MouseTrailCanvas = () => {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const requestRef = useRef();
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.current?.getContext('2d');
      
      let points = [];
      const addPoint = (x, y) => {
        points.push({ x, y, age: 0 });
      };
  
      const updatePoints = () => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        const newPoints = [];
        points.forEach(point => {
          point.age += 1;
          if (point.age < 45) {  // Adjust for trail length
            newPoints.push(point);
            
            // Create gradient for each point
            const gradient = ctx.createRadialGradient(
              point.x, point.y, 0,
              point.x, point.y, 50
            );
            
            // Blue gradient with opacity based on age
            gradient.addColorStop(0, `rgba(100, 149, 237, ${0.3 * (1 - point.age / 45)})`);
            gradient.addColorStop(1, `rgba(65, 105, 225, 0)`);
            
            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(point.x, point.y, 50 - point.age/3, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        
        points = newPoints;
        requestRef.current = requestAnimationFrame(updatePoints);
      };
  
      const handleMouseMove = (e) => {
        addPoint(e.clientX, e.clientY);
      };
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
  
      // Initialize
      handleResize();
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      requestRef.current = requestAnimationFrame(updatePoints);
  
      // Add film grain effect
      const addGrain = () => {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        
        for (let i = 0; i < pixels.length; i += 4) {
          const grainValue = (Math.random() - 0.5) * 15; // Adjust grain intensity
          pixels[i] += grainValue;     // R
          pixels[i + 1] += grainValue; // G
          pixels[i + 2] += grainValue; // B
        }
        
        ctx.putImageData(imageData, 0, 0);
      };
  
      const grainInterval = setInterval(addGrain, 50); // Update grain every 50ms
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(requestRef.current);
        clearInterval(grainInterval);
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'overlay' }}
      />
    );
  };

export default function HeroSection() {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <MouseTrailCanvas />
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 right-[15%] w-32 h-32 bg-[url('/api/placeholder/320/320')] rounded-sm rotate-3 opacity-80" />
          
          {/* Main text */}
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed relative">
            <span className="font-['Inter'] font-light">Jaclyn is an</span>{' '}
            <span className="font-['Ballet'] text-5xl md:text-5xl lg:text-7xl">interactive</span>{' '}
            <span className="font-['Inter'] font-light">designer from</span>{' '}
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">Vietnam,</span>
            <br />
            <span className="font-['Inter'] font-light">based in</span>{' '}
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">United States</span>{' '}
            <span className="font-['Inter'] font-light">with a</span>{' '}
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">strong love</span>{' '}
            <span className="font-['Inter'] font-light">for travelling. Her works lie in the</span>
            <br />
            <span className="font-['Inter'] font-light">intersection of</span>{' '}
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">design,</span>{' '}
            <span className="font-['Inter'] font-light">technology, and</span>{' '}
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">marketing.</span>{' '}
            <span className="font-['Inter'] font-light">She believes that a</span>{' '}
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">touch</span>{' '}
            <span className="font-['Inter'] font-light">can go a long way in telling</span>
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl tracking-wider">unspoken stories.</span>
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 left-[10%] w-32 h-32 bg-[url('/api/placeholder/320/320')] rounded-sm -rotate-6 opacity-80" />
        </div>
      </div>
    );
  }