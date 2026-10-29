'use client';

import { useEffect, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';
import {
  Captions,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

import { ListenCaption } from './ListenCaption';
import { ListenMiniBar } from './ListenMiniBar';
import { ListenSettings } from './ListenSettings';
import { ListenSlider } from './ListenSlider';
import {
  chapterOf,
  formatTime,
  nextSection,
  prevSection,
  sectionStarts,
  timeline,
} from './progress';
import type { ListenMode } from './segments';
import { useCaptionStyle } from './useCaptionStyle';
import type { useNarration } from './useNarration';

/** 자막을 켰는지 기억하는 브라우저 저장소 키. */
const CAPTIONS_ON_KEY = 'listen-captions-on';

const strings = {
  ko: {
    region: '페이지 듣기',
    position: '재생 위치',
    positionText: (n: number, total: number, chapter: string) =>
      `${total}개 중 ${n}번째${chapter ? `, ${chapter}` : ''}`,
    prevSection: '이전 섹션',
    nextSection: '다음 섹션',
    prev: '이전 문단',
    next: '다음 문단',
    play: '재생',
    pause: '일시정지',
    mute: '음소거',
    volume: '볼륨',
    captions: '자막',
    close: '듣기 닫기',
    collapse: '재생기 접기',
    expand: '재생기 펼치기',
    noVoice: '이 기기에 맞는 음성이 없어 자막만 보여 줍니다.',
    done: '페이지 끝까지 들었습니다.',
  },
  en: {
    region: 'Listen to page',
    position: 'Playback position',
    positionText: (n: number, total: number, chapter: string) =>
      `${n} of ${total}${chapter ? `, ${chapter}` : ''}`,
    prevSection: 'Previous section',
    nextSection: 'Next section',
    prev: 'Previous paragraph',
    next: 'Next paragraph',
    play: 'Play',
    pause: 'Pause',
    mute: 'Mute',
    volume: 'Volume',
    captions: 'Captions',
    close: 'Close listening',
    collapse: 'Collapse player',
    expand: 'Expand player',
    noVoice: 'No matching voice on this device, so only captions are shown.',
    done: 'You reached the end of the page.',
  },
};

/** 반전 표면(background-dark) 위의 글자색. 두 테마 모두 본문과 대비되는 카드가 된다. */
const onInverse = 'text-[rgb(var(--listen-on-rgb))]';
/** 버튼 묶음. 배경 상자 없이 간격으로만 나눠 카드 안을 비워 둔다. */
const group = 'flex shrink-0 items-center';
const control = cx(
  'relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[rgb(var(--listen-on-rgb)/0.15)] listen-control',
  onInverse,
);

/**
 * 유튜브 플레이어 배치를 따른 재생기. 위에 진행 바, 왼쪽에 재생 · 섹션 이동 · 음소거 · 시간,
 * 오른쪽에 자막 · 설정 · 닫기. 자막은 이미 본문에 있는 글이라 화면 낭독기에는 숨긴다.
 * 한 글자 단축키는 두지 않는다(WCAG 2.1.4).
 */
export const ListenPlayer = ({
  narration: n,
  mode,
  onModeChange,
  onClose,
}: {
  narration: ReturnType<typeof useNarration>;
  mode: ListenMode;
  onModeChange: (mode: ListenMode) => void;
  onClose: () => void;
}) => {
  const t = useLang(strings);
  // 재생기는 버튼을 누른 뒤에만 그려지므로 첫 렌더에서 저장소를 읽어도 서버 렌더와 어긋나지 않는다.
  const [captions, setCaptions] = useState(() => localStorage.getItem(CAPTIONS_ON_KEY) !== 'off');
  const toggleCaptions = () => {
    localStorage.setItem(CAPTIONS_ON_KEY, captions ? 'off' : 'on');
    setCaptions(!captions);
  };
  const captionStyle = useCaptionStyle();
  const settingsAreDefault =
    n.rate === 1 && n.voiceName === '' && mode === 'lecture' && captionStyle.isDefault;
  /** 사이트 설정의 초기화처럼 듣기 설정 메뉴 전체를 기본값으로 되돌린다. */
  const resetSettings = () => {
    if (n.rate !== 1) n.setRate(1);
    if (n.voiceName !== '') n.setVoiceName('');
    if (mode !== 'lecture') onModeChange('lecture');
    captionStyle.reset();
  };
  const [collapsed, setCollapsed] = useState(false);
  const playRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const toggled = useRef(false);
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => playRef.current?.focus(), []);
  useEffect(() => {
    if (toggled.current) toggleRef.current?.focus();
  }, [collapsed]);

  /** 자막 · 카드가 가리는 화면 아래 높이를 --listen-overlay로 알려, 본문 여백과 읽는 위치 스크롤이 그 위로 맞춰지게 한다. */
  useEffect(() => {
    const region = regionRef.current;
    if (!region) return;
    const root = document.documentElement;
    const update = () =>
      root.style.setProperty(
        '--listen-overlay',
        `${Math.round(window.innerHeight - region.getBoundingClientRect().top)}px`,
      );
    const observer = new ResizeObserver(update);
    observer.observe(region);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
      root.style.removeProperty('--listen-overlay');
    };
  }, [collapsed]);

  const toggle = (next: boolean) => {
    toggled.current = true;
    setCollapsed(next);
  };

  const total = n.segments.length;
  const current = Math.min(Math.max(n.index, 0), Math.max(total - 1, 0));
  const ended = !n.playing && n.index >= total && total > 0;
  const chapter = chapterOf(n.segments, current);
  const lang = typeof document === 'undefined' ? 'ko' : document.documentElement.lang;
  const time = timeline(n.segments, ended ? total : current, n.rate, lang);
  const timeText = `${formatTime(time.elapsed)} / ${formatTime(time.total)}`;
  /** 동영상 플레이어처럼 음소거면 슬라이더가 0에 있고, 기억해 둔 볼륨은 음소거를 풀 때 돌아온다. */
  const volumeShown = n.muted ? 0 : Math.round(n.volume * 100);
  const changeVolume = (percent: number) => {
    if (percent === 0) {
      if (!n.muted) n.setMuted(true);
      return;
    }
    n.setVolume(percent / 100);
    if (n.muted) n.setMuted(false);
  };

  if (collapsed) {
    return (
      <ListenMiniBar
        playing={n.playing}
        onPlayToggle={n.playing ? n.pause : n.resume}
        caption={ended ? t.done : n.caption}
        captionStyle={captionStyle.style}
        captions={captions}
        onCaptionsToggle={toggleCaptions}
        time={timeText}
        percent={total > 0 ? (current / Math.max(total - 1, 1)) * 100 : 0}
        onExpand={() => toggle(false)}
        onClose={onClose}
        toggleRef={toggleRef}
        labels={t}
      />
    );
  }

  return (
    <div
      ref={regionRef}
      role="region"
      aria-label={t.region}
      data-narration="skip"
      className="pointer-events-none fixed inset-x-0 bottom-xl z-50 flex flex-col items-center gap-md px-sm sm:px-lg"
    >
      {captions && !captionStyle.style.inside && (n.caption || ended) && (
        <ListenCaption text={ended ? t.done : n.caption} style={captionStyle.style} />
      )}

      <div className="pointer-events-auto flex w-full max-w-[60rem] flex-col gap-sm rounded-lg bg-[rgb(var(--listen-surface)/0.9)] ring-1 ring-[rgb(var(--listen-on-rgb)/0.12)] backdrop-blur-md [@media(prefers-reduced-transparency:reduce)]:bg-[rgb(var(--listen-surface))] px-md pb-md pt-sm shadow-lg sm:px-xl">
        {captions && captionStyle.style.inside && (n.caption || ended) && (
          <ListenCaption text={ended ? t.done : n.caption} style={captionStyle.style} inline />
        )}
        <ListenSlider
          current={current}
          total={total}
          starts={sectionStarts(n.segments)}
          label={t.position}
          valueText={t.positionText(current + 1, total, chapter)}
          onSeek={n.seek}
        />

        {/*
          유튜브처럼 늘 한 줄이고, 폭이 줄면 덜 쓰는 버튼부터 숨긴다.
          lg 미만: 섹션 이동 · 볼륨 슬라이더 / sm 미만: 문단 이동 · 음소거(진행 바와 기기 볼륨으로 대신한다).
          챕터 이름은 w-0이라 남는 자리만 채우고 모자라면 말줄임으로 줄어든다.
        */}
        <div className="flex items-center gap-xs sm:gap-lg">
          <div className={group}>
            <button
              ref={playRef}
              type="button"
              className={cx(control, 'h-12 w-12')}
              onClick={n.playing ? n.pause : n.resume}
              aria-label={n.playing ? t.pause : t.play}
            >
              {n.playing ? (
                <Pause className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Play className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className={cx(group, 'max-sm:hidden')}>
            <button
              type="button"
              className={cx(control, 'max-lg:hidden')}
              onClick={() => n.seek(prevSection(n.segments, current))}
              aria-label={t.prevSection}
            >
              <SkipBack className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" className={control} onClick={n.prev} aria-label={t.prev}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" className={control} onClick={n.next} aria-label={t.next}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={cx(control, 'max-lg:hidden')}
              onClick={() => n.seek(nextSection(n.segments, current))}
              aria-label={t.nextSection}
            >
              <SkipForward className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className={cx(group, 'max-sm:hidden')}>
            <button
              type="button"
              className={control}
              onClick={() => n.setMuted(!n.muted)}
              aria-label={t.mute}
              aria-pressed={n.muted}
            >
              {n.muted ? (
                <VolumeX className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Volume2 className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
            <div className="ml-xs hidden w-24 lg:block">
              <ListenSlider
                current={volumeShown / 5}
                total={21}
                starts={[]}
                label={t.volume}
                valueText={`${volumeShown}%`}
                onSeek={(step) => changeVolume(step * 5)}
              />
            </div>
          </div>
          <p
            aria-hidden="true"
            className={cx('flex min-w-0 flex-1 items-center whitespace-nowrap text-sm', onInverse)}
          >
            {/* 320px 폭(400% 확대)에서도 한 줄에 들도록 가장 좁을 때는 전체 길이를 뺀다. */}
            <span className="shrink-0">
              {formatTime(time.elapsed)}
              <span className="max-[22.5rem]:hidden"> / {formatTime(time.total)}</span>
            </span>
            {chapter && (
              <span className="ml-sm hidden w-0 flex-1 truncate opacity-70 sm:inline">
                · {chapter}
              </span>
            )}
          </p>

          <div className={cx(group, 'ml-auto')}>
            <button
              ref={toggleRef}
              type="button"
              className={control}
              onClick={() => toggle(true)}
              aria-label={t.collapse}
              aria-expanded
            >
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={control}
              onClick={toggleCaptions}
              aria-label={t.captions}
              aria-pressed={captions}
            >
              <Captions className="h-5 w-5" aria-hidden="true" />
              {captions && (
                <span className="absolute bottom-2 h-[2px] w-4 rounded-full bg-[rgb(var(--listen-on-rgb))]" />
              )}
            </button>
            <ListenSettings
              rate={n.rate}
              onRateChange={n.setRate}
              voices={n.voices}
              voiceName={n.voiceName}
              onVoiceChange={n.setVoiceName}
              mode={mode}
              onModeChange={onModeChange}
              caption={captionStyle.style}
              onCaptionChange={captionStyle.update}
              isDefault={settingsAreDefault}
              onReset={resetSettings}
              buttonClass={control}
            />
            <button type="button" className={control} onClick={onClose} aria-label={t.close}>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        {!n.hasVoice && <p className={cx('text-xxsm', onInverse)}>{t.noVoice}</p>}
      </div>
    </div>
  );
};
