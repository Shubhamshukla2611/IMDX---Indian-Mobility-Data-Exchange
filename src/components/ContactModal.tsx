import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Building, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: 'General Inquiry',
    message: '',
  });

  useEffect(() => {
    if (!isOpen) setSubmitted(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      interest: 'General Inquiry',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-[#141414] border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-primary text-[11px] tracking-widest uppercase font-medium">
                  Connect With Us
                </span>
                <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mt-1">
                  IMDX Collaboration Inquiries
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Tecmotiv Solutions Pvt. Ltd. — India Mobility Data Exchange
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-medium text-[#E1E0CC]">Inquiry details captured</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Your details are held in this browser session only. No message was sent because this site does not currently have a configured submission service.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2 rounded-full bg-[#DEDBC8] text-black font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-[#DEDBC8] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Organization
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="OEM / Fleet / Govt"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-[#DEDBC8] transition-colors pl-9"
                      />
                      <Building className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                      Work Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-[#DEDBC8] transition-colors pl-9"
                      />
                      <Mail className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                    Ecosystem Focus Area
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#E1E0CC] focus:outline-none focus:border-[#DEDBC8] transition-colors"
                  >
                    <option value="Battery Passport & Traceability">Battery Passport & Traceability</option>
                    <option value="Connected Vehicle Interoperability">Connected Vehicle Interoperability</option>
                    <option value="Urban Mobility Intelligence">Urban Mobility Intelligence</option>
                    <option value="Data Exchange Governance">Data Exchange Governance & Standards</option>
                    <option value="General Inquiry">General Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                    Message / Collaboration Interest
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details about your interest in the mobility data exchange..."
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#E1E0CC] placeholder-gray-600 focus:outline-none focus:border-[#DEDBC8] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500">
                    Tecmotiv Solutions Pvt. Ltd.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#DEDBC8] text-black font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Review Inquiry
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
