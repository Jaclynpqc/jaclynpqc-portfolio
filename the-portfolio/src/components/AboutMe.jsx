/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

const AboutMe = () => {
    return(
        <div>
            {/* Introduction Section */}
      <div className="bg-darkvoid px-2 py-8 -mt-10 flex overflow-hidden">
        <div className="max-w-8xl mx-auto p-6 rounded-lg transition-colors duration-300 cursor-pointer">
          <div className="flex gap-8 items-start">
            {/* Text content */}
            <div className="flex-1">
              <h2 className="text-2xl font-['Public Sans'] text-shiningknight font-medium mb-4 ">
                About Me
              </h2>
              <p className="max-w-7xl text-mauimist text-2xl md:text-3xl lg:text-4xl font-['Poppins'] font-light leading-relaxed ">
                BS in Software Engineering and BA in Art, Science, and Innovation at Allegheny College. With a background in marketing, I thrive on creating engaging brand activation campaigns and pop-up events that drive customer engagement.
              </p>
              <br/>
              <p className="max-w-7xl text-shiningknight text-2xl md:text-3xl lg:text-4xl font-['Poppins'] font-light leading-relaxed ">
                I&apos;m also an avid traveler and speak Vietnamese, English, and French. When I&apos;m not studying, you can find me designing websites, creating merchandise, teaching workshops, or launching a tech club!
              </p>
            </div>

            {/* Circular Button */}
            <div className="mt-10">
                <a 
                  href="https://drive.google.com/file/d/17FkvLZf7mpQ_fKpLMUTu8AA8udupfZJ1/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="relative flex-shrink-0 w-60 h-60 block transition-all duration-300 hover:scale-105 group/button"
                >
                  {/* Image */}
                  <img 
                    src="/assets/polaroids/polaroid.svg" 
                    alt="CV Button" 
                    className="w-full mt-20 h-full object-cover scale-150"
                  />
                
                </a>
              </div>
          </div>
        </div>
        </div>
        </div>
    )
}

export default AboutMe;