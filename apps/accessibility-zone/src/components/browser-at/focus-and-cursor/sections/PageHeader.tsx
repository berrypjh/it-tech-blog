import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '03장 · 4 / 6',
    title: '시스템 포커스와 화면 낭독기 커서 · 탐색 모드 구분하기',
    lead: (
      <>
        화면 낭독기 사용자가 &quot;지금 여기&quot;라고 말할 때 그 위치는 키보드 포커스와 다를 수
        있습니다. 이 페이지는{' '}
        <strong className="text-text-default">DOM 포커스 · 읽기 위치 · 입력 모드</strong>를 나눠
        부르고, 같은 문서에서 제목 탐색과 Tab 이동이 다른 목적이라는 것을 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'DOM · 키보드 포커스, 화면 낭독기 읽기 위치, 입력 · 상호작용 모드 구분하기',
      '같은 문서에서 제목 탐색과 Tab 이동의 목적 비교하기',
      'NVDA의 탐색 · 포커스 모드와 VoiceOver의 커서 · 상호작용을 따로 이해하기',
      'document.activeElement가 보여 주는 것과 보여 주지 못하는 것',
    ],
  },
  en: {
    eyebrow: 'Chapter 03 · 4 of 6',
    title: 'Telling system focus apart from screen reader cursors and modes',
    lead: (
      <>
        When a screen reader user says &quot;I am here,&quot; that position can differ from keyboard
        focus. This page names{' '}
        <strong className="text-text-default">DOM focus, reading position, and input mode</strong>{' '}
        separately, and checks in one document that heading navigation and Tab serve different
        purposes.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Telling apart DOM and keyboard focus, the screen reader reading position, and input or interaction modes',
      'Comparing the purposes of heading navigation and Tab in one document',
      'Understanding NVDA’s browse and focus modes and VoiceOver’s cursor and interaction separately',
      'What document.activeElement shows and what it cannot',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
