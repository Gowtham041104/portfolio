import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Gowtham S</h1>
              <p className="text-xl text-blue-100 mb-4">Full Stack Developer</p>
              <p className="text-blue-100 max-w-2xl leading-relaxed">
                Fresh graduate with strong foundation in MERN stack development, passionate about creating
                scalable web applications and solving complex problems through innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>gowtham041104@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 638244267</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>github.com/Gowtham041104</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Education</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Bachelor of Engineering</h3>
                  <p className="text-lg text-blue-600 font-medium">Electronics and Communication</p>
                  <p className="text-gray-600">S.A. Engineering College, Anna University</p>
                  <p className="text-gray-600">Chennai, India</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-800 font-semibold">2021 - 2025</p>
                  <p className="text-blue-600 font-medium">CGPA: 7.8/10</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material-UI', 'Redux'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Authentication'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Projects</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">Social Media Platform</h3>
                  <div className="flex space-x-3 mt-2 md:mt-0">
                    <a href="https://github.com/Gowtham041104/Majorproject2" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href="https://majorproject2-alpha.vercel.app/login" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  Full-stack social platform with JWT authentication, 2FA security, and real-time features for posts, comments, and user interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'JWT', '2FA'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">E-Commerce Platform</h3>
                  <div className="flex space-x-3 mt-2 md:mt-0">
                    <a href="https://github.com/Gowtham041104/majorproject1" className="text-green-600 hover:text-green-800 flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href="https://majorproject1-u1dp.vercel.app/login" className="text-green-600 hover:text-green-800 flex items-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  Complete e-commerce solution with user authentication, shopping cart functionality, checkout process, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'React', 'Redux', 'REST API'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">SaaS Management Dashboard</h3>
                  <div className="flex space-x-3 mt-2 md:mt-0">
                    <a href="https://github.com/Gowtham041104/SaaS-Manager-Frontend" className="text-purple-600 hover:text-purple-800 flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Frontend</span>
                    </a>
                    <a href="https://github.com/Gowtham041104/SaaS-Manager-Backend" className="text-purple-600 hover:text-purple-800 flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Backend</span>
                    </a>
                    <a href="https://saasmange.netlify.app/login" className="text-purple-600 hover:text-purple-800 flex items-center space-x-1">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  Enterprise SaaS platform with role-based access control, tenant management, subscription handling, and comprehensive admin features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'RBAC'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements & Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Full Stack Proficiency</h3>
                <p className="text-gray-700 text-sm">Experienced in end-to-end web development with modern technologies</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Project Portfolio</h3>
                <p className="text-gray-700 text-sm">3+ completed full-stack projects with live deployments</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Problem Solving</h3>
                <p className="text-gray-700 text-sm">Strong analytical skills with focus on scalable solutions</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Quick Learner</h3>
                <p className="text-gray-700 text-sm">Adaptable to new technologies and development frameworks</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center">
          <p className="text-gray-600 text-sm">
            This resume is available online at: <span className="text-blue-600 font-medium">gowthamportfolio.vercel.app/resume</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
