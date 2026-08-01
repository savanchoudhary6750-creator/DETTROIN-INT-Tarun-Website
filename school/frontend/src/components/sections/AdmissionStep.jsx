import React from 'react';
import { ClipboardList, Calendar, FileCheck, Award, ArrowRight, Download } from 'lucide-react';

export default function AdmissionStep({ onOpenAdmissionModal }) {
  const steps = [
    {
      num: '01',
      title: 'Online Application',
      desc: 'Submit basic student & parent details through our quick online inquiry portal.',
      icon: ClipboardList,
    },
    {
      num: '02',
      title: 'Campus Tour & Interaction',
      desc: 'Visit our Aligarh campus to experience the infrastructure and meet academic counselors.',
      icon: Calendar,
    },
    {
      num: '03',
      title: 'Document Submission',
      desc: 'Upload/submit birth certificate, previous school records, and transfer certificate.',
      icon: FileCheck,
    },
    {
      num: '04',
      title: 'Enrollment & Welcome',
      desc: 'Complete fee payment and receive your child’s official student kit & orientation schedule.',
      icon: Award,
    },
  ];

  return (
    <section 
      id="admissions" 
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 25, 47, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)'
      }}
    >
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            Hassle-Free Admission Process 2025-26
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            4 Simple Steps to Join Pavna Family
          </h2>
          <p className="text-[#E2E8F0] font-medium mt-4 text-base sm:text-lg leading-relaxed">
            We ensure a smooth, transparent, and welcoming admission journey for parents and prospective students.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-heading font-black text-3xl text-amber-400/60 group-hover:text-amber-400 transition-colors">
                      {s.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400 border border-white/15">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#E2E8F0] font-medium text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-amber-400 font-extrabold">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Action Strip */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl" style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-heading font-black text-2xl text-white">Ready to Take the Next Step?</h4>
            <p className="text-sm text-[#E2E8F0] font-medium">
              Apply online today or call our admission desk to schedule a private campus tour.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={onOpenAdmissionModal}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black rounded-xl shadow-glow hover:scale-105 transition-all text-sm flex items-center justify-center gap-2 border border-amber-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
              aria-label="Start Admission Inquiry"
            >
              <span>Start Admission Inquiry</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 text-sm flex items-center justify-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
              aria-label="Navigate to Contact Section"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Contact Admissions Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
