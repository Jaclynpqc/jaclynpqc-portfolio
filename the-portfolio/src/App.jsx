/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './components/404';

// Lazy load heavy components
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const ProjectsSection = React.lazy(() => import('./components/HoverProjects'));
const Skills = React.lazy(() => import('./components/ReceiptSkills'));
const AboutMe = React.lazy(() => import('./components/AboutMe'));
const ExperienceTimeline = React.lazy(() => import('./components/Experience'));
const BrutalistResume = React.lazy(() => import('./components/DraftResume'));
const ARHome = React.lazy(() => import('./components/ARHero'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

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
        <Suspense fallback={<Loading />}>
          <section>
            <HeroSection />
          </section>
          <section id="project" className="scroll-mt-20">
            <ProjectsSection />
          </section>
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>
          <section>
            <Footer />
          </section>
        </Suspense>
      </main>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
