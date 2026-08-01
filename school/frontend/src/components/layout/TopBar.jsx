import React from 'react';
import { Phone, Mail, MapPin, Bell } from 'lucide-react';

export default function TopBar({ onOpenAdmissionModal }) {
  return (
    <div className="bg-school-navy text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Contact info left */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a href="tel:+918006409344" className="flex items-center gap-1.5 hover:text-school-gold transition-colors">
            <Phone className="w-3.5 h-3.5 text-school-gold" />
            <span>+91 8006409344</span>
          </a>
          <span className="hidden sm:inline text-slate-600">|</span>
          <a href="mailto:info@pavnaschoolaligarh.com" className="flex items-center gap-1.5 hover:text-school-gold transition-colors">
            <Mail className="w-3.5 h-3.5 text-school-gold" />
            <span>info@pavnaschoolaligarh.com</span>
          </a>
          <span className="hidden lg:inline text-slate-600">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-school-gold" />
            <span>Agra Highway, Aligarh - 202001 (UP)</span>
          </div>
        </div>

        {/* Announcement Ticker right */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-school-gold/20 text-school-gold px-2.5 py-0.5 rounded-full font-medium text-[11px] animate-pulse-subtle shrink-0">
            <Bell className="w-3 h-3" />
            <span>Notice:</span>
          </div>
          <p className="text-slate-300 truncate max-w-[280px] sm:max-w-[380px]">
            Admissions Open for Session 2025-26 • Early Bird Scholarships Available
          </p>
          <button 
            onClick={onOpenAdmissionModal}
            className="hidden sm:inline-block text-school-gold hover:underline font-semibold text-[11px] shrink-0"
          >
            Apply Direct &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
