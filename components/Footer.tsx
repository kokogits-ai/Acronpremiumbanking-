import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const targetUrl = "https://acron-premiumbank.vercel.app/";

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-[#0f172a]" />
              <span className="text-xl font-bold tracking-tight text-[#0f172a]">
                Acron Bank
              </span>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              Excellence in private banking and wealth management for discerning global clients. Established on foundations of trust and discretion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">About Acron</a></li>
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Private Services</a></li>
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Security Protocol</a></li>
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Institutional Access</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Privacy Policy</a></li>
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Terms & Conditions</a></li>
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Cookie Policy</a></li>
              <li><a href={targetUrl} className="text-slate-500 text-sm hover:text-[#b59a5d] transition-colors">Compliance Statements</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <MapPin className="w-4 h-4 text-[#b59a5d]" />
                <span>Bahnhofstrasse 1, Zurich, Switzerland</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Phone className="w-4 h-4 text-[#b59a5d]" />
                <span>+41 44 211 00 00</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <Mail className="w-4 h-4 text-[#b59a5d]" />
                <span>contact@acronbank.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-400">
              © {currentYear} Acron Bank AG. All rights reserved.
            </div>
            {/* Disclaimer removed as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;