import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

interface CollaborationCTAProps {
  onContactClick: () => void;
}

export const CollaborationCTA: React.FC<CollaborationCTAProps> = ({ onContactClick }) => {
  return (
    <section id="collaboration" className="bg-black py-28 md:py-44 px-4 md:px-8 relative overflow-hidden flex justify-center text-center scroll-mt-20">
      <div className="bg-noise absolute inset-0 opacity-[0.1] pointer-events-none z-0" />

      {/* Cinematic ambient focal backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-primary/[0.025] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 font-medium bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/[0.06]">
          <Sparkles className="w-3.5 h-3.5 text-[#DEDBC8]" />
          <span>Ecosystem Partnership</span>
        </div>

        <div className="mb-4">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Let's connect the mobility ecosystem.",
                className: 'text-primary font-normal',
              },
            ]}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-center leading-[1.05]"
            containerClassName="w-full flex justify-center"
          />
        </div>

        <div className="mb-8">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Explore collaboration with IMDX.',
                className: 'font-serif italic text-primary/80',
              },
            ]}
            delayOffset={0.15}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center"
            containerClassName="w-full flex justify-center"
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Whether you are an automotive OEM, battery manufacturer, charging network operator, municipal transport authority, or technology innovator, IMDX welcomes dialogue to shape India’s trusted, sovereign mobility data exchange.
        </p>

        {/* Closing Button with subtle aura */}
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2.5 hover:gap-4 transition-all duration-300 bg-primary text-black font-medium text-sm sm:text-base pl-7 pr-2.5 py-2.5 rounded-full cursor-pointer shadow-[0_0_30px_rgba(222,219,200,0.15)] select-none"
            style={{ backgroundColor: '#DEDBC8' }}
          >
            <span>Explore Collaboration</span>
            <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#DEDBC8]" />
            </span>
          </motion.button>
        </div>

        <div className="mt-12 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
          India Mobility Data Exchange · Tecmotiv Solutions Pvt. Ltd.
        </div>
      </div>
    </section>
  );
};
