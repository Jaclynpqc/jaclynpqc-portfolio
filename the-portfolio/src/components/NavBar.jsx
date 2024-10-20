/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from 'react';

export default function NavigationBar({fontStyle = 'inter'}){
    const [isScrolled, setIsScrolled] = useState(false);

    //Font style variations
    const fontStyles = {
        inter: "font-['Inter']",
        spaceGrotesk: "font-['Space_Grotesk']",
        outfit: "font-['Outfit']"
    };

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <header 
        className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 
        ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
        ${fontStyles[fontStyle]}`}
        >
        <div className="max-w-6xl mx-auto px-6">
            <nav className="flex justify-between items-center h-20">
            {/* Logo/Name */}
            <a 
                href="/" 
                className={`font-medium text-xl tracking-tight hover:text-gray-600 transition-colors
                ${fontStyle === 'inter' ? 'tracking-[-0.02em]' : 'tracking-normal'}`}
            >
                JACLYN PHAM
            </a>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
                {[
                { text: 'WORK', href: '#work' },
                { text: 'ABOUT', href: '#about' },
                { text: 'CV', href: '#cv' },
                { text: 'CONTACT', href: '#contact' }
                ].map((item) => (
                <a
                    key={item.text}
                    href={item.href}
                    className={`text-sm tracking-wide hover:text-gray-600 transition-colors relative group
                    ${fontStyle === 'inter' ? 'tracking-[0.02em]' : 'tracking-[0.03em]'}`}
                >
                    {item.text}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
                ))}
            </div>
            </nav>
        </div>
        </header>
    );
}