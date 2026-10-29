'use client';

import { useEffect, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import {
  cx,
  Popover,
  PopoverPanel,
  PopoverTrigger,
  SegmentControl,
  Switch,
} from '@berrypjh/react-ui';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';

import type { ListenMode } from './segments';
import { CAPTION_OPACITIES, CAPTION_SIZES, type CaptionStyle } from './useCaptionStyle';
import { RATES } from './useNarration';

const strings = {
  ko: {
    label: '듣기 설정',
    rate: '재생 속도',
    voice: '목소리',
    auto: '자동 (추천)',
    mode: '읽기 방식',
    modes: { lecture: '해설', full: '본문 그대로' },
    captions: '자막 설정',
    captionsLabel: '자막',
    summary: (size: string, background: string) => `글자 ${size} · 배경 ${background}`,
    back: '듣기 설정으로 돌아가기',
    size: '글자 크기',
    background: '배경',
    inside: '재생기 안에 표시',
    reset: '기본값으로 초기화',
  },
  en: {
    label: 'Listening settings',
    rate: 'Playback speed',
    voice: 'Voice',
    auto: 'Automatic (recommended)',
    mode: 'Reading style',
    modes: { lecture: 'Guided', full: 'Full text' },
    captions: 'Caption settings',
    captionsLabel: 'Captions',
    summary: (size: string, background: string) => `Text ${size} · Background ${background}`,
    back: 'Back to listening settings',
    size: 'Text size',
    background: 'Background',
    inside: 'Show inside the player',
    reset: 'Reset to defaults',
  },
};

const sectionLabel = 'mb-sm text-[10px] font-semiBold uppercase tracking-wider text-text-light';
/** 사이트 설정 메뉴(SettingsPopover)의 하단 버튼과 같은 모양. 구분선 아래 작은 회색 글씨로 둔다. */
const footerButton =
  'flex w-full items-center justify-center gap-2xs rounded-xs py-1.5 text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary';
const footerActive = 'text-text-light hover:bg-background-grey/20 hover:text-text-default';
const divider = <div className="h-px bg-stroke-default" />;
/** 목소리 선택 칸과 자막 설정 칸이 함께 쓰는 테두리 칸(사이트 설정의 폰트 선택과 같은 모양). */
const field =
  'w-full rounded-xs border border-stroke-default bg-transparent px-2 py-1.5 text-xxsm text-text-default hover:bg-background-grey/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary';
const percent = (value: number) => `${Math.round(value * 100)}%`;

type Props = {
  rate: number;
  onRateChange: (rate: number) => void;
  voices: SpeechSynthesisVoice[];
  voiceName: string;
  onVoiceChange: (name: string) => void;
  mode: ListenMode;
  onModeChange: (mode: ListenMode) => void;
  caption: CaptionStyle;
  onCaptionChange: (next: Partial<CaptionStyle>) => void;
  /** 속도 · 목소리 · 읽기 방식 · 자막이 모두 기본값인지. 볼륨은 재생기 바에서 다루므로 넣지 않는다. */
  isDefault: boolean;
  onReset: () => void;
  buttonClass: string;
};

/**
 * 유튜브 · 유데미의 톱니 메뉴처럼 재생 속도 · 목소리 · 읽기 방식을 두고, 자막 설정은 하위 화면으로 넘긴다.
 * 화면을 바꾸면 그 화면의 첫 버튼으로 포커스를 옮겨 키보드 사용자가 위치를 잃지 않게 한다.
 */
export const ListenSettings = (p: Props) => {
  const t = useLang(strings);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<'main' | 'captions'>('main');
  const firstRef = useRef<HTMLButtonElement>(null);
  const switched = useRef(false);

  useEffect(() => {
    if (switched.current) firstRef.current?.focus();
  }, [view]);

  const go = (next: 'main' | 'captions') => {
    switched.current = true;
    setView(next);
  };

  /** 칸에 보이는 요약. 접근 가능한 이름에도 그대로 넣는다(WCAG 2.5.3 레이블과 이름 일치). */
  const captionSummary = t.summary(percent(p.caption.size), percent(p.caption.opacity));

  const changeOpen = (next: boolean) => {
    setOpen(next);
    if (!next) {
      switched.current = false;
      setView('main');
    }
  };

  return (
    <Popover open={open} onOpenChange={changeOpen}>
      <div className="relative">
        <PopoverTrigger>
          <button type="button" aria-label={t.label} className={p.buttonClass}>
            <Settings className="h-5 w-5" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverPanel
          aria-label={view === 'main' ? t.label : t.captions}
          className="absolute bottom-12 right-0 z-50 w-64 space-y-md text-xxsm"
        >
          {view === 'main' ? (
            <>
              <div>
                <p className={sectionLabel}>{t.rate}</p>
                <SegmentControl
                  aria-label={t.rate}
                  value={String(p.rate)}
                  onChange={(value) => p.onRateChange(Number(value))}
                  options={RATES.map((r) => ({ value: String(r), label: `${r}×` }))}
                />
              </div>
              {p.voices.length > 0 && (
                <div>
                  <p className={sectionLabel}>{t.voice}</p>
                  <select
                    aria-label={t.voice}
                    value={p.voiceName}
                    onChange={(e) => p.onVoiceChange(e.target.value)}
                    className={field}
                  >
                    <option value="">{t.auto}</option>
                    {p.voices.map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <p className={sectionLabel}>{t.mode}</p>
                <SegmentControl
                  aria-label={t.mode}
                  value={p.mode}
                  onChange={p.onModeChange}
                  options={(['lecture', 'full'] as const).map((m) => ({
                    value: m,
                    label: t.modes[m],
                  }))}
                />
              </div>
              <div>
                <p className={sectionLabel}>{t.captionsLabel}</p>
                <button
                  ref={firstRef}
                  type="button"
                  className={cx(field, 'flex items-center justify-between gap-sm')}
                  onClick={() => go('captions')}
                  aria-label={`${t.captions}, ${captionSummary}`}
                >
                  {captionSummary}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              {divider}
              <button
                type="button"
                className={cx(
                  footerButton,
                  p.isDefault ? 'cursor-default text-text-light/25' : footerActive,
                )}
                onClick={p.onReset}
                disabled={p.isDefault}
              >
                {t.reset}
              </button>
            </>
          ) : (
            <>
              <button
                ref={firstRef}
                type="button"
                className="flex items-center gap-2xs rounded-xs text-xsm font-semiBold text-text-default hover:text-text-light"
                onClick={() => go('main')}
                aria-label={t.back}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                {t.captions}
              </button>
              <div>
                <p className={sectionLabel}>{t.size}</p>
                <SegmentControl
                  aria-label={t.size}
                  value={String(p.caption.size)}
                  onChange={(value) => p.onCaptionChange({ size: Number(value) })}
                  options={CAPTION_SIZES.map((s) => ({ value: String(s), label: percent(s) }))}
                />
              </div>
              <div>
                <p className={sectionLabel}>{t.background}</p>
                <SegmentControl
                  aria-label={t.background}
                  value={String(p.caption.opacity)}
                  onChange={(value) => p.onCaptionChange({ opacity: Number(value) })}
                  options={CAPTION_OPACITIES.map((o) => ({ value: String(o), label: percent(o) }))}
                />
              </div>
              <Switch
                className="text-xxsm"
                checked={p.caption.inside}
                onChange={(e) => p.onCaptionChange({ inside: e.target.checked })}
              >
                {t.inside}
              </Switch>
            </>
          )}
        </PopoverPanel>
      </div>
    </Popover>
  );
};
