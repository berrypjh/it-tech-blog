'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import {
  captionSrc,
  CLIP_SECONDS,
  type ClipVersion,
  videoSrc,
} from '@/components/content/shared/clip';
import sceneA from '@/components/content/shared/images/clip-scene-a.png';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '재생은 직접 시작합니다. 브라우저 컨트롤이나 아래 버튼으로 재생 · 일시 정지 · 음소거 · 자막을 바꾸고, Tab으로 영상을 지나 다음 컨트롤로 나가 보세요. 그다음 의도한 결함으로 오류 경로를 확인합니다.',
    version: '판',
    versions: { standard: '기본', described: '오디오 설명 포함' },
    badVideo: '의도한 결함: 없는 영상 주소',
    badTrack: '의도한 결함: 없는 자막 주소',
    videoLabel: (v: string) => `워크숍 안내 클립 (${v}, ${CLIP_SECONDS}초)`,
    trackLabel: '한국어 자막',
    play: '재생',
    pause: '일시 정지',
    mute: '음소거',
    captions: '자막 표시',
    restart: '처음부터',
    fallback: '이 브라우저는 영상을 재생하지 못합니다. 아래 대본에서 같은 내용을 읽을 수 있습니다.',
    videoError: '영상을 불러오지 못했습니다. 아래 대본에서 같은 내용을 읽을 수 있습니다.',
    trackError: '자막을 불러오지 못했습니다. 아래 대본에서 말과 소리를 읽을 수 있습니다.',
    ended: '재생이 끝났습니다. 처음부터 다시 볼 수 있습니다.',
    transcriptLink: '대본으로 가기',
    observed: '페이지가 읽은 미디어 상태',
    paused: 'paused',
    muted: 'muted',
    time: 'currentTime',
    trackState: '자막 트랙 (readyState · mode)',
    cue: '지금 표시할 자막',
    network: 'networkState',
    yes: '예',
    no: '아니요',
    none: '없음',
    trackStates: ['없음', '불러오는 중', '불러옴', '오류'],
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Playback starts only when you start it. Change play, pause, mute, and captions with the browser controls or the buttons below, and Tab past the video to the next control. Then check the error paths with the intentional defects.',
    version: 'Version',
    versions: { standard: 'Standard', described: 'With audio description' },
    badVideo: 'Intentional defect: a missing video address',
    badTrack: 'Intentional defect: a missing caption address',
    videoLabel: (v: string) => `Workshop notice clip (${v}, ${CLIP_SECONDS} seconds)`,
    trackLabel: 'English captions',
    play: 'Play',
    pause: 'Pause',
    mute: 'Mute',
    captions: 'Show captions',
    restart: 'From the start',
    fallback: 'This browser cannot play the video. The transcript below has the same content.',
    videoError: 'The video could not be loaded. The transcript below has the same content.',
    trackError: 'The captions could not be loaded. The transcript below has the speech and sounds.',
    ended: 'Playback ended. You can watch it again from the start.',
    transcriptLink: 'Go to the transcript',
    observed: 'Media state the page read',
    paused: 'paused',
    muted: 'muted',
    time: 'currentTime',
    trackState: 'Caption track (readyState · mode)',
    cue: 'Caption to show now',
    network: 'networkState',
    yes: 'Yes',
    no: 'No',
    none: 'None',
    trackStates: ['None', 'Loading', 'Loaded', 'Error'],
  },
};

type State = {
  paused: boolean;
  muted: boolean;
  time: number;
  track: number;
  mode: string;
  cue: string;
  network: number;
};

const initial: State = {
  paused: true,
  muted: false,
  time: 0,
  track: 0,
  mode: '',
  cue: '',
  network: 0,
};

/**
 * 직접 만든 클립을 브라우저 미디어 컨트롤로 재생한다. 바깥 버튼은 같은 video를 조작하는 키보드 경로다.
 * 영상 · 자막을 못 불러오면 상태 문구로 알리고 대본으로 보낸다. 자동 재생하지 않는다.
 */
export const ClipPlayerDemo = ({ transcriptId }: { transcriptId: string }) => {
  const c = useLang(content);
  const { locale } = useLocale();
  const video = useRef<HTMLVideoElement>(null);
  const [version, setVersion] = useState<ClipVersion>('standard');
  const [badVideo, setBadVideo] = useState(false);
  const [badTrack, setBadTrack] = useState(false);
  const [state, setState] = useState<State>(initial);
  const [message, setMessage] = useState('');

  const read = () => {
    const el = video.current;
    if (!el) return;
    const track = el.querySelector('track');
    const cues = el.textTracks[0]?.activeCues;
    setState({
      paused: el.paused,
      muted: el.muted,
      time: Math.round(el.currentTime * 10) / 10,
      track: track?.readyState ?? 0,
      mode: el.textTracks[0]?.mode ?? '',
      cue: cues?.length ? (cues[0] as VTTCue).text : '',
      network: el.networkState,
    });
  };

  useEffect(() => {
    setMessage('');
    setState(initial);
    const track = video.current?.querySelector('track');
    if (!track) return;
    const onError = () => {
      read();
      setMessage(c.trackError);
    };
    const cues = video.current?.textTracks[0];
    track.addEventListener('load', read);
    track.addEventListener('error', onError);
    cues?.addEventListener('cuechange', read);
    read();
    return () => {
      track.removeEventListener('load', read);
      track.removeEventListener('error', onError);
      cues?.removeEventListener('cuechange', read);
    };
    // read와 c는 렌더마다 새로 만들어진다. 다시 등록할 때는 영상이 바뀔 때뿐이다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version, badVideo, badTrack, locale]);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  };

  const setCaptions = (on: boolean) => {
    const track = video.current?.textTracks[0];
    if (track) track.mode = on ? 'showing' : 'hidden';
    read();
  };

  const restart = () => {
    const el = video.current;
    if (!el) return;
    el.currentTime = 0;
    setMessage('');
    void el.play();
  };

  const src = (ext: 'webm' | 'mp4') =>
    badVideo ? `${videoSrc(locale, version, ext)}.missing` : videoSrc(locale, version, ext);
  const trackSrc = badTrack
    ? `${captionSrc(locale, version)}.missing`
    : captionSrc(locale, version);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.version}
        value={version}
        onValueChange={(value) => setVersion(value as ClipVersion)}
        className="flex flex-wrap gap-md"
      >
        {(['standard', 'described'] as ClipVersion[]).map((v) => (
          <Radio key={v} value={v} className="text-xsm">
            {c.versions[v]}
          </Radio>
        ))}
      </RadioGroup>
      <div className="flex flex-col gap-2xs text-xsm">
        <label className="flex items-center gap-sm">
          <input
            type="checkbox"
            checked={badVideo}
            onChange={(e) => setBadVideo(e.target.checked)}
          />
          {c.badVideo}
        </label>
        <label className="flex items-center gap-sm">
          <input
            type="checkbox"
            checked={badTrack}
            onChange={(e) => setBadTrack(e.target.checked)}
          />
          {c.badTrack}
        </label>
      </div>
      <video
        key={`${locale}-${version}-${badVideo}-${badTrack}`}
        ref={video}
        controls
        preload="metadata"
        playsInline
        poster={sceneA.src}
        aria-label={c.videoLabel(c.versions[version])}
        className="aspect-video w-full max-w-[40rem] rounded-sm border border-stroke-light bg-background-grey/20"
        onPlay={read}
        onPause={read}
        onVolumeChange={read}
        onTimeUpdate={read}
        onSeeked={read}
        onLoadedMetadata={() => {
          const track = video.current?.textTracks[0];
          if (track) track.mode = 'showing';
          read();
        }}
        onEnded={() => {
          read();
          setMessage(c.ended);
        }}
      >
        <source src={src('webm')} type="video/webm" />
        <source
          src={src('mp4')}
          type="video/mp4"
          onError={() => {
            read();
            setMessage(c.videoError);
          }}
        />
        <track kind="captions" srcLang={locale} label={c.trackLabel} src={trackSrc} default />
        {c.fallback}
      </video>
      <div className="flex flex-wrap gap-sm">
        <Button type="button" variant="outlined" size="sm" onClick={toggle}>
          {state.paused ? c.play : c.pause}
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="sm"
          aria-pressed={state.muted}
          onClick={() => {
            if (video.current) video.current.muted = !video.current.muted;
          }}
        >
          {c.mute}
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="sm"
          aria-pressed={state.mode === 'showing'}
          onClick={() => setCaptions(state.mode !== 'showing')}
        >
          {c.captions}
        </Button>
        <Button type="button" variant="outlined" size="sm" onClick={restart}>
          {c.restart}
        </Button>
      </div>
      <div role="status" className="text-xsm">
        {message && (
          <p>
            {message} <a href={`#${transcriptId}`}>{c.transcriptLink}</a>
          </p>
        )}
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.paused, state.paused ? c.yes : c.no],
          [c.muted, state.muted ? c.yes : c.no],
          [c.time, <code key="t">{state.time.toFixed(1)}</code>],
          [c.trackState, `${c.trackStates[state.track]} · ${state.mode || c.none}`],
          [c.cue, state.cue || c.none],
          [c.network, <code key="n">{state.network}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
