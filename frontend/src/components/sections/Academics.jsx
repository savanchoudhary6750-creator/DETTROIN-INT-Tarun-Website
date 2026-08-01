import React, { useState } from 'react';
import { BookOpen, Sparkles, Award, Cpu, Globe, ArrowUpRight } from 'lucide-react';

export default function Academics() {
  const [selectedWing, setSelectedWing] = useState(0);

  const wings = [
    {
      id: 'early-years',
      badge: 'Nursery to UKG',
      title: 'Early Years Foundation (EYFS)',
      ratio: '1:8 Teacher Ratio',
      desc: 'Nurturing curiosity, sensory discovery, and foundational language & motor skills in a playful, secure environment.',
      subjects: ['Phonics & Storytelling', 'Sensory Play & Art', 'Basic Numeracy', 'Social Habits & Etiquette'],
      icon: Sparkles,
      color: 'from-amber-500/10 to-orange-500/10 border-amber-200 text-amber-600',
    },
    {
      id: 'primary',
      badge: 'Grades I to V',
      title: 'Primary Academic Wing',
      ratio: '1:12 Teacher Ratio',
      desc: 'Developing critical inquiry, STEAM foundations, creative writing, mathematical problem solving, and sports participation.',
      subjects: ['English & Vernacular', 'Mathematics & Logic', 'Environmental Science', 'Coding & Digital Literacy'],
      icon: BookOpen,
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-600',
    },
    {
      id: 'secondary',
      badge: 'Grades VI to X (CBSE)',
      title: 'Secondary & High School Wing',
      ratio: '1:12 Teacher Ratio',
      desc: 'Rigorous CBSE syllabus combined with advanced science labs, robotics, Olympiad preparation, and public speaking.',
      subjects: ['Physics, Chemistry, Biology', 'Advanced Mathematics', 'Social Sciences & Civics', 'Robotics & AI Tools'],
      icon: Cpu,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-600',
    },
    {
      id: 'cambridge',
      badge: 'Upper Secondary & A-Levels',
      title: 'Cambridge International Wing',
      ratio: 'Global Recognition',
      desc: 'Prestigious Cambridge International (IGCSE & AS/A Levels) curriculum preparing students for top Indian & overseas universities.',
      subjects: ['Global Perspectives', 'Advanced STEM Subjects', 'Business & Economics', 'Critical Research Projects'],
      icon: Globe,
      color: 'from-purple-500/10 to-violet-500/10 border-purple-200 text-purple-600',
    },
  ];

  return (
    <section id="academics" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-school-blue font-bold text-xs uppercase tracking-widest bg-blue-100/80 text-blue-800 px-3 py-1 rounded-full">
              Academic Excellence
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-school-navy mt-3 tracking-tight">
              Curriculum Designed for Tomorrow's Leaders
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm sm:text-base">
            Affiliated with CBSE and offering Cambridge International pathways, we provide progressive educational journeys tailored to each age group.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wings.map((wing, idx) => {
            const Icon = wing.icon;
            const isSelected = selectedWing === idx;
            return (
              <div
                key={wing.id}
                onClick={() => setSelectedWing(idx)}
                className={`group relative rounded-3xl p-8 transition-all duration-300 cursor-pointer border bg-white ${
                  isSelected 
                    ? 'shadow-card-hover border-school-blue ring-2 ring-school-blue/20' 
                    : 'border-slate-200/80 shadow-subtle hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Header Strip */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${wing.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {wing.badge}
                      </span>
                      <p className="text-[11px] font-bold text-school-blue mt-1">{wing.ratio}</p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-school-blue group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-bold text-xl text-school-navy mb-3 group-hover:text-school-blue transition-colors">
                  {wing.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {wing.desc}
                </p>

                {/* Key Subjects Badges */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">Key Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {wing.subjects.map((sub, sIdx) => (
                      <span key={sIdx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-school-blue transition-colors">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-school-navy to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-white">Looking for Detailed Syllabus & Assessment Rules?</h4>
            <p className="text-xs text-slate-300">Download our comprehensive Academic Prospectus and SEEL Curriculum guide.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-school-gold hover:bg-amber-500 text-school-navy font-bold rounded-xl text-sm transition-all shadow-md"
          >
            Request Curriculum Guide
          </a>
        </div>

      </div>
    </section>
  );
}
