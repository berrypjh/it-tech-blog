'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { splitSentences } from './blocks';
import { scrollToRead } from './scroll';
import { type Segment, spokenText } from './segments';
import { pickVoice, VOICE_KEY, voicesFor } from './voices';

/** 고른 볼륨(0~1)을 기억하는 브라우저 저장소 키. */
const VOLUME_KEY = 'listen-volume';
/** 고른 재생 속도를 기억하는 브라우저 저장소 키. */
const RATE_KEY = 'listen-rate';

/** 음성이 없을 때 자막만으로 넘기는 속도(글자당 ms). */
const CAPTION_MS_PER_CHAR = 90;
const MIN_CAPTION_MS = 1500;
/** 문장 사이와 세그먼트 사이의 기본 쉼(ms). 강사가 숨을 고르는 정도. */
const SENTENCE_PAUSE = 250;
const SEGMENT_PAUSE = 450;
/** cancel() 뒤 새 발화까지 기다리는 시간(ms). Chrome은 cancel을 비동기로 처리해 곧바로 넘긴 발화까지 끊는다. */
const AFTER_CANCEL_MS = 60;
/** 볼륨 슬라이더가 멈췄다고 보는 시간(ms). 이 뒤에 한 번만 다시 읽는다. */
const VOLUME_SETTLE_MS = 300;
export const RATES = [0.8, 1, 1.2, 1.5] as const;

/**
 * 세그먼트를 차례로 음성과 자막으로 읽는다. 포커스는 옮기지 않고 읽는 요소에 data-narrating만 단다.
 * 그 언어의 음성이 없으면 소리 없이 자막만 글 길이에 맞춰 넘긴다.
 */
export const useNarration = (getSegments: () => Segment[], reduceMotion: boolean) => {
  const [index, setIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [caption, setCaption] = useState('');
  const [rate, setRate] = useState<number>(1);
  const [hasVoice, setHasVoice] = useState(true);
  const [muted, setMuted] = useState(false);
  const [volume, setVolumeState] = useState(1);
  const [allVoices, setAllVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceNameState] = useState('');
  const [list, setList] = useState<Segment[]>([]);
  const run = useRef(0);
  const segments = useRef<Segment[]>([]);
  const timer = useRef<number | undefined>(undefined);
  /** 읽는 중인 문장. Chrome은 참조가 없는 발화를 도중에 거둬 end 이벤트를 보내지 않아, 끝날 때까지 붙잡아 둔다. */
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const halt = useCallback(() => {
    run.current += 1;
    window.speechSynthesis?.cancel();
    window.clearTimeout(timer.current);
  }, []);

  const later = useCallback((token: number, ms: number, next: () => void) => {
    timer.current = window.setTimeout(() => token === run.current && next(), ms);
  }, []);

  const mark = useCallback(
    (target: HTMLElement | undefined) => {
      document.querySelector('[data-narrating]')?.removeAttribute('data-narrating');
      if (!target) return;
      // 표는 넘침을 자르는 스크롤 상자 안에 있어 바깥 테두리가 잘린다. 표 전체는 그 상자를 강조한다.
      const el = target.tagName === 'TABLE' && target.parentElement ? target.parentElement : target;
      el.setAttribute('data-narrating', '');
      scrollToRead(el, reduceMotion);
    },
    [reduceMotion],
  );

  /** 읽는 도중 바꾼 속도 · 음소거 · 목소리가 다음 문장부터 바로 적용되도록 최신 값을 둔다. */
  const settings = useRef({ allVoices, muted, rate, voiceName, volume });
  settings.current = { allVoices, muted, rate, voiceName, volume };

  const speak = useCallback(
    (sentence: string, caption: string, token: number, next: () => void, retry = true) => {
      const {
        allVoices: list,
        muted: mute,
        rate: speed,
        voiceName: name,
        volume: level,
      } = settings.current;
      setCaption(caption);
      const voice = pickVoice(list, document.documentElement.lang || 'ko', name);
      setHasVoice(Boolean(voice));
      // 음소거는 음량 0이 아니라 읽지 않기로 한다. 음량을 무시하는 음성이 있고, 읽던 문장도 바로 멈춰야 한다.
      if (!voice || mute) {
        later(
          token,
          Math.max(MIN_CAPTION_MS, (sentence.length * CAPTION_MS_PER_CHAR) / speed),
          next,
        );
        return;
      }
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      utterance.rate = speed;
      utterance.volume = level;
      utterance.onend = () => token === run.current && next();
      // 일부러 취소한 이전 발화의 오류는 token이 달라 여기서 걸러진다. 같은 token인데 끊겼다면 직전 cancel에
      // 함께 끊긴 것이라 한 번 다시 읽고, 그 밖의 오류는 멈추지 않도록 다음으로 넘어간다.
      utterance.onerror = (e) => {
        if (token !== run.current) return;
        const cut = e.error === 'interrupted' || e.error === 'canceled';
        if (cut && retry)
          later(token, AFTER_CANCEL_MS, () => speak(sentence, caption, token, next, false));
        else next();
      };
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [later],
  );

  /** 지금 읽는 문장의 위치. 설정을 바꾸면 이 문장부터 다시 읽는다. */
  const sentenceAt = useRef(0);

  const playFrom = useCallback(
    (start: number, fromSentence = 0) => {
      halt();
      const token = run.current;
      const seg = segments.current[start];
      setIndex(start);
      mark(seg?.el);
      if (!seg) {
        setPlaying(false);
        setCaption('');
        return;
      }
      setPlaying(true);
      const sentences = splitSentences(spokenText(seg));
      // 자막은 소리용으로 다듬기 전 화면 글을 보인다(HTML을 "에이치 티 엠 엘"로 적지 않게).
      // 발음을 따로 적은 줄(speech)처럼 문장 수가 다르면 줄 전체를 보인다.
      const shown = splitSentences(seg.text);
      const captionOf = (sentence: string) =>
        shown.length === sentences.length ? shown[sentences.indexOf(sentence)] : seg.text;
      const nextSegment = () => later(token, seg.pause ?? SEGMENT_PAUSE, () => playFrom(start + 1));
      const step = (i: number) => {
        sentenceAt.current = i;
        if (i >= sentences.length) {
          nextSegment();
          return;
        }
        speak(sentences[i], captionOf(sentences[i]), token, () =>
          later(token, SENTENCE_PAUSE, () => step(i + 1)),
        );
      };
      // 방금 halt()로 cancel했으니 잠깐 기다렸다가 읽는다(AFTER_CANCEL_MS).
      later(token, AFTER_CANCEL_MS, () => step(Math.min(fromSentence, sentences.length - 1)));
    },
    [halt, later, mark, speak],
  );

  const load = useCallback(() => {
    const next = getSegments();
    segments.current = next;
    setList(next);
  }, [getSegments]);

  /** 세그먼트를 새로 만들고, 지금 읽던 요소와 같거나 그 뒤에 오는 첫 세그먼트부터 이어 읽는다. */
  const reload = useCallback(() => {
    const current = segments.current[index]?.el;
    load();
    const at = current
      ? segments.current.findIndex(
          (seg) =>
            seg.el === current ||
            Boolean(current.compareDocumentPosition(seg.el) & Node.DOCUMENT_POSITION_FOLLOWING),
        )
      : 0;
    playFrom(Math.max(at, 0));
  }, [index, load, playFrom]);

  const start = useCallback(() => {
    load();
    playFrom(0);
  }, [load, playFrom]);

  const pause = useCallback(() => {
    halt();
    setPlaying(false);
  }, [halt]);

  const stop = useCallback(() => {
    halt();
    mark(undefined);
    setPlaying(false);
    setIndex(-1);
    setCaption('');
  }, [halt, mark]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const update = () => setAllVoices(synth?.getVoices() ?? []);
    update();
    setVoiceNameState(localStorage.getItem(VOICE_KEY) ?? '');
    const savedVolume = Number(localStorage.getItem(VOLUME_KEY) ?? 1);
    // 0은 음소거로 다루므로 볼륨으로는 기억하지 않는다. 예전에 0이 저장됐으면 최대로 되돌린다.
    setVolumeState(savedVolume > 0 && savedVolume <= 1 ? savedVolume : 1);
    const savedRate = Number(localStorage.getItem(RATE_KEY));
    if ((RATES as readonly number[]).includes(savedRate)) setRate(savedRate);
    synth?.addEventListener('voiceschanged', update);
    return () => {
      synth?.removeEventListener('voiceschanged', update);
      run.current += 1;
      window.speechSynthesis?.cancel();
      window.clearTimeout(timer.current);
      window.clearTimeout(volumeTimer.current);
      document.querySelector('[data-narrating]')?.removeAttribute('data-narrating');
    };
  }, []);

  /** 지연 실행(볼륨)에서도 그 순간의 재생 위치를 보도록 최신 값을 둔다. */
  const live = useRef({ playing, index, playFrom });
  live.current = { playing, index, playFrom };
  const volumeTimer = useRef<number | undefined>(undefined);

  /**
   * 브라우저 음성은 읽는 중인 문장의 볼륨 · 목소리 · 속도를 바꿀 수 없다.
   * 그래서 지금 문장을 처음부터 바뀐 설정으로 다시 읽어, 바꾼 결과를 바로 듣고 확인하게 한다.
   */
  const restartSpeech = () => {
    const now = live.current;
    if (now.playing) now.playFrom(now.index, sentenceAt.current);
  };

  return {
    index,
    segments: list,
    playing,
    caption,
    rate,
    hasVoice,
    muted,
    volume,
    /**
     * 브라우저 음성은 읽는 중인 문장의 볼륨을 바꿀 수 없어,
     * 슬라이더가 멈추고 잠시 뒤 한 번만 지금 문단을 새 볼륨으로 다시 읽는다(끄는 동안 매번 다시 읽으면 끊긴다).
     */
    setVolume: (next: number) => {
      setVolumeState(next);
      localStorage.setItem(VOLUME_KEY, String(next));
      settings.current.volume = next;
      window.clearTimeout(volumeTimer.current);
      volumeTimer.current = window.setTimeout(restartSpeech, VOLUME_SETTLE_MS);
    },
    setMuted: (next: boolean) => {
      setMuted(next);
      settings.current.muted = next;
      restartSpeech();
    },
    voices: voicesFor(
      allVoices,
      typeof document === 'undefined' ? 'ko' : document.documentElement.lang,
    ),
    voiceName,
    /** 빈 문자열은 자동 선택. 고른 이름은 다음 페이지에서도 쓰도록 기억한다. */
    setVoiceName: (name: string) => {
      setVoiceNameState(name);
      localStorage.setItem(VOICE_KEY, name);
      settings.current.voiceName = name;
      restartSpeech();
    },
    start,
    stop,
    pause,
    reload,
    /** 일시정지한 문장부터 다시 읽는다. */
    resume: () => playFrom(Math.max(index, 0), sentenceAt.current),
    prev: () => playFrom(Math.max(index - 1, 0)),
    next: () => playFrom(index + 1),
    seek: playFrom,
    /** 읽는 중인 문장은 속도를 바꿀 수 없어 지금 문장을 다시 읽는다. */
    setRate: (next: number) => {
      setRate(next);
      localStorage.setItem(RATE_KEY, String(next));
      settings.current.rate = next;
      restartSpeech();
    },
  };
};
