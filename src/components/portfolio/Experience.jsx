import React from 'react';
import { Briefcase, Circle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      subtitle: 'Backend & API Development',
      company: 'IBM',
      location: 'Markham, ON',
      period: 'Mar 2024 – Present',
      achievements: [
        'Implemented IBM\'s supplier communication system using Java, Spring Boot, REST APIs, and SQL, supporting 200+ suppliers',
        'Designed end-to-end feature delivery flows with Java, Python, and Kubernetes for 15+ product teams',
        'Collaborated with frontend engineers (React, TypeScript, JavaScript) on API design and data modeling',
        'Developed internal tooling for multi-model LLM integration supporting 50+ developers',
        'Optimized data models and SQL queries with PostgreSQL for improved performance'
      ]
    },
    {
      title: 'IT Specialist',
      company: 'Plan Group',
      location: 'North York, ON',
      period: 'Jan 2024 – Mar 2024',
      achievements: [
        'Achieved 95% first-call resolution rate managing distributed IT systems',
        'Automated provisioning workflows with Python, PowerShell, and Linux Shell',
        'Created documentation and training to standardize processes',
        'Utilized VS Code and Visual Studio for scripting and automation'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'IBM',
      location: 'Markham, ON',
      period: 'May 2021 – Aug 2022',
      achievements: [
        'Built ETL-style ingestion service processing 500+ sustainability reports (CSV/JSON)',
        'Developed configuration APIs enabling feature flag updates without redeployments',
        'Integrated input validation, encryption, and data-quality controls',
        'Improved data pipelines and eliminated manual processing work'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-[#FF533D] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#AB937A] hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-20">
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-6 hidden md:block">
                  <div className="w-4 h-4 bg-[#FF533D] rounded-full ring-4 ring-white shadow-lg"></div>
                </div>

                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 border-l-4 border-[#AB937A]">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      {exp.subtitle && (
                        <p className="text-lg text-[#AB937A] font-semibold">{exp.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <Briefcase size={18} />
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-[#AB937A]/20 text-[#AB937A] rounded-full text-sm font-semibold whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <Circle size={8} className="mt-2 text-[#FF533D] fill-current flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}