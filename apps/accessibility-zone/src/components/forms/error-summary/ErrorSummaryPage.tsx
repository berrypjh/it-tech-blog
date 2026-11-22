import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { formsTutorial, understanding, wcag22 } from '@/components/shared/wcag';

import { IdentifySection } from './sections/IdentifySection';
import { PageHeader } from './sections/PageHeader';
import { PolicySection } from './sections/PolicySection';
import { PracticeSection } from './sections/PracticeSection';
import { WiringSection } from './sections/WiringSection';
import { getToc } from './toc';

const points = {
  ko: [
    '무엇이 틀렸는지 글로 알리는 것(3.3.1, A)과 고칠 방법을 알려 주는 것(3.3.3, AA)은 따로 요구됩니다. 제안이 보안이나 목적을 해치면 제안하지 않습니다.',
    'aria-invalid는 검증한 뒤에만 붙이고, 보이는 오류 글을 도움말 뒤에 설명으로 연결합니다.',
    '처음 실패했을 때 초점을 옮길 곳을 하나 정합니다. 이 예제는 오류 요약의 제목이고, 같은 오류를 alert로 다시 알리지 않습니다.',
    '요약의 링크는 라벨과 오류를 함께 담고 정확한 칸으로 갑니다. 입력하는 동안에는 초점을 옮기지 않습니다.',
  ],
  en: [
    'Saying in text what is wrong (3.3.1, A) and giving the correction (3.3.3, AA) are separate requirements. Do not suggest when it would harm security or the purpose.',
    'Add aria-invalid only after validating, and connect the visible error text as a description after the hint.',
    'Choose one place for focus on the first failure. Here it is the heading of the error summary, and the same error is not announced again with an alert.',
    'Summary links hold the label and the error and go to the exact field. Focus is not moved while typing.',
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
    href: wcag22('error-suggestion'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.3 Error Suggestion (Level AA)'),
    note: {
      ko: '규범 근거와 예외 (2024-12-12)',
      en: 'The normative basis and exception (2024-12-12)',
    },
  },
  {
    href: understanding('error-suggestion'),
    source: same('W3C WAI'),
    title: same('Understanding SC 3.3.3: Error Suggestion'),
    note: { ko: '제안의 범위 (보충 자료)', en: 'The scope of suggestions (supporting)' },
  },
  {
    href: aria12('aria-invalid'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-invalid'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: formsTutorial('notifications/'),
    source: same('W3C WAI'),
    title: same('Forms Tutorial — User Notifications'),
    note: {
      ko: '오류 요약과 칸별 알림 (보충 자료)',
      en: 'Error summaries and inline messages (supporting)',
    },
  },
];

export const ErrorSummaryPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <IdentifySection locale={locale} />
      <WiringSection locale={locale} />
      <PolicySection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="server-errors" />
    </DocLayout>
  );
};
