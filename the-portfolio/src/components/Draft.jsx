/* eslint-disable no-unused-vars */
import React, {useEffect, useRef} from 'react';
import Matter from 'matter-js';

const FallingObject = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);

    useEffect(() => {
        //Destruct the Matter.js modules
        const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite,
          Bodies = Matter.Bodies;

        // Create a Matter.js engine
        const engine = Engine.create();
        engineRef.current = engine;

        //Create a renderer
        const render = Render.create({
            element: sceneRef.current, // Render the scene in our div
            engine: engine,
            options: {
              width: 800,
              height: 600,
              wireframes: false,
              background: '#f0f0f0'
            }
          });
        
        //Create a runner to handle animation updates
        const runner = Runner.create();

        //Get a reference to the world object (where we'll add bodies)
        const world = engine.world;

        // Add walls to contain our shapes
    Composite.add(world, [
        // Top wall
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: { fillStyle: '#060a19' } }),
        // Bottom wall
        Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: { fillStyle: '#060a19' } }),
        // Right wall
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: { fillStyle: '#060a19' } }),
        // Left wall
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: { fillStyle: '#060a19' } })
      ]);

      // Define  skills with their corresponding shapes and colors
    const skills = [
        { 
          name: 'React', 
          color: '#61DAFB', 
          shape: Bodies.rectangle(200, 200, 100, 100, { 
            chamfer: { radius: 20 }, // Rounded corners
            render: { fillStyle: '#61DAFB' } 
          }) 
        },
        { 
          name: 'Tailwindcss', 
          color: '#41B883', 
          shape: Bodies.rectangle(300, 200, 100, 100, { 
            chamfer: { radius: [90, 0, 0, 0] }, // Only top-left corner rounded
            render: { fillStyle: '#41B883' } 
          }) 
        },
        { 
          name: 'HTML', 
          color: '#DD0031', 
          shape: Bodies.rectangle(400, 200, 200, 200, { 
            chamfer: { radius: [150, 20, 40, 20] }, // Different rounding for each corner
            render: { fillStyle: '#DD0031' } 
          }) 
        },
        { 
          name: 'CSS', 
          color: '#68A063', 
          shape: Bodies.rectangle(200, 400, 200, 50, { 
            chamfer: { radius: [25, 25, 0, 0] }, // Only top corners rounded
            render: { fillStyle: '#68A063' } 
          }) 
        },
        { 
          name: 'Python', 
          color: '#3776AB', 
          shape: Bodies.polygon(300, 100, 8, 80, { 
            chamfer: { radius: 30 }, // Rounded corners on octagon
            render: { fillStyle: '#3776AB' } 
          }) 
        },
        { 
          name: 'JavaScript', 
          color: '#F7DF1E', 
          shape: Bodies.polygon(400, 300, 6, 80, { 
            chamfer: { radius: [10, 40, 20, 40, 10, 40] }, // Different rounding for each corner of hexagon
            render: { fillStyle: '#F7DF1E' } 
          }) 
        },
        { 
          name: 'Figma', 
          color: '#007ACC', 
          shape: Bodies.polygon(500, 200, 3, 80, { 
            chamfer: { radius: [20, 0, 20] }, // Rounded corners on triangle
            render: { fillStyle: '#007ACC' } 
          }) 
        }
      ];

      //Add all skill shapes to the world
      Composite.add(world, skills.map(skill => skill.shape));

      //Add mouse control
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine,{
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
      });

      //Add the mouse constraint to the world
      Composite.add(world, mouseConstraint);

      //Keep the mouse in sync with rendering
      render.mouse = mouse;

      //Run the renderer
      Render.run(render);

      //Run the engine
      Runner.run(runner, engine);

      //Cleanup function to stop rendering and runnning when component unmounts
      return() => {
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);
      }
    }, []); //Empty dependency array means this effect runs once on mount

    return(
        <div className = "w-full h-screen flex justify-center items-center bg-gray-100">
            <div ref ={sceneRef} className = "border border-gray-300 shadow-log" />
        </div>
    );
};

export default FallingObject;