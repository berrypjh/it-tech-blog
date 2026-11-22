import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { captionCues, clipScenes } from '@/components/content/shared/clip';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        대본은 말과 소리에 화면 설명을 더한 설명 대본입니다. 영상을 재생하지 못해도, 자막을 못
        불러와도 같은 내용을 여기서 읽을 수 있습니다.
      </>
    ),
    scene: '[화면]',
    seconds: (s: number) => `${s}초`,
  },
  en: {
    intro: (
      <>
        This is a descriptive transcript: speech and sounds plus descriptions of the screen. If the
        video cannot play or the captions cannot load, the same content is here.
      </>
    ),
    scene: '[Screen]',
    seconds: (s: number) => `${s} s`,
  },
};

/** 자막과 같은 원본(clip.ts)에서 만든 설명 대본. 장면 설명을 시간 순서에 끼운다. */
export const TranscriptSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = [
    ...clipScenes[locale].map((scene) => ({
      start: scene.start,
      text: `${c.scene} ${scene.text}`,
    })),
    ...captionCues(locale, 'standard'),
  ].sort((a, b) => a.start - b.start);

  return (
    <section aria-labelledby={toc.transcript.id}>
      <DocH2 {...toc.transcript} />
      <p>{c.intro}</p>
      <ol className="my-lg flex flex-col gap-xs rounded-md border border-stroke-light p-lg text-xsm">
        {items.map((item) => (
          <li key={`${item.start}-${item.text}`} className="grid grid-cols-[4rem_1fr] gap-sm">
            <span className="text-text-light">{c.seconds(item.start)}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
