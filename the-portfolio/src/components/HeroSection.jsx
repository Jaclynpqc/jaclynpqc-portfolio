/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

const MouseTrailCanvas = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let points = [];
    
    const addPoint = (x, y) => {
      points.push({ x, y, age: 0 });
    };

    const updatePoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const newPoints = [];
      points.forEach(point => {
        point.age += 1;
        if (point.age < 45) {
          newPoints.push(point);
          
          // Enhanced gradient with more vibrant colors
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, 80
          );
          
          // Using your theme's bordeaux and bloodymary colors
          gradient.addColorStop(0, `rgba(128, 0, 32, ${0.4 * (1 - point.age / 45)})`);
          gradient.addColorStop(0.5, `rgba(220, 20, 60, ${0.2 * (1 - point.age / 45)})`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(point.x, point.y, 80 - point.age/2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      points = newPoints;
      requestRef.current = requestAnimationFrame(updatePoints);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addPoint(x, y);
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transformation
      ctx.scale(dpr, dpr); // Scale for device pixel ratio
    };
    

    // Initialize
    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    requestRef.current = requestAnimationFrame(updatePoints);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );
};

export default function HeroSection() {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <MouseTrailCanvas />
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 right-[15%] w-32 h-32 bg-[url('/api/placeholder/320/320')] rounded-sm rotate-3 opacity-80" />
          
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
            <span className="font-['Ballet'] text-5xl md:text-6xl lg:text-7xl text-bordeaux">user engagement </span>{' '}
            <span className="font-['Inter'] font-light">Jaclyn creates experience that convey brand narratives and</span>{' '}
            <span className="font-['Ballet'] text-5xl md:text-6xl lg:text-7xl text-bordeaux"> connect </span>{' '}
            <span className="font-['Inter'] font-light"> with audiences.</span>{' '}
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 left-[10%] w-32 h-32 bg-[url('/api/placeholder/320/320')] rounded-sm -rotate-6 opacity-80" />
        </div>
      </div>
    );
  }