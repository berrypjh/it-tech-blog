import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { NvdaSection } from './sections/NvdaSection';
import { PageHeader } from './sections/PageHeader';
import { SameDocSection } from './sections/SameDocSection';
import { ThreeSection } from './sections/ThreeSection';
import { VoiceOverSection } from './sections/VoiceOverSection';
import { getToc } from './toc';

const points = {
  ko: [
    'DOM · 키보드 포커스, 화면 낭독기 읽기 위치, 입력 · 상호작용 모드는 서로 다른 것입니다.',
    'Tab은 조작할 요소 사이를, 제목 탐색은 문서의 짜임을 오갑니다. 제목으로 읽기 위치를 옮겨도 DOM 포커스는 보통 그대로입니다.',
    'NVDA는 탐색 모드와 포커스 모드를, VoiceOver는 VoiceOver 커서와 상호작용을 씁니다. 둘을 같은 모드나 같은 키로 설명하지 않습니다.',
    'document.activeElement는 DOM 포커스를 보여 줄 뿐, 화면 낭독기의 읽기 위치가 아닙니다.',
  ],
  en: [
    'DOM and keyboard focus, the screen reader reading position, and input or interaction modes are different things.',
    'Tab moves between operable elements; heading navigation moves through the document’s structure. Moving the reading position to a heading usually leaves DOM focus where it was.',
    'NVDA uses browse and focus modes; VoiceOver uses the VoiceOver cursor and interaction. Do not describe them as the same mode or the same keys.',
    'document.activeElement only shows DOM focus, not the screen reader’s reading position.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://download.nvaccess.org/documentation/userGuide.html',
    source: same('NV Access'),
    title: same('NVDA User Guide'),
    note: {
      ko: '탐색 모드 · 포커스 모드와 전환 키 (2026.3)',
      en: 'Browse mode, focus mode, and switching keys (2026.3)',
    },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/interaction-commands-cpvokys07/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide — Interaction commands'),
    note: { ko: '상호작용 시작 · 중단 (macOS 27)', en: 'Start and stop interacting (macOS 27)' },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/quick-nav-vo27943/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide — Quick Nav'),
    note: { ko: '빠른 탐색과 한 글자 빠른 탐색', en: 'Quick Nav and single-key Quick Nav' },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/voiceover-rotor-mchlp2719/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide — Rotor'),
    note: { ko: '로터로 제목 · 링크 목록 쓰기', en: 'Using the rotor for headings and links' },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement',
    source: same('MDN'),
    title: same('Document: activeElement property'),
    note: { ko: '지금 포커스를 가진 요소', en: 'The element that currently has focus' },
  },
];

export const FocusAndCursorPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ThreeSection locale={locale} />
      <SameDocSection locale={locale} />
      <NvdaSection locale={locale} />
      <VoiceOverSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="screen-reader-start" />
    </DocLayout>
  );
};
