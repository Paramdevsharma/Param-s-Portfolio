import React from 'react';
import { Code, Server, Database, Cloud, Wrench, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: '#0F1626',
      skills: ['ReactJS', 'TypeScript', 'JavaScript', 'CSS3', 'HTML5']
    },
    {
      icon: Server,
      title: 'Backend',
      color: '#FF533D',
      skills: ['Java', 'Python', 'Spring Boot', 'C', 'C++', 'SQL', 'Node.js', 'REST APIs', 'Data Modeling', 'NoSQL']
    },
    {
      icon: Database,
      title: 'Distributed/Data',
      color: '#AB937A',
      skills: ['Distributed Systems', 'Data Pipelines', 'ETL', 'Data Ingestion', 'Deployment Architecture']
    },
    {
      icon: Cloud,
      title: 'DevOps',
      color: '#0F1626',
      skills: ['CI/CD', 'Docker', 'GitHub Actions', 'Kubernetes', 'Jenkins', 'IBM Cloud']
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: '#FF533D',
      skills: ['Git', 'VS Code', 'Jest', 'Maven', 'Gradle', 'Visual Studio', 'PostgreSQL', 'OpenCL']
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: '#AB937A',
      skills: ['Communication', 'UX Collaboration', 'Ownership', 'Agile', 'Problem-Solving']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-[#FF533D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 border-2 border-[#AB937A]/30 hover:border-[#AB937A]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div style={{ backgroundColor: category.color }} className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#F5F5F5] rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:border-[#FF533D] hover:text-[#FF533D] hover:shadow-md transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}