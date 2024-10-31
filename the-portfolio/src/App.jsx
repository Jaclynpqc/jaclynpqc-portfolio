/* eslint-disable no-unused-vars */
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/ReceiptSkills';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <NavigationBar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="work" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default App
