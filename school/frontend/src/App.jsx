import React, { useState } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import Academics from './components/sections/Academics';
import Facilities from './components/sections/Facilities';
import AdmissionStep from './components/sections/AdmissionStep';
import Testimonials from './components/sections/Testimonials';
import EventsNotice from './components/sections/EventsNotice';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import { X, Sparkles, Send, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
    setTimeout(() => {
      setModalSubmitted(false);
      setIsAdmissionModalOpen(false);
    }, 2500);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-school-cream text-slate-800 antialiased font-sans">
      
      {/* Top Utility Announcement Bar */}
      <TopBar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      {/* Sticky Main Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} 
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero 
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          onExploreFacilities={() => handleNavigate('facilities')}
        />
        
        <AboutSection />

        <Academics />

        <Facilities />

        <AdmissionStep onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        <Testimonials />

        <EventsNotice />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Admission Quick Modal */}
      {isAdmissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            
            <button
              onClick={() => setIsAdmissionModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-school-gold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Admissions Open 2025-26</span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-school-navy mb-2">
              Express Admission Inquiry
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Fill out this quick form and our admissions desk will call you back with prospectus & fee details.
            </p>

            {modalSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-school-navy">Inquiry Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! Our admission team at Pavna School Aligarh will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAdmissionSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Student's Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-school-blue focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Seeking Grade *</label>
                    <select className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-school-blue bg-white">
                      <option>Nursery - UKG</option>
                      <option>Class I - V</option>
                      <option>Class VI - VIII</option>
                      <option>Class IX - X (CBSE)</option>
                      <option>Class XI - XII (CBSE/Cambridge)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-school-blue focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-school-blue focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-school-gold to-amber-600 text-school-navy font-bold rounded-xl shadow-glow hover:scale-[1.02] transition-all text-sm flex items-center justify-center gap-2 mt-4"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
