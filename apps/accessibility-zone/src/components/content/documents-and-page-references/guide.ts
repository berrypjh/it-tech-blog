import type { Locale } from '@it-tech-blog/preferences';

import { BASE_PATH } from '@/components/content/shared/clip';
import { eventFacts } from '@/components/content/shared/event';

/** 인쇄본 두 쪽으로 된 행사 안내. 내려받는 TXT와 HTML 판이 이 쪽 나눔 하나를 쓴다. */
export const guidePages = (locale: Locale) => {
  const e = eventFacts[locale];
  const ko = locale === 'ko';
  const sessions = e.sessions.map((s) => `${s.label} ${s.time}`).join(', ');
  return [
    [
      e.name,
      `${ko ? '일정' : 'Dates'}: ${e.days.join(', ')}`,
      `${ko ? '회차' : 'Sessions'}: ${sessions}`,
      `${ko ? '장소' : 'Place'}: ${e.place} ${e.halls.join(' · ')}`,
    ],
    [
      `${ko ? '입구 변경' : 'Entrance change'}: ${e.entranceBefore} → ${e.entranceAfter}`,
      e.entranceReason,
      `${ko ? '마지막 회차' : 'Last session'}: ${e.lastSession}`,
    ],
  ];
};

const pageLabel = (locale: Locale, n: number) => (locale === 'ko' ? `${n}쪽` : `Page ${n}`);

/** 내려받는 UTF-8 텍스트. 쪽 표시는 HTML 판의 쪽 구분과 같은 자리에 있다. */
export const guideText = (locale: Locale) =>
  guidePages(locale)
    .map((lines, i) => [`[${pageLabel(locale, i + 1)}]`, ...lines].join('\n'))
    .join('\n\n') + '\n';

export const guideFile = (locale: Locale) => `event-guide-${locale}.txt`;
export const guideHref = (locale: Locale) =>
  `${BASE_PATH}/documents-and-page-references/${guideFile(locale)}`;
export const guideBytes = (locale: Locale) => new TextEncoder().encode(guideText(locale)).length;
export { pageLabel };
