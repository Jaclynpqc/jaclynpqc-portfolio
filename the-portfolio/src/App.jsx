/* eslint-disable no-unused-vars */
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/ReceiptSkills';
import Contact from './components/Contacts';



function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
