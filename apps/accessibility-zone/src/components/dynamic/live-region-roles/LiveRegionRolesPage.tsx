import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { MountedSection } from './sections/MountedSection';
import { PageHeader } from './sections/PageHeader';
import { PitfallsSection } from './sections/PitfallsSection';
import { PracticeSection } from './sections/PracticeSection';
import { RolesSection } from './sections/RolesSection';
import { getToc } from './toc';

const points = {
  ko: [
    'status는 polite · atomic true, alert는 assertive · atomic true, log는 polite가 암시적 값입니다 (WAI-ARIA 1.2).',
    '통상적인 결과는 처음부터 마운트해 둔 status의 글자를 바꿔 알립니다.',
    'alert는 사용자의 조작 뒤 바로 알아야 할 때만 쓰고, 같은 문구를 여러 live 영역에 넣지 않습니다.',
    '발화 시점과 횟수는 보조기술과 설정이 정하므로, 페이지에서는 DOM 변화만 확인하고 실제 발화는 따로 기록합니다.',
  ],
  en: [
    'Implicit values: status is polite and atomic true, alert is assertive and atomic true, log is polite (WAI-ARIA 1.2).',
    'Announce ordinary results by changing the text of a status mounted from the start.',
    'Use alert only when users need to know right after their action, and do not put the same text in several live regions.',
    'Assistive technology and its settings decide when and how often speech happens, so the page checks only DOM changes and real speech is recorded separately.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('status'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — status role'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('alert'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — alert role'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('aria-live'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-live'),
    note: { ko: 'off · polite · assertive', en: 'off, polite, assertive' },
  },
];

export const LiveRegionRolesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <RolesSection locale={locale} />
      <MountedSection locale={locale} />
      <PracticeSection locale={locale} />
      <PitfallsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="live-region-scope" />
    </DocLayout>
  );
};
