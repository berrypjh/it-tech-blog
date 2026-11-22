import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { formsTutorial, understanding, wcag22 } from '@/components/shared/wcag';

import { ConditionalSection } from './sections/ConditionalSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RedundantSection } from './sections/RedundantSection';
import { StepsSection } from './sections/StepsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '단계를 오가도 값을 지키고, 단계가 바뀌면 초점을 새 단계의 제목으로 옮깁니다. 다음에서는 지금 단계의 칸만 검사합니다.',
    '조건부 필드는 노출 · 값 유지 · 검증 · 제출을 함께 정합니다. 이 예제는 칸을 DOM에서 빼고 값은 기억하며, 검증과 제출에서는 뺍니다.',
    '보이지 않는 칸에 required가 남으면 제출이 이유 없이 멈출 수 있습니다. 조건을 바꾸는 것만으로 초점이나 화면을 옮기지 않습니다.',
    '같은 과정에서 받은 정보를 다시 요구할 때는 자동으로 채우거나 고르게 합니다(3.3.7, A). 필수인 경우 · 보안 · 유효하지 않은 정보는 예외입니다.',
  ],
  en: [
    'Keep values when moving between steps, and move focus to the heading of the new step. Next checks only the fields of the current step.',
    'Decide visibility, value retention, validation, and submission of a conditional field together. This example removes the field from the DOM, remembers the value, and leaves it out of validation and submission.',
    'If required remains on an invisible field, submission can stop for no visible reason. Changing a condition alone does not move focus or the screen.',
    'When information given in the same process is asked for again, auto-populate it or make it selectable (3.3.7, A). Essential re-entry, security, and information no longer valid are exceptions.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('redundant-entry'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.7 Redundant Entry (Level A)'),
    note: {
      ko: '규범 근거와 예외 (2024-12-12)',
      en: 'The normative basis and exceptions (2024-12-12)',
    },
  },
  {
    href: understanding('redundant-entry'),
    source: same('W3C WAI'),
    title: same('Understanding SC 3.3.7: Redundant Entry'),
    note: { ko: '같은 과정의 범위 (보충 자료)', en: 'The scope of the same process (supporting)' },
  },
  {
    href: wcag22('on-input'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.2.2 On Input (Level A)'),
    note: {
      ko: '설정을 바꾸는 것만으로 맥락이 바뀌지 않게 (2024-12-12)',
      en: 'Changing a setting does not change context (2024-12-12)',
    },
  },
  {
    href: whatwg('form-control-infrastructure', 'constraints'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Constraints'),
    note: {
      ko: '비활성 칸은 제약 검증 대상이 아님',
      en: 'Disabled controls are barred from constraint validation',
    },
  },
  {
    href: formsTutorial('multi-page/'),
    source: same('W3C WAI'),
    title: same('Forms Tutorial — Multi-page Forms'),
    note: { ko: '단계 표시와 진행 (보충 자료)', en: 'Indicating steps and progress (supporting)' },
  },
];

export const MultiStepFormsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <StepsSection locale={locale} />
      <ConditionalSection locale={locale} />
      <RedundantSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="authentication-paths" />
    </DocLayout>
  );
};
