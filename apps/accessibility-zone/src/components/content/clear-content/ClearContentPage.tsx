import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { CogaSection } from './sections/CogaSection';
import { LanguageSection } from './sections/LanguageSection';
import { NoticeSection } from './sections/NoticeSection';
import { PageHeader } from './sections/PageHeader';
import { getToc } from './toc';

const points = {
  ko: [
    '안내문은 할 일 · 기한 · 장소가 드러나게 고치고, 같은 과업을 마칠 수 있는지로 전후를 비교합니다.',
    '페이지의 언어(3.1.1)와 다른 언어 구절(3.1.2)은 lang으로 프로그램이 알 수 있게 합니다.',
    '3.2.6은 되풀이되는 도움 수단의 순서가 같기를 요구할 뿐, 도움 수단을 새로 만들라고 하지 않습니다.',
    '쉬운 말 · 기억 부담 줄이기는 COGA의 권고이며, 이해 여부는 독해 점수가 아니라 사람의 과업 기록으로 확인합니다.',
  ],
  en: [
    'Rewrite notices so the action, deadline, and place stand out, and compare before and after by whether the same task can be finished.',
    'Make the page language (3.1.1) and passages in other languages (3.1.2) programmatically determinable with lang.',
    '3.2.6 only asks that repeated help mechanisms keep the same order; it does not require creating help.',
    'Plain words and less memory load are COGA advice, and understanding is confirmed by people’s task records, not readability scores.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('consistent-help'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.2.6 Consistent Help'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('language-of-parts'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.1.2 Language of Parts'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: 'https://www.w3.org/TR/coga-usable/',
    source: same('W3C'),
    title: same('Making Content Usable for People with Cognitive and Learning Disabilities'),
    note: {
      ko: 'Working Group Note (2021-04-29), 비규범 권고',
      en: 'Working Group Note (2021-04-29), non-normative advice',
    },
  },
];

export const ClearContentPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <NoticeSection locale={locale} />
      <LanguageSection locale={locale} />
      <CogaSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="documents-and-page-references" />
    </DocLayout>
  );
};
