import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { OutputSection } from './sections/OutputSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { StructureSection } from './sections/StructureSection';
import { getToc } from './toc';

const points = {
  ko: [
    '분수의 관계는 화면 모양이 아니라 mfrac의 분자 · 분모 구조에 있습니다.',
    '분수 모양만 흉내 낸 글자는 DOM에서 관계가 사라지고, 괄호 없는 일렬 글자는 뜻이 바뀔 수 있습니다.',
    'MathML 옆에 관계를 풀어 쓴 문장 대안을 둡니다. 문장은 구조 탐색을 대신하지 않습니다.',
    '화면 표시 · 낭독 · 구조 탐색 · 점자 출력은 따로 확인하고, 실제 보조기술로 하지 않은 것은 미확인입니다.',
  ],
  en: [
    'A fraction’s relationship lives in the numerator and denominator structure of mfrac, not in the look.',
    'Text that only looks like a fraction loses the relationship in the DOM, and linear text without parentheses can change the meaning.',
    'Put a sentence alternative that spells out the relationship next to the MathML. The sentence does not replace structural navigation.',
    'Check screen display, speech, navigation, and braille separately; anything not tried with real assistive technology stays unconfirmed.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('info-and-relationships'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.3.1 Info and Relationships'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: 'https://www.w3.org/TR/mathml-core/',
    source: same('W3C'),
    title: same('MathML Core'),
    note: { ko: '브라우저가 그리는 MathML의 범위', en: 'The MathML that browsers render' },
  },
];

export const MathContentPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <StructureSection locale={locale} />
      <PracticeSection locale={locale} />
      <OutputSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="data-tables" />
    </DocLayout>
  );
};
