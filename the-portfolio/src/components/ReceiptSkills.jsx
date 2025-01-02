/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SwitchFont from './SwitchFonts';

const Skills = () => {
  const [purchasedSkills, setPurchasedSkills] = useState([]);

  const skills = [
    {
      category: 'THE DESIGNER',
      items: [
        {
          name: 'Figma',
          image: '/assets/skills/figma.svg'
        },
        {
          name: 'Adobe Illustrator',
          image: '/assets/skills/adobeAI.png'
        },
        {
          name: 'Adobe InDesign',
          image: '/assets/skills/adobe-indesign.svg'
        },
        {
          name: 'Adobe After Effects',
          image: '/assets/skills/adobeAfterEffects.png'
        },
        {
          name: 'Adobe Premiere Pro',
          image: '/assets/skills/adobe-premiere-pro.svg'
        },
        {
          name: 'TouchDesigner',
          image: '/assets/skills/touchdesigner.webp'
        },
      ]
    },
    {
      category: 'THE DEVELOPER',
      items: [
        {
          name: 'HTML5',
          image: '/assets/skills/html5.svg'
        },
        {
          name: 'CSS',
          image: '/assets/skills/css.svg'
        },
        {
          name: 'JavaScript',
          image: '/assets/skills/javascript.svg'
        },
        {
          name: 'React',
          image: '/assets/skills/react.svg'
        },
        {
          name: 'TailwindCSS',
          image: '/assets/skills/tailwind.svg'
        },
        {
          name: 'WordPress',
          image: '/assets/skills/wordpress.svg'
        }
      ]
    },
    {
      category: 'THE PROGRAMMER',
      items: [
        {
          name: 'Python',
          image: '/assets/skills/python.svg'
        },
        {
          name: 'C',
          image: '/assets/skills/c.svg'
        },
        {
          name: 'Java',
          image: '/assets/skills/java.svg'
        },
        {
          name: 'scikit-learn',
          image: '/assets/skills/scikitlearn.webp'
        },
        {
          name: 'SQL',
          image: '/assets/skills/sql.svg'
        }
      ]
    }
  ];

  const handleSkillClick = (skillName) => {
    if (!purchasedSkills.includes(skillName)) {
      setPurchasedSkills([...purchasedSkills, skillName]);
    }
  };

  const handleClearReceipt = () => {
    setPurchasedSkills([]);
  }

  return (
    <div className="relative h-[50vh]"> {/* Fixed height to 50vh */}
      {/* Background Layers */}
      <div className="absolute inset-0 bg-black/90">
        {/* Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Background Image with Blur */}
        <div className="absolute inset-0 bg-[url('/assets/bluegradient.gif')] bg-cover bg-center mix-blend-screen opacity-50 backdrop-blur-[100px]" />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-50 mix-blend-overlay">
          <div className="w-full h-full bg-[url('/assets/bluegradient.gif')] bg-repeat" />
        </div>
      </div>
  
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Page Header */}
        <div className="relative w-screen py-4 backdrop-blur-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-mono tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] [text-stroke:1px_rgba(255,255,255,0.7)] p-0 mix-blend-difference backdrop-blur-sm"> {/* Reduced size */}
            HOW CAN I CONTRIBUTE TO YOUR PROJECT?
          </h1>
        </div>
  
        <div className="relative z-10 container mx-auto px-4 mt-6"> 
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            {/* Skills Section */}
            <div className="text-left">
              {skills.map((category) => (
                <div key={category.category} className="mb-8 border-l border-white/20 pl-4"> 
                  <div className="mb-4">
                    <SwitchFont
                      text={category.category}
                      initialFont="Redacted Script"
                      targetFont="Inter"
                      switchLettersPerInterval={4}
                      intervalSpeed={100}
                      className="text-1xl md:text-2xl text-white/80 font-thin leading-none backdrop-blur-sm" 
                    />
                  </div>
                  <div className="flex flex-wrap gap-2"> {/* Changed to flex-wrap with smaller gap */}
                    {category.items.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill.name)}
                        className="w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-105" 
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-8 h-8 object-contain filter invert opacity-70" 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Receipt Section */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 h-full"> {/* Added h-full */}
              <div className="p-4">
                <div className="font-['Poppins'] text-white/80">
                  <h2 className="text-xl font-bold mb-2">RECEIPT</h2> 
                  <p className="text-xs mb-2"> 
                    Thank you for purchasing at Jaclyn Pham. Satisfaction guaranteed!
                  </p>
                  <div className="border-y border-white/50 py-2"> 
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Item</span> 
                      <span className="text-sm">Qty</span>
                    </div>
                    
                    {/* Scrollable items area */}
                    <div className="h-[calc(50vh-200px)] overflow-y-auto scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-white/30">
                      {purchasedSkills.length === 0 ? (
                        <p className="text-center text-white/50 py-2 text-xs"> 
                          Click on skills to add them to your receipt
                        </p>
                      ) : (
                        <div className="grid grid-cols-2 gap-2"> 
                          {purchasedSkills.map((skill) => (
                            <div key={skill} className="text-xs flex justify-between bg-white/5 p-1"> {/* Reduced text and padding */}
                              <span className="truncate mr-1">{skill}</span>
                              <span>1</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs my-2"> {/* Reduced from text-xl */}
                    Thank you for considering my skills!
                  </p>
                  {purchasedSkills.length > 0 && (
                    <button
                      onClick={handleClearReceipt}
                      className="w-full py-2 bg-white/10 text-white/80 text-xs hover:bg-white/20 transition-colors" 
                    >
                      Clear Receipt
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;