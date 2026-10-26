import { describe, it } from 'node:test';
import assert from 'node:assert';

export function calculateCharRevealRange(index: number, totalChars: number): [number, number] {
  if (totalChars <= 0) return [0, 1];
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, Math.max(start + 0.02, charProgress + 0.05));
  return [start, end];
}

export function splitSegmentsIntoWords(segments: { text: string; className?: string }[]): { word: string; className: string }[] {
  const result: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    const words = seg.text.trim().split(/\s+/);
    words.forEach((w) => {
      if (w.length > 0) {
        result.push({ word: w, className: seg.className || '' });
      }
    });
  });
  return result;
}

export function validateCautiousCopy(text: string): boolean {
  const cautiousKeywords = ['being developed', 'aims to', 'explore', 'potential', 'tecmotiv solutions'];
  const lowercase = text.toLowerCase();
  return cautiousKeywords.some((k) => lowercase.includes(k));
}

describe('IMDX Landing Page Pure Logic Tests', () => {
  it('calculateCharRevealRange yields valid progressive bounds', () => {
    const total = 100;
    const [start0, end0] = calculateCharRevealRange(0, total);
    assert.strictEqual(start0, 0);
    assert.ok(end0 > start0);

    const [start50, end50] = calculateCharRevealRange(50, total);
    assert.ok(start50 > 0 && start50 < 1);
    assert.ok(end50 > start50 && end50 <= 1);

    const [startLast, endLast] = calculateCharRevealRange(99, total);
    assert.ok(startLast > start50);
    assert.strictEqual(endLast, 1);
  });

  it('splitSegmentsIntoWords extracts words and preserves styling', () => {
    const segments = [
      { text: 'Mobility is connected,', className: 'font-normal' },
      { text: 'but its data is fragmented.', className: 'font-serif italic' },
    ];
    const words = splitSegmentsIntoWords(segments);
    assert.strictEqual(words.length, 8);
    assert.strictEqual(words[0].word, 'Mobility');
    assert.strictEqual(words[0].className, 'font-normal');
    assert.strictEqual(words[3].word, 'but');
    assert.strictEqual(words[3].className, 'font-serif italic');
  });

  it('validateCautiousCopy ensures non-promotional and accurate status', () => {
    const heroCopy = 'India Mobility Data Exchange is being developed by Tecmotiv Solutions Pvt. Ltd.';
    assert.strictEqual(validateCautiousCopy(heroCopy), true);
  });
});
