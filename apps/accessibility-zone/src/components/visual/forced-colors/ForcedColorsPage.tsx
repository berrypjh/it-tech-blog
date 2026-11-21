import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { ConceptsSection } from './sections/ConceptsSection';
import { PageHeader } from './sections/PageHeader';
import { RecordsSection } from './sections/RecordsSection';
import { StylesSection } from './sections/StylesSection';
import { CSS_COLOR_ADJUST, CSS_MEDIA_QUERIES } from './specs';
import { getToc } from './toc';

const points = {
  ko: [
    'Forced Colors는 사용자가 고른 제한된 색을 브라우저가 강제하는 모드이고, 앱의 다크 테마나 prefers-contrast와 다릅니다.',
    '이 모드에서 box-shadow는 사라지고 배경색은 바뀌므로, 그것만으로 만든 경계와 상태는 없어질 수 있습니다.',
    '실제 테두리 · 아웃라인 · 글자 · 아이콘으로 상태를 남기고, 필요하면 시스템 색을 씁니다.',
    'forced-color-adjust: none을 페이지 전체에 쓰지 않습니다. 에뮬레이션과 실제 OS · 브라우저 결과는 나눠 기록합니다.',
  ],
  en: [
    'Forced colors is a mode where the browser enforces a limited palette the user chose. It differs from an app’s dark theme and from prefers-contrast.',
    'In this mode box-shadow disappears and background colors change, so boundaries and states built only from them can vanish.',
    'Keep state with real borders, outlines, text, and icons, and use system colors where needed.',
    'Do not apply forced-color-adjust: none to a whole page. Record emulation and real OS and browser results separately.',
  ],
};

const references: DocReference[] = [
  {
    href: `${CSS_COLOR_ADJUST}#forced-colors-mode`,
    source: same('W3C'),
    title: same('CSS Color Adjustment Module Level 1 — Forced Colors Mode'),
    note: { ko: '강제되는 속성과 예외', en: 'Forced properties and exceptions' },
  },
  {
    href: `${CSS_COLOR_ADJUST}#forced-color-adjust-prop`,
    source: same('W3C'),
    title: same('CSS Color Adjustment — forced-color-adjust'),
    note: { ko: 'none을 쓰는 조건', en: 'When none is appropriate' },
  },
  {
    href: `${CSS_MEDIA_QUERIES}#forced-colors`,
    source: same('W3C'),
    title: same('Media Queries Level 5 — forced-colors'),
    note: { ko: '미디어 기능', en: 'The media feature' },
  },
  {
    href: `${CSS_MEDIA_QUERIES}#prefers-contrast`,
    source: same('W3C'),
    title: same('Media Queries Level 5 — prefers-contrast'),
    note: { ko: '대비 선호', en: 'The contrast preference' },
  },
];

export const ForcedColorsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ConceptsSection locale={locale} />
      <StylesSection locale={locale} />
      <RecordsSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="covered-content" />
    </DocLayout>
  );
};
