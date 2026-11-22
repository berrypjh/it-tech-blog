import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { formsTutorial, wcag22 } from '@/components/shared/wcag';

import { CurrentSection } from './sections/CurrentSection';
import { KindsSection } from './sections/KindsSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '서버가 거절하거나 답하지 못해도 입력한 값은 지우지 않습니다.',
    '필드 오류는 오류 요약으로 초점을 옮겨 그 칸을 고치게 하고, 서비스 오류는 초점을 두고 상태 메시지 하나와 다시 시도 버튼을 둡니다.',
    '제출마다 번호를 주고 현재 제출의 응답만 결과 · 오류 · busy · 알림을 바꿉니다. 이전 제출의 늦은 응답과 같은 응답의 반복은 아무것도 바꾸지 않습니다.',
    '같은 값을 거듭 보내면 새 요청을 만들지 않고, 값을 바꿔 보내면 새 제출이 현재 제출이 됩니다. 이 실습은 실제 네트워크를 확인한 것이 아닙니다.',
  ],
  en: [
    'Do not clear entered values when the server rejects them or fails to answer.',
    'A field error moves focus to the error summary so the field can be fixed; a service error leaves focus and offers one status message and a retry button.',
    'Number each submission and let only the current one’s response change the result, errors, busy, and announcement. Late responses of old submissions and repeated responses change nothing.',
    'Sending the same values repeatedly makes no new request; sending changed values makes a new current submission. This exercise does not verify a real network.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('error-identification'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.1 Error Identification (Level A)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('status-messages'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 4.1.3 Status Messages (Level AA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: aria12('aria-busy'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-busy'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: formsTutorial('notifications/'),
    source: same('W3C WAI'),
    title: same('Forms Tutorial — User Notifications'),
    note: { ko: '제출 뒤의 알림 (보충 자료)', en: 'Notifications after submission (supporting)' },
  },
];

export const ServerErrorsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <KindsSection locale={locale} />
      <CurrentSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="multi-step-forms" />
    </DocLayout>
  );
};
