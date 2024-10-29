/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';

//Initial items config with image links
const INITIAL_ITEMS = [
    {
        id: 1,
        image:'/src/assets/red shoes/red1.svg',
        x:10,
        y:20,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 2,
        image:'/src/assets/red shoes/red1a.svg',
        x:40,
        y:20,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 3,
        image:'/src/assets/red shoes/red1ab.svg',
        x:60,
        y:80,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 4,
        image:'/src/assets/red shoes/red2.svg',
        x:20,
        y:30,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 5,
        image:'/src/assets/red shoes/red3.svg',
        x:30,
        y:40,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 6,
        image:'/src/assets/red shoes/red4.svg',
        x:40,
        y:50,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 7,
        image:'/src/assets/red shoes/red1a.svg',
        x:50,
        y:60,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 6,
        image:'/src/assets/red shoes/red2a.svg',
        x:60,
        y:70,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 7,
        image:'/src/assets/red shoes/red3a.svg',
        x:70,
        y:80,
        vx: 0, 
        vy: 0 // Velocity
    },
    {
        id: 8,
        image:'/src/assets/red shoes/red4a.svg',
        x:80,
        y:90,
        vx: 0, 
        vy: 0 // Velocity
    },
];

// Physics configuration constants
const PHYSICS_CONFIG = {
    PUSH_THRESHOLD : 20, // Distance at which push force starts affecting items
    PUSH_MULTIPLIER: 1, // Strength of the push force
    FRICTION: 0.95, // Friction coefficient (1 = no friction, 0 = maximum friction)
    BOUNCE_DAMPENING: 0.5, // Reduce velocity when bouncing off walls
    BOUNDARY_PARRING: 5, // PAdding from container edges -- maybe? 
    VELOCITY_SCALE: 60 // Scales the velocity for smoother movement
}; 

const Contact = () => {
    // State to store items positions and velocities
    const [items, setItems] = useState(INITIAL_ITEMS);

    // Refs for accessing values without triggering re-renders
    const containerRef = useRef(null);
    const animationFrameRef = useRef();
    const mousePositionRef = useRef({x:0,y:0});
    const lastTimeRef = useRef(performance.now());

    // Utility function to keep values within boundaries
    const clamp = (value, min,max) => Math.min(Math.max(value,min),max);


    useEffect(() => {
        //Update mouse position when it moves
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            //Convert mouse position to percentage within container
            const rect = containerRef.current.getBoundingClientRect();
            mousePositionRef.current = {
                x: (e.clientX - rect.left) / rect.width * 100,
                y: (e.clientY - rect.top) / rect.height * 100
            };
        };

        // Main physics update loop
        const updatePhysics = (currentTime) => {
            //Calculate time since last frame for frame-rate independent physics
            const deltaTime = (currentTime - lastTimeRef.current) /1000;
            lastTimeRef.current = currentTime;

            setItems(prevItems =>
                prevItems.map(item => {
                    //Calculate distance between mouse and item
                    const dx = mousePositionRef.current.x - item.x;
                    const dy = mousePositionRef.current.y - item.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    //Calcualte push force (Stronger when mouse is closer)
                    const pushForce = distance < PHYSICS_CONFIG.PUSH_THRESHOLD
                    ? (PHYSICS_CONFIG.PUSH_THRESHOLD - distance) * PHYSICS_CONFIG.PUSH_MULTIPLIER
                    : 0;
                    const pushAngle = Math.atan(dy,dx);


                    // Apply push force to velocity
                    let newVx = item.vx - (pushForce * Math.cos(pushAngle) * deltaTime);
                    let newVy = item.vy - (pushForce * Math.sin(pushAngle) * deltaTime);

                    // Apply friction to gradually slow down movenet
                    newVx *= PHYSICS_CONFIG.FRICTION;
                    newVy *= PHYSICS_CONFIG.FRICTION;

                    // Update position based on velocity
                    let newX = item.x + newVx * deltaTime * PHYSICS_CONFIG.VELOCITY_SCALE;
                    let newY = item.y + newVy * deltaTime * PHYSICS_CONFIG.VELOCITY_SCALE;

                    //Boundary collision detection and response
                    if (newX < PHYSICS_CONFIG.BOUNDARY_PADDING || newX > (100 - PHYSICS_CONFIG.BOUNDARY_PADDING)) {
                        newVx *= -PHYSICS_CONFIG.BOUNCE_DAMPENING; // Reverse and dampen velocity
                        newX = clamp(newX, PHYSICS_CONFIG.BOUNDARY_PADDING, 100 - PHYSICS_CONFIG.BOUNDARY_PADDING);
                      }
                      if (newY < PHYSICS_CONFIG.BOUNDARY_PADDING || newY > (100 - PHYSICS_CONFIG.BOUNDARY_PADDING)) {
                        newVy *= -PHYSICS_CONFIG.BOUNCE_DAMPENING;
                        newY = clamp(newY, PHYSICS_CONFIG.BOUNDARY_PADDING, 100 - PHYSICS_CONFIG.BOUNDARY_PADDING);
                      }

                      return{
                        ...item,
                        x: newX,
                        y: newY,
                        vx: newVx,
                        vy: newVy
                      };
                })
            );

            // Schedule next frame
            Animation.current = requestAnimationFrame(updatePhysics);
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
        <div className="w-full bg-stone-50 p-5 flex items-center justify-center">
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
                  transform: `translate(-50%, -50%)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <img 
                  src={item.image} 
                  alt={`Interactive item ${item.id}`}
                  className="w-full h-full scale-50 object-contain filter"
                />
              </div>
            ))}
            
            {/* Center button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                Send me a message 
              </button>
            </div>
          </div>
        </div>
      );
}

export default Contact;