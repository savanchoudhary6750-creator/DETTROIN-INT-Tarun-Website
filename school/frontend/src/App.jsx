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
import ProspectusModal from './components/modals/ProspectusModal';
import { X, Sparkles, Send, CheckCircle, Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  
  // Prospectus & Curriculum Modal State
  const [prospectusModal, setProspectusModal] = useState({
    isOpen: false,
    type: 'prospectus',
  });

  const [admissionFormData, setAdmissionFormData] = useState({
    name: '',
    grade: 'Nursery - UKG',
    phone: '',
    email: '',
  });

  const [admissionFormErrors, setAdmissionFormErrors] = useState({});

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!admissionFormData.name.trim()) errors.name = 'Student name is required.';
    if (!admissionFormData.phone.trim() || admissionFormData.phone.length < 10) errors.phone = 'Valid 10-digit phone is required.';
    if (!admissionFormData.email.trim() || !admissionFormData.email.includes('@')) errors.email = 'Valid email is required.';

    if (Object.keys(errors).length > 0) {
      setAdmissionFormErrors(errors);
      return;
    }

    setModalSubmitted(true);
    setTimeout(() => {
      setModalSubmitted(false);
      setIsAdmissionModalOpen(false);
      setAdmissionFormData({ name: '', grade: 'Nursery - UKG', phone: '', email: '' });
      setAdmissionFormErrors({});
    }, 2500);
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProspectusModal = (type = 'prospectus') => {
    setProspectusModal({ isOpen: true, type });
  };

  const closeProspectusModal = () => {
    setProspectusModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-school-cream text-slate-800 antialiased font-sans pb-16 md:pb-0">
      
      {/* Top Utility Announcement Bar (Collapsible) */}
      <TopBar 
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onOpenProspectusModal={() => openProspectusModal('prospectus')} 
      />

      {/* Sticky Main Navigation with Backdrop Blur */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onOpenProspectusModal={() => openProspectusModal('prospectus')} 
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero 
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          onOpenProspectusModal={() => openProspectusModal('prospectus')}
          onExploreFacilities={() => handleNavigate('facilities')}
        />
        
        <AboutSection />

        <Academics 
          onOpenProspectusModal={() => openProspectusModal('curriculum')}
        />

        <Facilities 
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        />

        <AdmissionStep 
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} 
        />

        <Testimonials />

        <EventsNotice />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenProspectusModal={() => openProspectusModal('prospectus')} 
      />

      {/* Mobile Sticky Floating Action Bar (WhatsApp & Direct Call) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 flex items-center gap-2 shadow-2xl">
        <a
          href="https://wa.me/918006409344?text=Hi%20Pavna%20School%20Aligarh%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          aria-label="Send WhatsApp Inquiry to Pavna School"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp Inquiry</span>
        </a>

        <a
          href="tel:+918006409344"
          className="flex-1 py-3 px-3 bg-gradient-to-r from-school-gold via-amber-400 to-amber-500 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          aria-label="Call Pavna School Admissions Hotline"
        >
          <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
          <span>Call Admissions</span>
        </a>
      </div>

      {/* Reusable Prospectus / Curriculum Download Modal */}
      <ProspectusModal 
        isOpen={prospectusModal.isOpen}
        onClose={closeProspectusModal}
        type={prospectusModal.type}
      />

      {/* Admission Quick Modal */}
      {isAdmissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-school-gold via-amber-400 to-amber-600" />

            <button
              onClick={() => setIsAdmissionModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Admissions Open 2025-26</span>
            </div>

            <h3 className="font-heading font-black text-2xl text-school-navy mb-2">
              Express Admission Inquiry
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-medium">
              Fill out this quick form and our admissions desk will call you back with prospectus & fee details.
            </p>

            {modalSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-black text-xl text-school-navy">Inquiry Received!</h4>
                <p className="text-xs text-slate-600 font-medium">
                  Thank you! Our admission team at Pavna School Aligarh will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAdmissionSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Student's Full Name *</label>
                  <input
                    type="text"
                    required
                    value={admissionFormData.name}
                    onChange={(e) => {
                      setAdmissionFormData({ ...admissionFormData, name: e.target.value });
                      if (admissionFormErrors.name) setAdmissionFormErrors({ ...admissionFormErrors, name: null });
                    }}
                    placeholder="Enter student name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-school-blue focus:ring-2 focus:ring-blue-100"
                  />
                  {admissionFormErrors.name && <p className="text-[11px] text-red-600 font-bold mt-1">{admissionFormErrors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Seeking Grade *</label>
                    <select 
                      value={admissionFormData.grade}
                      onChange={(e) => setAdmissionFormData({ ...admissionFormData, grade: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-school-blue bg-white font-medium"
                    >
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
                      value={admissionFormData.phone}
                      onChange={(e) => {
                        setAdmissionFormData({ ...admissionFormData, phone: e.target.value });
                        if (admissionFormErrors.phone) setAdmissionFormErrors({ ...admissionFormErrors, phone: null });
                      }}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-school-blue focus:ring-2 focus:ring-blue-100"
                    />
                    {admissionFormErrors.phone && <p className="text-[11px] text-red-600 font-bold mt-1">{admissionFormErrors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent Email *</label>
                  <input
                    type="email"
                    required
                    value={admissionFormData.email}
                    onChange={(e) => {
                      setAdmissionFormData({ ...admissionFormData, email: e.target.value });
                      if (admissionFormErrors.email) setAdmissionFormErrors({ ...admissionFormErrors, email: null });
                    }}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-school-blue focus:ring-2 focus:ring-blue-100"
                  />
                  {admissionFormErrors.email && <p className="text-[11px] text-red-600 font-bold mt-1">{admissionFormErrors.email}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-school-gold via-amber-400 to-amber-500 text-school-navy font-black rounded-xl shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 mt-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 text-school-navy" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
