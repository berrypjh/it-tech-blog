import { describe, expect, it } from 'vitest';

import { getContrastRatio, WCAG } from './a11y';

describe('getContrastRatio', () => {
  it('returns 21 for black on white', () => {
    expect(getContrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 1);
  });

  it('returns 1 for identical colors', () => {
    expect(getContrastRatio('#3b82f6', '#3b82f6')).toBe(1);
  });

  it('is symmetric regardless of fg/bg order', () => {
    expect(getContrastRatio('#111827', '#f9fafb')).toBe(getContrastRatio('#f9fafb', '#111827'));
  });

  it('passes AA normal for dark gray on white', () => {
    expect(getContrastRatio('#1f2937', '#ffffff')).toBeGreaterThanOrEqual(WCAG.AA_NORMAL);
  });

  it('fails AA normal for light gray on white', () => {
    expect(getContrastRatio('#d1d5db', '#ffffff')).toBeLessThan(WCAG.AA_NORMAL);
  });
});

describe('WCAG', () => {
  it('defines the standard thresholds', () => {
    expect(WCAG).toEqual({
      AA_NORMAL: 4.5,
      AA_LARGE: 3,
      AAA_NORMAL: 7,
      AAA_LARGE: 4.5,
    });
  });
});
