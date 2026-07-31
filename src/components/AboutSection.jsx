import React, { useState } from 'react';
import { Target, Eye, Heart, Compass, CheckCircle2, Quote, UserCheck } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('vision');

  const values = [
    { title: 'Integrity & Ethics', desc: 'Instilling truthful principles, honesty, and sound moral judgment.' },
    { title: 'Academic Rigor', desc: 'Fostering deep inquiry, critical thinking, and intellectual curiosity.' },
    { title: 'Empathy & Inclusivity', desc: 'Building compassionate global citizens who respect diversity.' },
    { title: 'Future Readiness', desc: 'Equipping students with tech fluency, creativity, and leadership skills.' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-blue font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            About Pavna School Aligarh
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-school-navy mt-3 tracking-tight">
            Transforming Purposeful Growth into Lifelong Greatness
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            At Pavna School Aligarh, education goes far beyond textbooks. We nurture every child's unique potential through modern pedagogy, global standards, and character-building values.
          </p>
        </div>

        {/* Tab Navigation for Vision, Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Tab Buttons & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-xl max-w-md">
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'vision' ? 'bg-white text-school-navy shadow-sm' : 'text-slate-600 hover:text-school-navy'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4 text-school-gold" />
                  <span>Our Vision</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'mission' ? 'bg-white text-school-navy shadow-sm' : 'text-slate-600 hover:text-school-navy'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 text-school-blue" />
                  <span>Our Mission</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                  activeTab === 'values' ? 'bg-white text-school-navy shadow-sm' : 'text-slate-600 hover:text-school-navy'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-600" />
                  <span>Core Values</span>
                </div>
              </button>
            </div>

            {/* Tab Body */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-subtle min-h-[300px] flex flex-col justify-center">
              {activeTab === 'vision' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-school-navy">Empowering World-Ready Leaders</h3>
                  <p className="text-slate-700 leading-relaxed">
                    "To create a premier learning environment that nurtures intellectual curiosity, emotional maturity, and global responsibility, transforming each child's innate potential into a legacy of lifelong achievements."
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Integrating international academic standards with traditional Indian ethics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Fostering environmental sustainability, innovation, and digital mastery.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-school-navy">Holistic Development & SEEL Framework</h3>
                  <p className="text-slate-700 leading-relaxed">
                    "Our mission is to deliver student-centered education through our signature Social, Emotional, and Experiential Learning (SEEL) model, maintaining low student-teacher ratios (1:12) to ensure personalized academic and personal guidance."
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-school-blue shrink-0 mt-0.5" />
                      <span>Providing hands-on lab experiments, robotics workshops, and field trips.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-school-blue shrink-0 mt-0.5" />
                      <span>Developing athletic, artistic, and rhetorical skills through 25+ co-curricular clubs.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-school-navy">Pillars of Character & Culture</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {values.map((v, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-slate-200">
                        <h4 className="font-bold text-sm text-school-navy">{v.title}</h4>
                        <p className="text-xs text-slate-600 mt-1">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Leadership Quote Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-school-navy to-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800">
              
              <Quote className="w-12 h-12 text-school-gold/40 mb-4" />
              
              <blockquote className="text-slate-200 text-base italic leading-relaxed mb-6 font-sans">
                "Every child who enters Pavna School Aligarh is recognized as a unique individual with infinite possibilities. Our mandate is not merely to teach subjects, but to ignite curiosity, instill resilience, and shape empathetic human beings."
              </blockquote>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-school-gold flex items-center justify-center font-bold border border-school-gold/40">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">Principal's Desk</h4>
                  <p className="text-xs text-school-gold font-medium">Pavna School Aligarh Leadership</p>
                </div>
              </div>

              {/* SEEL Badge Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>SEEL Certified Campus</span>
                <span className="text-emerald-400 font-semibold">1:12 Mentorship Ratio</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
