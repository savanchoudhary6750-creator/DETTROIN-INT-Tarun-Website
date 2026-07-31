import React from 'react';
import { Star, Quote, HeartHandshake } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Parent of Class VIII Student',
      comment: 'Pavna School has surpassed our expectations. The SEEL framework has helped my daughter become remarkably confident and articulate. The STEM labs are truly world class.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    },
    {
      name: 'Sunita Verma',
      role: 'Parent of Primary Student',
      comment: 'The 1:12 student-teacher ratio makes a huge difference. Teachers know every child personally and provide custom academic support. The transport safety tracking is also fantastic.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    },
    {
      name: 'Amitabh Gupta',
      role: 'Parent of Cambridge Wing Student',
      comment: 'Enrolling my son in the Cambridge program at Pavna was the best decision. The global perspective and focus on critical research prepare students for top international universities.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-school-navy to-slate-900 text-white relative overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-gold font-bold text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
            Parent & Student Voices
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight">
            Trusted by Hundreds of Families Across Aligarh
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Read how our holistic approach to education is shaping bright futures and happy learners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Amber Quote Icon Backdrop */}
              <Quote className="w-14 h-14 text-amber-500/15 absolute top-4 right-4 pointer-events-none group-hover:text-amber-500/25 transition-colors" />

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center gap-3 relative z-10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-school-gold shadow-md"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-school-gold transition-colors">{rev.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Badge with Radial Glow */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-glow">
            <HeartHandshake className="w-5 h-5 text-school-gold shrink-0 animate-pulse" />
            <span>98.4% Parent Retention & Satisfaction Rate • Session 2024-25</span>
          </div>
        </div>

      </div>
    </section>
  );
}
