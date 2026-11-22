import Image from 'next/image';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import {
  captionCues,
  CLIP_SECONDS,
  clipScenes,
  SCENE_B_START,
} from '@/components/content/shared/clip';
import sceneA from '@/components/content/shared/images/clip-scene-a.png';
import sceneB from '@/components/content/shared/images/clip-scene-b.png';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="media-player" />
        에서 재생하는 {CLIP_SECONDS}초 클립입니다. MeloTTS로 합성한 목소리와 안내음, 글자 없는 그림
        두 장면으로 만들었습니다. 들리는 것은 자막이 맡고, 화면에만 있는 것은 설명이 맡습니다.
      </>
    ),
    frames: ['장면 1 (0초부터)', `장면 2 (${SCENE_B_START}초부터)`],
    caption: '클립에서 들리는 것과 화면에만 있는 것',
    head: ['시간', '들리는 것 → 자막', '화면에만 있는 것 → 설명'],
    seconds: (s: number, e: number) => `${s}–${e}초`,
    after: (
      <>
        말소리는 “화면의 안내 표시를 확인해 주세요”라고만 합니다. 정문이 막히고 동쪽 입구로
        들어간다는 정보는 그림에만 있으므로, 자막을 아무리 정확히 달아도 그 정보는 전해지지
        않습니다. 클립 끝에 말이 없는 구간이 있어 그 사이에 오디오 설명을 넣을 수 있었습니다. 끼울
        틈이 없으면 영상을 멈추고 설명하는 확장 오디오 설명(1.2.7)이 필요해집니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        This is the {CLIP_SECONDS}-second clip played on{' '}
        <PageLink locale={locale} id="media-player" />. It was made from a voice synthesized with
        MeloTTS, a chime, and two text-free drawn scenes. What you hear goes to captions; what is
        only on screen goes to description.
      </>
    ),
    frames: ['Scene 1 (from 0 s)', `Scene 2 (from ${SCENE_B_START} s)`],
    caption: 'What the clip says aloud and what only the screen shows',
    head: ['Time', 'Heard → captions', 'Only on screen → description'],
    seconds: (s: number, e: number) => `${s}–${e} s`,
    after: (
      <>
        The voice only says “please check the sign on screen.” That the main gate is closed and you
        enter by the east entrance is only in the picture, so no caption, however accurate, carries
        it. The clip ends with a stretch without speech, which leaves room for audio description.
        Without such a gap, extended audio description (1.2.7), which pauses the video to describe,
        would be needed.
      </>
    ),
  },
};

export const ClipSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const scenes = clipScenes[locale];
  const sounds = captionCues(locale, 'standard');
  const rows = scenes.map((scene) => [
    c.seconds(scene.start, scene.end),
    sounds
      .filter((cue) => cue.start >= scene.start && cue.start < scene.end)
      .map((cue) => cue.text)
      .join(' '),
    scene.text,
  ]);

  return (
    <section aria-labelledby={toc.clip.id}>
      <DocH2 {...toc.clip} />
      <p>{c.intro(locale)}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <div className="my-xl grid gap-md sm:grid-cols-2">
        {[sceneA, sceneB].map((image, i) => (
          <figure key={i} className="flex flex-col gap-xs">
            <Image
              src={image}
              alt={scenes[i].text}
              unoptimized
              className="h-auto w-full rounded-sm border border-stroke-light"
            />
            <figcaption className="text-xxsm text-text-light">{c.frames[i]}</figcaption>
          </figure>
        ))}
      </div>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>{c.after}</p>
    </section>
  );
};
