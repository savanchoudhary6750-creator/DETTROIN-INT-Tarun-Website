import React from 'react';
import { Calendar, BellRing, Trophy, Sparkles, MapPin, ArrowRight } from 'lucide-react';

export default function EventsNotice() {
  const events = [
    {
      date: '18 AUG 2025',
      title: 'Annual STEM & Robotics Exhibition 2025',
      category: 'Academic Fest',
      desc: 'Students showcase 3D printed models, AI chatbots, and automated robotic arms in the main school hall.',
      icon: Sparkles,
      tagColor: 'bg-amber-100 text-amber-800',
    },
    {
      date: '25 SEP 2025',
      title: 'Inter-School Athletics & Sports Meet',
      category: 'Sports Arena',
      desc: '3-day sporting spectacle featuring track & field events, basketball finals, and swimming championship.',
      icon: Trophy,
      tagColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      date: '10 OCT 2025',
      title: 'Cambridge International Olympiad Registration',
      category: 'Curriculum',
      desc: 'Registration open for Cambridge Science & Math Olympiad for Upper Secondary & High School students.',
      icon: Calendar,
      tagColor: 'bg-blue-100 text-blue-800',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-school-blue font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Life at Pavna School
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-school-navy mt-3 tracking-tight">
              Latest Campus Events & Announcements
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-school-blue hover:text-school-navy transition-colors"
          >
            <span>View Full School Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl border border-slate-200/80 bg-slate-50 p-6 hover:bg-white hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-heading font-bold text-xs px-3 py-1 rounded-full bg-white text-slate-700 shadow-sm border border-slate-200">
                      📅 {evt.date}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${evt.tagColor}`}>
                      {evt.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-school-navy mb-2 group-hover:text-school-blue transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-school-gold" />
                    <span>Aligarh Campus</span>
                  </div>
                  <span className="text-school-blue font-bold group-hover:underline">Details &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
