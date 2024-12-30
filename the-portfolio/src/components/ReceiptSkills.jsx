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
    <div className="relative min-h-[50vh]">
      {/* Background Layer */}
      <div className="absolute max-w-8xl inset-0 bg-stone-50 opacity-90">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/bluegradient.gif')] bg-cover bg-center mix-blend-multiply" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 py-2">
        {/* Page Header */}
        <div className="relative text-left overflow-hidden mb-16 mt-24 px-8">
          <SwitchFont
            text="WHAT ARE YOU LOOKING FOR IN ME?"
            initialFont="Tiny5"
            targetFont="Inter"
            switchLettersPerInterval={4}
            intervalSpeed={100}
            className="sm:text-3xl md:text-4xl block lg:text-5xl text-white font-regular leading-tight"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Skills Section */}
          <div className="flex-1 text-left">
            {skills.map((category) => (
              <div key={category.category} className="mb-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-[Inter] font-bold text-darkmaroon mb-2">{category.category}</h2>
                </div>
                <div className="flex flex-wrap gap-6">
                  {category.items.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className="w-20 h-20 rounded-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-12 h-12 object-contain scale-125"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Receipt Section */}
          <div className="relative w-full lg:w-96">
            {/* Receipt Texture Layer */}
            <div className="absolute inset-0">
              {/* Add paper texture*/}
              <div className="absolute inset-0 bg-cover bg-center opacity-100" />
            </div>

            {/* Receipt Content */}
            <div className="relative backdrop-blur-sm shadow-lg rounded-lg">e
              <div className="p-5">
                <div className="font-['VT323'] text-gray-800">
                  <h2 className="text-3xl font-bold mb-4 text-center">RECEIPT</h2>
                  <p className="text-lg mb-6 text-center">
                    Thank you for purchasing at Jaclyn Pham. Satisfaction guarateed!
                  </p>
                  <div className="border-t-2 border-b-2 border-gray-300 py-4">
                    <div className="flex justify-between mb-4">
                      <span className="text-xl">Item</span>
                      <span className="text-xl">Quantity</span>
                    </div>
                    {purchasedSkills.length === 0 ? (
                      <p className="text-center text-gray-500 py-4">
                        Click on skills to add them to your receipt
                      </p>
                    ) : (
                      purchasedSkills.map((skill) => (
                        <div key={skill} className="flex justify-between text-lg">
                          <span>{skill}</span>
                          <span>1</span>
                        </div>
                      ))
                    )}
                  </div>
                  <p className="text-lg mb-6 text-center">
                    Thank you for considering my skills!
                  </p>
                  {purchasedSkills.length > 0 && (
                    <button
                      onClick={handleClearReceipt}
                      className="mt-6 w-full py-2 px-4 bg-purpletulip text-white rounded-md hover:bg-bordeaux transition-colors duration-300 font-[Karla]"
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
