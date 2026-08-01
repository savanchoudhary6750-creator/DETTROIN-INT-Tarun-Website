import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, GraduationCap, Users, BookOpen, Trophy, FileText, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function Hero({ onOpenAdmissionModal, onOpenProspectusModal, onExploreFacilities }) {
  const slides = [
    {
      id: 'stem',
      badge: 'Pillar 1: STEM Achievements & Innovations',
      badgeColor: 'bg-amber-400 text-slate-950 font-black',
      titleHighlight: 'Nurturing Minds,',
      titleMain: 'Building AI & Robotics Leaders',
      desc: 'Hands-on AI robotics, 3D printing, and STEM experimentation in Aligarh. Celebrating national victories and empirical discovery.',
      image: '/images/hero_slide_stem_1785563731780.png',
      imageAlt: 'Indian high school students celebrating 1st place in STEM robotics lab with trophy',
      tagline: 'STEM Robotics & AI Lab',
      subTagline: '1st Place Champions',
      statLabel: '100% Pass Rate',
      statSub: 'Excellence in Academics',
    },
    {
      id: 'global',
      badge: 'Pillar 2: Cambridge Dual Pathway',
      badgeColor: 'bg-blue-400 text-slate-950 font-black',
      titleHighlight: 'Future Global Leaders,',
      titleMain: 'Cambridge & CBSE Excellence',
      desc: 'Prestigious Cambridge International (IGCSE & A-Levels) dual pathway preparing students for top Indian & overseas universities.',
      image: '/images/hero_slide_global_1785563750027.png',
      imageAlt: 'Indian students collaborating around Cambridge International research books in modern library',
      tagline: 'Cambridge Dual Pathway',
      subTagline: 'Global Perspectives & IGCSE',
      statLabel: 'Global Recognition',
      statSub: 'Ivy League Admissions',
    },
    {
      id: 'seel',
      badge: 'Pillar 3: Social Emotional & Experiential Learning',
      badgeColor: 'bg-emerald-400 text-slate-950 font-black',
      titleHighlight: 'Building Character &',
      titleMain: 'Resilient Young Leaders',
      desc: 'Integrating empathy, emotional intelligence, and experiential values through our signature SEEL framework curriculum.',
      image: '/images/hero_slide_seel_1785563769093.png',
      imageAlt: 'Primary school teacher guiding students on SEEL empathy mat in indoor-outdoor classroom',
      tagline: 'SEEL Learning Zone',
      subTagline: 'Empathy & Leadership',
      statLabel: '1:12 Ratio',
      statSub: 'Personalized Mentorship',
    },
    {
      id: 'sports',
      badge: 'Pillar 4: Olympic-Grade Athletics & Wellness',
      badgeColor: 'bg-orange-400 text-slate-950 font-black',
      titleHighlight: 'Olympic-Grade Athletics,',
      titleMain: 'Champions On & Off the Field',
      desc: '15-acre sports complex featuring synthetic track, swimming pool, indoor courts, and full-time NIS certified coaches.',
      image: '/images/hero_slide_sports_1785563787859.png',
      imageAlt: 'Male high school athlete winning 100m sprint at synthetic blue track',
      tagline: '15-Acre Sports Complex',
      subTagline: 'Synthetic Blue Track & Pool',
      statLabel: '25+ Clubs',
      statSub: 'Sports & Co-curriculars',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlideData = slides[currentSlide];

  const stats = [
    { icon: GraduationCap, label: 'CBSE & Cambridge', sub: 'Global Dual Pathway' },
    { icon: Users, label: '1:12 Ratio', sub: 'Personalized Mentorship' },
    { icon: Trophy, label: '100% Pass Rate', sub: 'Excellence in Academics' },
    { icon: BookOpen, label: '25+ Clubs', sub: 'Sports & Co-curriculars' },
  ];

  return (
    <section 
      id="home" 
      className="relative overflow-hidden text-white pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
      style={{
        background: 'linear-gradient(135deg, rgba(11, 19, 43, 0.96) 0%, rgba(15, 23, 42, 0.92) 100%)'
      }}
    >
      
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/15 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Slider Navigation Controls & Indicator */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Interactive Hero Showcase
            </span>
            <span className="text-xs text-slate-300 font-bold hidden sm:inline">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto-Play Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
              aria-label={isPlaying ? 'Pause Hero Slider Auto-Play' : 'Start Hero Slider Auto-Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-1.5 mx-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to Hero Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Previous Hero Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Next Hero Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Grid Slide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Dynamic Headlines & Dominant CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in key={currentSlide}">
            
            {/* Dynamic Pillar Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{activeSlideData.badge}</span>
            </div>

            {/* Main Animated Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-sm block">
                {activeSlideData.titleHighlight}
              </span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-md block mt-1">
                {activeSlideData.titleMain}
              </span>
            </h1>

            {/* High-Contrast Paragraph description (#E2E8F0) */}
            <p className="text-[#E2E8F0] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {activeSlideData.desc}
            </p>

            {/* CTA Action Buttons - Dominant Gold CTA & Transparent Glass CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black rounded-xl shadow-glow hover:scale-105 active:scale-95 transition-all duration-200 text-base group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 border border-amber-300"
                aria-label="Apply for Admission 2025-26"
              >
                <span>Apply for Admission 2025-26</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <button
                onClick={onOpenProspectusModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 backdrop-blur-md transition-all duration-200 text-base shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 gap-2"
                aria-label="Download Academic Prospectus PDF"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download Prospectus</span>
              </button>
            </div>

            {/* Trust badge tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-200 font-semibold">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CBSE Board Affiliated</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cambridge Assessment Partner</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>15+ Acre Green Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Standardized Hero Slide Image Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-500/25 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Standardized Hero Slide Image Card (aspect-ratio: 16/9, rounded-[16px]) */}
              <div className="relative rounded-[16px] overflow-hidden glass-card p-2 border border-white/15 shadow-2xl">
                <div className="relative aspect-video rounded-[12px] overflow-hidden bg-slate-950 group">
                  
                  {/* Photo with aspect-ratio 16/9 & object-cover */}
                  <img
                    src={activeSlideData.image}
                    alt={activeSlideData.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width="1000"
                    height="562"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Inner Glassmorphism Badges over Image */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-black px-3 py-1 rounded-full border border-amber-400/40 shadow-md">
                      {activeSlideData.tagline}
                    </span>
                    <span className="text-white text-xs flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-md font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> {activeSlideData.subTagline}
                    </span>
                  </div>

                  {/* Bottom Inner Glass Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1">
                    <div className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] uppercase shadow-sm ${activeSlideData.badgeColor}`}>
                      Pavna School Aligarh
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {activeSlideData.titleMain}
                    </h3>
                  </div>

                </div>
              </div>

              {/* Achievements Bar (Frosted Glass) */}
              <div className="p-3 rounded-[16px] glass-card grid grid-cols-3 gap-2 text-center relative z-10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:border-amber-400/50 transition-colors">
                  <span className="block text-xs sm:text-sm font-black text-amber-400">TOP 10%</span>
                  <span className="text-[10px] font-extrabold text-slate-200 uppercase tracking-tight">CBSE Aligarh</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:border-emerald-400/50 transition-colors">
                  <span className="block text-xs sm:text-sm font-black text-emerald-400">98%</span>
                  <span className="text-[10px] font-extrabold text-slate-200 uppercase tracking-tight">Top Univ Admit</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:border-blue-400/50 transition-colors">
                  <span className="block text-xs sm:text-sm font-black text-blue-400">WINNERS</span>
                  <span className="text-[10px] font-extrabold text-slate-200 uppercase tracking-tight">Robotics '24</span>
                </div>
              </div>

              {/* Dynamic Floating Badge */}
              <div className="mt-3 bg-white text-slate-900 p-3.5 sm:p-4 rounded-[16px] shadow-2xl border border-slate-200 flex items-center justify-between gap-3 transform hover:-translate-y-1 transition-transform duration-300 relative z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base shrink-0 border border-amber-200">
                    98%
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-extrabold text-school-navy">Parent Satisfaction Rate</p>
                    <p className="text-[11px] text-slate-600 font-medium">Based on 500+ Verified Reviews</p>
                  </div>
                </div>
                <button 
                  onClick={onExploreFacilities}
                  className="hidden sm:inline-block px-3.5 py-2 rounded-xl bg-school-navy text-white text-xs font-bold hover:bg-slate-800 transition-colors shrink-0"
                  aria-label="Explore Campus Facilities"
                >
                  Explore Campus &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Stats Chips Grid at Bottom (Frosted Glass) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="p-4 sm:p-5 rounded-[16px] glass-card cursor-pointer group"
              >
                <Icon className="w-7 h-7 text-amber-400 mx-auto mb-2.5 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-amber-300 transition-colors">{stat.label}</h4>
                <p className="text-xs text-[#E2E8F0] font-medium mt-1">{stat.sub}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
