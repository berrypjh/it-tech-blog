import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { AbortSection } from './sections/AbortSection';
import { CompareSection } from './sections/CompareSection';
import { IdentitySection } from './sections/IdentitySection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    '요청마다 id를 주고, 응답이 활성 요청의 것일 때만 결과 · 알림 · busy를 바꿉니다.',
    '늦게 온 응답, 취소된 요청의 응답, 지난 요청의 오류, 같은 응답의 중복 완료는 모두 아무것도 바꾸지 않습니다.',
    '같은 문구라도 사용자가 새로 시작한 검색의 결과는 억제하지 않습니다. 중복은 문구가 아니라 요청으로 가립니다.',
    'AbortController는 자원을 아끼는 신호이고, 반영 여부는 id로 정합니다. 화면을 떠날 때 남은 요청과 예약 작업을 정리합니다.',
  ],
  en: [
    'Give each request an id, and change results, announcements, and busy only when the response belongs to the active request.',
    'A late response, a response to a canceled request, an old request’s error, and a duplicate completion all change nothing.',
    'Do not suppress the result of a search the user newly started, even with the same text. Duplicates are told apart by request, not by text.',
    'AbortController is a signal that saves resources; whether to apply is decided by id. Clean up remaining requests and scheduled work when leaving the screen.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('status-messages'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 4.1.3 Status Messages'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('status-messages'),
    source: same('W3C WAI'),
    title: same('Understanding SC 4.1.3: Status Messages'),
    note: {
      ko: '상태 문구 수정은 새 상태 메시지 (보충 자료)',
      en: 'Modified status text is a new status message (supporting)',
    },
  },
  {
    href: aria12('aria-busy'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-busy'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: 'https://dom.spec.whatwg.org/#interface-abortcontroller',
    source: same('WHATWG'),
    title: same('DOM Living Standard — Interface AbortController'),
    note: { ko: '중단 신호의 정의', en: 'The definition of the abort signal' },
  },
];

export const StaleResponsesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <IdentitySection locale={locale} />
      <PracticeSection locale={locale} />
      <CompareSection locale={locale} />
      <AbortSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="input-purpose" />
    </DocLayout>
  );
};
