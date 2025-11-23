import React from 'react';
import Navigation from '../components/portfolio/Navigation';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Experience from '../components/portfolio/Experience';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Education from '../components/portfolio/Education';
import Contact from '../components/portfolio/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}