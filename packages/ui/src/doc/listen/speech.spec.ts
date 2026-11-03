import { describe, expect, it } from 'vitest';

import { toSpeech } from './speech';

describe('toSpeech', () => {
  it('drops leading zeros in chapter and page numbers', () => {
    expect(toSpeech('01장 · 1 / 5', 'ko')).toBe('1장, 1 / 5');
    expect(toSpeech('01.2 특성과 사용 환경', 'ko')).toBe('1 점 2 특성과 사용 환경');
  });

  it('keeps zeros that belong to the number', () => {
    expect(toSpeech('10개, 100%, 2.0', 'en')).toBe('10개, 100%, 2.0');
    expect(toSpeech('09:30', 'ko')).toBe('9:30');
  });

  it('reads ranges and middle dots naturally in Korean', () => {
    expect(toSpeech('각 1~2분, 시각·청각', 'ko')).toBe('각 1에서 2분, 시각, 청각');
  });

  it('reads acronyms the way people say them, without touching longer words', () => {
    expect(toSpeech('WCAG와 KWCAG, ARIA보다 HTML', 'ko')).toBe(
      '위캐그와 케이 위캐그, 아리아보다 에이치 티 엠 엘',
    );
    expect(toSpeech('UIKit', 'ko')).toBe('UIKit');
    expect(toSpeech('WCAG 2.2 AA, 예제 A', 'ko')).toBe('위캐그 2 점 2 더블 에이, 예제 에이');
  });

  it('reads code terms the way developers say them', () => {
    expect(toSpeech('div에 role · tabindex를 주고 aria-label을 붙인다', 'ko')).toBe(
      '디브에 롤, 탭인덱스를 주고 아리아 라벨을 붙인다',
    );
    expect(toSpeech('Tab으로 이동하고 Enter나 Space로 button 실행', 'ko')).toBe(
      '탭으로 이동하고 엔터나 스페이스로 버튼 실행',
    );
  });

  it('reads hyphenated names whole before their parts and one-letter elements last', () => {
    expect(toSpeech('aria-expanded와 a 요소, grid-area와 grid', 'ko')).toBe(
      '아리아 익스팬디드와 에이 요소, 그리드 에어리어와 그리드',
    );
    expect(toSpeech('h1부터 heading을 쓰고 currentTarget과 target을 본다', 'ko')).toBe(
      '에이치 원부터 헤딩을 쓰고 커런트 타깃과 타깃을 본다',
    );
  });

  it('leaves English acronyms for the English voice', () => {
    expect(toSpeech('WCAG 01', 'en')).toBe('WCAG 1');
  });
});
