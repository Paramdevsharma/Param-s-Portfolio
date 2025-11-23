import React from 'react';
import { ExternalLink, Cpu, Zap, Wallet, Network } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'OpenCL–OpenGL Snake Game',
      description: 'A GPU-accelerated Snake Game developed using C++ with integrated OpenGL for rendering and OpenCL for parallel execution. Optimized CPU/GPU task distribution for real-time performance.',
      technologies: ['C++', 'OpenGL', 'OpenCL', 'Visual Studio', 'Git'],
      highlights: [
        'GPU-accelerated graphics rendering',
        'Parallel execution optimization',
        'Real-time performance tuning',
        'Distributed and parallel systems concepts'
      ],
      icon: Cpu,
      gradient: '#0F1626'
    },
    {
      title: 'Bank App',
      description: 'A banking application with Java and JavaFX, featuring a user-friendly graphical interface with SQLite for secure and efficient data storage.',
      technologies: ['Java', 'JavaFX', 'SQLite', 'Docker'],
      highlights: [
        'User authentication system',
        'Account management features',
        'Transaction processing',
        'Containerized deployment with Docker'
      ],
      icon: Wallet,
      gradient: '#FF533D'
    },
    {
      title: 'Multi-LLM Communication Protocol',
      description: 'Designed an internal protocol for large language models (LLMs), similar to HTTP, defining standard request/response envelopes, error codes, and metadata fields for consistent LLM provider integration.',
      technologies: ['Python', 'REST', 'JSON', 'Internal Platform'],
      highlights: [
        'Implemented reference Python client and server-side adapters',
        'Model routing, retries, and structured logging support',
        'Normalized prompts, parameters, and outputs across LLM backends',
        'Simplified debugging and reduced friction for new LLM onboarding'
      ],
      icon: Network,
      gradient: '#AB937A'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-[#FF533D] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-[#AB937A]/30"
            >
              <div style={{ backgroundColor: project.gradient }} className="h-2"></div>
              
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div style={{ backgroundColor: project.gradient }} className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <project.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <Zap size={16} className="text-[#FF533D] flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{ backgroundColor: i % 2 === 0 ? '#FF533D' : '#AB937A' }}
                        className="px-4 py-2 text-white rounded-full text-sm font-medium shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}