import React, { useState } from 'react';
import { BookOpen, Sparkles, Cpu, Globe, ArrowUpRight, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

export default function Academics({ onOpenProspectusModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const wings = [
    {
      id: 'early-years',
      category: 'eyfs',
      badge: 'Nursery to UKG',
      title: 'Early Years Foundation (EYFS)',
      ratio: '1:8 Teacher-Student Ratio',
      desc: 'Nurturing curiosity, sensory discovery, and foundational language & motor skills in a playful, highly secure environment.',
      subjects: ['Phonics & Storytelling', 'Sensory Play & Creative Art', 'Basic Numeracy & Patterns', 'Social Habits & Etiquette'],
      highlights: ['Montessori & Reggio Emilia Inspired', 'Dedicated Soft Play Zone', 'Language Immersion'],
      icon: Sparkles,
      color: 'from-amber-500/10 to-orange-500/10 border-amber-200 text-amber-700',
    },
    {
      id: 'primary',
      category: 'primary',
      badge: 'Grades I to V',
      title: 'Primary Academic Wing',
      ratio: '1:12 Teacher-Student Ratio',
      desc: 'Developing critical inquiry, STEAM foundations, creative writing, mathematical problem solving, and structured sports participation.',
      subjects: ['English & Vernacular Studies', 'Mathematics & Logic', 'Environmental Science', 'Coding & Digital Literacy'],
      highlights: ['Activity-Based Experiential Learning', 'Daily SEEL Workshops', 'Intramural Sports'],
      icon: BookOpen,
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-700',
    },
    {
      id: 'secondary',
      category: 'secondary',
      badge: 'Grades VI to X (CBSE)',
      title: 'Secondary & High School Wing',
      ratio: '1:12 Teacher-Student Ratio',
      desc: 'Rigorous CBSE syllabus combined with advanced science labs, robotics, Olympiad preparation, and public speaking competitions.',
      subjects: ['Physics, Chemistry, Biology', 'Advanced Mathematics', 'Social Sciences & Civics', 'Robotics & AI Tools'],
      highlights: ['CBSE Board Exam Excellence', 'National Olympiad Training', 'Leadership Clubs'],
      icon: Cpu,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-700',
    },
    {
      id: 'cambridge',
      category: 'cambridge',
      badge: 'Upper Secondary & A-Levels',
      title: 'Cambridge International Wing',
      ratio: 'Global Academic Recognition',
      desc: 'Prestigious Cambridge International (IGCSE & AS/A Levels) curriculum preparing students for top Indian & overseas university admissions.',
      subjects: ['Global Perspectives', 'Advanced STEM Subjects', 'Business & Economics', 'Critical Research Projects'],
      highlights: ['Dual Certification Option', 'SAT / ACT Guidance', 'Global Exchange Programs'],
      icon: Globe,
      color: 'from-purple-500/10 to-violet-500/10 border-purple-200 text-purple-700',
    },
  ];

  const filteredWings = activeTab === 'all' 
    ? wings 
    : wings.filter(wing => wing.category === activeTab);

  return (
    <section id="academics" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-school-blue font-extrabold text-xs uppercase tracking-widest bg-blue-100/90 text-blue-900 px-3.5 py-1.5 rounded-full border border-blue-200">
              Academic Curriculum
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-school-navy mt-3 tracking-tight">
              Curriculum Designed for Tomorrow's Leaders
            </h2>
          </div>
          <p className="text-slate-700 font-medium max-w-md text-sm sm:text-base leading-relaxed">
            Affiliated with CBSE and offering Cambridge International pathways, we provide progressive educational journeys tailored to every developmental stage.
          </p>
        </div>

        {/* Animated Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {[
            { id: 'all', label: 'All Academic Wings' },
            { id: 'eyfs', label: 'Early Years (EYFS)' },
            { id: 'primary', label: 'Primary Wing (I - V)' },
            { id: 'secondary', label: 'Secondary CBSE (VI - X)' },
            { id: 'cambridge', label: 'Cambridge International' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue ${
                activeTab === tab.id
                  ? 'bg-school-navy text-amber-400 shadow-md scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWings.map((wing) => {
            const Icon = wing.icon;
            return (
              <div
                key={wing.id}
                className="group relative rounded-3xl p-8 transition-all duration-300 border bg-white border-slate-200 shadow-subtle hover:border-school-blue hover:shadow-card-hover flex flex-col justify-between animate-fade-in"
              >
                <div>
                  {/* Header Strip */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${wing.color} border shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-black px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                          {wing.badge}
                        </span>
                        <p className="text-xs font-bold text-school-blue mt-1.5">{wing.ratio}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-school-blue group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-extrabold text-2xl text-school-navy mb-3 group-hover:text-school-blue transition-colors">
                    {wing.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                    {wing.desc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mb-6 space-y-2">
                    {wing.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Subjects Badges */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2.5">Core Curriculum Focus:</p>
                  <div className="flex flex-wrap gap-2">
                    {wing.subjects.map((sub, sIdx) => (
                      <span key={sIdx} className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-blue-50 group-hover:text-school-blue transition-colors border border-slate-200/60">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner for Curriculum Guide */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-school-navy via-slate-900 to-school-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Academic Syllabus 2025-26</span>
            </div>
            <h4 className="font-heading font-black text-xl text-white">Looking for Detailed Grade Syllabus & SEEL Guide?</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl">
              Download our comprehensive Academic Prospectus and SEEL Curriculum guide in PDF format.
            </p>
          </div>
          <button
            onClick={onOpenProspectusModal}
            className="shrink-0 px-6 py-3.5 bg-gradient-to-r from-school-gold via-amber-400 to-amber-500 text-school-navy font-black rounded-xl text-sm transition-all shadow-md hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 flex items-center gap-2"
          >
            <span>Request Curriculum Guide</span>
            <ChevronRight className="w-4 h-4 text-school-navy" />
          </button>
        </div>

      </div>
    </section>
  );
}
