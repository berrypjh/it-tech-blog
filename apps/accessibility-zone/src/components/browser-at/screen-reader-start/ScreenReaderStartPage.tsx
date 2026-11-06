import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';

import { ChooseSection } from './sections/ChooseSection';
import { ExpectedSection } from './sections/ExpectedSection';
import { NoAtSection } from './sections/NoAtSection';
import { NvdaPathSection } from './sections/NvdaPathSection';
import { PageHeader } from './sections/PageHeader';
import { SampleSection } from './sections/SampleSection';
import { VoiceOverPathSection } from './sections/VoiceOverPathSection';
import { getToc } from './toc';

const points = {
  ko: [
    'Windows는 NVDA, macOS는 VoiceOver 가운데 할 수 있는 경로 하나를 고릅니다.',
    '같은 예제에서 켜기 → 제목 · 랜드마크 · 링크 이동 → 입력란 편집 → 체크박스 상태 확인 → 끄기를 합니다.',
    '키 조합과 발화는 브라우저 · 운영체제 · 보조기술의 버전과 설정에 따라 다릅니다. 공식 안내서를 기준으로 합니다.',
    '결과는 정확한 발화가 아니라 기대하는 뜻으로 견주고, 해 보지 않은 과업은 미실행으로 적습니다.',
  ],
  en: [
    'Pick one path you can do: NVDA on Windows or VoiceOver on macOS.',
    'On the same sample: turn on → move by heading, landmark, link → edit a field → check a checkbox’s state → turn off.',
    'Key combinations and speech differ with browser, OS, and assistive technology versions and settings. Follow the official guides.',
    'Compare results by expected meaning, not exact speech, and write "not run" for tasks you did not do.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://download.nvaccess.org/documentation/userGuide.html',
    source: same('NV Access'),
    title: same('NVDA User Guide'),
    note: {
      ko: '켜기 · 끄기, 탐색 모드의 한 글자 이동, 요소 목록 (2026.3)',
      en: 'Starting and quitting, single-letter navigation in browse mode, the Elements List (2026.3)',
    },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/turn-voiceover-on-or-off-vo2682/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide — Turn VoiceOver on or off'),
    note: { ko: '켜고 끄는 키 (macOS 27)', en: 'Keys to turn it on and off (macOS 27)' },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/voiceover-rotor-mchlp2719/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide — Rotor'),
    note: { ko: '로터로 목록을 골라 이동하기', en: 'Choosing lists in the rotor and jumping' },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/interaction-commands-cpvokys07/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide — Interaction commands'),
    note: { ko: 'VO-Space 기본 동작', en: 'VO-Space default action' },
  },
];

export const ScreenReaderStartPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ChooseSection locale={locale} />
      <SampleSection locale={locale} />
      <NvdaPathSection locale={locale} />
      <VoiceOverPathSection locale={locale} />
      <ExpectedSection locale={locale} />
      <NoAtSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="observation-sources" />
    </DocLayout>
  );
};
