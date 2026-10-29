import { describe, expect, it } from 'vitest';

import { pickVoice, voicesFor } from './voices';

const voice = (name: string, lang: string) => ({ name, lang }) as SpeechSynthesisVoice;
const voices = [
  voice('Samantha', 'en-US'),
  voice('Rocko', 'ko-KR'),
  voice('Yuna', 'ko-KR'),
  voice('Google 한국의', 'ko-KR'),
  voice('Yuna (Enhanced)', 'ko-KR'),
];

describe('voicesFor', () => {
  it('keeps the page language and puts high-quality voices first', () => {
    expect(voicesFor(voices, 'ko').map((v) => v.name)).toEqual([
      'Google 한국의',
      'Yuna (Enhanced)',
      'Yuna',
    ]);
  });
});

describe('voicesFor fallback', () => {
  it('shows every voice when none of them is a good one', () => {
    expect(voicesFor([voice('Rocko', 'ko-KR')], 'ko').map((v) => v.name)).toEqual(['Rocko']);
  });
});

describe('pickVoice', () => {
  it('uses the chosen voice when it exists for the language', () => {
    expect(pickVoice(voices, 'ko', 'Yuna')?.name).toBe('Yuna');
  });

  it('falls back to the best voice when the choice is automatic or unavailable', () => {
    expect(pickVoice(voices, 'ko', '')?.name).toBe('Google 한국의');
    expect(pickVoice(voices, 'ko', 'Samantha')?.name).toBe('Google 한국의');
  });

  it('returns nothing when the language has no voice', () => {
    expect(pickVoice(voices, 'ja', '')).toBeUndefined();
  });
});
