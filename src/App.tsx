/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BenefitsSection } from './components/BenefitsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { CollaborationCTA } from './components/CollaborationCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ScrollProgressLine } from './components/ScrollProgressLine';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black antialiased relative">
      {/* OPTION 05: ANIMATED VERTICAL SCROLL PROGRESS LINE WITH GLOWING INDICATOR */}
      <ScrollProgressLine />

      {/* FLOATING TRANSPARENT DARK NAVBAR MATCHING REFERENCE */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* 1. HERO WITH CINEMATIC SUNSET VIDEO & ELEGANT SERIF HEADLINE */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. ABOUT IMDX & ECOSYSTEM */}
      <AboutSection />

      {/* 3. CAPABILITIES & CORE STRATEGIC PILLARS */}
      <BenefitsSection />

      {/* 4. MOBILITY USE CASES */}
      <UseCasesSection />

      {/* 5. COLLABORATION CALL TO ACTION */}
      <CollaborationCTA onContactClick={() => setIsContactOpen(true)} />

      {/* 6. MINIMAL FOOTER */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* INTERACTIVE COLLABORATION & INQUIRY MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
