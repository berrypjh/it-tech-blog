import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { AtomicSection } from './sections/AtomicSection';
import { BusySection } from './sections/BusySection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    'aria-atomic은 바뀐 노드만 넘길지 영역 전체를 넘길지 정합니다. 숫자만으로 뜻이 없으면 전체 문맥을 줍니다.',
    'aria-relevant의 기본값은 additions text라 제거는 알리지 않습니다. 제거가 뜻을 가질 때만 removals를 더합니다.',
    'aria-busy는 묶음 갱신 동안 중간 값을 미루게 하고, 성공 · 실패 · 취소 어느 경우든 끝나면 풉니다.',
    '대기 알림은 busy 영역 밖의 status에 두고, 관찰 기록이나 설명을 live 영역으로 다시 방송하지 않습니다.',
  ],
  en: [
    'aria-atomic decides whether to pass only the changed node or the whole region. When a number alone has no meaning, give the whole context.',
    'The default aria-relevant is additions text, so removals are not reported. Add removals only when removal means something.',
    'aria-busy holds half-finished values during a batch update and is released when it ends, whether in success, failure, or cancel.',
    'Put the waiting notice in a status outside the busy region, and do not broadcast observation logs or explanations again in live regions.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('aria-atomic'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-atomic'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('aria-relevant'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-relevant'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('aria-busy'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-busy'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
];

export const LiveRegionScopePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <AtomicSection locale={locale} />
      <BusySection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="loading-and-results" />
    </DocLayout>
  );
};
