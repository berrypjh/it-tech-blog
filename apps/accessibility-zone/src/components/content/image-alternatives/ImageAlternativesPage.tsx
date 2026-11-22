import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { EmptyAltSection } from './sections/EmptyAltSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { PurposeSection } from './sections/PurposeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '대체 텍스트는 그림이 그 자리에서 하는 일을 대신합니다. 같은 그림도 자리마다 값이 다릅니다.',
    '장식은 alt="", 정보는 그 정보, 기능은 누르면 일어나는 일이나 목적지를 적습니다.',
    'alt 생략은 장식 처리가 아닙니다. 이름 없는 그림으로 남고, 무엇을 읽을지는 보조기술에 맡겨집니다.',
    '링크 글자가 이미 있으면 그림을 비워 같은 말을 두 번 듣지 않게 합니다.',
  ],
  en: [
    'A text alternative does the image’s job in that place, so the same image gets different values in different places.',
    'Decorative gets alt="", informative gets the information, and functional gets the action or destination.',
    'A missing alt is not decoration. It leaves an image without a name and leaves the speech to assistive technology.',
    'If the link already has text, leave the image empty so the same words are not heard twice.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('non-text-content'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.1.1 Non-text Content'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('non-text-content'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.1.1: Non-text Content'),
    note: { ko: '적용 상황 해설 (보충 자료)', en: 'How the situations apply (supporting)' },
  },
  {
    href: 'https://www.w3.org/WAI/tutorials/images/decision-tree/',
    source: same('W3C WAI'),
    title: same('Images Tutorial — An alt Decision Tree'),
    note: {
      ko: '목적별 결정 나무 (보충 자료, 2026-04-08 갱신)',
      en: 'A decision tree by purpose (supporting, updated 2026-04-08)',
    },
  },
];

export const ImageAlternativesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <PurposeSection locale={locale} />
      <EmptyAltSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="complex-images" />
    </DocLayout>
  );
};
