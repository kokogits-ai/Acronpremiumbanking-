
import React from 'react';
import { Lock, Shield, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0f1c]">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Banking Building" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/90" />
      </div>

      {/* Subtle Background Decorative Text - Institutional Watermark */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-serif font-bold text-white/[0.04] leading-none whitespace-nowrap transform -rotate-6">
          ACRON PRIVATE
        </span>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Badge - Fast Entrance */}
        <div className="flex justify-center space-x-2 mb-8 animate-reveal-fast">
          <span className="px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-bold border border-white/10 shadow-2xl">
            Established 1924 • Swiss Heritage
          </span>
        </div>
        
        {/* Headline - Solid Entrance */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[1.1] animate-reveal-text">
          Private Banking,<br />Built on <span className="text-[#b59a5d]">Trust.</span>
        </h1>
        
        {/* Subheadline - Solid Entrance */}
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-reveal-subtext">
          Secure digital infrastructure and professional asset management strategies designed for the modern institutional investor.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal-subtext">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-[#0f172a] font-bold rounded-sm hover:bg-[#b59a5d] hover:text-white transition-all duration-300 shadow-xl shadow-black/20">
            Access Your Account
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-sm hover:bg-white hover:text-[#0f172a] transition-all duration-300 backdrop-blur-sm">
            Our Services
          </button>
        </div>

        {/* Value Props */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/50 animate-reveal-footer">
          <div className="flex items-center justify-center space-x-3 group cursor-default">
            <Shield className="w-5 h-5 text-[#b59a5d]/60 group-hover:text-[#b59a5d] transition-colors" />
            <span className="text-xs uppercase tracking-widest font-semibold">Tier-1 Security</span>
          </div>
          <div className="flex items-center justify-center space-x-3 group cursor-default">
            <Lock className="w-5 h-5 text-[#b59a5d]/60 group-hover:text-[#b59a5d] transition-colors" />
            <span className="text-xs uppercase tracking-widest font-semibold">Absolute Discretion</span>
          </div>
          <div className="flex items-center justify-center space-x-3 group cursor-default">
            <Globe className="w-5 h-5 text-[#b59a5d]/60 group-hover:text-[#b59a5d] transition-colors" />
            <span className="text-xs uppercase tracking-widest font-semibold">Global Liquidity</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes reveal-fast {
          from { opacity: 0; filter: blur(10px); }
          to { opacity: 1; filter: blur(0); }
        }
        @keyframes reveal-text {
          0% { opacity: 0; filter: blur(15px); transform: scale(0.98); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        @keyframes reveal-subtext {
          0% { opacity: 0; }
          40% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-reveal-fast { animation: reveal-fast 0.8s ease-out forwards; }
        .animate-reveal-text { animation: reveal-text 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-reveal-subtext { animation: reveal-subtext 1.2s ease-out forwards; }
        .animate-reveal-footer { animation: reveal-subtext 1.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
