import React, { useState } from 'react';
import { Monitor, FlaskConical, Trophy, BookMarked, Music, Bus, Check, Sparkles, X, ArrowRight } from 'lucide-react';

export default function Facilities() {
  const [activeModalFacility, setActiveModalFacility] = useState(null);

  const facilities = [
    {
      id: 'smart-classrooms',
      icon: Monitor,
      title: 'AI Smart Classrooms',
      tagline: 'Interactive Learning & Digital Boards',
      desc: 'Equipped with 4K touch displays, ergonomic furniture, climate control, and digital learning modules for immersive visual comprehension.',
      bullets: ['High-Speed Fiber Wi-Fi', 'Interactive Touchscreen Displays', 'Ergonomic Posture Seating', 'Air Purified Environment'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'stem-labs',
      icon: FlaskConical,
      title: 'STEM & Robotics Labs',
      tagline: 'Hands-on Innovation',
      desc: 'Separate modern laboratories for Physics, Chemistry, Biology, and Robotics equipped with 3D printers, IoT kits, and modern apparatus.',
      bullets: ['Certified Lab Safety Officers', 'Arduino & Lego Robotics Kits', 'Microscopes & Digital Sensors', 'Individual Experiment Workstations'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'sports-complex',
      icon: Trophy,
      title: 'Olympic-Grade Sports Complex',
      tagline: 'Physical Fitness & Athletics',
      desc: 'Sprawling 15-acre sports facilities featuring synthetic basketball court, turf football field, swimming pool, badminton & lawn tennis.',
      bullets: ['Full-Time NIS Certified Coaches', 'Standard Size Swimming Pool', 'Indoor Badminton Courts', 'Taekwondo & Yoga Sessions'],
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'digital-library',
      icon: BookMarked,
      title: 'Digital i-Library & Media Hub',
      tagline: '15,000+ Titles & Online Journals',
      desc: 'Quiet reading zones, digital cataloging, e-books workstation, national newspapers, and international research periodicals.',
      bullets: ['E-Reader Devices', 'Quiet Study Pods', 'Research Database Access', 'Weekly Reading Clubs'],
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'arts-auditorium',
      icon: Music,
      title: 'Performing Arts & Auditorium',
      tagline: 'Music, Drama & Cultural Center',
      desc: 'State-of-the-art 800-seater acoustics auditorium, dedicated classical & western music rooms, and dance studios.',
      bullets: ['Professional Sound Systems', 'Indian & Western Instruments', 'Drama & Debate Workshops', 'Annual Cultural Fest Stage'],
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'safe-transport',
      icon: Bus,
      title: 'GPS Tracked Safe Fleet',
      tagline: '360° Safety & Security',
      desc: 'Air-conditioned buses covering major routes in Aligarh and surrounding areas, equipped with live GPS tracking, female attendants, and speed governors.',
      bullets: ['Real-time Parent Tracking App', 'Female Bus Attendants', 'CCTV & Speed Controllers', 'First Aid Medical Kits'],
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-slate-900 via-school-navy to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-gold font-bold text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
            World-Class Campus Infrastructure
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Designed to Inspire Excellence in Every Sphere
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg font-normal">
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
                className="group rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-md overflow-hidden shadow-xl hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Preview Container with Zoom Effect */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-school-gold border border-slate-700/80 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="absolute bottom-3 left-4 text-xs font-bold text-school-gold bg-school-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-school-gold/30">
                    {fac.tagline}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-school-gold transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    {fac.bullets.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Styled Button with Hover Animations */}
                  <button
                    onClick={() => setActiveModalFacility(fac)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/90 text-white font-bold text-xs border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-school-gold group-hover/btn:rotate-12 transition-transform" />
                    <span>View Facility Details</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Facility Detail Modal */}
      {activeModalFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-700/80 text-white">
            <div className="relative h-60">
              <img
                src={activeModalFacility.image}
                alt={activeModalFacility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setActiveModalFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-school-gold text-school-navy uppercase tracking-wider">
                  {activeModalFacility.tagline}
                </span>
                <h3 className="font-heading font-extrabold text-2xl mt-2 text-white">{activeModalFacility.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalFacility.desc}
              </p>

              <div>
                <h4 className="font-bold text-xs text-school-gold uppercase tracking-wider mb-3">Key Highlights & Safety Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalFacility.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalFacility(null)}
                  className="px-6 py-2.5 bg-school-gold text-school-navy text-xs font-bold rounded-xl hover:bg-amber-500 transition-colors"
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
