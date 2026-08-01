import React, { useState } from 'react';
import { Phone, Mail, MapPin, Bell, ChevronDown, ChevronUp, FileText } from 'lucide-react';

export default function TopBar({ onOpenAdmissionModal, onOpenProspectusModal }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-school-navy text-slate-200 text-xs border-b border-slate-800 transition-all duration-300 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-2">
          
          {/* Announcement Ticker left / Main notice */}
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold text-[11px] shrink-0 border border-amber-500/30">
              <Bell className="w-3 h-3 text-amber-400" />
              <span>Admissions 2025-26</span>
            </div>
            <p className="text-slate-200 font-medium truncate text-xs sm:text-sm">
              Session Open • Early Bird Scholarships Available
            </p>
          </div>

          {/* Quick Contact & Actions Right */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Direct Phone on desktop & tablet */}
            <a 
              href="tel:+918006409344" 
              className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-semibold text-xs"
              title="Call Admissions Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 8006409344</span>
            </a>

            <span className="hidden md:inline text-slate-700">|</span>

            {/* Quick Prospectus Trigger Button */}
            <button
              onClick={onOpenProspectusModal}
              className="hidden sm:flex items-center gap-1 text-slate-200 hover:text-amber-300 font-semibold text-[11px] bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              <span>Prospectus PDF</span>
            </button>

            {/* Direct Apply Button */}
            <button 
              onClick={onOpenAdmissionModal}
              className="text-amber-400 hover:text-amber-300 font-bold text-xs hover:underline shrink-0 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1"
            >
              Apply Direct &rarr;
            </button>

            {/* Collapse / Expand Toggle for Mobile & Compact Screens */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              aria-label={isExpanded ? 'Collapse Top Bar Details' : 'Expand Top Bar Details'}
              aria-expanded={isExpanded}
            >
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* Collapsible Contact Row */}
        {isExpanded && (
          <div className="mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 animate-fade-in">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+918006409344" className="flex items-center gap-1.5 text-amber-300 hover:underline">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 8006409344</span>
              </a>
              <a href="mailto:info@pavnaschoolaligarh.com" className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@pavnaschoolaligarh.com</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Agra Highway, Aligarh - 202001 (UP)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenProspectusModal}
                className="text-[11px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-md hover:bg-amber-500/20 transition-colors"
              >
                Download Curriculum Guide
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
