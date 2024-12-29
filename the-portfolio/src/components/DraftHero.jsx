/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const NavElement = ({ src, initialX, initialY, caption, to, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        transform: `translate(${initialX}px, ${initialY}px)`,
        zIndex: 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {to ? (
        to.startsWith('http') ? (
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={src}
              className="w-32 h-32 scale-150 select-none transition-all duration-300 hover:scale-[1.6]"
              alt={caption || "Navigation element"}
            />
          </a>
        ) : (
          <Link
            to={to}
            className="group"
          >
            <img
              src={src}
              className="w-32 h-32 scale-150 select-none transition-all duration-300 hover:scale-[1.6]"
              alt={caption || "Navigation element"}
            />
          </Link>
        )
      ) : (
        <div className="group">
          <img
            src={src}
            className="w-32 h-32 scale-150 select-none transition-all duration-300 hover:scale-[1.6]"
            alt={caption || "Navigation element"}
          />
          {isHovered && hoverImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
              <img
                src={hoverImage}
                className="w-24 h-24 object-cover"
                alt="Hover Preview"
              />
            </div>
          )}
        </div>
      )}
      {caption && (
        <span className="text-sm font-medium text-darkvoid py-1">
          {caption}
        </span>
      )}
    </div>
  );
};

const HeroSection = () => {
  const navElements = [
    { 
      src: '/assets/items/laptop.svg',
      x: -100,
      y: 150,
      caption: "My Works",
      to: "/works"
    },
    { 
      src: '/assets/items/glasses.svg',
      x: 200,
      y: -50,
      caption: "About Me",
      to: "https://www.notion.so/jaclyn-pham/Portfolio-10320119f5a180e0aaa8f4cd05f302ad"
    },
    { 
      src: '/assets/items/headphones.svg',
      x: 900,
      y: -80,
      caption: "Contact",
      to: "/contact"
    },
  ];

  return (
    <>
      <div className="h-[60vh] relative bg-mauimist flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative -mb-10 mt-5">
          {navElements.map((element, index) => (
            <NavElement
              key={index}
              src={element.src}
              initialX={element.x}
              initialY={element.y}
              caption={element.caption}
              to={element.to}
            />
          ))}
          {/* Main text */}
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed relative">
            <span className="font-['Ballet'] font-bold text-5xl md:text-6xl lg:text-7xl italic text-darkvoid tracking-widest">Jaclyn Pham</span>{' '}
            <br/>
            <span className="font-['Inter'] font-light text-darkvoid">I am a product designer (UI/UX) & creative technologist based in United States, working worldwide. I enjoy creating meaningful narratives through experimenting with new technology.</span>{' '}
            <br/>
            <span className="font-['Inter'] font-extralight text-2xl md:text-3xl lg:text-4xl text-bloodymary">Contact me at jaclynpqc@gmail.com</span>{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;