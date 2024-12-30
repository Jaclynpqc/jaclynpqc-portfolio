/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

const SwitchFont = ({ 
  text, 
  initialFont, 
  targetFont, 
  switchLettersPerInterval = 2,
  intervalSpeed = 100,
  className = ""
}) => {
  const [characters, setCharacters] = useState(
    text.split('').map(char => ({
      char: char === ' ' ? '[]' : char, 
      font: initialFont,
      switched: false,
      isSpace: char === ' '
    }))
  );

  const [isTriggered, setIsTriggered] = useState(false); // Track if animation has started
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTriggered(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isTriggered) return;

    let unswitchedIndices = characters
      .map((char, index) => (!char.switched && !char.isSpace ? index : -1))
      .filter(index => index !== -1);

    if (unswitchedIndices.length === 0) return;

    const intervalId = setInterval(() => {
      const indicesToSwitch = [];
      for (let i = 0; i < Math.min(switchLettersPerInterval, unswitchedIndices.length); i++) {
        const randomIndex = Math.floor(Math.random() * unswitchedIndices.length);
        indicesToSwitch.push(unswitchedIndices[randomIndex]);
        unswitchedIndices.splice(randomIndex, 1);
      }

      setCharacters(prevChars => 
        prevChars.map((char, index) => 
          indicesToSwitch.includes(index)
            ? { ...char, font: targetFont, switched: true }
            : char
        )
      );

      if (unswitchedIndices.length === 0) {
        clearInterval(intervalId);
      }
    }, intervalSpeed);

    return () => clearInterval(intervalId);
  }, [isTriggered]);

  return (
    <span ref={elementRef} className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="transition-all duration-300"
          style={{ 
            fontFamily: char.font,
            display: 'inline-block',
            visibility: char.isSpace ? 'hidden' : 'visible', 
            marginRight: char.isSpace ? '0.01em' : '0' 
          }}
        >
          {char.char}
        </span>
      ))}
    </span>
  );
};

export default SwitchFont;
