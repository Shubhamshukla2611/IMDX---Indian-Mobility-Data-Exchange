import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { DetailModal, CardDetail } from './DetailModal';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const UseCasesSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardDetail | null>(null);

  const useCases: CardDetail[] = [
    {
      number: '01',
      title: 'Connected Vehicles.',
      icon: '/assets/mobility/connected_vehicles.svg',
      items: [
        'Vehicle data interoperability across multi-OEM platforms.',
        'Connected mobility information exchange.',
        'Software-defined vehicle (SDV) data use cases.',
        'Predictive diagnostics and data-driven vehicle services.',
      ],
      description:
        'Interoperable vehicle telemetry and software-defined vehicle standards intend to unlock seamless data exchange across OEMs, telematics providers, fleet operators, and service networks.',
      scopeNotes: [
        'Multi-OEM telemetry harmonisation',
        'Secure edge-to-cloud data ingestion',
        'Predictive diagnostics and fleet services',
      ],
    },
    {
      number: '02',
      title: 'Battery Data & Traceability.',
      icon: '/assets/mobility/battery_traceability.svg',
      items: [
        'End-to-end battery lifecycle visibility from cell to pack.',
        'Verifiable traceability across the supply value chain.',
        'State-of-health (SOH) and charge cycles information.',
        'Support for circular battery repurposing and recycling.',
      ],
      description:
        'A digital battery passport architecture aims to enable end-to-end provenance, manufacturing pedigree, carbon footprint tracking, and circular second-life repurposing across India’s EV ecosystem.',
      scopeNotes: [
        'Standardized digital passport schemas',
        'State-of-health verification protocols',
        'Compliance and recycling traceability',
      ],
    },
    {
      number: '03',
      title: 'Urban Mobility & Planning.',
      icon: '/assets/mobility/urban_mobility.svg',
      items: [
        'Public transport and transit corridor data integration.',
        'Urban mobility insights and commuter flow analysis.',
        'Connected transport & EV charging infrastructure exchange.',
        'Evidence-informed transit and infrastructure planning.',
      ],
      description:
        'City-scale data fabric envisioned to bridge municipal transport corporations, shared mobility operators, multimodal hubs, and charging network operators for smarter commuter journeys.',
      scopeNotes: [
        'Multimodal transit interchange feeds',
        'Spatial traffic and congestion analysis',
        'Charging infrastructure demand coordination',
      ],
    },
  ];

  return (
    <section
      id="use-cases"
      className="bg-black py-24 md:py-36 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Noise Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-medium">
            Exploratory Blueprints
          </div>
          <div className="mb-3">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'One mobility ecosystem.',
                  className: 'text-primary font-normal',
                },
              ]}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-center"
              containerClassName="w-full flex justify-center"
            />
          </div>
          <div>
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Connected through trusted data exchange.',
                  className: 'font-serif italic text-primary/80',
                },
              ]}
              delayOffset={0.15}
              className="text-xl sm:text-2xl md:text-3xl font-normal text-center"
              containerClassName="w-full flex justify-center"
            />
          </div>
        </div>

        {/* 4-Column Balanced Grid: Cinematic Mobility Card + 3 Core Use Cases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-4 sm:gap-3 md:gap-2 max-w-7xl mx-auto w-full relative z-10"
        >
          {/* Card 1: Cinematic Mobility Network Visual */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden h-[420px] lg:h-full group border border-white/[0.04] bg-[#0E0E0E]"
          >
            <img
              src="/assets/mobility/mobility_connected_hero.svg"
              alt="IMDX Connected Mobility Network"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-[10px] uppercase font-mono tracking-widest text-primary/80 block mb-1">
                Visual Paradigm
              </span>
              <h3 className="text-[#E1E0CC] font-medium text-lg sm:text-xl tracking-tight">
                Mobility, connected.
              </h3>
            </div>
          </motion.div>

          {/* Cards 2, 3, 4: 3 Core Use Cases */}
          {useCases.map((card) => (
            <motion.div
              key={card.number}
              variants={cardVariants}
              className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full border border-white/[0.04] hover:border-white/[0.1] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-white/10"
                  />
                  <span className="text-gray-500 font-mono text-xs sm:text-sm tracking-wider">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-4">
                  {card.title}
                </h3>

                <ul className="space-y-2.5 sm:space-y-3 m-0 p-0 list-none">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] mt-4">
                <button
                  onClick={() => setSelectedCard(card)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors cursor-pointer group/link"
                >
                  <span style={{ color: '#DEDBC8' }}>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45 text-[#DEDBC8] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Explanatory Detail Modal */}
      <DetailModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </section>
  );
};
