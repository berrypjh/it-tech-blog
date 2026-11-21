import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { CriterionSection } from './sections/CriterionSection';
import { FixesSection } from './sections/FixesSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '1.4.12는 줄 높이 1.5배, 문단 뒤 2배, 글자 간격 0.12배, 단어 간격 0.16배를 사용자가 적용해도 내용과 기능을 잃지 않기를 요구합니다.',
    '이 값을 사이트의 기본 스타일로 쓰라는 뜻은 아닙니다.',
    '고정 높이 · 줄바꿈 금지 · overflow 숨김이 함께 있으면 긴 번역과 간격 변경에서 내용이 잘리기 쉽습니다.',
    '줄바꿈과 min-height처럼 내용에 따라 늘어나는 배치로 고칩니다.',
  ],
  en: [
    '1.4.12 requires no loss of content or functionality when users apply line height 1.5, paragraph spacing 2, letter spacing 0.12, and word spacing 0.16 times the font size.',
    'It does not mean the site must use these values as its default style.',
    'Fixed heights, no wrapping, and hidden overflow together easily clip content under long translations and spacing changes.',
    'Fix it with layouts that grow with content, such as wrapping and min-height.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('text-spacing'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.12 Text Spacing'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('text-spacing'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.12: Text Spacing'),
    note: { ko: '보충 자료', en: 'Supporting material' },
  },
];

export const TextSpacingPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CriterionSection locale={locale} />
      <PracticeSection locale={locale} />
      <FixesSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="forced-colors" />
    </DocLayout>
  );
};
