import { describe, expect, it } from 'vitest';

import { chapterOf, formatTime, nextSection, prevSection, timeline } from './progress';
import type { Segment } from './segments';

const segments = (): Segment[] => {
  const root = document.createElement('article');
  root.innerHTML = '<h1>Page</h1><p>Lead</p><h2>First</h2><p>One</p><h2>Second</h2><p>Two</p>';
  return Array.from(root.children, (el) => ({ el: el as HTMLElement, text: el.textContent ?? '' }));
};

describe('chapterOf', () => {
  it('returns the nearest heading above the segment', () => {
    expect(chapterOf(segments(), 1)).toBe('Page');
    expect(chapterOf(segments(), 3)).toBe('First');
    expect(chapterOf(segments(), 5)).toBe('Second');
  });
});

describe('timeline', () => {
  it('estimates elapsed and total seconds from text length and rate', () => {
    const el = document.createElement('p');
    const long = Array.from({ length: 4 }, () => ({ el, text: '가'.repeat(350) }));
    expect(timeline(long, 1, 1, 'ko')).toEqual({ elapsed: 60, total: 240 });
    expect(timeline(long, 1, 2, 'ko')).toEqual({ elapsed: 30, total: 120 });
  });

  it('formats seconds as m:ss', () => {
    expect(formatTime(98)).toBe('1:38');
    expect(formatTime(5)).toBe('0:05');
  });
});

describe('section skipping', () => {
  it('jumps to the next section start, or past the end', () => {
    expect(nextSection(segments(), 0)).toBe(2);
    expect(nextSection(segments(), 3)).toBe(4);
    expect(nextSection(segments(), 5)).toBe(6);
  });

  it('goes to the current section start first, then the previous one', () => {
    expect(prevSection(segments(), 5)).toBe(4);
    expect(prevSection(segments(), 4)).toBe(2);
    expect(prevSection(segments(), 1)).toBe(0);
  });
});
