import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
  containerClassName?: string;
  delayOffset?: number;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
  containerClassName = 'inline-flex flex-wrap justify-center',
  delayOffset = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Flatten segments into an array of words with their corresponding styles
  const wordsWithStyles: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    const segmentWords = segment.text.trim().split(/\s+/);
    segmentWords.forEach((w) => {
      if (w.length > 0) {
        wordsWithStyles.push({
          word: w,
          className: segment.className || '',
        });
      }
    });
  });

  return (
    <div ref={ref} className={containerClassName}>
      <h2 className={`${className} inline-flex flex-wrap justify-center gap-y-1 gap-x-[0.28em]`}>
        {wordsWithStyles.map((item, index) => (
          <span key={index} className="inline-block overflow-hidden align-top">
            <motion.span
              className={`inline-block ${item.className}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.65,
                delay: delayOffset + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item.word}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
};
