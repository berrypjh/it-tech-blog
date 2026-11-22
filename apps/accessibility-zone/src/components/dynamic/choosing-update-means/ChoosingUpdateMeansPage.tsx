import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { FocusSection } from './sections/FocusSection';
import { MeansSection } from './sections/MeansSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { ScopeSection } from './sections/ScopeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '화면 변화는 화면 갱신 · 포커스를 받지 않는 상태 메시지 · 맥락 전환으로 나누고, 상황마다 필요한 수단을 고릅니다.',
    '4.1.3은 결과 · 대기 · 진행 · 오류를 알리는 상태 메시지만 다룹니다. 모든 DOM 변경이 대상은 아닙니다.',
    '상태 메시지는 결과가 있다는 사실과 수를 짧게 알리고, 내용은 결과 영역이 맡습니다.',
    '포커스 이동과 상태 메시지는 서로를 대신하지 않습니다. 삭제 뒤에는 복구하고, 배경 갱신에는 포커스를 두고 필요할 때만 알립니다.',
  ],
  en: [
    'Sort screen changes into screen updates, status messages that do not take focus, and changes of context, and pick the means each situation needs.',
    '4.1.3 covers only status messages that report results, waiting, progress, or errors. Not every DOM change is covered.',
    'A status message briefly reports that there are results and how many; the results area carries the content.',
    'Moving focus and a status message do not replace each other. Recover focus after a deletion; for a background update leave focus and report only when needed.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('status-messages'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 4.1.3 Status Messages'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('status-messages'),
    source: same('W3C WAI'),
    title: same('Understanding SC 4.1.3: Status Messages'),
    note: {
      ko: '해설 (보충 자료, 2026-10-04 갱신)',
      en: 'Explanation (supporting, updated 2026-10-04)',
    },
  },
  {
    href: wcag22('dfn-change-of-context'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Glossary: changes of context'),
    note: { ko: '맥락 전환의 정의', en: 'The definition of a change of context' },
  },
];

export const ChoosingUpdateMeansPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <MeansSection locale={locale} />
      <ScopeSection locale={locale} />
      <PracticeSection locale={locale} />
      <FocusSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="live-region-roles" />
    </DocLayout>
  );
};
