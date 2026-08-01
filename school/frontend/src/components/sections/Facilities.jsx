import React, { useState } from 'react';
import { Monitor, FlaskConical, Trophy, BookMarked, Music, Bus, Check, Sparkles, X, ShieldAlert, Image as ImageIcon } from 'lucide-react';

export default function Facilities({ onOpenAdmissionModal }) {
  const [activeModalFacility, setActiveModalFacility] = useState(null);
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  const facilities = [
    {
      id: 'smart-classrooms',
      icon: Monitor,
      title: 'AI Smart Classrooms',
      tagline: 'Interactive Learning & Digital Boards',
      desc: 'Equipped with 4K touch displays, ergonomic furniture, climate control, and digital learning modules for immersive visual comprehension.',
      bullets: ['High-Speed Fiber Wi-Fi', 'Interactive Touchscreen Displays', 'Ergonomic Posture Seating', 'Air Purified Environment'],
      safety: 'Clean HVAC Air Filtration & 24/7 CCTV Monitoring',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
      ],
    },
    {
      id: 'stem-labs',
      icon: FlaskConical,
      title: 'STEM & Robotics Labs',
      tagline: 'Hands-on Innovation Hub',
      desc: 'Separate modern laboratories for Physics, Chemistry, Biology, and Robotics equipped with 3D printers, IoT kits, and modern apparatus.',
      bullets: ['Certified Lab Safety Officers', 'Arduino & Lego Robotics Kits', 'Microscopes & Digital Sensors', 'Individual Experiment Workstations'],
      safety: 'Emergency Eye-Wash Stations, Chemical Fume Hoods & Fire Extinguishers',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
      ],
    },
    {
      id: 'sports-complex',
      icon: Trophy,
      title: 'Olympic-Grade Sports Complex',
      tagline: 'Physical Fitness & Athletics',
      desc: 'Sprawling 15-acre sports facilities featuring synthetic basketball court, turf football field, swimming pool, badminton & lawn tennis.',
      bullets: ['Full-Time NIS Certified Coaches', 'Standard Size Swimming Pool', 'Indoor Badminton Courts', 'Taekwondo & Yoga Sessions'],
      safety: 'On-Duty Lifeguards, First Aid Station & Certified Sports Trainers',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop',
      ],
    },
    {
      id: 'digital-library',
      icon: BookMarked,
      title: 'Digital i-Library & Media Hub',
      tagline: '15,000+ Titles & Online Journals',
      desc: 'Quiet reading zones, digital cataloging, e-books workstation, national newspapers, and international research periodicals.',
      bullets: ['E-Reader Devices', 'Quiet Study Pods', 'Research Database Access', 'Weekly Reading Clubs'],
      safety: 'Quiet Silent Zones & Digital Access Verification',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop',
      ],
    },
    {
      id: 'arts-auditorium',
      icon: Music,
      title: 'Performing Arts & Auditorium',
      tagline: 'Music, Drama & Cultural Center',
      desc: 'State-of-the-art 800-seater acoustics auditorium, dedicated classical & western music rooms, and dance studios.',
      bullets: ['Professional Sound Systems', 'Indian & Western Instruments', 'Drama & Debate Workshops', 'Annual Cultural Fest Stage'],
      safety: 'Acoustic Soundproofing & Multiple Emergency Exits',
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
      ],
    },
    {
      id: 'safe-transport',
      icon: Bus,
      title: 'GPS Tracked Safe Fleet',
      tagline: '360° Safety & Security',
      desc: 'Air-conditioned buses covering major routes in Aligarh and surrounding areas, equipped with live GPS tracking, female attendants, and speed governors.',
      bullets: ['Real-time Parent Tracking App', 'Female Bus Attendants', 'CCTV & Speed Controllers', 'First Aid Medical Kits'],
      safety: 'Speed Governors capped at 40 km/h & Emergency SOS Alert App',
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop',
      ],
    },
  ];

  const handleOpenModal = (fac) => {
    setActiveModalFacility(fac);
    setSelectedGalleryIdx(0);
  };

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-slate-950 via-school-navy to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full shadow-sm">
            World-Class Campus Infrastructure
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Designed to Inspire Excellence in Every Sphere
          </h2>
          <p className="text-slate-200 mt-4 text-base sm:text-lg font-medium leading-relaxed">
            Our 15+ acre eco-friendly campus offers cutting-edge facilities that nurture intellectual growth, physical vitality, and artistic expression.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-md overflow-hidden shadow-xl hover:shadow-2xl hover:border-amber-400/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Preview Container */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    loading="lazy"
                    decoding="async"
                    width="1000"
                    height="667"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-950/90 backdrop-blur-md text-amber-400 border border-slate-700/80 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="absolute bottom-3 left-4 text-xs font-bold text-amber-400 bg-school-navy/95 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30">
                    {fac.tagline}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-slate-200 text-sm leading-relaxed font-medium">
                      {fac.desc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    {fac.bullets.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Styled Interactive Button */}
                  <button
                    onClick={() => handleOpenModal(fac)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 hover:border-amber-400/60 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View Facility Details</span>
                    <span className="text-amber-400 font-bold text-sm transition-transform duration-300 group-hover/btn:translate-x-1 inline-block">→</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Rich Facility Detail Modal with Photo Gallery Switcher */}
      {activeModalFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true">
          <div className="bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-700 text-white relative">
            
            {/* Top Photo Header */}
            <div className="relative h-64 sm:h-72 bg-slate-950">
              <img
                src={activeModalFacility.gallery[selectedGalleryIdx] || activeModalFacility.image}
                alt={activeModalFacility.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setActiveModalFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Close facility details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 uppercase tracking-wider">
                  {activeModalFacility.tagline}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl mt-2 text-white">{activeModalFacility.title}</h3>
              </div>
            </div>

            {/* Gallery Thumbnail Selector */}
            <div className="px-6 pt-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-3 overflow-x-auto">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 shrink-0">
                <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Photos:</span>
              </span>
              {activeModalFacility.gallery.map((imgUrl, gIdx) => (
                <button
                  key={gIdx}
                  onClick={() => setSelectedGalleryIdx(gIdx)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    selectedGalleryIdx === gIdx ? 'border-amber-400 scale-105 shadow-md' : 'border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Modal Body Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                {activeModalFacility.desc}
              </p>

              {/* Safety & Protocol Badge */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2.5 font-bold">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Safety Protocol: {activeModalFacility.safety}</span>
              </div>

              <div>
                <h4 className="font-bold text-xs text-amber-400 uppercase tracking-wider mb-3">Key Infrastructure Highlights:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalFacility.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 text-xs font-bold text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setActiveModalFacility(null);
                    if (onOpenAdmissionModal) onOpenAdmissionModal();
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-school-gold via-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl hover:scale-105 transition-all shadow-md"
                >
                  Book Campus Visit &rarr;
                </button>
                
                <button
                  onClick={() => setActiveModalFacility(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-colors border border-slate-700"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
