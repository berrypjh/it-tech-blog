'use client';

import type { DisabilitiesContent } from '../content';

type Props = {
  controls: DisabilitiesContent['simulator']['controls'];
  contrastLevel: number;
  onContrastChange: (v: number) => void;
  fontScale: number;
  onFontScaleChange: (v: number) => void;
  onReset: () => void;
};

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ResetIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M3 12a9 9 0 109-9v4l4-4-4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PreviewControlBar = ({
  controls,
  contrastLevel,
  onContrastChange,
  fontScale,
  onFontScaleChange,
  onReset,
}: Props) => {
  const contrastSliderId = 'simulator-contrast-slider';
  return (
    <div className="flex flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-mdl">
      <div className="flex min-w-0 flex-1 items-center gap-sm">
        <label
          htmlFor={contrastSliderId}
          className="text-xxsm font-semiBold uppercase tracking-wide text-text-light"
        >
          {controls.contrastLabel}
        </label>
        <button
          type="button"
          aria-label={controls.contrastDecrease}
          onClick={() => onContrastChange(Math.max(0, contrastLevel - 10))}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-stroke-default text-text-default transition-colors hover:bg-primary-pr100/40 dark:hover:bg-primary-pr900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
        >
          <MinusIcon />
        </button>
        <input
          id={contrastSliderId}
          type="range"
          min={0}
          max={100}
          value={contrastLevel}
          onChange={(e) => onContrastChange(Number(e.target.value))}
          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-stroke-default/60 accent-background-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
        />
        <button
          type="button"
          aria-label={controls.contrastIncrease}
          onClick={() => onContrastChange(Math.min(100, contrastLevel + 10))}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-stroke-default text-text-default transition-colors hover:bg-primary-pr100/40 dark:hover:bg-primary-pr900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
        >
          <PlusIcon />
        </button>
      </div>

      <div className="flex items-center gap-sm">
        <span className="text-xxsm font-semiBold uppercase tracking-wide text-text-light">
          {controls.fontSizeLabel}
        </span>
        <button
          type="button"
          aria-label={controls.fontSizeDecrease}
          onClick={() => onFontScaleChange(Math.max(80, fontScale - 10))}
          className="flex h-7 items-center justify-center rounded-md border border-stroke-default px-2 text-[0.6875rem] font-bold text-text-default transition-colors hover:bg-primary-pr100/40 dark:hover:bg-primary-pr900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
        >
          A-
        </button>
        <button
          type="button"
          aria-label={controls.fontSizeIncrease}
          onClick={() => onFontScaleChange(Math.min(150, fontScale + 10))}
          className="flex h-7 items-center justify-center rounded-md border border-stroke-default px-2 text-[0.8125rem] font-bold text-text-default transition-colors hover:bg-primary-pr100/40 dark:hover:bg-primary-pr900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
        >
          A+
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-1.5 rounded-md border border-stroke-default bg-background-surface px-sm py-1.5 text-xsm font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 dark:hover:bg-primary-pr900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
      >
        <ResetIcon />
        {controls.reset}
      </button>
    </div>
  );
};
