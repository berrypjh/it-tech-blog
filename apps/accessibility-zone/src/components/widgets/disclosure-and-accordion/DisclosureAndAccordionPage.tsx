import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { ChooseSection } from './sections/ChooseSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RulesSection } from './sections/RulesSection';
import { getToc } from './toc';

const points = {
  ko: [
    '덧붙이는 설명 하나는 details와 summary로 만듭니다. 상태 · 키 · 숨김을 브라우저가 맡습니다.',
    '제목이 여럿이면 제목 요소 안에 버튼을 두고, 버튼의 aria-expanded와 패널의 hidden을 언제나 맞춥니다. 하나만 열림인지 여러 개 열림인지를 정합니다.',
    '닫힌 패널의 자식은 Tab 순서에 없어야 하고, 패널 안에서 닫으면 초점을 그 제목 버튼으로 돌려보냅니다. 제목 버튼을 눌렀을 때는 초점을 옮기지 않습니다.',
    '패널마다 region을 더하는 것은 선택 사항이고, 패널이 많으면 피합니다.',
  ],
  en: [
    'Build a single added explanation with details and summary; the browser handles state, keys, and hiding.',
    'With several headings, put a button inside each heading element and always keep the button’s aria-expanded and the panel’s hidden in sync. Decide between single-open and multi-open.',
    'Children of a closed panel must not be in the Tab order, and closing from inside returns focus to that heading button. Pressing a heading button does not move focus.',
    'Adding region to each panel is optional and is avoided when there are many panels.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('interactive-elements', 'the-details-element'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — The details element'),
    note: {
      ko: 'details · summary와 name 속성의 정의',
      en: 'The definition of details, summary, and the name attribute',
    },
  },
  {
    href: aria12('aria-expanded'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-expanded'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: apg('disclosure'),
    source: same('W3C WAI'),
    title: same('APG — Disclosure (Show/Hide) Pattern'),
    note: { ko: '권장 패턴. 규범이 아님', en: 'A recommended pattern; not normative' },
  },
  {
    href: apg('accordion'),
    source: same('W3C WAI'),
    title: same('APG — Accordion Pattern'),
    note: {
      ko: '권장 패턴. region은 선택 사항이며 예제가 호환성을 보증하지 않음',
      en: 'A recommended pattern; region is optional and examples do not guarantee compatibility',
    },
  },
];

export const DisclosureAndAccordionPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ChooseSection locale={locale} />
      <RulesSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="tabs-pattern" />
    </DocLayout>
  );
};
