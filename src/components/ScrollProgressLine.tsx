import React, { useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const TOTAL_HEIGHT = 800;
const MILESTONES = [0, 0.25, 0.5, 0.75, 1];

function createOrbitalPath(inverted = false) {
  const steps = 64;
  const waveCycles = 5.5;
  const frequency = (Math.PI * 2 * waveCycles) / TOTAL_HEIGHT;
  const amplitude = 7.5;
  const points: string[] = [];

  for (let index = 0; index <= steps; index += 1) {
    const y = (index / steps) * TOTAL_HEIGHT;
    const x = 20 + (inverted ? -1 : 1) * amplitude * Math.sin(y * frequency);
    points.push(`${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return points.join(' ');
}

export const ScrollProgressLine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const currentY = useTransform(smoothProgress, [0, 1], [0, TOTAL_HEIGHT]);
  const { threadPathA, threadPathB } = useMemo(
    () => ({
      threadPathA: createOrbitalPath(),
      threadPathB: createOrbitalPath(true),
    }),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="fixed left-3 sm:left-6 md:left-10 lg:left-14 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none w-7 sm:w-9 md:w-10 h-[65vh] sm:h-[68vh] flex items-center justify-center"
    >
      <svg viewBox="0 0 40 800" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <filter id="orbitalGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeAura" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="activeStrandClip">
            <motion.rect x="0" y="0" width="40" height={currentY} />
          </clipPath>
        </defs>

        <g opacity="0.6">
          <line x1="20" y1="0" x2="20" y2="800" stroke="#5A5243" strokeWidth="0.85" strokeOpacity="0.4" />
          <path d={threadPathA} fill="none" stroke="#635B4C" strokeWidth="0.65" strokeOpacity="0.35" />
          <path d={threadPathB} fill="none" stroke="#635B4C" strokeWidth="0.65" strokeOpacity="0.35" />
        </g>

        <g clipPath="url(#activeStrandClip)">
          <line x1="20" y1="0" x2="20" y2="800" stroke="#F1E5C5" strokeWidth="1.35" filter="url(#orbitalGlow)" />
          <path d={threadPathA} fill="none" stroke="#DEDBC8" strokeWidth="0.8" strokeOpacity="0.75" />
          <path d={threadPathB} fill="none" stroke="#F1E5C5" strokeWidth="0.8" strokeOpacity="0.7" />
        </g>

        {MILESTONES.map((milestone, index) => (
          <circle
            key={index}
            cx="20"
            cy={milestone * TOTAL_HEIGHT}
            r="1.2"
            fill="#4E483C"
            opacity="0.45"
          />
        ))}

        <motion.circle
          cx="20"
          cy={currentY}
          r="3.5"
          fill="#F1E5C5"
          opacity="0.3"
          filter="url(#nodeAura)"
        />
        <motion.circle cx="20" cy={currentY} r="2.2" fill="#F1E5C5" stroke="#FFFFFF" strokeWidth="0.6" />
        <motion.circle cx="20" cy={currentY} r="1" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
