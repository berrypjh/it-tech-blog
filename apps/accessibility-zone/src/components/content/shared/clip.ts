/**
 * 09장 녹화 클립의 단일 원본. 자막(VTT) · 대본 · 녹음 안내 · 영상 조립이 모두 이 값을 쓴다.
 * 형식만 쓰는 순수 데이터라 `scripts/make-clip.mjs`(Node)도 그대로 읽는다. 다른 모듈을 import하지 않는다.
 *
 * 제작 정보: 그림은 글자 없는 도형(scripts/make-clip.mjs가 직접 그림), 말소리는 MeloTTS(MIT, 한국어 · 영어 모델 MIT)로
 * 합성한 음성(scripts/synth-voice.py), 안내음은 ffmpeg로 합성한 880Hz 음이다. macOS 시스템 음성은 공개 재배포가
 * 허용되지 않아 쓰지 않는다. 결과물의 라이선스는 저장소와 같은 MIT.
 */

export type ClipLang = 'ko' | 'en';
export type ClipVersion = 'standard' | 'described';
export type Cue = { start: number; end: number; text: string };

/** 클립 전체 길이(초)와 두 장면의 경계. */
export const CLIP_SECONDS = 19;
export const SCENE_B_START = 7.9;

/** 합성해 넣는 말. id는 음성 파일 이름(<lang>-<id>.wav)이다. 'ad'는 오디오 설명판에만 들어간다. */
export const clipLines: Record<ClipLang, (Cue & { id: string })[]> = {
  ko: [
    { id: '1', start: 0.5, end: 3.3, text: '모두의 접근성 워크숍 안내입니다.' },
    { id: '2', start: 3.6, end: 7.6, text: '마지막 3회차는 오후 3시 30분에 시작합니다.' },
    { id: '3', start: 9.0, end: 12.6, text: '입장할 때는 화면의 안내 표시를 확인해 주세요.' },
    {
      id: 'ad',
      start: 13.0,
      end: 18.6,
      text: '정문에 엑스 표시가 있고, 화살표가 동쪽 입구를 가리킵니다.',
    },
  ],
  en: [
    { id: '1', start: 0.5, end: 3.3, text: 'This is the Accessibility for All Workshop.' },
    { id: '2', start: 3.6, end: 7.6, text: 'The last session, Session 3, starts at 3:30 p.m.' },
    { id: '3', start: 9.0, end: 12.6, text: 'When you arrive, please check the sign on screen.' },
    {
      id: 'ad',
      start: 13.0,
      end: 18.6,
      text: 'The main gate is crossed out, and an arrow points to the east entrance.',
    },
  ],
};

/** 말이 아닌 소리. 자막에 담는다. */
export const CHIME = { start: 8.0, end: 8.6 };
export const clipSounds: Record<ClipLang, Cue[]> = {
  ko: [{ ...CHIME, text: '[안내음]' }],
  en: [{ ...CHIME, text: '[chime]' }],
};

/** 화면에만 있는 정보. 대본에 적고, 오디오 설명이 말로 옮긴다. */
export const clipScenes: Record<ClipLang, Cue[]> = {
  ko: [
    {
      start: 0,
      end: SCENE_B_START,
      text: '본관 건물 그림. 위쪽에 정문, 오른쪽에 동쪽 입구가 있다.',
    },
    {
      start: SCENE_B_START,
      end: CLIP_SECONDS,
      text: '정문에 엑스 표시가 생기고, 화살표가 오른쪽 동쪽 입구를 가리킨다.',
    },
  ],
  en: [
    {
      start: 0,
      end: SCENE_B_START,
      text: 'A drawing of the Main Building, with the main gate at the top and the east entrance on the right.',
    },
    {
      start: SCENE_B_START,
      end: CLIP_SECONDS,
      text: 'An X appears on the main gate, and an arrow points to the east entrance on the right.',
    },
  ],
};

const DESCRIBED_PREFIX: Record<ClipLang, string> = { ko: '(화면 설명) ', en: '(Description) ' };

/** 판마다의 자막. 오디오 설명판은 설명 음성도 자막에 담는다. */
export const captionCues = (lang: ClipLang, version: ClipVersion): Cue[] =>
  [
    ...clipLines[lang]
      .filter((line) => line.id !== 'ad' || version === 'described')
      .map(({ start, end, text, id }) => ({
        start,
        end,
        text: id === 'ad' ? DESCRIBED_PREFIX[lang] + text : text,
      })),
    ...clipSounds[lang],
  ].sort((a, b) => a.start - b.start);

const stamp = (seconds: number) => {
  const ms = Math.round(seconds * 1000);
  const pad = (n: number, w = 2) => String(n).padStart(w, '0');
  return `${pad(Math.floor(ms / 3_600_000))}:${pad(Math.floor(ms / 60_000) % 60)}:${pad(Math.floor(ms / 1000) % 60)}.${pad(ms % 1000, 3)}`;
};

/** WebVTT 본문. */
export const toVtt = (cues: Cue[]) =>
  `WEBVTT\n\n${cues.map((cue, i) => `${i + 1}\n${stamp(cue.start)} --> ${stamp(cue.end)}\n${cue.text}\n`).join('\n')}`;

/** 파일 이름. 영상은 public/media, 자막은 09.7 아래 route가 낸다. 둘 다 basePath를 직접 붙인다. */
export const BASE_PATH = '/accessibility';
export const clipName = (lang: ClipLang, version: ClipVersion) =>
  `clip-${lang}${version === 'described' ? '-ad' : ''}`;
export const videoSrc = (lang: ClipLang, version: ClipVersion, ext: 'webm' | 'mp4') =>
  `${BASE_PATH}/media/${clipName(lang, version)}.${ext}`;
export const captionSrc = (lang: ClipLang, version: ClipVersion) =>
  `${BASE_PATH}/media-player/captions/${clipName(lang, version)}.vtt`;
