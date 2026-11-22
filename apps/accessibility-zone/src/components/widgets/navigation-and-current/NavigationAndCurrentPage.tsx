import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { CurrentSection } from './sections/CurrentSection';
import { NamingSection } from './sections/NamingSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { UrlSection } from './sections/UrlSection';
import { getToc } from './toc';

const points = {
  ko: [
    '링크 묶음의 현재 위치는 aria-current로 알리고, 한 묶음에서 하나만 표시합니다. 위젯 안의 선택은 aria-selected이고 둘을 서로 대신하지 않습니다.',
    'nav가 여럿이면 무엇을 탐색하는지 이름으로 구별합니다. 링크의 글자는 목적지를 말합니다.',
    '쪽마다 주소가 달라지는 이동은 링크로 만들어 뒤로 가기와 주소 공유가 되게 합니다. 같은 화면에서 목록만 바꾸면 버튼과 상태 알림이 필요합니다.',
    '목적지가 없는 항목은 링크로 만들지 않습니다.',
  ],
  en: [
    'Convey the current location in a set of links with aria-current, marking only one per set. Selection inside a widget is aria-selected, and neither substitutes for the other.',
    'With several navs, tell them apart by naming what each navigates. Link text states the destination.',
    'Build navigation with a different address per page from links, so the back button and sharing the address work. Changing only the list in place needs buttons and a status message.',
    'Do not make an item without a destination a link.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('aria-current'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-current'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('navigation'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — navigation'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: whatwg('sections', 'the-nav-element'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — The nav element'),
    note: { ko: 'nav 요소의 정의', en: 'The definition of the nav element' },
  },
  {
    href: apg('breadcrumb'),
    source: same('W3C WAI'),
    title: same('APG — Breadcrumb Pattern'),
    note: { ko: '권장 패턴. 규범이 아님', en: 'A recommended pattern; not normative' },
  },
];

export const NavigationAndCurrentPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CurrentSection locale={locale} />
      <NamingSection locale={locale} />
      <UrlSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="menus-and-toolbars" />
    </DocLayout>
  );
};
