import React, { useState } from 'react';
import { Calendar, Trophy, Sparkles, MapPin, ArrowRight, X, ShieldCheck, Award } from 'lucide-react';

export default function EventsNotice() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 'stem-achievements',
      date: '18 AUG 2025',
      title: 'National STEM & Robotics Championship Victory',
      category: 'Academic Excellence',
      desc: 'Pavna School senior robotics team clinches 1st place holding the trophy at the All-India STEM Innovations League.',
      image: '/images/stem_achievements_1785563150510.png',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
      details: 'Our high school robotics team bagged the overall Gold Trophy at the National STEM Championship held in New Delhi. The team presented an automated AI agricultural monitoring drone created entirely in the school STEM lab.',
    },
    {
      id: 'faculty-award',
      date: '05 SEP 2025',
      title: 'Principal Awarded "Excellence in Education 2025"',
      category: 'Faculty Recognition',
      desc: 'School Principal honored on stage for implementing progressive SEEL framework & Cambridge dual certification.',
      image: '/images/faculty_award_1785563167897.png',
      tagColor: 'bg-purple-100 text-purple-900 border-purple-200',
      details: 'Pavna School leadership received the prestigious Regional Education Leadership Excellence Award for driving academic innovation, holistic SEEL integration, and 100% CBSE pass rates.',
    },
    {
      id: 'sports-victories',
      date: '25 SEP 2025',
      title: 'Annual Sports Day & Athletic Podium Victories',
      category: 'Sports & Athletics',
      desc: 'Athletes dominate the regional track & field meet, taking top honors in 100m sprint and relay events.',
      image: '/images/sports_victories_1785563185852.png',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      details: 'A triumphant performance by Pavna athletes with 14 Gold, 8 Silver, and 5 Bronze medals across track events, taekwondo, and basketball championships.',
    },
    {
      id: 'classroom-hands-on',
      date: '10 OCT 2025',
      title: 'Hands-On Robotics & Circuitry Masterclass',
      category: 'Experiential Learning',
      desc: 'Interactive workshop with senior faculty guiding students through IoT sensor programming and circuit design.',
      image: '/images/classroom_hands_on_1785563200605.png',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
      details: 'Specialized lab session showcasing practical applications of microcontrollers, sensor integration, and coding logic for middle and high school students.',
    },
    {
      id: 'cultural-showcase',
      date: '14 NOV 2025',
      title: 'Annual Cultural & Performing Arts Extravaganza',
      category: 'Arts & Culture',
      desc: 'Vibrant classical and folk dance performances by primary and middle school students in the main auditorium.',
      image: '/images/cultural_showcase_1785563217262.png',
      tagColor: 'bg-pink-100 text-pink-900 border-pink-200',
      details: 'An evening celebrating India’s rich cultural heritage through music, drama, and classical dance performances in our 800-seater acoustics auditorium.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-school-blue font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Campus Highlights & Achievements
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-school-navy mt-3 tracking-tight">
              Latest Campus Events & Student Victories
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-school-blue hover:text-school-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue"
          >
            <span>View Full School Calendar</span>
            <ArrowRight className="w-4 h-4 text-school-blue" />
          </a>
        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
              className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-school-blue transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Event Image Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="450"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 text-[11px] font-black px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-md backdrop-blur-md">
                  📅 {evt.date}
                </span>

                <span className={`absolute top-3 right-3 text-[11px] font-black px-3 py-1 rounded-full border shadow-sm ${evt.tagColor}`}>
                  {evt.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-school-navy mb-2 group-hover:text-school-blue transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-bold">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>Pavna Aligarh Campus</span>
                  </div>
                  <span className="text-school-blue font-extrabold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read More</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 text-slate-900 relative">
            <div className="relative h-64 sm:h-72 bg-slate-950">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Close event modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className={`text-xs font-black px-3 py-1 rounded-full border shadow-sm ${selectedEvent.tagColor}`}>
                  {selectedEvent.category}
                </span>
                <h3 className="font-heading font-black text-2xl mt-2 text-white">{selectedEvent.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600 border-b border-slate-100 pb-3">
                <span>📅 Date: {selectedEvent.date}</span>
                <span>•</span>
                <span>📍 Location: Pavna School Auditorium / Grounds</span>
              </div>

              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                {selectedEvent.details}
              </p>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2.5 bg-school-navy text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
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
