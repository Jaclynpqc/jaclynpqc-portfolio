/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Flower = ({ active }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`w-8 h-8 absolute left-1 -translate-x-1/2 transition-all duration-500 ${
      active ? 'scale-110 rotate-180' : 'scale-100 rotate-0'
    }`}
  >
    <g className="transition-opacity duration-500" style={{ opacity: active ? '1' : '0.7' }}>
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
        <path
          key={i}
          d="M50 35C55 25 60 20 50 10C40 20 45 25 50 35Z"
          fill="#FFB7C5"
          transform={`rotate(${rotation}, 50, 50)`}
          className="transition-all duration-500"
          style={{
            transform: active ? `rotate(${rotation + 30}deg)` : `rotate(${rotation}deg)`,
            transformOrigin: '50px 50px'
          }}
        />
      ))}
      {/* Center */}
      <circle cx="50" cy="50" r="5" fill="#FF6B88" />
    </g>
  </svg>
);

const SquigglyLine = () => (
  <svg 
    className="absolute left-4 top-0 h-full w-8 overflow-visible"
    style={{ transform: 'translateX(-50%)' }}
  >
    <path
      d="M 4 0 Q 8 25, 4 50 Q 0 75, 4 100 Q 8 125, 4 150 Q 0 175, 4 200 Q 8 225, 4 250"
      stroke="#FFD1DC"
      strokeWidth="3"
      fill="none"
      className="path-drawing"
    />
  </svg>
);

const ExperienceTimeline = () => {
  const [activeId, setActiveId] = useState(null);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      details: [
        "Led development of key features resulting in 40% user growth",
        "Mentored junior developers and implemented best practices",
        "Architected and deployed microservices infrastructure"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      details: [
        "Built responsive web applications using React and Node.js",
        "Improved site performance by 60% through optimization",
        "Collaborated with design team on UX improvements"
      ]
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2018 - 2020",
      details: [
        "Developed and maintained client websites",
        "Implemented payment integration systems",
        "Participated in daily scrum meetings and sprint planning"
      ]
    },
    {
        title: "Junior Developer",
        company: "Startup Inc",
        period: "2018 - 2020",
        details: [
          "Developed and maintained client websites",
          "Implemented payment integration systems",
          "Participated in daily scrum meetings and sprint planning"
        ]
      }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-darkmaroon">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .path-drawing {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease forwards;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <h2 className="text-3xl font-['Ballet'] font-black mb-8 text-bloodbrother tracking-wider">Experience</h2>
      <div className="relative">
        <SquigglyLine />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16">
              <Flower active={activeId === index} />

              <div
                className={`p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer
                  border border-rose-100 hover:shadow-lg hover:border-rose-200
                  ${activeId === index ? 'bg-rose-50' : 'bg-white'}`}
                onMouseEnter={() => setActiveId(index)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-rose-700">{exp.title}</h3>
                    <p className="text-bloodymary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-red-400">{exp.period}</span>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${
                  activeId === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="list-none space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li 
                        key={idx} 
                        className="text-bloodbrother pl-4 border-l-2 border-rose-200"
                        style={{
                          animation: activeId === index ? `fadeIn ${300 + idx * 100}ms ease-out forwards` : 'none'
                        }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;