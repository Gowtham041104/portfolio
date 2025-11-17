
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Social Media Platform',
      description: 'Full-stack social platform with JWT authentication, 2FA security, and real-time features for posts, comments, and user interactions.',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', '2FA'],
      frontend: 'https://github.com/Gowtham041104/Majorproject2',
      backend: 'https://github.com/Gowtham041104/Majorproject2',
      live: 'https://majorproject2-alpha.vercel.app/login',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with user authentication, shopping cart functionality, checkout process, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514',
      tags: ['Node.js', 'React', 'Redux', 'REST API'],
      frontend: 'https://github.com/Gowtham041104/majorproject1',
      backend: 'https://github.com/Gowtham041104/majorproject1',
      live: 'https://majorproject1-u1dp.vercel.app/login',
    },
    {
      title: 'SaaS Management Dashboard',
      description: 'Enterprise SaaS platform with role-based access control, tenant management, subscription handling, and comprehensive admin features.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
      frontend: 'https://github.com/Gowtham041104/saasmanagement',
      backend: 'https://github.com/Gowtham041104/saasmanagement',
      live: 'https://saasmangement.netlify.app/login',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs border border-white/10 text-sky-300 bg-sky-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.frontend !== '#' && (
                    <a 
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-sm text-gray-200 hover:text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.backend !== '#' && (
                    <a 
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-sm text-gray-200 hover:text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      <span>Backend</span>
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
