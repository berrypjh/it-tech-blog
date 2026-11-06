import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { wcag22 } from '@/components/shared/wcag';

import { AxesSection } from './sections/AxesSection';
import { ObligationSection } from './sections/ObligationSection';
import { PageHeader } from './sections/PageHeader';
import { TaskSection } from './sections/TaskSection';
import { VerdictsSection } from './sections/VerdictsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '기술 기준의 발행 상태, 구현 지원 증거, 계약 · 조달 · 인증 요구, 법령 의무는 서로 다른 축이고, 한 축의 답이 다른 축을 정하지 않습니다.',
    '특정 서비스의 의무는 관할 · 대상 · 시점 · 적용 문서를 원문으로 확인한 뒤 권한 있는 곳에서 판단합니다. 이 사이트는 법적 적합성을 단정하지 않습니다.',
    '판정은 통과 · 실패 · 해당 없음 · 미확인으로 나누고, 해당 없음에는 적용 조건의 근거를, 미확인에는 확인할 환경이나 자료를 남깁니다.',
    '판정 기록에는 기준 · 버전 · 조항 · 대상 범위 · 적용 조건과 예외 · 관찰 증거 · 판정 · 미확인 · 후속 확인을 적습니다.',
  ],
  en: [
    'Publication status, implementation support evidence, contract, procurement, and certification requirements, and legal obligations are different axes; the answer on one does not decide another.',
    'A service’s obligations are judged by an authorized body after checking jurisdiction, subject, time, and applicable documents in the original texts. This site does not assert legal compliance.',
    'Split verdicts into pass, fail, not applicable, and unconfirmed; leave the scope basis for not applicable and the environment or material to check for unconfirmed.',
    'A judgment record has standard, version, clause, scope, conditions and exceptions, observed evidence, verdict, unconfirmed items, and follow-up.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('conformance'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 5. Conformance'),
    note: {
      ko: '기술 기준에 대한 판정의 규범 근거 (2024-12-12)',
      en: 'Normative basis for judgments against the standard (2024-12-12)',
    },
  },
  {
    href: wcag22('dfn-accessibility-supported'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Definition: accessibility supported'),
    note: { ko: '구현 지원 증거 축의 정의', en: 'The definition behind the support evidence axis' },
  },
  {
    href: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
    source: same('W3C WAI'),
    title: same('WCAG 2 Overview'),
    note: {
      ko: 'WCAG의 판본과 개요 (2026-09-17 갱신)',
      en: 'WCAG editions and overview (updated 2026-09-17)',
    },
  },
  {
    href: KWCAG_REGISTRY,
    source: { ko: '국립전파연구원', en: 'National Radio Research Agency' },
    title: {
      ko: '한국형 웹 콘텐츠 접근성 지침 2.2 (KS X OT0003)',
      en: 'Korean Web Content Accessibility Guidelines 2.2 (KS X OT0003)',
    },
    note: {
      ko: '예시 기록 4의 판정 문서 (2022-12-28 개정)',
      en: 'The document for example record 4 (revised 2022-12-28)',
    },
  },
];

export const RequirementsAndObligationsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <AxesSection locale={locale} />
      <ObligationSection locale={locale} />
      <VerdictsSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
    </DocLayout>
  );
};
