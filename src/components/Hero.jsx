import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';

export default function Hero({ onOpenAdmissionModal, onExploreFacilities }) {
  const stats = [
    { icon: GraduationCap, label: 'CBSE & Cambridge', sub: 'Global Curriculum' },
    { icon: Users, label: '1:12 Ratio', sub: 'Personalized Mentorship' },
    { icon: Trophy, label: '100% Pass Rate', sub: 'Excellence in Academics' },
    { icon: BookOpen, label: '25+ Clubs', sub: 'Sports & Co-curriculars' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-school-navy to-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/15 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-school-gold text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Admissions Open for Academic Session 2025-26</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
              Nurturing Minds, <br className="hidden sm:block" />
              Building <span className="gradient-text-gold">Character & Leaders</span>
            </h1>

            {/* Paragraph description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <span className="text-white font-semibold">Pavna School Aligarh</span> — a world-class educational sanctuary combining holistic CBSE & Cambridge curriculum with Social, Emotional & Experiential Learning (SEEL).
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-school-gold via-amber-500 to-amber-600 text-school-navy font-extrabold rounded-xl shadow-glow hover:scale-105 active:scale-95 transition-all text-base group"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreFacilities}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold rounded-xl border border-slate-700/80 hover:border-slate-500 backdrop-blur-md transition-all text-base shadow-md active:scale-95"
              >
                <span>Explore Campus & Labs</span>
              </button>
            </div>

            {/* Trust badge tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CBSE Board Affiliated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cambridge Assessment Partner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>15+ Acre Green Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Soft Ambient Amber Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-500/20 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card with Glassmorphism */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur-xl p-2.5 border border-slate-700/60 shadow-2xl">
                <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 flex flex-col justify-between p-6 bg-cover bg-center" style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop')`
                }}>
                  {/* Top card tag */}
                  <div className="flex justify-between items-center">
                    <span className="bg-school-navy/80 text-school-gold text-xs font-bold px-3 py-1 rounded-full border border-school-gold/30">
                      Aligarh Campus
                    </span>
                    <span className="text-white/80 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Tour Available
                    </span>
                  </div>

                  {/* Center info */}
                  <div className="space-y-2">
                    <div className="inline-block px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wide uppercase">
                      Social, Emotional & Experiential Learning
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Where Innovation Meets Education
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      State-of-the-art AI robotics labs, smart digital classrooms, multi-sport complex, and eco-friendly lush green surroundings.
                    </p>
                  </div>

                  {/* Bottom Quick Feature Strip */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                    <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                      <p className="text-slate-400 text-[10px] uppercase font-bold">Student Safety</p>
                      <p className="font-bold text-white">360° GPS & CCTV</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                      <p className="text-slate-400 text-[10px] uppercase font-bold">Class Ratio</p>
                      <p className="font-bold text-school-gold">1:8 Early Years</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  98%
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Parent Satisfaction</p>
                  <p className="text-[10px] text-slate-500">Based on 500+ Reviews</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Counter Bar at Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-school-gold/30 transition-colors">
                <Icon className="w-6 h-6 text-school-gold mx-auto mb-2" />
                <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white">{stat.label}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
