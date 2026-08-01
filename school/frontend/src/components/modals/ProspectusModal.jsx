import React, { useState } from 'react';
import { X, Sparkles, Download, CheckCircle, AlertCircle, FileText, Loader2, BookOpen } from 'lucide-react';

export default function ProspectusModal({ isOpen, onClose, type = 'prospectus' }) {
  const isProspectus = type === 'prospectus';
  const modalTitle = isProspectus ? 'Download Academic Prospectus 2025-26' : 'Request Curriculum & SEEL Guide';
  const modalSubtitle = isProspectus 
    ? 'Get comprehensive information on CBSE & Cambridge streams, fee structure, and admission criteria.'
    : 'Download our detailed syllabus breakdown, SEEL framework, and holistic learning methodology guide.';

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentGrade: 'Nursery - UKG',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      newErrors.parentName = 'Please enter a valid full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. parent@domain.com).';
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate quick server request and instant file download response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger simulated file download after a brief delay
      setTimeout(() => {
        const dummyPdfContent = `Pavna School Aligarh - ${modalTitle}\nThank you ${formData.parentName}! For admissions assistance call +91 8006409344.`;
        const blob = new Blob([dummyPdfContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = isProspectus ? 'Pavna_School_Prospectus_2025.txt' : 'Pavna_School_Curriculum_Guide.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 800);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      studentGrade: 'Nursery - UKG',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        
        {/* Decorative Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-school-blue via-school-gold to-amber-500" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-blue"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-center gap-2 text-xs font-bold text-school-blue uppercase tracking-wider mb-2">
          {isProspectus ? (
            <FileText className="w-4 h-4 text-school-gold" />
          ) : (
            <BookOpen className="w-4 h-4 text-school-gold" />
          )}
          <span>{isProspectus ? 'Official Publication' : 'Academic Resource'}</span>
        </div>

        <h3 id="modal-title" className="font-heading font-extrabold text-2xl text-school-navy mb-2 leading-snug">
          {modalTitle}
        </h3>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          {modalSubtitle}
        </p>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl text-school-navy">Download Started!</h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Thank you <span className="font-semibold text-slate-900">{formData.parentName}</span>. Your document download has been initiated. A copy has also been sent to <span className="font-semibold text-slate-900">{formData.email}</span>.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs text-slate-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Need immediate assistance? Call our desk at <strong>+91 8006409344</strong></span>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 px-6 bg-school-navy text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-school-blue"
            >
              Done & Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            
            {/* Parent Full Name */}
            <div>
              <label htmlFor="modal-parentName" className="block text-xs font-bold text-slate-700 mb-1">
                Parent / Guardian Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-parentName"
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter your name"
                aria-invalid={!!errors.parentName}
                aria-describedby={errors.parentName ? "parentName-error" : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                  errors.parentName 
                    ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                    : 'border-slate-200 focus:border-school-blue focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.parentName && (
                <p id="parentName-error" className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.parentName}</span>
                </p>
              )}
            </div>

            {/* Grid for Grade & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-studentGrade" className="block text-xs font-bold text-slate-700 mb-1">
                  Target Grade
                </label>
                <select
                  id="modal-studentGrade"
                  name="studentGrade"
                  value={formData.studentGrade}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-school-blue bg-white"
                >
                  <option value="Nursery - UKG">Nursery - UKG</option>
                  <option value="Class I - V">Class I - V (Primary)</option>
                  <option value="Class VI - VIII">Class VI - VIII (Middle)</option>
                  <option value="Class IX - X (CBSE)">Class IX - X (CBSE)</option>
                  <option value="Class XI - XII (CBSE/Cambridge)">Class XI - XII (CBSE/Cambridge)</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                    errors.phone 
                      ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                      : 'border-slate-200 focus:border-school-blue focus:ring-2 focus:ring-blue-100'
                  }`}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="modal-email" className="block text-xs font-bold text-slate-700 mb-1">
                Parent Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="modal-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="parent@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                  errors.email 
                    ? 'border-red-400 bg-red-50/50 focus:ring-2 focus:ring-red-200' 
                    : 'border-slate-200 focus:border-school-blue focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-[11px] text-red-600 font-medium mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-school-gold via-amber-500 to-amber-600 text-school-navy font-extrabold rounded-xl shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 mt-4 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-school-navy" />
                  <span>Generating Direct Download...</span>
                </>
              ) : (
                <>
                  <span>Download Document PDF Now</span>
                  <Download className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-center text-[10px] text-slate-400">
              🔒 Your contact information is kept strictly confidential by Pavna School Admissions Office.
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
