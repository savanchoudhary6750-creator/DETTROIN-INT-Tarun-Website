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
    <section id="admissions" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-gold font-bold text-xs uppercase tracking-widest bg-school-gold/10 px-3 py-1 rounded-full border border-school-gold/30">
            Hassle-Free Admission Process 2025-26
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            4 Simple Steps to Join Pavna Family
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            We ensure a smooth, transparent, and welcoming admission journey for parents and prospective students.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-school-gold/50 transition-all group hover:-translate-y-1 duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-heading font-extrabold text-3xl text-school-gold/50 group-hover:text-school-gold transition-colors">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-school-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-school-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-school-gold font-semibold">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Action Strip */}
        <div className="mt-16 bg-gradient-to-r from-school-navy to-slate-800 rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-heading font-extrabold text-2xl text-white">Ready to Take the Next Step?</h4>
            <p className="text-sm text-slate-300">
              Apply online today or call our admission desk to schedule a private campus tour.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={onOpenAdmissionModal}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-school-gold to-amber-600 text-school-navy font-bold rounded-xl shadow-glow hover:scale-105 transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Start Admission Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-school-gold" />
              <span>Download Prospectus</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
