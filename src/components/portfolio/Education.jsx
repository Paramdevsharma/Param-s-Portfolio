import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-[#FF533D] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 border-l-4 border-[#FF533D]">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#0F1626] group-hover:bg-[#FF533D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-all flex-shrink-0">
                  <GraduationCap className="text-white" size={32} />
                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Bachelor of Engineering in Computer Engineering
                  </h4>
                  
                  <p className="text-lg font-semibold text-[#AB937A] mb-3">
                    Toronto Metropolitan University
                  </p>

                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#FF533D]" />
                      <span>Toronto, ON</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#FF533D]" />
                      <span>Aug. 2018 – May 2023</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive education covering software development, systems programming, 
                    data structures, algorithms, distributed systems, and computer architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Badges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 border-l-4 border-[#FF533D]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#FF533D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">AWS Certified Solutions Architect</h4>
                    <p className="text-[#AB937A] font-semibold mb-1">Amazon Web Services</p>
                    <p className="text-gray-500 text-sm">2024</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 border-l-4 border-[#0F1626]">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#0F1626] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Kubernetes Administrator</h4>
                    <p className="text-[#AB937A] font-semibold mb-1">Cloud Native Computing Foundation</p>
                    <p className="text-gray-500 text-sm">2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}