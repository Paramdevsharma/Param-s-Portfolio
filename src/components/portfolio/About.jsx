import React from 'react';
import { Code2, Database, Cloud, Cpu } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Expert in Java, Spring Boot, REST APIs, and microservices architecture'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building ETL pipelines, data ingestion systems, and optimizing SQL queries'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Kubernetes, Docker, CI/CD pipelines, and deployment automation'
    },
    {
      icon: Cpu,
      title: 'Systems Architecture',
      description: 'Distributed systems, parallel processing, and performance optimization'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#FF533D] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-[#AB937A] leading-relaxed text-center">
            I'm a Software Engineer at IBM specializing in backend development and API design. 
            With a strong foundation in computer engineering from Toronto Metropolitan University, 
            I build scalable systems that handle complex data workflows and support hundreds of users. 
            I'm passionate about clean code, system design, and creating tools that make developers' lives easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#0F1626] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-[#FF533D]">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}