
import React from 'react';
import { ShieldAlert, Database, Fingerprint, FileText } from 'lucide-react';
import Reveal from './Reveal';

const Security: React.FC = () => {
  const points = [
    {
      title: "End-to-End Encryption",
      desc: "All communication and transaction data are protected by industry-leading AES-256 bit encryption protocols.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Multi-Factor Access",
      desc: "Advanced biometric and hardware token verification layers ensure that only authorized individuals access sensitive accounts.",
      icon: <Fingerprint className="w-6 h-6" />
    },
    {
      title: "Global Compliance",
      desc: "We adhere strictly to international regulatory standards, ensuring full transparency and legislative adherence.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "24/7 Threat Monitoring",
      desc: "Our security operations center operates around the clock to prevent and mitigate unauthorized digital attempts.",
      icon: <ShieldAlert className="w-6 h-6" />
    }
  ];

  return (
    <section id="security" className="py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="left" width="100%">
              <h2 className="text-sm font-bold text-[#b59a5d] uppercase tracking-[0.3em] mb-4">Stability & Safety</h2>
            </Reveal>
            <Reveal direction="left" width="100%" delay={100}>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Fortified Digital Asset Management</h3>
            </Reveal>
            <Reveal direction="left" width="100%" delay={200}>
              <p className="text-white/70 text-lg font-light mb-10 leading-relaxed">
                At Acron Bank, your security is our primary obligation. We leverage the most advanced cryptographic technologies alongside traditional Swiss banking principles to provide an environment of absolute discretion.
              </p>
            </Reveal>
            <Reveal direction="up" width="100%" delay={300}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="p-2 bg-[#b59a5d]/20 rounded-full">
                    <div className="w-2 h-2 bg-[#b59a5d] rounded-full animate-pulse" />
                  </div>
                  <span className="text-sm font-medium">All systems operational and secure</span>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, idx) => (
              <Reveal key={idx} delay={idx * 100 + 400} direction="right" width="100%">
                <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-sm h-full">
                  <div className="text-[#b59a5d] mb-4">
                    {point.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    {point.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
