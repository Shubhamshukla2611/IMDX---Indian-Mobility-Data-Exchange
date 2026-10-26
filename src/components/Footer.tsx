import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About IMDX', href: '#about' },
    { label: 'Key Benefits', href: '#benefits' },
    { label: 'Use Cases', href: '#use-cases' },
  ];

  const useCaseLinks = [
    'Connected Vehicles & Telematics',
    'Battery Data & Traceability',
    'Urban Mobility & Planning',
  ];

  return (
    <footer className="bg-black border-t border-white/[0.06] pt-16 pb-12 px-4 md:px-8 text-left relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.05]">
          {/* Identity column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-medium tracking-tight text-[#E1E0CC] mb-1">
                IMDX
              </div>
              <div className="text-primary text-xs font-mono tracking-wider uppercase mb-4">
                India Mobility Data Exchange
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-6">
                An initiative being developed by Tecmotiv Solutions Pvt. Ltd. to support trusted, interoperable mobility data exchange across India’s transportation and electric mobility ecosystem.
              </p>
            </div>

            <div className="text-[11px] text-gray-500 font-light">
              Data Sovereignty · Federated Trust · Interoperability
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 list-none m-0 p-0 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#E1E0CC] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onContactClick}
                  className="text-gray-400 hover:text-[#E1E0CC] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
                Primary Use Cases
              </div>
              <ul className="space-y-2 list-none m-0 p-0 text-xs text-gray-400 font-light mb-6">
                {useCaseLinks.map((uc, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                onClick={onContactClick}
                className="text-xs text-primary hover:text-white underline decoration-white/20 hover:decoration-white transition-colors cursor-pointer"
              >
                Inquire about IMDX Collaboration →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-light">
          <div>
            © Tecmotiv Solutions Pvt. Ltd. All rights reserved. India Mobility Data Exchange is an initiative in development.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
