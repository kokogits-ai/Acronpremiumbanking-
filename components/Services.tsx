
import React from 'react';
import { Smartphone, Landmark, BarChart3, Headphones } from 'lucide-react';
import Reveal from './Reveal';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-[#b59a5d]" />,
      title: "Secure Online Banking",
      description: "State-of-the-art digital infrastructure allowing you to manage your assets anywhere in the world with absolute privacy."
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#b59a5d]" />,
      title: "International Transfers",
      description: "High-volume SWIFT and SEPA capabilities with priority processing and competitive institutional exchange rates."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#b59a5d]" />,
      title: "Consolidated Reporting",
      description: "Detailed statements and real-time records for all your accounts, tailored to high-net-worth portfolio management."
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#b59a5d]" />,
      title: "Bespoke Support",
      description: "Direct access to dedicated relationship managers who understand the complexities of global private banking."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%" direction="up">
            <h2 className="text-sm font-bold text-[#b59a5d] uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
          </Reveal>
          <Reveal width="100%" direction="up" delay={100}>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Unparalleled Financial Services</h3>
          </Reveal>
          <Reveal width="100%" direction="up" delay={200}>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              We provide a suite of premium banking solutions designed for those who value discretion, speed, and institutional reliability.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up" width="100%">
              <div 
                className="group h-full p-8 border border-slate-100 rounded-sm hover:border-[#b59a5d]/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 bg-white"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 font-serif">{service.title}</h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
