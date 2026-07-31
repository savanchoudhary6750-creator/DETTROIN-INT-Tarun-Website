import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ChevronRight, PhoneCall } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenAdmissionModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-school-navy to-school-blue flex items-center justify-center text-school-gold shadow-md group-hover:scale-105 transition-transform duration-300">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-school-navy tracking-tight">PAVNA</span>
                <span className="font-heading font-semibold text-xs bg-school-gold/20 text-school-goldHover px-2 py-0.5 rounded-md uppercase tracking-wider">SCHOOL</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">Aligarh</span>
                <span className="text-slate-300">•</span>
                <span className="text-[10px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300/80 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  CBSE & Cambridge Affiliated
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'text-school-blue bg-blue-50/80 shadow-sm' 
                    : 'text-slate-700 hover:text-school-blue hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons right */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+918006409344" 
              className="p-2.5 rounded-full text-slate-600 hover:text-school-blue hover:bg-blue-50 transition-colors"
              title="Call Admissions Hotline"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenAdmissionModal}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all bg-gradient-to-r from-school-gold to-amber-600 rounded-xl shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Admissions 2025-26
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-school-navy hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="space-y-1 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                  activeSection === item.id 
                    ? 'text-school-blue bg-blue-50' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <div className="w-2 h-2 rounded-full bg-school-blue" />}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full text-center py-3 px-4 bg-gradient-to-r from-school-gold to-amber-600 text-white font-bold rounded-xl shadow-md"
            >
              Apply for Admission 2025-26
            </button>
            <a
              href="tel:+918006409344"
              className="w-full text-center py-2.5 px-4 bg-slate-100 text-slate-700 font-semibold rounded-xl text-sm hover:bg-slate-200 transition-colors"
            >
              Call Helpline: +91 8006409344
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
