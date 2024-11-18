/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/ReceiptSkills';
import Footer from './components/Footer';
import NotFound from './components/404';
import AboutMe from './components/AboutMe';
import ExperienceTimeline from './components/Experience';

// Main content
const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavigationBar onNavigate={scrollToSection} />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="experience" className="scroll-mt-20">
          <ExperienceTimeline />
        </section>
        <section id="work" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id = "aboutMe" className = "scroll-mt-20">
          <AboutMe />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Footer />
        </section>
      </main>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
