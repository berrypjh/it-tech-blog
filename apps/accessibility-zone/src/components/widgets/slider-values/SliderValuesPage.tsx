import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { AlternativesSection } from './sections/AlternativesSection';
import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    'Slider는 input type="range"로 만들고 보이는 이름을 줍니다. 현재 값은 손잡이 위치만이 아니라 글자로 보여 주고, 단위는 aria-valuetext로 함께 전합니다.',
    '키보드 조작과 끌지 않는 단일 포인터 조작은 다른 요구입니다(2.5.7, AA). 증감 버튼이나 값을 바로 고르는 버튼을 함께 둡니다.',
    '가장 작은 값과 큰 값에서 더 줄이거나 늘려도 값과 화면의 글자가 그대로여야 합니다.',
    '터치 기반 보조기술에서 slider가 동작하는지는 실제 기기에서 확인합니다.',
  ],
  en: [
    'Build a slider from input type="range" with a visible name. Show the current value as text, not only by the handle’s position, and convey the unit through aria-valuetext.',
    'Keyboard operation and single-pointer operation without dragging are different requirements (2.5.7, AA). Add stepping buttons or buttons that pick a value directly.',
    'At the smallest and largest values, decreasing or increasing further must leave the value and the text on screen unchanged.',
    'Check on real devices whether a slider works with touch-based assistive technology.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('input', 'range-state-(type=range)'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Range state'),
    note: { ko: 'min · max · step의 정의', en: 'The definition of min, max, and step' },
  },
  {
    href: aria12('slider'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — slider, aria-valuetext'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: wcag22('dragging-movements'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.5.7 Dragging Movements (Level AA)'),
    note: {
      ko: '규범 근거와 예외 (2024-12-12)',
      en: 'The normative basis and exceptions (2024-12-12)',
    },
  },
  {
    href: understanding('dragging-movements'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.5.7: Dragging Movements'),
    note: {
      ko: '단일 포인터 대안의 해설 (보충 자료)',
      en: 'Explains single-pointer alternatives (supporting)',
    },
  },
  {
    href: apg('slider'),
    source: same('W3C WAI'),
    title: same('APG — Slider Pattern'),
    note: {
      ko: '권장 패턴과 터치 보조기술 경고. 규범이 아님',
      en: 'A recommended pattern with a warning on touch assistive technology; not normative',
    },
  },
];

export const SliderValuesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PartsSection locale={locale} />
      <AlternativesSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="spinbutton-input" />
    </DocLayout>
  );
};
