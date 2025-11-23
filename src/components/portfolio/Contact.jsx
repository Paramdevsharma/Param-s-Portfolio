import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paramvatas@gmail.com',
      link: 'mailto:paramvatas@gmail.com',
      color: '#FF533D'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '647-760-5889',
      link: 'tel:647-760-5889',
      color: '#AB937A'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pds1',
      link: 'https://linkedin.com/in/pds1',
      color: '#FF533D'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, ON, Canada',
      color: '#AB937A'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0F1626] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#FF533D] mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, projects, or just connecting with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <div key={index} className="group">
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20"
                >
                  <div style={{ backgroundColor: item.color }} className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={28} />
                  </div>
                  <p className="text-sm text-gray-300 mb-1">{item.label}</p>
                  <p className="font-semibold text-white break-words">{item.value}</p>
                </a>
              ) : (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div style={{ backgroundColor: item.color }} className="w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <item.icon size={28} />
                  </div>
                  <p className="text-sm text-gray-300 mb-1">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400">
            © 2024 Param Dev Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}