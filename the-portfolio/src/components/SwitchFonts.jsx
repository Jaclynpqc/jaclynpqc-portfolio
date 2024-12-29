/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const SwitchFont = ({ 
  text, 
  initialFont, 
  targetFont, 
  switchLettersPerInterval = 2,
  intervalSpeed = 100,
  className = ""
}) => {
  // Initialize characters array with special handling for spaces
  const [characters, setCharacters] = useState(
    text.split('').map(char => ({
      char: char === ' ' ? '[]' : char, // Mark spaces with []
      font: initialFont,
      switched: false,
      isSpace: char === ' ' // Track if this character is a space
    }))
  );

  useEffect(() => {
    let unswitchedIndices = characters
      .map((char, index) => (!char.switched && !char.isSpace) ? index : -1) // Exclude spaces from switching
      .filter(index => index !== -1);

    if (unswitchedIndices.length === 0) return;

    const intervalId = setInterval(() => {
      // Get random indices that haven't been switched yet
      const indicesToSwitch = [];
      for (let i = 0; i < Math.min(switchLettersPerInterval, unswitchedIndices.length); i++) {
        const randomIndex = Math.floor(Math.random() * unswitchedIndices.length);
        indicesToSwitch.push(unswitchedIndices[randomIndex]);
        unswitchedIndices.splice(randomIndex, 1);
      }

      // Update characters with new fonts
      setCharacters(prevChars => 
        prevChars.map((char, index) => 
          indicesToSwitch.includes(index)
            ? { ...char, font: targetFont, switched: true }
            : char
        )
      );

      // Clear interval if all non-space characters have been switched
      if (unswitchedIndices.length === 0) {
        clearInterval(intervalId);
      }
    }, intervalSpeed);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array since we want this to run once

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="transition-all duration-300"
          style={{ 
            fontFamily: char.font,
            display: 'inline-block',
            visibility: char.isSpace ? 'hidden' : 'visible', 
            marginRight: char.isSpace ? '0.25em' : '0' // Add space width when it's a space
          }}
        >
          {char.char}
        </span>
      ))}
    </span>
  );
};

export default SwitchFont;