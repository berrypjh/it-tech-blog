import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { KindsSection } from './sections/KindsSection';
import { MenubarSection } from './sections/MenubarSection';
import { MenuSection } from './sections/MenuSection';
import { PageHeader } from './sections/PageHeader';
import { ToolbarSection } from './sections/ToolbarSection';
import { getToc } from './toc';

const points = {
  ko: [
    '페이지로 가는 링크 묶음은 nav와 링크로 둡니다. menu는 명령을 고르는 위젯이고, 역할을 붙이면 그 키가 동작해야 합니다.',
    '메뉴 버튼은 열리면 초점이 항목으로 가고, 실행하거나 Escape로 닫으면 버튼으로 돌아옵니다. 실행 결과는 상태 메시지로 알립니다.',
    '도구 모음은 Tab 순서에 한 번만 들어가고 축에 맞는 화살표로 옮깁니다. Tab과 메모 칸의 편집 키는 가로채지 않습니다.',
    '패턴마다 키가 다릅니다. 메뉴바는 두 축과 하위 메뉴가 있어 가장 복잡하므로 꼭 필요한 경우에만 씁니다.',
  ],
  en: [
    'Keep a set of links to pages as nav and links. menu is a widget for choosing a command, and adding the role means its keys must work.',
    'A menu button moves focus to an item when it opens and returns it to the button when a command runs or Escape closes it. The result is conveyed by a status message.',
    'A toolbar enters the Tab order once and moves with arrows along its axis. Tab and the editing keys of the note field are not intercepted.',
    'Keys differ by pattern. A menubar, with two axes and submenus, is the most complex, so use it only when truly needed.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('menu'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — menu, menuitem, menubar'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: aria12('toolbar'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — toolbar'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: apg('menu-button'),
    source: same('W3C WAI'),
    title: same('APG — Menu Button Pattern'),
    note: { ko: '권장 패턴. 규범이 아님', en: 'A recommended pattern; not normative' },
  },
  {
    href: apg('menubar'),
    source: same('W3C WAI'),
    title: same('APG — Menu and Menubar Pattern'),
    note: {
      ko: '권장 패턴. 규범이 아니며 예제가 호환성을 보증하지 않음',
      en: 'A recommended pattern; not normative, and examples do not guarantee compatibility',
    },
  },
  {
    href: apg('toolbar'),
    source: same('W3C WAI'),
    title: same('APG — Toolbar Pattern'),
    note: { ko: '권장 패턴. 규범이 아님', en: 'A recommended pattern; not normative' },
  },
];

export const MenusAndToolbarsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <KindsSection locale={locale} />
      <MenuSection locale={locale} />
      <ToolbarSection locale={locale} />
      <MenubarSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="slider-values" />
    </DocLayout>
  );
};
