import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 3 / 7',
    title: '텍스트 확대 · 브라우저 확대 · Reflow를 구분해 검사하기',
    lead: (
      <>
        창을 줄여 보는 것과 브라우저를 400%로 확대하는 것은 비슷해 보여도 같은 증거가 아닙니다. 이
        페이지는 <strong className="text-text-default">기준의 요구와 검사 방법</strong>을 나눠,
        무엇을 확인했는지 정확히 적게 합니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '1.4.4 텍스트 200%와 1.4.10 Reflow의 요구 · 예외',
      '320 CSS px과 1280 CSS px의 400% 확대의 관계',
      '패널 축소 · viewport 변경 · 실제 확대를 구분해 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 3 of 7',
    title: 'Testing text resize, browser zoom, and reflow separately',
    lead: (
      <>
        Narrowing a window and zooming a browser to 400% look alike, but they are not the same
        evidence. This page separates{' '}
        <strong className="text-text-default">what the criteria require and how you check</strong>,
        so you can record exactly what you verified.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The requirements and exceptions of 1.4.4 at 200% and 1.4.10 Reflow',
      'How 320 CSS pixels relates to 1280 CSS pixels at 400% zoom',
      'Recording panel narrowing, viewport changes, and real zoom separately',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
