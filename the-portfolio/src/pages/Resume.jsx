/* eslint-disable no-unused-vars */
import React from "react";
import Skills from "../components/ReceiptSkills";

const Resume = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section with Skills */}
      <section className="h-[50vh] relative overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-stone-50 opacity-90">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/assets/balloon.gif')] bg-cover bg-center mix-blend-multiply" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-4 py-2">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-6xl font-['Ballet'] font-bold text-bloodymary mt-6 mb-2 tracking-widest">
              Interactive Resume
            </h1>
            <p className="text-base font-[Inter] font-bold text-black/35">
              Explore my skills by clicking and adding them to your cart!
            </p>
          </div>

          {/* Compact Skills Component */}
          <div className="scale-75 origin-top">
            <Skills />
          </div>
        </div>
      </section>

      {/* Rest of Resume Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Experience Section */}
        <h2 className="text-3xl font-[Inter] font-bold text-darkmaroon mb-8">
          Experience
        </h2>
        {/* Add your experience content here */}

        {/* Education Section */}
        <h2 className="text-3xl font-[Inter] font-bold text-darkmaroon mt-16 mb-8">
          Education
        </h2>
        {/* Add your education content here */}

        {/* Projects Section */}
        <h2 className="text-3xl font-[Inter] font-bold text-darkmaroon mt-16 mb-8">
          Projects
        </h2>
        {/* Add your projects content here */}
      </section>
    </div>
  );
};

export default Resume;