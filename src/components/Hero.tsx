import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Open resume on Google Drive
    window.open('https://drive.google.com/file/d/1La-AeqvOoWd_tyZ0-Ud_vDJ-0ZK4D_ap/view', '_blank');
  };

  return (
    <section id="home" className="min-h-[88vh] flex items-center relative overflow-hidden">
      {/* Unique background grid overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 to-indigo-900/40"></div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Gowtham K
        </h1>
        <p className="text-xl md:text-2xl text-sky-200 mb-6">Full Stack Developer 

        </p>
        <p className="text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto text-lg">
          I build secure, scalable web apps with clean architecture and great UX: from 2FA-enabled social platforms to full-featured e‑commerce.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['React', 'Node.js', 'MongoDB', 'Express', 'REST', '2FA'].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm text-sky-300 bg-sky-500/10">{tag}</span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium text-lg hover:from-sky-600 hover:to-indigo-600 transition-all duration-300"
          >
            View Projects
          </button>
          <button 
            onClick={downloadResume}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/Gowtham041104" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/gowtham-k-589128276/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a href="mailto:gowthamk0411@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
