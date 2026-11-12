import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { accname11, accname12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { EmptySection } from './sections/EmptySection';
import { HiddenSection } from './sections/HiddenSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    'aria-labelledby로 직접 참조된 숨김 대상은 이름에 포함되고, 보이는 참조 대상 안의 숨김 자손은 빠집니다. 숨은 참조 대상 안의 자손은 1.1과 1.2 초안의 결과가 다릅니다.',
    '여러 ID는 DOM 순서가 아니라 속성에 적힌 순서로 이어 붙고, 참조는 한 번만 따라가므로 중첩 · 순환 참조도 멈춥니다.',
    '속성 없음 · 빈 문자열 · 유효한 참조 없음은 그 단계가 적용되지 않는 경우이고, 참조가 유효한데 결과가 빈 경우는 다릅니다.',
    '해석이나 엔진 결과가 갈리는 사례는 하나의 결과를 강제하지 않고, 판본 · 단계 · 엔진 · 재현 조건과 함께 기록합니다.',
  ],
  en: [
    'A hidden target referenced directly with aria-labelledby is included in the name, while hidden descendants inside a visible target are left out. For descendants inside a hidden target, 1.1 and the 1.2 draft differ.',
    'Several IDs are joined in the order written in the attribute, not DOM order, and references are followed only once, so nested and circular references stop.',
    'No attribute, an empty string, and no valid reference are cases where the step does not apply; a valid reference with an empty result is different.',
    'Where readings or engine results split, do not force one result; record the edition, step, engine, and reproduction conditions.',
  ],
};

const references: DocReference[] = [
  {
    href: accname12('comp_hidden_not_referenced'),
    source: same('W3C'),
    title: same('AccName 1.2 — Hidden Not Referenced, LabelledBy'),
    note: {
      ko: '숨김 · 참조 단계의 초안 (Working Draft, 2026-11-04)',
      en: 'Draft hiding and reference steps (Working Draft, 2026-11-04)',
    },
  },
  {
    href: accname11('step2A'),
    source: same('W3C'),
    title: same('AccName 1.1 — step 2A, 2B'),
    note: {
      ko: '확정 규격의 같은 단계 (W3C Recommendation, 2018-12-18)',
      en: 'The same steps in the Recommendation (2018-12-18)',
    },
  },
  {
    href: 'https://github.com/w3c/accname/issues',
    source: same('W3C AccName (GitHub)'),
    title: same('AccName issues'),
    note: {
      ko: '초안 문장의 해석 논의가 열리는 곳 (보충 자료)',
      en: 'Where readings of the draft text are discussed (supporting material)',
    },
  },
];

export const ReferenceEdgeCasesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <HiddenSection locale={locale} />
      <EmptySection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="descriptions-and-errors" />
    </DocLayout>
  );
};
