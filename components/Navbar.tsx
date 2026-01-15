
import React from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <ShieldCheck className={`w-8 h-8 ${scrolled ? 'text-[#0f172a]' : 'text-white'}`} />
          <span className={`text-xl font-semibold tracking-tight ${scrolled ? 'text-[#0f172a]' : 'text-white'}`}>
            Acron Bank
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`text-sm font-medium hover:opacity-70 transition-opacity ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>About</a>
          <a href="#services" className={`text-sm font-medium hover:opacity-70 transition-opacity ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Services</a>
          <a href="#security" className={`text-sm font-medium hover:opacity-70 transition-opacity ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>Security</a>
          <button className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 border ${
            scrolled 
              ? 'bg-[#0f172a] text-white border-[#0f172a] hover:bg-slate-800' 
              : 'bg-transparent text-white border-white hover:bg-white hover:text-[#0f172a]'
          }`}>
            Access Account
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className={scrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-900 font-medium">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-900 font-medium">Services</a>
          <a href="#security" onClick={() => setIsOpen(false)} className="text-slate-900 font-medium">Security</a>
          <button className="w-full bg-[#0f172a] text-white py-3 rounded-sm font-semibold">
            Access Account
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
