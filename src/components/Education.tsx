import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Electronics and Communication',
      school: 'S.A. Engineering College',
      location: 'Chennai',
      university: 'Anna University',
      period: '2021 - 2025',
      score: 'CGPA: 7.8 / 10',
      status: 'Completed',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
    
    
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'HSC',
      school: 'St. John\'s Matriculation Higher Secondary School',
      location: 'Chennai',
      university: 'Tamil Nadu State Board',
      period: '2021',
      score: 'Score: 75%',
      status: 'Completed',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My academic journey and educational background in engineering and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-sky-500 to-transparent"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center border-4 border-white/10 text-white`}>
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Pursuing' 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-sky-300 font-medium mb-1">{edu.field}</p>
                      <p className="text-gray-300 text-sm mb-2">{edu.school}, {edu.location}</p>
                      <p className="text-gray-400 text-sm">{edu.university}</p>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2 text-sm text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span className="text-sky-400 font-medium">{edu.score}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Key Subjects/Highlights */}
                  {/* <div>
                    <h4 className="text-white font-medium mb-3">Key Subjects & Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.map((highlight, highlightIndex) => (
                        <span key={highlightIndex} className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm border border-white/20">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">4 Years</div>
            <div className="text-gray-400 text-sm">Engineering Program</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">7.8/10</div>
            <div className="text-gray-400 text-sm">Current CGPA</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-sky-400 mb-2">2025</div>
            <div className="text-gray-400 text-sm">Expected Graduation</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
