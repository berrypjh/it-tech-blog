import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { PageHeader } from './sections/PageHeader';
import { PreventionSection } from './sections/PreventionSection';
import { ReauthSection } from './sections/ReauthSection';
import { TaskSection } from './sections/TaskSection';
import { TimingSection } from './sections/TimingSection';
import { getToc } from './toc';

const points = {
  ko: [
    '콘텐츠가 정한 시간제한에는 끄기 · 조절 · 연장 가운데 하나가 따르거나 정해진 예외에 해당해야 합니다(2.2.1, A).',
    '세션이 만료돼도 재인증한 뒤 데이터를 잃지 않고 이어 가게 하는 것은 별개의 기준입니다(2.2.5, AAA). 연장 · 재인증 · 취소 어느 조작에서도 초안을 지우지 않습니다.',
    '법적 약속 · 금융 거래 · 저장된 데이터 변경 · 시험 답안을 다루는 페이지에는 되돌리기, 오류 검사와 정정 기회, 확정 전 검토 · 확인 가운데 하나가 요구되고(3.3.4, AA), 모든 제출로 넓힌 것은 3.3.6(AAA)입니다. 예제의 검토 화면은 제품 결정입니다.',
    '복구 흐름은 값 보존 · 활성 요소 · 오류와 상태 글자 · 중복 처리를 전후로 기록해 확인하고, 실제 보조기술로 보지 않은 것은 미확인으로 남깁니다.',
  ],
  en: [
    'A time limit set by the content comes with turn off, adjust, or extend, or must fall under a defined exception (2.2.1, A).',
    'Continuing without data loss after re-authenticating when a session expires is a separate criterion (2.2.5, AAA). The draft is not cleared on extend, re-authenticate, or cancel.',
    'Pages for legal commitments, financial transactions, changes to stored data, and test responses require one of reversibility, error checking with a chance to correct, or review and confirmation before finalizing (3.3.4, AA); 3.3.6 (AAA) widens it to all submissions. The review screen here is a product decision.',
    'Verify a recovery flow by recording value preservation, the active element, error and status text, and duplicate handling before and after, and leave what was not checked with real assistive technology as unconfirmed.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('timing-adjustable'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.2.1 Timing Adjustable (Level A)'),
    note: {
      ko: '규범 근거와 예외 (2024-12-12)',
      en: 'The normative basis and exceptions (2024-12-12)',
    },
  },
  {
    href: wcag22('re-authenticating'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.2.5 Re-authenticating (Level AAA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('error-prevention-legal-financial-data'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)'),
    note: {
      ko: '규범 근거와 적용 범위 (2024-12-12)',
      en: 'The normative basis and scope (2024-12-12)',
    },
  },
  {
    href: wcag22('error-prevention-all'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.6 Error Prevention (All) (Level AAA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('timing-adjustable'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.2.1: Timing Adjustable'),
    note: {
      ko: '조절 수단과 예외의 해설 (보충 자료)',
      en: 'Explains the means and exceptions (supporting)',
    },
  },
];

export const TimeoutsAndConfirmationPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TimingSection locale={locale} />
      <ReauthSection locale={locale} />
      <PreventionSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="selection-controls" />
    </DocLayout>
  );
};
