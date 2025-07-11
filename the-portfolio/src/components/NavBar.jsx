/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function NavigationBar({ fontStyle = 'Inter', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const fontStyles = {
    inter: "font-['Inter']"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Determine which section is currently in view
      const sections = ['projects', 'skills', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'resume') {
      // Open the external CV link
      window.open('https://drive.google.com/file/d/17FkvLZf7mpQ_fKpLMUTu8AA8udupfZJ1/view?usp=sharing', '_blank');
    } else {
      // Scroll to the corresponding section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const navItems = [
    { text: 'PROJECTS', href: '#projects', id: 'projects' },
    { text: 'SKILLS', href: '#skills', id: 'skills' },
    { text: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { text: 'RESUME', href: '#resume', id: 'resume' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all w-full duration-300 z-50 
      ${isScrolled ? '' : 'bg-transparent'}
      ${fontStyles[fontStyle]}`}
      style={
        isScrolled
          ? {
              backgroundImage: `url('/assets/hero/concrete4.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="w-full bg-inherit">
        <div className="max-w-8xl mx-auto px-6">
          <nav className="flex justify-between items-center h-20">
            <a 
              href="/"
              onClick={(e) => handleNavClick(e, 'hero')}
              className={`font-medium text-xl tracking-tight text-white hover:text-bluestone transition-colors
              ${fontStyle === 'inter' ? 'tracking-[-0.02em]' : 'tracking-normal'}`}
            >
              JACLYN PHAM
            </a>

            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm tracking-wide transition-colors relative group
                    ${activeSection === item.id ? 'text-mauimist' : 'text-bluestone'}
                    ${fontStyle === 'inter' ? 'tracking-[0.02em]' : 'tracking-[0.03em]'}`}
                >
                  {item.text}
                  <span 
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transform transition-transform origin-left
                    ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  ></span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}