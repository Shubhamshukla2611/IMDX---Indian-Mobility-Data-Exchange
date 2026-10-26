import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen w-full p-3 sm:p-4 md:p-6 bg-black relative box-border">
      {/* Inset rounded container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col justify-center">
        {/* Background video */}
        <img
          className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-700 ${
            videoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          src="/assets/aistudio/IMDX_Mobility_Ecosystem_at_Sunset_3add7179.png"
          alt=""
          aria-hidden="true"
        />
        <video
          className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-700 ${
            videoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          onPlaying={() => setVideoPlaying(true)}
          src="/assets/aistudio/Data_connecting_urban_mobility_e__1080p_20261025172922_c74d1cb3.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.6] mix-blend-overlay pointer-events-none z-[1]" />

        {/* Cinematic Directional Gradients: dark gradient on left for high legibility, sunset ambient glow on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 pointer-events-none z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none z-[2]" />

        {/* Left-Aligned Hero Content matching reference layout */}
        <div className="relative z-20 flex flex-col justify-center h-full max-w-2xl pl-6 sm:pl-16 md:pl-28 lg:pl-36 xl:pl-44 pr-6 pb-12 sm:pb-8 pt-20 sm:pt-0">
          {/* Elegant large serif hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#F1E5C5] mb-6 select-none"
            style={{ color: '#F1E5C5' }}
          >
            Connecting<br />
            India’s Mobility<br />
            Ecosystem
          </motion.h1>

          {/* Restrained supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-gray-300/90 font-light text-base sm:text-lg md:text-xl tracking-tight max-w-md leading-relaxed mb-9 select-text"
          >
            Trusted data. Open standards.<br />
            A connected tomorrow.
          </motion.p>

          {/* Cream pill CTA + Circular arrow button matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-3 select-none"
          >
            <button
              onClick={scrollToAbout}
              className="bg-[#E1E0CC] hover:bg-white text-black font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(225,224,204,0.25)] cursor-pointer select-none"
            >
              Explore the Ecosystem
            </button>

            <button
              onClick={scrollToAbout}
              aria-label="Scroll to Ecosystem"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 cursor-pointer shadow-sm group"
            >
              <ArrowRight className="w-4 h-4 text-[#E1E0CC] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator at bottom center matching reference */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-[#E1E0CC] transition-colors cursor-pointer group select-none z-20"
          aria-label="Scroll to content"
        >
          <div className="w-5 h-8 rounded-full border border-white/30 group-hover:border-white/60 transition-colors flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[#E1E0CC]"
            />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 group-hover:text-[#E1E0CC] transition-colors">
            Scroll
          </span>
        </button>
      </div>
    </section>
  );
};
