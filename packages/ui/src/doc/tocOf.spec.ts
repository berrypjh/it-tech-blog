import { describe, expect, it } from 'vitest';

import { createPageLinks } from './PageLinks';
import { same, tocOf } from './tocOf';

describe('tocOf', () => {
  const getToc = tocOf(
    { intro: 'intro-id', summary: 'summary' },
    {
      ko: { intro: '들어가며', summary: '핵심 요약' },
      en: { intro: 'Introduction', summary: 'Key takeaways' },
    },
  );

  it('keeps ids the same across locales and only swaps titles', () => {
    expect(getToc('ko')).toEqual({
      intro: { id: 'intro-id', title: '들어가며' },
      summary: { id: 'summary', title: '핵심 요약' },
    });
    expect(getToc('en').intro).toEqual({ id: 'intro-id', title: 'Introduction' });
  });

  it('keeps the key order of ids, which is the TOC order', () => {
    expect(Object.keys(getToc('ko'))).toEqual(['intro', 'summary']);
  });
});

describe('same', () => {
  it('uses one text for both locales', () => {
    expect(same('W3C')).toEqual({ ko: 'W3C', en: 'W3C' });
  });
});

describe('createPageLinks', () => {
  const { labelOf } = createPageLinks({
    ko: [{ title: '시작하기', items: [{ id: 'intro', label: '01.1 시작', type: 'link' }] }],
    en: [{ title: 'Start', items: [{ id: 'intro', label: '01.1 Start', type: 'link' }] }],
  });

  it('reads the label from navData for the locale', () => {
    expect(labelOf('ko', 'intro')).toBe('01.1 시작');
    expect(labelOf('en', 'intro')).toBe('01.1 Start');
  });

  it('falls back to the id for an unknown page', () => {
    expect(labelOf('ko', 'missing')).toBe('missing');
  });
});
