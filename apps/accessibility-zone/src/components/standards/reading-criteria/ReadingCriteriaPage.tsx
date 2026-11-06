import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { InputPurposeSection } from './sections/InputPurposeSection';
import { MethodSection } from './sections/MethodSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { TargetSizeSection } from './sections/TargetSizeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '성공 기준은 원문 → 정의 → 적용 대상 → 조건 · 예외 → 확인 증거 순서로 읽습니다.',
    '1.3.5가 요구하는 것은 본인 정보 칸의 목적을 프로그램이 알 수 있는 결과이고, autocomplete 토큰은 그 결과를 내는 기법입니다.',
    '적용 대상이 아니면 "해당 없음"이고, 그 근거로 적용 대상 문장을 적습니다.',
    '2.5.8의 24 CSS 픽셀은 첫 확인일 뿐입니다. 대상의 정의와 다섯 예외를 대상마다 대조해 판정합니다.',
  ],
  en: [
    'Read a success criterion as original text → definitions → scope → conditions and exceptions → evidence.',
    '1.3.5 requires the outcome that the purpose of fields about the user is programmatically determinable; an autocomplete token is a technique that produces it.',
    'Out of scope means "not applicable," with the scope sentence noted as the reason.',
    'The 24 CSS pixels in 2.5.8 are only a first check. Judge each target against the definition and the five exceptions.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('identify-input-purpose'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.3.5 Identify Input Purpose'),
    note: {
      ko: '규범 원문 (W3C Recommendation, 2024-12-12)',
      en: 'Normative text (W3C Recommendation, 2024-12-12)',
    },
  },
  {
    href: wcag22('input-purposes'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 7. Input Purposes for User Interface Components'),
    note: {
      ko: '1.3.5가 가리키는 입력 목적 목록',
      en: 'The list of input purposes 1.3.5 refers to',
    },
  },
  {
    href: wcag22('target-size-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.5.8 Target Size (Minimum)'),
    note: { ko: '규범 원문과 다섯 예외', en: 'Normative text and five exceptions' },
  },
  {
    href: wcag22('dfn-targets'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Definition: target'),
    note: { ko: '겹친 대상의 크기 재기', en: 'Measuring overlapping targets' },
  },
  {
    href: understanding('target-size-minimum'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.5.8: Target Size (Minimum)'),
    note: { ko: '예외를 해석하는 보충 설명', en: 'Informative guidance on the exceptions' },
  },
];

export const ReadingCriteriaPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <MethodSection locale={locale} />
      <InputPurposeSection locale={locale} />
      <TargetSizeSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="conformance" />
    </DocLayout>
  );
};
