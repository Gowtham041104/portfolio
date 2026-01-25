
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
    { name: 'Angular', icon: '🅰️', color: 'from-red-500 to-red-700' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-800' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Express.js', icon: '⚡', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', icon: '📚', color: 'from-orange-600 to-red-600' },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Here are some of the technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-medium text-sm group-hover:text-white/90 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-white font-semibold mb-3">Frontend Development</h4>
              <p className="text-gray-400 text-sm">React.js, Angular, TypeScript, Tailwind CSS, Material-UI, Redux Toolkit</p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-white font-semibold mb-3">Backend Development</h4>
              <p className="text-gray-400 text-sm">Node.js, Express.js, MongoDB, REST APIs, JWT Authentication</p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <h4 className="text-white font-semibold mb-3">Development Tools</h4>
              <p className="text-gray-400 text-sm">Git, GitHub, VS Code, Postman, Vercel, Netlify</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
