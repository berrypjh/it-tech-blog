'use client';

import { cx } from '@berrypjh/react-ui';
import { Captions, ChevronUp, Pause, Play, X } from 'lucide-react';
import type { Ref } from 'react';

import { ListenCaption } from './ListenCaption';
import type { CaptionStyle } from './useCaptionStyle';

/** 반전 표면 위의 글자색과 버튼. ListenPlayer와 같은 재질을 쓴다. */
const onInverse = 'text-[rgb(var(--listen-on-rgb))]';
const control = cx(
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[rgb(var(--listen-on-rgb)/0.15)] listen-control',
  onInverse,
);

/**
 * 접힌 재생기. 유튜브 미니 플레이어처럼 화면 오른쪽 아래의 작은 알약으로 줄어들고, 재생은 그대로 이어진다.
 * 자막을 켜 두었으면 접어도 펼쳤을 때와 같은 화면 아래 가운데에, 알약보다 위에 보인다.
 * 펼치기 버튼은 aria-expanded로 상태를 알리고, 전환 뒤에도 포커스를 받는다(toggleRef).
 */
export const ListenMiniBar = ({
  playing,
  onPlayToggle,
  caption,
  captionStyle,
  captions,
  onCaptionsToggle,
  time,
  percent,
  onExpand,
  onClose,
  toggleRef,
  labels,
}: {
  playing: boolean;
  onPlayToggle: () => void;
  caption: string;
  captionStyle: CaptionStyle;
  captions: boolean;
  onCaptionsToggle: () => void;
  time: string;
  percent: number;
  onExpand: () => void;
  onClose: () => void;
  toggleRef: Ref<HTMLButtonElement>;
  labels: {
    region: string;
    play: string;
    pause: string;
    captions: string;
    expand: string;
    close: string;
  };
}) => (
  <div role="region" aria-label={labels.region} data-narration="skip">
    {captions && caption && (
      <div className="pointer-events-none fixed inset-x-0 bottom-[calc(var(--ds-spacing-xl)+3.5rem)] z-50 flex justify-center px-lg">
        <ListenCaption text={caption} style={captionStyle} />
      </div>
    )}
    <div className="fixed bottom-xl right-lg z-50 overflow-hidden rounded-full bg-[rgb(var(--listen-surface)/0.9)] ring-1 ring-[rgb(var(--listen-on-rgb)/0.12)] backdrop-blur-md [@media(prefers-reduced-transparency:reduce)]:bg-[rgb(var(--listen-surface))] shadow-lg">
      <div className="flex items-center gap-xs p-xs">
        <button
          type="button"
          className={control}
          onClick={onPlayToggle}
          aria-label={playing ? labels.pause : labels.play}
        >
          {playing ? (
            <Pause className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Play className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
        <span aria-hidden="true" className={cx('px-xs text-xsm', onInverse)}>
          {time}
        </span>
        <button
          type="button"
          className={control}
          onClick={onCaptionsToggle}
          aria-label={labels.captions}
          aria-pressed={captions}
        >
          <Captions className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          ref={toggleRef}
          type="button"
          className={control}
          onClick={onExpand}
          aria-label={labels.expand}
          aria-expanded={false}
        >
          <ChevronUp className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" className={control} onClick={onClose} aria-label={labels.close}>
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-[rgb(var(--listen-on-rgb))]"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);
