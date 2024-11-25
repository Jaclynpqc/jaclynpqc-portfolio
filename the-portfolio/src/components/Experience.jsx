/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Flower = ({ active }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`w-8 h-8 absolute left-1 -translate-x-1/2 transition-all duration-500 ${
      active ? 'scale-110 rotate-180' : 'scale-100 rotate-0'
    }`}
  >
    <g className="transition-opacity duration-500" style={{ opacity: active ? '1' : '0.7' }}>
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
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
        title: "Web Development Intern",
        company: "Bull Moose Marketing",
        period: "June 2024 - Present",
        details: [
        "Assisted Lead of Development with implementation of custom themes across state-wide clientele",
        "Developed custom WordPress themes using HTML, CSS, JavaScript, and PHP",
        "Participated in the entire development life cycle, from design to deployment",
        "Collaborated with clients on design mockups, pitches, and CI/CD processes",
        "Demonstrated effective execution of tasks resulting in extension of internship"
        ]
    },
    {
        title: "Human-Computer Interaction Researcher",
        company: "Allegheny College",
        period: "June 204 - October 2024",
        details: [
        "Developed a dynamic visual interface in TouchDesigner and Python, effectively mapping OSC messages to control digital brushstroke movements and integrate typing actions with creative visual and auditory feedback",
        "Collaborated with a research team to produce a scholarly research paper for submission to SIGGRAPH Asia 2024, showcasing strong academic writing and communication skills"
        ]
    },
    {
        title: "Software Engineering Researcher",
        company: "Allegheny College",
        period: "January 2024 - September 2024",
        details: [
        "Developed a prediction model to assess test suite quality, comparing performance of standard training models",
        "Conducted an empirical study on Python projects, analyzing the correlation between anti-patterns and mutation scores",
        "Utilized Python (Pandas, NumPy) for data analysis, identifying patterns to improve software maintainability" 
        ]
    },
    {
        title: "Web Application/Project Management Intern",
        company: "Food Trucks Association of Canada (FTAC)",
        period: "January 2024 - May 2024",
        details: [
        "Responsible for the front-end web development and overall management of the tech team of 4 developers",
        "Co-developed a full-stack web application for an online learning platform, integrating with a member portal",
        "Developed a responsive website UI using HTML, CSS, and JavaScript based on design feedback and client requirements",
        "Analyzed user research trends and suggested changes to existing design processes for better results"
        ]
    },
    {
        title: "Database Analysis Project",
        company: "Acutec Precision Aerospace",
        period: "December 2023",
        details: [
        "Collaborated in a short-term team project with Acutec, analyzing real-world data with SQL to extract insights on material usage, production efficiency, and nonconformance trends",
        "Created user-friendly visualization of the data with Matplotlib, enhancing client satisfaction with report documentation"
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Allegheny College",
        period: "August 2023 - December 2023",
        details: [
        "Co-developed an AST pattern detection tool using Python that streamlined code analysis for 100+ Computer Science students, improving grading process and code quality",
        "Implemented software version access and configured logging to syslog in Python to support the testing/debugging process",
        "Automated XPath checks estimated to reduce grading time by 50% and increase code pattern checking accuracy",
        "Wrote clear and concise documentation of Chasten within a custom documentation center for students and professors"
        ]
    },
    {
        title: "Lead Designer",
        company: "SheCodes Hackathon Vietnam",
        period: "June 2023 - October 2023",
        details: [
        "Provided leadership and direction across multiple teams in creating a brand identity package to promote the Hackathon in 3 major cities in Vietnam: Hanoi, Sai Gon, and Da Nang",
        "Managed a team of 7 designers remotely, coordinating their efforts and ensuring project deadlines were met",
        "Collaborated closely with the Marketing Team to design engaging and visually compelling social media posts, attracting 700+ applicants",
        "Assisted technology team with creating web designs to enhance the online presence and user experience"
        ]
    },
    {
        title: "Marketing Intern",
        company: "Golden Gate Restaurant Group",
        period: "June 2022 - August 2022",
        details: [
        "Designed a digital menu and wine catalog displayed on LCD screens using Adobe Creative Suite",
        "Supported and managed schedules with in-house teams pre- and post-production processes such as photoshoots and new seasonal menus",
        "Proposed a marketing campaign for the last quarter of 2022 after reviewing previous statistics and researching upcoming trends",
        "Attended brainstorming sessions with mentors and presented ideas to marketing managers"
        ]
    },
    {
        title: "Design/Video Production Intern",
        company: "COOKED F&B Business School",
        period: "March 2022 - May 2022",
        details: [
        "Specialized in Reels production for the Cooked Instagram platform",
        "Assisted in video and content production with Ms. Hà Chu, founder of COOKED, KOL in the F&B industry",
        "Applied skills in Adobe Premiere and After Effects to produce quality products",
        "Followed up with mentor post-production to improve upcoming digital content"
        ]
    },
    {
        title: "Content Creator",
        company: "Jaclynpqc TikTok and Instagram Platforms",
        period: "May 2020 - May 2022",
        details: [
        "Created a supportive community of 45,000 followers, raising awareness about mental health, self-love, and education",
        "Produced video content using Adobe Premiere Pro, maintaining viewer engagement by posting daily",
        "Developed engaging and visually impactful short-form videos to strengthen audience connection"
        ]
    }
    ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div className="max-w-8xl mx-auto p-6 bg-darkmaroon relative">
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

      <h1 className="text-8xl font-['Ballet'] font-bold text-mauimist mb-4 tracking-widest">Experience</h1>
      
      <div className="relative">
        <SquigglyLine />

        <div className="space-y-12">
          {displayedExperiences.map((exp, index) => (
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
        {experiences.length > 3 && (
          <div className="text-white hover:text-black flex justify-center absolute left-0 right-0">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center p-3 hover:bg-white bg-darkvoid rounded-md transition-colors duration-300 shadow-md"
              aria-label={showAll ? "Show Less" : "Show More"}
            >
              <p>VIEW ALL EXPERIENCE</p>
              <ChevronDown
                className={` transition-transform duration-300 ${
                  showAll ? 'rotate-180' : 'rotate-0'
                }`} 
                size={24}
              />
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ExperienceTimeline;