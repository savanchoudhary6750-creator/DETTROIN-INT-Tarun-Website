import React from 'react';
import { Award, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-school-navy text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-school-gold text-school-navy flex items-center justify-center font-extrabold shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">PAVNA</span>
                <span className="font-heading font-semibold text-xs bg-school-gold/20 text-school-gold px-2 py-0.5 rounded-md ml-1.5 uppercase">SCHOOL</span>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Aligarh • Uttar Pradesh</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pavna School Aligarh is a flagship co-educational institution affiliated with CBSE & Cambridge International, providing holistic SEEL framework education for future global leaders.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-school-gold hover:text-school-navy flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-school-gold hover:text-school-navy flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-school-gold hover:text-school-navy flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-school-gold hover:text-school-navy flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-school-gold transition-colors">Home Page</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-school-gold transition-colors">About Vision & Mission</button></li>
              <li><button onClick={() => onNavigate('academics')} className="hover:text-school-gold transition-colors">Academic Programs</button></li>
              <li><button onClick={() => onNavigate('facilities')} className="hover:text-school-gold transition-colors">Campus Facilities</button></li>
              <li><button onClick={() => onNavigate('admissions')} className="hover:text-school-gold transition-colors">Admission Roadmap</button></li>
              <li><button onClick={() => onNavigate('events')} className="hover:text-school-gold transition-colors">Events & News</button></li>
            </ul>
          </div>

          {/* Column 3: Academic Wings */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Academics</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors">Early Years Foundation (EYFS)</span></li>
              <li><span className="hover:text-white transition-colors">Primary School Curriculum</span></li>
              <li><span className="hover:text-white transition-colors">Secondary CBSE Wing</span></li>
              <li><span className="hover:text-white transition-colors">Cambridge International A-Levels</span></li>
              <li><span className="hover:text-white transition-colors">STEM & Robotics Academy</span></li>
              <li><span className="hover:text-white transition-colors">SEEL Character Program</span></li>
            </ul>
          </div>

          {/* Column 4: Address & Support */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-school-gold shrink-0 mt-0.5" />
                <span>Agra Highway, Aligarh - 202001, UP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-school-gold shrink-0" />
                <a href="tel:+918006409344" className="hover:text-white">+91 8006409344</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-school-gold shrink-0" />
                <a href="mailto:info@pavnaschoolaligarh.com" className="hover:text-white">info@pavnaschoolaligarh.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pavna School Aligarh. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Terms of Admission</span>
            <span>•</span>
            <span className="text-school-gold">Redesign Project by Tarun</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-school-gold hover:text-school-navy text-slate-400 transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
