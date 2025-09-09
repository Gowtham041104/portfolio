import React from 'react';
import { Calendar, MapPin, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance Projects',
      location: 'Chennai, India',
      period: '2023 - Present',
      type: 'Freelance',
      description: 'Building full-stack web applications using MERN stack with focus on user authentication, real-time features, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Socket.io'],
      projects: [
        {
          name: 'Social Media Platform',
          description: 'Built a complete social media app with 2FA authentication, real-time messaging, and file uploads.',
          tech: ['React', 'Node.js', 'MongoDB', 'JWT', '2FA']
        },
        {
          name: 'E-Commerce Platform',
          description: 'Developed a full-featured e-commerce site with admin dashboard, payment integration, and order management.',
          tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe API']
        }
      ]
    },
    {
      title: 'Student Developer',
      company: 'Personal Projects',
      location: 'Chennai, India',
      period: '2022 - 2023',
      type: 'Learning',
      description: 'Developed various web applications and learned modern web development technologies through hands-on projects.',
      technologies: ['JavaScript', 'HTML/CSS', 'React', 'Node.js', 'MongoDB'],
      projects: [
        {
          name: 'Electricity Board Management',
          description: 'Admin dashboard for electricity board with CSV import, form validation, and analytics using Chart.js.',
          tech: ['React', 'Node.js', 'MongoDB', 'Chart.js']
        },
        {
          name: 'Portfolio Website',
          description: 'Responsive portfolio website showcasing projects and skills with modern UI/UX design.',
          tech: ['React', 'Tailwind CSS', 'TypeScript']
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My journey in building real-world applications and solving complex problems through code
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-sky-500 to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center border-4 border-white/10">
                  {exp.type === 'Freelance' ? <Code className="w-6 h-6 text-white" /> : <Database className="w-6 h-6 text-white" />}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-sky-300 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs border border-sky-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-white font-medium mb-3">Key Projects:</h4>
                    <div className="space-y-3">
                      {exp.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="text-white font-medium">{project.name}</h5>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 rounded bg-white/10 text-gray-300 text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">2+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
