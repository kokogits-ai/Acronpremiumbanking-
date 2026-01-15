
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const targetUrl = "https://acron-premiumbank.vercel.app/";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 translate-x-1/2 -skew-x-12" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
          Ready to Access Your<br />Acron Bank Account?
        </h2>
        <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto font-light">
          Enter our secure gateway to manage your international portfolio, execute transfers, and view comprehensive performance reports.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={targetUrl}
            className="group w-full sm:w-auto px-10 py-5 bg-[#0f172a] text-white font-bold rounded-sm hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-slate-900/10"
          >
            <span>Continue to Login</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={targetUrl}
            className="text-[#0f172a] font-semibold hover:underline underline-offset-4"
          >
            New Client Registration
          </a>
        </div>
        
        <p className="mt-8 text-xs text-slate-400 font-medium uppercase tracking-widest">
          Secured by RSA & 256-bit AES Encryption
        </p>
      </div>
    </section>
  );
};

export default CTASection;
