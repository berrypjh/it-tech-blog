import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { ClipSection } from './sections/ClipSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RolesSection } from './sections/RolesSection';
import { TypesSection } from './sections/TypesSection';
import { getToc } from './toc';

const points = {
  ko: [
    'WCAG 1.2의 기준은 녹화 · 실시간과 오디오만 · 영상만 · 동기화에 따라 다르고, 글을 대신하는 미디어라고 밝힌 경우의 예외가 있습니다.',
    '자막은 말과 의미 있는 소리를, 오디오 설명은 화면에만 있는 과업 정보를 맡습니다.',
    'A 수준의 1.2.3은 설명 대본으로도 채울 수 있지만, AA의 1.2.5는 오디오 설명을 요구합니다.',
    '자막 · 대본 · 오디오 설명 · 수화는 서로를 일괄 대신하지 않으므로 대상과 수준마다 따로 판정합니다.',
  ],
  en: [
    'WCAG 1.2 criteria differ by prerecorded or live and audio-only, video-only, or synchronized, with an exception for media clearly labeled as an alternative for text.',
    'Captions carry speech and meaningful sounds; audio description carries task information only on screen.',
    '1.2.3 at level A can be met with a descriptive transcript, but 1.2.5 at AA requires audio description.',
    'Captions, transcripts, audio description, and sign language do not replace each other wholesale, so judge each for its audience and level.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('time-based-media'),
    source: same('W3C'),
    title: same('WCAG 2.2 — Guideline 1.2 Time-based Media'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('audio-description-or-media-alternative-prerecorded'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.2.3: Audio Description or Media Alternative (Prerecorded)'),
    note: {
      ko: '대체 자료와 오디오 설명 (보충 자료)',
      en: 'Alternatives and audio description (supporting)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/media/av/',
    source: same('W3C WAI'),
    title: same('Making Audio and Video Media Accessible'),
    note: {
      ko: '제작 과정 안내 (보충 자료, 2024-09-17 갱신)',
      en: 'Production guidance (supporting, updated 2024-09-17)',
    },
  },
];

export const MediaAlternativesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TypesSection locale={locale} />
      <ClipSection locale={locale} />
      <RolesSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="media-player" />
    </DocLayout>
  );
};
