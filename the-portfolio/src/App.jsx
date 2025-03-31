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
import BrutalistResume from './components/DraftResume';
import ARHome
 from './components/ARHero';
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
        <section >
          <ARHome />
        </section>
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>
        <section id="resume" className="scroll-mt-20">
          <Skills />
        </section>
        <section >
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
