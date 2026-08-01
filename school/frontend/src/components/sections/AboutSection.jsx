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
          <span className="text-school-blue font-extrabold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            About Pavna School Aligarh
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-school-navy mt-3 tracking-tight">
            Transforming Purposeful Growth into Lifelong Greatness
          </h2>
          <p className="text-slate-700 font-medium mt-4 text-base sm:text-lg leading-relaxed">
            At Pavna School Aligarh, education goes far beyond textbooks. We nurture every child's unique potential through modern pedagogy, global standards, and character-building values.
          </p>
        </div>

        {/* Tab Navigation for Vision, Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Tab Buttons & Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Tabs */}
            <div className="flex p-1.5 bg-slate-100 rounded-2xl max-w-md border border-slate-200">
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue ${
                  activeTab === 'vision' ? 'bg-school-navy text-amber-400 shadow-md' : 'text-slate-700 hover:text-school-navy'
                }`}
                aria-label="View School Vision"
              >
                <div className="flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Our Vision</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue ${
                  activeTab === 'mission' ? 'bg-school-navy text-amber-400 shadow-md' : 'text-slate-700 hover:text-school-navy'
                }`}
                aria-label="View School Mission"
              >
                <div className="flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>Our Mission</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-extrabold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue ${
                  activeTab === 'values' ? 'bg-school-navy text-amber-400 shadow-md' : 'text-slate-700 hover:text-school-navy'
                }`}
                aria-label="View Core Values"
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span>Core Values</span>
                </div>
              </button>
            </div>

            {/* Tab Body */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/90 shadow-subtle min-h-[300px] flex-1 flex flex-col justify-center">
              {activeTab === 'vision' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold border border-amber-200">
                    <Eye className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-school-navy">Empowering World-Ready Leaders</h3>
                  <p className="text-slate-800 font-medium text-base leading-relaxed">
                    "To create a premier learning environment that nurtures intellectual curiosity, emotional maturity, and global responsibility, transforming each child's innate potential into a legacy of lifelong achievements."
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-800 font-bold">
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
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold border border-blue-200">
                    <Target className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-school-navy">Holistic Development & SEEL Framework</h3>
                  <p className="text-slate-800 font-medium text-base leading-relaxed">
                    "Our mission is to deliver student-centered education through our signature Social, Emotional, and Experiential Learning (SEEL) model, maintaining low student-teacher ratios (1:12) to ensure personalized academic and personal guidance."
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-slate-800 font-bold">
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
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold border border-emerald-200">
                    <Compass className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="font-heading text-2xl font-black text-school-navy">Pillars of Character & Culture</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {values.map((v, i) => (
                      <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="font-black text-sm text-school-navy">{v.title}</h4>
                        <p className="text-xs text-slate-700 font-medium mt-1">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Leadership Quote Card (Frosted Glass Dark Card with #E2E8F0 text) */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="relative glass-card rounded-3xl p-8 shadow-2xl border border-white/10 h-full flex flex-col justify-between" style={{ background: 'rgba(10, 25, 47, 0.95)' }}>
              
              <div>
                <Quote className="w-12 h-12 text-amber-400/50 mb-4" />
                
                <blockquote className="text-[#E2E8F0] text-base sm:text-lg italic leading-relaxed mb-6 font-sans font-medium">
                  "Every child who enters Pavna School Aligarh is recognized as a unique individual with infinite possibilities. Our mandate is not merely to teach subjects, but to ignite curiosity, instill resilience, and shape empathetic human beings."
                </blockquote>
              </div>

              <div>
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold border border-amber-400/40 shrink-0">
                    <UserCheck className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-lg text-white">Principal's Desk</h4>
                    <p className="text-xs text-amber-400 font-bold">Pavna School Aligarh Leadership</p>
                  </div>
                </div>

                {/* SEEL Badge Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#E2E8F0] font-bold">
                  <span>SEEL Certified Campus</span>
                  <span className="text-emerald-400 font-extrabold">1:12 Mentorship Ratio</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
