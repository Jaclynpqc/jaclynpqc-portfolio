/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/HoverProjects';
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
        <section id="about">
          <HeroSection />
        </section>
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
        <section id="experience" className="scroll-mt-20">
          <ExperienceTimeline />
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
