/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Sticker = ({ 
  text,
  filled = true,
  backgroundColor = 'white',
  textColor = 'black',
  outlineColor = 'black',
  outlineWidth = '1px',
  fontSize = 'text-sm',
  fontFamily = 'font-sans',
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`
        inline-flex 
        items-center 
        justify-center 
        rounded-full 
        ${fontFamily}
        ${fontSize}
        px-3 py-0.5
        select-none
        ${className}
      `}
      style={{
        backgroundColor: filled ? backgroundColor : 'transparent',
        color: textColor,
        border: `${outlineWidth} solid ${outlineColor}`,
        whiteSpace: 'nowrap',
        ...style
      }}
    >
      {text}
    </div>
  );
};

export default Sticker;