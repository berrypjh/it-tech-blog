import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12, htmlAria, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { AriaDisabledSection } from './sections/AriaDisabledSection';
import { AriaRequiredSection } from './sections/AriaRequiredSection';
import { NativeSection } from './sections/NativeSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    'disabled는 편집 · 포커스 · 활성화 · 제출 데이터 · 기본 유효성 검사에서 모두 빠지고, readonly는 편집만 막고 포커스와 제출 데이터를 남깁니다.',
    'readonly와 required는 적용되는 요소가 정해져 있습니다. readonly는 checkbox · radio · select에 효과가 없고, required의 뜻은 입력 종류마다 다릅니다.',
    'aria-disabled는 비활성 의미만 알립니다. click과 제출은 그대로 일어나므로, 쓸 때는 실행 경로에서 같은 상태를 확인해 막습니다.',
    'aria-required는 필수 의미만 알리고 빈 값 제출을 막지 않습니다. 네이티브 칸에는 required를 씁니다.',
  ],
  en: [
    'disabled leaves out editing, focus, activation, submitted data, and built-in validation; readonly blocks only editing and keeps focus and submitted data.',
    'readonly and required apply to specific elements. readonly has no effect on checkbox, radio, or select, and what required means differs by input type.',
    'aria-disabled conveys only the disabled meaning. Clicks and submission still happen, so when you use it, check the same state on the execution path and block it.',
    'aria-required conveys only the required meaning and does not block empty submission. Use required on native fields.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('form-control-infrastructure', 'concept-fe-disabled'),
    source: same('WHATWG'),
    title: same('HTML Standard — Enabling and disabling form controls'),
    note: {
      ko: 'disabled의 적용 요소와 click · 검사 규칙 (2026-11-06 갱신본)',
      en: 'Where disabled applies, and its click and validation rules (updated 2026-11-06)',
    },
  },
  {
    href: whatwg('input', 'the-readonly-attribute'),
    source: same('WHATWG'),
    title: same('HTML Standard — The readonly attribute'),
    note: { ko: 'readonly와 disabled의 차이', en: 'How readonly differs from disabled' },
  },
  {
    href: whatwg('input', 'the-required-attribute'),
    source: same('WHATWG'),
    title: same('HTML Standard — The required attribute'),
    note: { ko: '빈 값 검사 규칙', en: 'The empty-value validation rule' },
  },
  {
    href: whatwg('form-control-infrastructure', 'constructing-the-form-data-set'),
    source: same('WHATWG'),
    title: same('HTML Standard — Constructing the entry list'),
    note: {
      ko: '제출 데이터에서 disabled 컨트롤을 빼는 단계',
      en: 'The step that leaves disabled controls out of submitted data',
    },
  },
  {
    href: aria12('aria-disabled'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-disabled'),
    note: {
      ko: '비활성 의미 (W3C Recommendation, 2023-06-06)',
      en: 'The disabled meaning (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: htmlAria('att-disabled'),
    source: same('W3C'),
    title: same('ARIA in HTML — 4.2 ARIA attributes in place of HTML attributes'),
    note: {
      ko: 'disabled · readonly · required 대신 aria-*를 쓸 때의 규칙 (2026-08-11)',
      en: 'Rules for aria-* in place of disabled, readonly, and required (2026-08-11)',
    },
  },
];

export const DisabledAndRequiredPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <NativeSection locale={locale} />
      <AriaDisabledSection locale={locale} />
      <AriaRequiredSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="fixing-controls" />
    </DocLayout>
  );
};
