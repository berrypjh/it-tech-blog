import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '10장 · 1 / 5',
    title: '화면 갱신 · 포커스 이동 · 상태 알림 중 필요한 수단 선택하기',
    lead: (
      <>
        화면이 바뀔 때마다 알림을 보내면 소음이 되고, 아무것도 알리지 않으면 결과를 놓칩니다. 이
        페이지는 같은 검색 화면의 변화를{' '}
        <strong className="text-text-default">화면 갱신 · 상태 메시지 · 맥락 전환</strong>으로
        나누고, 상황마다 필요한 수단 하나를 고릅니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '화면 갱신 · 포커스를 받지 않는 상태 메시지 · 맥락 전환의 차이',
      'WCAG 4.1.3이 적용되는 변화와 적용되지 않는 변화',
      '목록 삭제 뒤 포커스 복구와 배경 갱신 알림을 구별하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 10 · 1 of 5',
    title: 'Choosing among a screen update, a focus move, and a status message',
    lead: (
      <>
        Announcing every change becomes noise, and announcing nothing makes users miss results. This
        page sorts the changes of one search screen into{' '}
        <strong className="text-text-default">
          screen update, status message, and change of context
        </strong>
        , and picks the one means each situation needs.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'How a screen update, a status message that does not take focus, and a change of context differ',
      'Which changes WCAG 4.1.3 covers and which it does not',
      'Telling focus recovery after deleting from a list apart from a background update notice',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
