import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 8 / 10',
    title: '모션 · 점멸 · 자동 갱신과 Reduced Motion을 안전하게 다루기',
    lead: (
      <>
        저절로 바뀌는 화면은 읽는 도중에 내용을 빼앗고, 빠른 점멸은 발작을 일으킬 수 있습니다. 이
        페이지는 <strong className="text-text-default">사용자가 시작하고 멈추는 갱신</strong>을
        만들고, 점멸 기준과 모션 선호를 나눠 다룹니다. 위험한 점멸은 재생하지 않습니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '2.2.2의 움직임 · 자동 갱신 조건과 멈춤 수단',
      '직접 시작하고 멈추며 빈도를 고르는 갱신 구현',
      '2.3.1의 점멸 기준과 사용자 모션 선호의 차이',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 8 of 10',
    title: 'Handling motion, flashing, auto-updates, and reduced motion safely',
    lead: (
      <>
        A screen that changes by itself takes content away mid-read, and fast flashing can cause
        seizures. This page builds{' '}
        <strong className="text-text-default">an update users start and stop</strong>, and treats
        the flash threshold and motion preference separately. No dangerous flashing is played.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The movement and auto-update conditions of 2.2.2 and ways to stop them',
      'An update you start, stop, and set the frequency of',
      'How the flash threshold of 2.3.1 differs from the user’s motion preference',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
