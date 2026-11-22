import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '10장 · 2 / 5',
    title: 'aria-live · status · alert · log의 역할과 알림 시점 이해하기',
    lead: (
      <>
        live 영역은 포커스 없이 변화를 전하는 통로입니다. 이 페이지는{' '}
        <strong className="text-text-default">status · alert · log</strong>의 뜻과 암시적 값을
        WAI-ARIA 1.2 원문과 맞춰 보고, 알림이 언제 나가는지를 DOM으로 관찰합니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'status · alert · log와 aria-live의 뜻, 암시적 live · atomic 값',
      '미리 마운트된 영역을 갱신하는 알림 시점',
      'alert 남용과 같은 내용의 중복 방송을 피하는 법',
    ],
  },
  en: {
    eyebrow: 'Chapter 10 · 2 of 5',
    title: 'Understanding the roles and timing of aria-live, status, alert, and log',
    lead: (
      <>
        A live region is a channel for conveying changes without focus. This page checks the meaning
        and implicit values of <strong className="text-text-default">status, alert, and log</strong>{' '}
        against the WAI-ARIA 1.2 text, and observes in the DOM when announcements go out.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'What status, alert, log, and aria-live mean, and their implicit live and atomic values',
      'The timing of announcements by updating a region that is already mounted',
      'Avoiding overuse of alert and broadcasting the same message twice',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
