import { statSync } from 'node:fs';
import { join } from 'node:path';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import {
  CLIP_SECONDS,
  type ClipLang,
  clipName,
  type ClipVersion,
} from '@/components/content/shared/clip';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        클립은 이 저장소에서 만들었습니다. 말소리는 오픈소스 음성 합성기 MeloTTS로 합성한 AI
        음성이고, 안내음은 ffmpeg로 합성했으며, 그림은 글자 없는 도형이라 서체 사용권도 끼지
        않습니다. 운영체제의 시스템 음성은 사용권이 공개 재배포를 허용하지 않아 쓰지 않았습니다.
        크기는 배포된 파일에서 읽은 값입니다.
      </>
    ),
    caption: '09장 클립 자산',
    head: ['파일', '형식', '언어', '길이 · 크기', '제작 · 사용권'],
    langs: { ko: '한국어', en: '영어' },
    versions: { standard: '기본', described: '오디오 설명 포함' },
    made: 'AI 합성 음성 · 합성 안내음 · 도형 그림, MIT',
    vtt: 'clip.ts에서 생성, MIT',
    missing: '파일 없음',
    toolCaption: '제작에 쓴 도구와 모델',
    toolHead: ['도구 · 모델', '쓰임', '사용권'],
    tools: [
      ['MeloTTS (커밋 2091453)', '음성 합성 엔진', 'MIT'],
      ['myshell-ai/MeloTTS-Korean', '한국어 음성 모델', 'MIT'],
      ['myshell-ai/MeloTTS-English', '영어 음성 모델', 'MIT'],
      ['kykim/bert-kor-base', '한국어 문장 특징 (합성 중에만 사용)', 'Apache-2.0'],
      ['bert-base-uncased', '영어 문장 특징 (합성 중에만 사용)', 'Apache-2.0'],
      ['ffmpeg', '안내음 합성 · 인코딩', '도구 (결과물에 포함되지 않음)'],
    ],
    seconds: `${CLIP_SECONDS}초`,
  },
  en: {
    intro: (
      <>
        The clip was made in this repository. The speech is an AI voice synthesized with the
        open-source MeloTTS, the chime is synthesized with ffmpeg, and the pictures are text-free
        shapes, so no font license is involved. The operating system’s voices were not used because
        their license does not permit public redistribution. Sizes are read from the deployed files.
      </>
    ),
    caption: 'Chapter 09 clip assets',
    head: ['File', 'Format', 'Language', 'Length and size', 'Made by and license'],
    langs: { ko: 'Korean', en: 'English' },
    versions: { standard: 'standard', described: 'with audio description' },
    made: 'AI-synthesized voice, synthesized chime, shape drawings; MIT',
    vtt: 'Generated from clip.ts; MIT',
    missing: 'File missing',
    toolCaption: 'Tools and models used to make it',
    toolHead: ['Tool or model', 'Used for', 'License'],
    tools: [
      ['MeloTTS (commit 2091453)', 'Speech synthesis engine', 'MIT'],
      ['myshell-ai/MeloTTS-Korean', 'Korean voice model', 'MIT'],
      ['myshell-ai/MeloTTS-English', 'English voice model', 'MIT'],
      ['kykim/bert-kor-base', 'Korean text features (used only during synthesis)', 'Apache-2.0'],
      ['bert-base-uncased', 'English text features (used only during synthesis)', 'Apache-2.0'],
      ['ffmpeg', 'Chime synthesis and encoding', 'Tool (not part of the output)'],
    ],
    seconds: `${CLIP_SECONDS} s`,
  },
};

const sizeOf = (file: string) => {
  try {
    return `${(statSync(join(process.cwd(), 'public/media', file)).size / 1024).toFixed(1)} KB`;
  } catch {
    return null;
  }
};

export const AssetSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = (['ko', 'en'] as ClipLang[]).flatMap((lang) =>
    (['standard', 'described'] as ClipVersion[]).flatMap((version) => [
      ...(['webm', 'mp4'] as const).map((ext) => {
        const file = `${clipName(lang, version)}.${ext}`;
        return [
          file,
          ext === 'webm' ? 'WebM (VP9 · Opus)' : 'MP4 (H.264 · AAC)',
          `${c.langs[lang]}, ${c.versions[version]}`,
          `${c.seconds} · ${sizeOf(file) ?? c.missing}`,
          c.made,
        ];
      }),
      [`${clipName(lang, version)}.vtt`, 'WebVTT', c.langs[lang], c.seconds, c.vtt],
    ]),
  );

  return (
    <section aria-labelledby={toc.assets.id}>
      <DocH2 {...toc.assets} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <DocTable caption={c.toolCaption} head={c.toolHead} rows={c.tools} />
    </section>
  );
};
