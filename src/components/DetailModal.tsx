import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowUpRight, ShieldCheck } from 'lucide-react';

export interface CardDetail {
  number: string;
  title: string;
  icon: string;
  items: string[];
  description: string;
  scopeNotes: string[];
}

interface DetailModalProps {
  card: CardDetail | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ card, onClose }) => {
  useEffect(() => {
    if (!card) return;

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
  }, [card, onClose]);

  return (
    <AnimatePresence>
      {card && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#181818] border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-12 h-12 rounded-xl object-cover border border-white/10"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-xs font-mono tracking-wider">
                      {card.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                      Exploratory Blueprint
                    </span>
                  </div>
                  <h3 id="detail-modal-title" className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mt-0.5">
                    {card.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Explanatory description */}
            <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
              {card.description}
            </p>

            {/* Checklist items */}
            <div className="space-y-3 mb-6 bg-[#121212] p-4 rounded-xl border border-white/[0.04]">
              <div className="text-xs uppercase tracking-wider text-primary font-medium mb-1">
                Explored Framework Objectives
              </div>
              {card.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Development context disclaimer */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-black/40 border border-white/[0.05] text-[11px] text-gray-400">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-primary/90 font-medium">Development Status:</strong> India Mobility Data Exchange is being developed by Tecmotiv Solutions Pvt. Ltd. These capabilities represent prospective architecture and interoperability models currently in development.
              </div>
            </div>

            {/* Footer Close button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#DEDBC8] text-black font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Back to Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
