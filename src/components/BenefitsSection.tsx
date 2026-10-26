import React from 'react';
import { motion, type Variants } from 'motion/react';
import { TiltedGridHero, type TiltedGridImage } from '@/components/ui/tilted-grid-hero';
import { GlassFolder, type FolderFile, type ArtPreset } from '@/components/ui/glass-folder-cards';

const benefitColVariants: Variants = {
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

// Verified, high-resolution mobility images representing IMDX domains:
// Connected vehicle telemetry, battery lifecycle & urban transit systems
const IMDX_MOBILITY_IMAGES: TiltedGridImage[] = [
  {
    src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=900&q=80",
    alt: "Connected vehicle cockpit and digital telemetry display",
  },
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    alt: "Electric vehicle charging infrastructure network",
  },
  {
    src: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=900&q=80",
    alt: "Urban highway transit corridors and traffic flow telemetry",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    alt: "EV battery lifecycle inspection and diagnostics engineering",
  },
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    alt: "City transit electric buses and multimodal transport fleet",
  },
  {
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80",
    alt: "Next-generation EV fast charger connector",
  },
  {
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
    alt: "Smart city urban mobility grid and corridor analysis",
  },
  {
    src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80",
    alt: "Automotive sensor telemetry and hardware engineering",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    alt: "Cryptographic data trust and sovereign exchange mesh",
  },
  {
    src: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=900&q=80",
    alt: "Clean zero-emission mobility on modern highway",
  },
];

interface StrategyPillar {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  folderLabel: string;
  folderMeta: string;
  art: ArtPreset;
  files: FolderFile[];
}

export const BenefitsSection: React.FC = () => {
  const strategies: StrategyPillar[] = [
    {
      number: '01',
      subtitle: 'Universal Standardisation',
      title: 'Interoperability & Open Standards',
      description:
        'Architecting unified semantic models and protocol interfaces informed by Catena-X data space standards and Eclipse Tractus-X specifications, enabling multi-OEM telemetry and software stacks to converse effortlessly.',
      folderLabel: 'Interoperability',
      folderMeta: 'Catena-X & SAMM Specs',
      art: 'aurora',
      files: [
        { name: 'Catena-X Semantic Models', meta: 'SAMM / IDS Standard' },
        { name: 'Multi-OEM Telemetry Ingestion', meta: 'Harmonised Protocol' },
        { name: 'SDV Software Vehicle Schemas', meta: 'Vendor-Neutral' },
        { name: 'Cross-Corridor Data Mesh', meta: 'High-Throughput' },
      ],
    },
    {
      number: '02',
      subtitle: 'Sovereign Governance',
      title: 'Trusted & Sovereign Data Exchange',
      description:
        'Establishing a decentralised trust framework based on International Data Spaces (IDS) principles and Eclipse Dataspace Connector (EDC) patterns, ensuring providers retain cryptographic sovereignty with zero IP exposure.',
      folderLabel: 'Data Sovereignty',
      folderMeta: 'Tractus-X & EDC Connectors',
      art: 'ember',
      files: [
        { name: 'Eclipse Dataspace Connectors', meta: 'Tractus-X / EDC' },
        { name: 'Cryptographic Audit Trails', meta: 'Immutable Log' },
        { name: 'Granular Usage Policies', meta: 'Revocable Consent' },
        { name: 'Zero IP Exposure Shield', meta: 'Contract Enforced' },
      ],
    },
    {
      number: '03',
      subtitle: 'Federated Network',
      title: 'Mobility Ecosystem Collaboration',
      description:
        'Uniting OEMs, battery manufacturers, energy utilities, and transit authorities in a federated ecosystem. Coordinates circular battery lifecycles, dynamic EV charging grids, and multimodal urban transit.',
      folderLabel: 'Collaboration',
      folderMeta: 'Federated Mobility Mesh',
      art: 'verdant',
      files: [
        { name: 'Battery Lifecycle Passports', meta: 'Circularity Loop' },
        { name: 'Public-Private Transit Mesh', meta: 'Multimodal Hubs' },
        { name: 'EV Grid & Dynamic Balancing', meta: 'Smart Charging' },
        { name: 'Predictive Fleet Telematics', meta: 'Proactive Care' },
      ],
    },
  ];

  return (
    <section
      id="benefits"
      className="bg-black pt-24 pb-24 md:pt-32 md:pb-36 px-4 md:px-8 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Noise Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.08] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── TILTED GRID HERO INTEGRATION ────────────────────────────
         * Clean text placement strictly matching the reference layout:
         * Top: Large IMDX title and badge
         * Center: 3D curved image ribbon streaming IMDX mobility visuals
         * Bottom: IMDX explanatory caption
         * GPU compositor powered: Zero React re-renders, zero image flickering.
         ───────────────────────────────────────────────────────────── */}
        <div className="mb-20 md:mb-28">
          <TiltedGridHero
            images={IMDX_MOBILITY_IMAGES}
            speed={4.5}
            tileHeight={27}
            curve={80}
            gap={1.8}
            className="w-full h-[520px] sm:h-[560px] md:h-[600px] flex flex-col justify-between py-10"
          >
            <div className="text-center max-w-2xl mx-auto px-4 relative z-10">
              <span className="inline-block px-3 py-1 text-[10px] tracking-widest font-mono text-primary uppercase bg-white/[0.04] border border-white/10 rounded-full mb-3">
                ECOSYSTEM CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#F1E5C5] tracking-tight">
                Unified Data Rails for Indian Mobility
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-light mt-3">
                IMDX aggregates fragmented signals across connected vehicle telematics, battery circularity systems, and public transit grids into a sovereign, high-throughput exchange.
              </p>
            </div>

            <div className="text-center max-w-xl mx-auto px-4 mt-4 relative z-10">
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Empowering OEMs, transit operators, battery recyclers, and infrastructure providers with secure, standards-compliant mobility data streams.
              </p>
            </div>
          </TiltedGridHero>
        </div>

        {/* ── 3 CORE BENEFITS: GLASS FOLDER CARDS IN ONE HORIZONTAL ROW ── */}
        <div className="border-t border-white/[0.08] pt-14 md:pt-18">
          <div className="mb-12 md:mb-16">
            <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase font-mono font-medium block mb-2">
              Three Key Benefits
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-[#F1E5C5]">
              Foundational outcomes of unified mobility data exchange.
            </h3>
          </div>

          {/* Three IMDX Core Strategy Glass Folders displayed side-by-side in ONE horizontal row on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch"
          >
            {strategies.map((strategy, idx) => (
              <motion.div
                key={strategy.number}
                variants={benefitColVariants}
                className="flex flex-col justify-between h-full bg-white/[0.015] border border-white/[0.06] rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.025]"
              >
                {/* Header Info */}
                <div className="mb-6">
                  {/* Monospace Metadata Line */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs sm:text-sm font-mono text-primary/80 tracking-widest">
                      [{strategy.number}]
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                      {strategy.subtitle}
                    </span>
                  </div>

                  {/* Primary Heading */}
                  <h4 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-3 leading-snug">
                    {strategy.title}
                  </h4>

                  {/* Main Editorial Text */}
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {strategy.description}
                  </p>
                </div>

                {/* Glass Folder Interactive Card */}
                <div className="pt-2 flex justify-center items-center w-full overflow-visible">
                  <GlassFolder
                    label={strategy.folderLabel}
                    meta={strategy.folderMeta}
                    tone="dark"
                    art={strategy.art}
                    width={320}
                    appear={true}
                    appearDelay={idx * 160}
                    files={strategy.files}
                    action="more"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
