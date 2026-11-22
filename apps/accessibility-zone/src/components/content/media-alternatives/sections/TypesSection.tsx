import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        WCAG 지침 1.2는 미디어를 두 축으로 나눕니다. 미리 녹화했는가, 실시간인가. 그리고 소리만
        있는가, 영상만 있는가, 소리와 영상이 함께 흐르는 동기화 미디어인가. 같은 “영상”이라도 칸마다
        요구가 다릅니다.
      </>
    ),
    caption: '미디어 종류별 WCAG 2.2 지침 1.2의 성공 기준',
    head: ['미디어', 'A', 'AA', 'AAA'],
    rows: [
      ['녹화 · 오디오만', '1.2.1 대체 자료 (대본)', '—', '—'],
      ['녹화 · 영상만', '1.2.1 대체 자료 또는 오디오 트랙', '—', '—'],
      [
        '녹화 · 동기화',
        '1.2.2 자막, 1.2.3 오디오 설명 또는 대체 자료',
        '1.2.5 오디오 설명',
        '1.2.6 수화, 1.2.7 확장 오디오 설명, 1.2.8 대체 자료',
      ],
      ['실시간 · 오디오만', '—', '—', '1.2.9 대체 자료'],
      ['실시간 · 영상만', '—', '—', '—'],
      ['실시간 · 동기화', '—', '1.2.4 자막', '—'],
    ],
    exception: (
      <>
        1.2.1 · 1.2.2 · 1.2.3에는 예외가 있습니다. 미디어가 이미 있는 글을 대신하는 것이고 그렇다고
        분명히 표시했다면 적용하지 않습니다. 글이 원본이고 영상이 덧붙인 것이라는 뜻입니다.
      </>
    ),
    cite22: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.2.2 Captions (Prerecorded) (A)',
    cite23:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)',
    cite25:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.2.5 Audio Description (Prerecorded) (AA)',
    level: (
      <>
        A 수준에서는 오디오 설명 대신 대체 자료(설명을 담은 대본)로도 1.2.3을 만족할 수 있지만, AA인
        1.2.5는 오디오 설명 자체를 요구합니다. 목표 수준에 따라 같은 클립의 할 일이 달라집니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        WCAG Guideline 1.2 splits media along two axes: prerecorded or live, and audio only, video
        only, or synchronized media where sound and picture run together. Even for “a video,” each
        cell asks for something different.
      </>
    ),
    caption: 'Success criteria of WCAG 2.2 Guideline 1.2 by media type',
    head: ['Media', 'A', 'AA', 'AAA'],
    rows: [
      ['Prerecorded audio only', '1.2.1 alternative (transcript)', '—', '—'],
      ['Prerecorded video only', '1.2.1 alternative or an audio track', '—', '—'],
      [
        'Prerecorded synchronized',
        '1.2.2 captions, 1.2.3 audio description or alternative',
        '1.2.5 audio description',
        '1.2.6 sign language, 1.2.7 extended audio description, 1.2.8 alternative',
      ],
      ['Live audio only', '—', '—', '1.2.9 alternative'],
      ['Live video only', '—', '—', '—'],
      ['Live synchronized', '—', '1.2.4 captions', '—'],
    ],
    exception: (
      <>
        1.2.1, 1.2.2, and 1.2.3 have an exception: they do not apply when the media is an
        alternative for text and is clearly labeled as such. The text is the original, and the video
        is added to it.
      </>
    ),
    cite22: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.2.2 Captions (Prerecorded) (A)',
    cite23:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)',
    cite25:
      'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.2.5 Audio Description (Prerecorded) (AA)',
    level: (
      <>
        At level A, an alternative (a transcript with descriptions) can meet 1.2.3 instead of audio
        description, but 1.2.5 at AA requires audio description itself. The target level changes
        what the same clip needs.
      </>
    ),
  },
};

export const TypesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.types.id}>
      <DocH2 {...toc.types} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.exception}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('captions-prerecorded')}
        cite={c.cite22}
        checkedOn={CONTENT_CHECKED_ON}
      >
        Captions are provided for all prerecorded audio content in synchronized media, except when
        the media is a media alternative for text and is clearly labeled as such.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={wcag22('audio-description-or-media-alternative-prerecorded')}
        cite={c.cite23}
        checkedOn={CONTENT_CHECKED_ON}
      >
        An alternative for time-based media or audio description of the prerecorded video content is
        provided for synchronized media, except when the media is a media alternative for text and
        is clearly labeled as such.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={wcag22('audio-description-prerecorded')}
        cite={c.cite25}
        checkedOn={CONTENT_CHECKED_ON}
      >
        Audio description is provided for all prerecorded video content in synchronized media.
      </NormativeQuote>
      <p>{c.level}</p>
    </section>
  );
};
