/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

export default function NavigationBar({ fontStyle = 'Iter', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const fontStyles = {
    inter: "font-['Inter']",
    spaceGrotesk: "font-['Space_Grotesk']",
    outfit: "font-['Outfit']"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Determine which section is currently in view
      const sections = ['hero', 'work', 'skills', 'contact'];
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
    if (sectionId === 'cv') {
      // Open the external CV link
      window.open('https://drive.google.com/file/d/17FkvLZf7mpQ_fKpLMUTu8AA8udupfZJ1/view?usp=sharing', '_blank');
    } else {
      // Scroll to the corresponding section
      onNavigate(sectionId);
    }
  };
  const navItems = [
    { text: 'WORK', href: '#work', id: 'work' },
    { text: 'SKILLS', href: '#skills', id: 'skills' },
    { text: 'CV', href: 'https://drive.google.com/file/d/17FkvLZf7mpQ_fKpLMUTu8AA8udupfZJ1/view?usp=sharing', id: 'cv' },
    { text: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all w-full duration-300 z-50 
      ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
      ${fontStyles[fontStyle]}`}
    >
      <div className="w-full bg-inherit">
        <div className="max-w-8xl mx-auto px-6">
          <nav className="flex justify-between items-center h-20">
            <a 
              href="/"
              onClick={(e) => handleNavClick(e, 'hero')}
              className={`font-medium text-xl tracking-tight hover:text-gray-600 transition-colors
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
                    ${activeSection === item.id ? 'text-black' : 'text-gray-600'}
                    ${fontStyle === 'inter' ? 'tracking-[0.02em]' : 'tracking-[0.03em]'}`}
                >
                  {item.text}
                  <span 
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-black transform transition-transform origin-left
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