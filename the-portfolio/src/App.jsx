/* eslint-disable no-unused-vars */
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import flowerFieldSVG from './assets/flower_field.svg';
import Matter from 'matter-js';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/ReceiptSkills';



function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
