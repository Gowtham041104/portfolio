
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-sky-950 to-indigo-950">
      {/* Minimal top nav for unique look */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-wide">Gowtham</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            <Link to="/resume" className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Resume</Link>
          </nav>
        </div>
      </header>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
