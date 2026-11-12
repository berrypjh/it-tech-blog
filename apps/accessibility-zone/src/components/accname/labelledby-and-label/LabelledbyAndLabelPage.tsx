import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { accname11, accname12, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { OverrideSection } from './sections/OverrideSection';
import { PageHeader } from './sections/PageHeader';
import { RecordSection } from './sections/RecordSection';
import { TraceSection } from './sections/TraceSection';
import { getToc } from './toc';

const points = {
  ko: [
    'aria-labelledby → aria-label → 요소별 HTML 출처 → 내용이라는 순서는, 각 출처가 적용될 수 있을 때만 성립합니다.',
    '이름 하나마다 역할의 이름 허용 · 적용 가능한 출처 · 참조의 유효성 · 끝난 단계를 기록합니다.',
    'aria-labelledby는 실제로 있는 ID가 하나라도 있을 때 적용되고, 공백뿐인 aria-label은 건너뜁니다. 이름이 금지된 역할에서는 두 판본의 결과가 다를 수 있습니다.',
    'aria-label · aria-labelledby는 내용보다 먼저 쓰여 화면 라벨을 덮어쓸 수 있습니다. 그 판정은 06.6에서 합니다.',
  ],
  en: [
    'The order aria-labelledby → aria-label → per-element HTML source → content holds only when each source can apply.',
    'For each name, record whether the role allows a name, which sources apply, whether references are valid, and which step finished.',
    'aria-labelledby applies when at least one ID actually exists, and a whitespace-only aria-label is skipped. On roles that prohibit naming, the two editions can give different results.',
    'aria-label and aria-labelledby are used before content and can override the visible label. That is judged in 06.6.',
  ],
};

const references: DocReference[] = [
  {
    href: accname12('comp_labelledby'),
    source: same('W3C'),
    title: same('AccName 1.2 — LabelledBy, AriaLabel, Name From Content'),
    note: {
      ko: '초안의 계산 단계 (Working Draft, 2026-11-04)',
      en: 'Draft computation steps (Working Draft, 2026-11-04)',
    },
  },
  {
    href: accname11('step2B'),
    source: same('W3C'),
    title: same('AccName 1.1 — step 2B, 2C'),
    note: {
      ko: '확정 규격의 같은 단계 (W3C Recommendation, 2018-12-18)',
      en: 'The same steps in the Recommendation (2018-12-18)',
    },
  },
  {
    href: aria12('namefromprohibited'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — Roles which cannot be named'),
    note: {
      ko: '이름이 금지된 역할 목록 (2023-06-06)',
      en: 'Roles that prohibit naming (2023-06-06)',
    },
  },
  {
    href: aria12('aria-labelledby'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-labelledby'),
    note: { ko: 'ID 참조 목록으로 이름 주기', en: 'Naming with an ID reference list' },
  },
];

export const LabelledbyAndLabelPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TraceSection locale={locale} />
      <RecordSection locale={locale} />
      <OverrideSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="reference-edge-cases" />
    </DocLayout>
  );
};
