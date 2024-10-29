/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';

//Initial items config with image links
const IMAGE_PATHS = [
    '/src/assets/red shoes/red1.svg',
    '/src/assets/red shoes/red1a.svg',
    '/src/assets/red shoes/red1ab.svg',
    '/src/assets/red shoes/red1c.svg',
    '/src/assets/red shoes/red2.svg',
    '/src/assets/red shoes/red2a.svg',
    '/src/assets/red shoes/red2b.svg',
    '/src/assets/red shoes/red2c.svg',
    '/src/assets/red shoes/red3.svg',
    '/src/assets/red shoes/red3a.svg',
    '/src/assets/red shoes/red3b.svg',
    '/src/assets/red shoes/red3c.svg',
    '/src/assets/red shoes/red4.svg',
    '/src/assets/red shoes/red4a.svg',
    '/src/assets/red shoes/red4b.svg',
    
  ];

// Physics configuration constants
const PHYSICS_CONFIG = {
    PUSH_THRESHOLD : 10, // Distance at which push force starts affecting items
    PUSH_MULTIPLIER: 1, // Strength of the push force
    FRICTION: 0.95, // Friction coefficient (1 = no friction, 0 = maximum friction)
    BOUNCE_DAMPENING: 1, // Reduce velocity when bouncing off walls
    BOUNDARY_PADDING: 5, // PAdding from container edges -- maybe? 
    VELOCITY_SCALE: 60 // Scales the velocity for smoother movement
}; 

/* Genearte an array of randomely positioned items  */
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
  const [items, setItems] = useState(() => generateItems(80));

    // Refs for accessing values without triggering re-renders
    const containerRef = useRef(null);
    const animationFrameRef = useRef();
    const mousePositionRef = useRef({x:0,y:0});
    const lastTimeRef = useRef(performance.now());

    // Utility function to keep values within boundaries
    const clamp = (value, min,max) => Math.min(Math.max(value,min),max);


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


        // Main physics update loop
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

            // Set up event listeners and start animation loop
            window.addEventListener('mousemove', handleMouseMove);
            animationFrameRef.current = requestAnimationFrame(updatePhysics);

        //Cleanup function

        return() => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current){
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []); //Empty dependency array since we use refs for updating values

    return (
        <div className="w-full bg-black flex items-center justify-center">
          <div 
            ref={containerRef}
            className="relative w-full max-w-8xl aspect-video border border-black rounded-lg p-8 overflow-hidden"
          >
            {/* Render floating items */}
            {items.map(item => (
              <div
                key={item.id}
                className="absolute transform w-13 h-13 cursor-pointer"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
                }}
              >
                <img 
                  src={item.image} 
                  alt={`Interactive item ${item.id}`}
                  className="w-full h-full object-contain filter"
                  style={{
                    transform: 'scale(0.5)', // Separated scale transform
                  }}
                />
              </div>
            ))}
            { /* Content */}
            <div className = "absolute mb-0 left-0.5">
                <p className = "text-8xl font-[Inter] text-white font-bold">LET&apos;S CONNECT</p>
            </div>
            
            {/* Contact */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className = "text-4xl font-[Inter] text-white font-italic">jaclynpqc@gmail.com</p>
            </div>
          </div>
        </div>
      );
}

export default Contact;