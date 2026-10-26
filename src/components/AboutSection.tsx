import React from 'react';
import { motion, type Variants } from 'motion/react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { AnimatedScrollParagraph } from './AnimatedLetter';
import { Layers, ShieldCheck, Network } from 'lucide-react';

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const headingSegments = [
    {
      text: 'Mobility is connected,',
      className: 'font-normal text-[#F1E5C5]',
    },
    {
      text: 'but its data is fragmented.',
      className: 'font-serif italic text-primary',
    },
    {
      text: 'IMDX is being developed to help connect the mobility data ecosystem.',
      className: 'font-normal text-[#E1E0CC]',
    },
  ];

  const bodyParagraphText =
    'Modern mobility generates valuable data across vehicles, batteries, charging infrastructure, fleets, and urban transport. IMDX is an India-focused mobility data exchange initiative being developed by Tecmotiv Solutions Pvt. Ltd. to provide a sovereign, interoperable foundation—enabling participants to share data with full control and governance.';

  const coreStrategies = [
    {
      num: '01',
      tag: 'Architectural Paradigm',
      title: 'Data Sovereignty by Design',
      icon: ShieldCheck,
      description:
        'Data remains distributed with its rightful originators and is exchanged peer-to-peer under verifiable, cryptographic usage policies—never pooled into a vulnerable central data silo.',
      meta: 'IDS & EDC Principles',
    },
    {
      num: '02',
      tag: 'Open Standardisation',
      title: 'Catena-X & Tractus-X Alignment',
      icon: Layers,
      description:
        'Built upon open international dataspace specifications, including Asset Administration Shell (AAS) semantic models and Eclipse Dataspace Connector patterns adapted for India.',
      meta: 'Global Standards',
    },
    {
      num: '03',
      tag: 'Neutral Governance',
      title: 'Vendor-Neutral Ecosystem Mesh',
      icon: Network,
      description:
        'Developed by Tecmotiv Solutions Pvt. Ltd. as an open, non-discriminatory data highway connecting automotive OEMs, battery innovators, energy grids, and transit authorities.',
      meta: 'Tecmotiv Initiative',
    },
  ];

  return (
    <section
      id="about"
      className="bg-black pt-32 pb-24 md:pt-40 md:pb-36 px-4 md:px-6 flex justify-center w-full scroll-mt-20 relative overflow-hidden"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.015] blur-[140px] pointer-events-none rounded-full" />

      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-8 sm:p-14 md:p-16 lg:p-20 text-center max-w-6xl w-full border border-white/[0.04] relative z-10">
        {/* Small label */}
        <div className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8 font-medium">
          Mobility Data Ecosystem
        </div>

        {/* Main 3-segment heading with generous breathing space */}
        <div className="mb-8">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-[1.02] sm:leading-[0.98]"
            containerClassName="w-full flex justify-center"
          />
        </div>

        {/* Scroll-linked character opacity body paragraph */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-10 mb-14 md:mb-16">
          <AnimatedScrollParagraph
            text={bodyParagraphText}
            className="text-[#DEDBC8] text-sm sm:text-base leading-relaxed font-light"
          />
        </div>

        {/* ELEGANT CONCEPTUAL VISUAL: 3 Connected Strategy Nodes on a Federated Line */}
        <div className="relative max-w-3xl mx-auto mb-16 pt-4 hidden sm:block">
          {/* Subtle connected horizontal hairline */}
          <div className="absolute top-1/2 left-12 right-12 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

          {/* Three Connected Concept Nodes */}
          <div className="grid grid-cols-3 relative z-10">
            {coreStrategies.map((strategy) => (
              <div key={strategy.num} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(222,219,200,0.06)] mb-2 group hover:border-primary/50 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/80 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                  {strategy.meta}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Typographic 3-Column Strategies in ONE horizontal row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 pt-10 sm:pt-12 border-t border-white/[0.06] text-left">
          {coreStrategies.map((strategy, idx) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={strategy.title}
                variants={pillarVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.12 }}
                className={`flex flex-col justify-between ${
                  idx !== 0 ? 'md:border-l md:border-white/[0.08] md:pl-8 lg:pl-10' : ''
                } ${idx !== 2 ? 'md:pr-8 lg:pr-10' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4 text-[#DEDBC8]" />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-primary/70 uppercase">
                      [{strategy.num}]
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1.5">
                    {strategy.tag}
                  </span>

                  <h4 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-3 leading-snug">
                    {strategy.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
