import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { SemanticsSection } from './sections/SemanticsSection';
import { SvgSection } from './sections/SvgSection';
import { getToc } from './toc';

const points = {
  ko: [
    'SVG 도형과 Canvas 픽셀은 스스로 이름 · 포커스 · 키 처리를 갖지 않습니다. 작성자가 줍니다.',
    '정보를 전하는 SVG는 role="img"와 짧은 이름으로 그림 하나가 되게 하고, 값은 HTML에 한 번 둡니다.',
    'Canvas 위의 조작은 같은 기능을 하는 HTML 컨트롤로 제공합니다.',
    'HTML 경로가 있으면 Canvas는 숨겨 같은 정보와 기능을 두 번 노출하지 않습니다.',
  ],
  en: [
    'SVG shapes and Canvas pixels have no name, focus, or key handling by themselves. The author provides them.',
    'An informative SVG becomes one image with role="img" and a short name, and its values live once in HTML.',
    'Interaction on a Canvas is offered as HTML controls that do the same job.',
    'With an HTML path in place, hide the Canvas so the same information and function are not exposed twice.',
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
    href: wcag22('keyboard'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.1.1 Keyboard'),
    note: {
      ko: '모든 기능의 키보드 조작 (2024-12-12)',
      en: 'Keyboard operation of all functions (2024-12-12)',
    },
  },
  {
    href: 'https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element',
    source: same('WHATWG'),
    title: same('HTML Living Standard — The canvas element'),
    note: { ko: '대체 내용(fallback content)의 정의', en: 'The definition of fallback content' },
  },
];

export const SvgAndCanvasPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <SemanticsSection locale={locale} />
      <SvgSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="math-content" />
    </DocLayout>
  );
};
