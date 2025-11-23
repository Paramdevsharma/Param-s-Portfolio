import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] via-[#F5F5F5] to-[#AB937A]/20 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-bold text-[#0F1626] mb-2">
              Param Dev Sharma
            </h1>
            <div className="h-1 w-full bg-[#FF533D] rounded-full"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-[#AB937A] font-light">
            Software Engineer
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Backend & API Development at <span className="font-semibold text-[#FF533D]">IBM</span>
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Building scalable backend systems, data pipelines, and cloud infrastructure. 
            Passionate about distributed systems and optimizing performance at scale.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://linkedin.com/in/pds1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-[#0F1626]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:paramvatas@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-[#FF533D]"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:647-760-5889"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-[#AB937A]"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#FF533D] hover:bg-[#FF533D]/90 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>


      </div>
    </section>
  );
}