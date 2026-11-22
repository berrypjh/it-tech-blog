import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { formsTutorial, wcag22 } from '@/components/shared/wcag';

import { BoundarySection } from './sections/BoundarySection';
import { CustomSection } from './sections/CustomSection';
import { NativeSection } from './sections/NativeSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '브라우저 기본 제약이 제출을 멈추면 invalid 이벤트만 일어나고 submit 이벤트는 일어나지 않습니다. 오류 글은 브라우저 화면에 잠시 보이고 페이지 DOM에는 남지 않습니다.',
    '사용자 정의 검증은 novalidate로 기본 알림을 꺼서 같은 오류를 두 번 알리지 않고, 검사할 때마다 결과를 새로 써서 이전 오류를 지웁니다.',
    'novalidate를 써도 required와 type은 남깁니다. 필수 상태와 입력 화면은 검사와 별개로 전달됩니다.',
    '클라이언트 검증은 사용자가 빨리 고치게 돕는 일입니다. 서버는 받은 값을 다시 확인합니다.',
  ],
  en: [
    'When built-in constraints stop a submission, only invalid events fire and no submit event does. The error text shows briefly in the browser UI and does not remain in the page DOM.',
    'Custom validation turns off built-in reporting with novalidate so the same error is not reported twice, and writes the result anew on each check to clear the previous error.',
    'Keep required and type even with novalidate. The required state and the input UI are conveyed separately from the check.',
    'Client-side validation helps the user fix things quickly. The server checks the received values again.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('form-control-infrastructure', 'constraints'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Constraints'),
    note: { ko: '제약 검증의 정의', en: 'The definition of constraint validation' },
  },
  {
    href: whatwg('form-control-infrastructure', 'the-constraint-validation-api'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — The constraint validation API'),
    note: {
      ko: 'validity · validationMessage · setCustomValidity()',
      en: 'validity, validationMessage, and setCustomValidity()',
    },
  },
  {
    href: whatwg('form-control-infrastructure', 'attr-fs-novalidate'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — novalidate'),
    note: {
      ko: '제출할 때 검증하지 않게 하는 속성',
      en: 'The attribute that skips validation on submission',
    },
  },
  {
    href: wcag22('error-identification'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.1 Error Identification (Level A)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: formsTutorial('validation/'),
    source: same('W3C WAI'),
    title: same('Forms Tutorial — Validating Input'),
    note: {
      ko: '기본 검증과 사용자 정의 검증 (보충 자료)',
      en: 'Built-in and custom validation (supporting)',
    },
  },
];

export const ValidationResponsibilityPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <NativeSection locale={locale} />
      <CustomSection locale={locale} />
      <PracticeSection locale={locale} />
      <BoundarySection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="error-summary" />
    </DocLayout>
  );
};
