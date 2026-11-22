import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { AssetSection } from './sections/AssetSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { StartSection } from './sections/StartSection';
import { TranscriptSection } from './sections/TranscriptSection';
import { getToc } from './toc';

const points = {
  ko: [
    '자동으로 3초 넘게 재생되는 소리에는 멈추거나 따로 음량을 조절하는 수단이 필요합니다. 가장 단순한 설계는 자동 재생을 하지 않는 것입니다.',
    '브라우저 미디어 컨트롤을 쓰고, 바깥 버튼을 둔다면 같은 video를 조작하는 키보드 경로로 둡니다.',
    '자막 트랙은 실제로 불러와졌는지 확인하고, 영상 · 자막을 못 불러오면 대본으로 이어지는 경로를 알립니다.',
    '미디어 자산은 출처 · 언어 · 크기 · 사용권을 기록하고, 재배포 권리가 확인된 것만 씁니다.',
  ],
  en: [
    'Audio that plays automatically for more than 3 seconds needs a way to stop it or control its volume separately. The simplest design is no autoplay.',
    'Use the browser’s media controls, and if you add buttons outside, make them a keyboard path to the same video.',
    'Check that the caption track really loaded, and when video or captions fail, announce the path to the transcript.',
    'Record each media asset’s source, language, size, and license, and use only assets whose redistribution rights are confirmed.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('audio-control'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.4.2 Audio Control'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('audio-control'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.4.2: Audio Control'),
    note: { ko: '자동 재생 소리 해설 (보충 자료)', en: 'On autoplaying audio (supporting)' },
  },
  {
    href: 'https://www.w3.org/WAI/media/av/player/',
    source: same('W3C WAI'),
    title: same('Making Audio and Video Media Accessible — Media Player'),
    note: { ko: '플레이어가 갖출 기능 (보충 자료)', en: 'What a player needs (supporting)' },
  },
];

export const MediaPlayerPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <StartSection locale={locale} />
      <PracticeSection locale={locale} transcriptId={toc.transcript.id} />
      <TranscriptSection locale={locale} />
      <AssetSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="motion-and-updates" />
    </DocLayout>
  );
};
