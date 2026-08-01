import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ChevronRight, PhoneCall, FileText } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenAdmissionModal, onOpenProspectusModal }) {
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

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
    <>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus-visible:ring-2 focus-visible:ring-school-blue focus-visible:outline-none rounded-xl p-1"
              aria-label="Pavna School Aligarh Home"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-school-navy to-school-blue flex items-center justify-center text-school-gold shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-xl sm:text-2xl text-school-navy tracking-tight">PAVNA</span>
                  <span className="font-heading font-bold text-[11px] bg-amber-500/20 text-amber-700 px-2 py-0.5 rounded-md uppercase tracking-wider">SCHOOL</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wide">Aligarh</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[10px] font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                    CBSE & Cambridge
                  </span>
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-school-blue focus-visible:outline-none ${
                    activeSection === item.id 
                      ? 'text-school-blue bg-blue-50/90 shadow-sm border border-blue-100' 
                      : 'text-slate-800 hover:text-school-blue hover:bg-slate-100/70'
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
                className="p-2.5 rounded-xl text-slate-700 hover:text-school-blue hover:bg-blue-50 transition-colors focus-visible:ring-2 focus-visible:ring-school-blue focus-visible:outline-none"
                title="Call Admissions Hotline"
                aria-label="Call Admissions Hotline +918006409344"
              >
                <PhoneCall className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenAdmissionModal}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-extrabold text-school-navy transition-all bg-gradient-to-r from-school-gold via-amber-400 to-amber-500 rounded-xl shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] group overflow-hidden focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:outline-none"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Admissions 2025-26
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-school-navy" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-800 hover:text-school-navy hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-school-blue focus-visible:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Slide-In Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto animate-slide-in">
            
            {/* Header in Drawer */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-school-navy text-school-gold flex items-center justify-center font-bold">
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-heading font-extrabold text-lg text-school-navy">PAVNA NAV</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links List with 44px min touch height */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 min-h-[44px] rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                      activeSection === item.id 
                        ? 'text-school-blue bg-blue-50/90 border border-blue-100' 
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-2.5 h-2.5 rounded-full bg-school-blue shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="w-full text-center py-3.5 px-4 min-h-[44px] bg-gradient-to-r from-school-gold via-amber-400 to-amber-500 text-school-navy font-black rounded-xl shadow-md hover:scale-[1.01] transition-transform text-sm"
              >
                Apply for Admission 2025-26
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProspectusModal();
                }}
                className="w-full py-3 px-4 min-h-[44px] bg-slate-100 text-slate-800 font-bold rounded-xl text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-school-blue" />
                <span>Download Prospectus PDF</span>
              </button>

              <a
                href="tel:+918006409344"
                className="w-full text-center py-3 px-4 min-h-[44px] bg-school-navy text-white font-bold rounded-xl text-xs hover:bg-slate-800 transition-colors block"
              >
                Call Helpline: +91 8006409344
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
