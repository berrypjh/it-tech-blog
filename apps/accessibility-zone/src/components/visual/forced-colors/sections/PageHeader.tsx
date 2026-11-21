import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 5 / 7',
    title: 'Forced Colors와 고대비 환경에서 경계 · 상태 보존하기',
    lead: (
      <>
        사용자가 고른 색이 페이지의 색을 대신하면, 배경색과 그림자로 만든 표시는 사라질 수 있습니다.
        이 페이지는 <strong className="text-text-default">색이 바뀌어도 남는 경계와 상태</strong>를
        만들고, 모형과 실제 환경의 결과를 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'Forced Colors · 앱 다크 테마 · 대비 선호의 차이',
      '시스템 색과 실제 테두리 · 아웃라인으로 상태를 남기는 방법',
      '에뮬레이션과 실제 OS · 브라우저 결과를 구분해 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 5 of 7',
    title: 'Preserving boundaries and states in forced colors and high contrast',
    lead: (
      <>
        When colors a user chose replace the page&apos;s colors, indicators built from backgrounds
        and shadows can vanish. This page builds{' '}
        <strong className="text-text-default">boundaries and states that survive</strong>, and keeps
        model results apart from real environments.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'How forced colors, an app’s dark theme, and contrast preferences differ',
      'Keeping state with system colors and real borders and outlines',
      'Recording emulation and real OS and browser results separately',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
