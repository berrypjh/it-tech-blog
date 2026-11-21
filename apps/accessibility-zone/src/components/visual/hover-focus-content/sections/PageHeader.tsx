import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 7 / 7',
    title: '호버 · 포커스로 나타나는 내용을 접근 · 유지 · 닫을 수 있게 만들기',
    lead: (
      <>
        도움말이 읽기 전에 사라지거나 다른 내용을 가린 채 닫히지 않으면 과업이 끊깁니다. 이 장의
        마지막 페이지는 <strong className="text-text-default">추가 내용의 세 조건</strong>을
        구현하고, 한 화면의 시각 조건을 증거와 함께 판정합니다.
      </>
    ),
    readingTime: '읽는 시간 약 15분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '1.4.13의 적용 조건과 닫기 가능 · 호버 가능 · 지속',
      '포인터 · 키보드 · 터치에서 추가 내용을 쓰는 방법',
      '대비 · 확대 · 가림 · 추가 내용을 판정하고 재검증하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 7 of 7',
    title: 'Making content on hover or focus reachable, persistent, and dismissible',
    lead: (
      <>
        A task breaks when help disappears before you can read it, or covers content and will not
        close. This last page of the chapter implements{' '}
        <strong className="text-text-default">the three conditions for additional content</strong>{' '}
        and judges the visual conditions of one screen with evidence.
      </>
    ),
    readingTime: 'About 15 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'When 1.4.13 applies, and dismissible, hoverable, and persistent',
      'Using additional content with pointer, keyboard, and touch',
      'Judging and retesting contrast, zoom, covering, and additional content',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
