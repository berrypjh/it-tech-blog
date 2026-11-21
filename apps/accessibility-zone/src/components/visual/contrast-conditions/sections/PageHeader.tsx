import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 1 / 7',
    title: '텍스트 · 아이콘 · 컨트롤 대비의 조건과 예외 판정하기',
    lead: (
      <>
        대비 검사는 숫자 하나로 끝나지 않습니다. 이 페이지는{' '}
        <strong className="text-text-default">무엇을 어떤 색과 비교하는지</strong>부터 정하고, 계산
        결과가 말해 주는 범위와 말해 주지 못하는 범위를 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '1.4.3 텍스트 대비와 1.4.11 비텍스트 대비의 적용 대상',
      '불투명한 두 색을 계산하고 반올림 없이 판정하는 방법',
      '투명도 · 그라디언트 · 이미지 위 글자의 한계와 원문의 예외',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 1 of 7',
    title: 'Judging contrast conditions and exceptions for text, icons, and controls',
    lead: (
      <>
        A contrast check does not end with one number. This page starts from{' '}
        <strong className="text-text-default">what is compared with which color</strong>, and
        separates what a computed result can and cannot tell you.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'What 1.4.3 text contrast and 1.4.11 non-text contrast apply to',
      'Computing two opaque colors and judging without rounding',
      'The limits with transparency, gradients, and text over images, and the exceptions in the text',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
