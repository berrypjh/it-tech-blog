import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 4 / 10',
    title: '수식의 구조를 전달하고 MathML과 텍스트 대안 검증하기',
    lead: (
      <>
        분수처럼 보이게 그린 글자는 분자와 분모의 관계를 전하지 못합니다. 이 페이지는 분수 하나를{' '}
        <strong className="text-text-default">실제 MathML과 문장</strong>으로 표기하고, 화면에
        보이는 것과 보조기술이 내는 것을 나눠 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'MathML의 mfrac이 분자 · 분모 관계를 담는 방식',
      '일렬 글자 대안이 뜻을 바꾸는 경우와 문장 대안',
      '화면 표시 · 낭독 · 구조 탐색 · 점자 출력을 따로 확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 4 of 10',
    title: 'Conveying the structure of math and verifying MathML and text alternatives',
    lead: (
      <>
        Characters drawn to look like a fraction do not carry the relationship between numerator and
        denominator. This page writes one fraction as{' '}
        <strong className="text-text-default">real MathML and a sentence</strong>, and checks what
        the screen shows apart from what assistive technology produces.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'How MathML mfrac holds the numerator and denominator',
      'When a linear text alternative changes the meaning, and a sentence alternative',
      'Checking screen display, speech, structural navigation, and braille separately',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
