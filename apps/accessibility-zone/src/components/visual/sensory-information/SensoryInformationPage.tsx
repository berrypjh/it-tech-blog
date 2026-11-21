import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { CriteriaSection } from './sections/CriteriaSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '1.4.1은 색이 정보 · 동작 · 응답 요청 · 구별의 유일한 시각 수단이 되지 않기를 요구합니다.',
    '1.3.3은 이해와 조작을 위한 안내가 모양 · 색 · 크기 · 위치 · 방향 · 소리에만 기대지 않기를 요구합니다.',
    '색과 위치를 없앨 필요는 없습니다. 이름 · 텍스트 · 형태를 함께 둡니다.',
    '상태 글자를 화면에 두고 필요한 관계를 코드로 연결하면 보는 방식이 달라도 같은 정보를 얻습니다.',
  ],
  en: [
    '1.4.1 requires that color is not the only visual means of conveying information, indicating an action, prompting a response, or distinguishing an element.',
    '1.3.3 requires that instructions for understanding and operating do not rely solely on shape, color, size, location, orientation, or sound.',
    'Color and position need not go away. Add names, text, and form alongside them.',
    'With status text on screen and needed relationships in the code, people get the same information however they perceive it.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('use-of-color'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.1 Use of Color'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('sensory-characteristics'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.3.3 Sensory Characteristics'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('use-of-color'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.1: Use of Color'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
  {
    href: understanding('sensory-characteristics'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.3.3: Sensory Characteristics'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
];

export const SensoryInformationPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CriteriaSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="zoom-and-reflow" />
    </DocLayout>
  );
};
