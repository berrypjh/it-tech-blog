import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { ActivationSection } from './sections/ActivationSection';
import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '탭과 패널은 id로 서로를 가리키고, 선택된 탭 · tabindex="0"인 탭 · 보이는 패널은 같은 값 하나에서 만듭니다.',
    '좌우 화살표와 Home · End는 초점을 옮기고, 수동 활성화에서는 Enter · Space가 선택합니다. Tab은 탭 목록 밖으로 나갑니다.',
    '자동 활성화는 패널의 내용이 지연 없이 나타날 때에만 씁니다.',
    '탭의 선택은 aria-selected로 알리고, aria-current로 대신하지 않습니다.',
  ],
  en: [
    'Tabs and panels point to each other by id, and the selected tab, the tab with tabindex="0", and the visible panel come from one value.',
    'Left and right arrows and Home and End move focus; in manual activation Enter and Space select. Tab leaves the tab list.',
    'Use automatic activation only when the panel’s content appears without delay.',
    'Convey tab selection with aria-selected, not with aria-current.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('tab'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — tab, tablist, tabpanel'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('aria-selected'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-selected'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: apg('tabs'),
    source: same('W3C WAI'),
    title: same('APG — Tabs Pattern'),
    note: {
      ko: '권장 패턴. 자동 · 수동 활성화의 조건. 규범이 아니며 예제가 호환성을 보증하지 않음',
      en: 'A recommended pattern with the conditions for automatic and manual activation; not normative, and examples do not guarantee compatibility',
    },
  },
];

export const TabsPatternPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PartsSection locale={locale} />
      <ActivationSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="navigation-and-current" />
    </DocLayout>
  );
};
