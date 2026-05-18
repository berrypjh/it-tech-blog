'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { AccessibleDemoPage } from '../components/AccessibleDemoPage';
import { ScreenReaderLogPanel } from '../components/ScreenReaderLogPanel';
import type { AssistiveTechContent } from '../content';

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

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

const STEP_INTERVAL_MS = 1400;
const INITIAL_INDEX = 3;

export const ScreenReaderExperienceSection = ({
  content,
}: {
  content: AssistiveTechContent['screenReader'];
}) => {
  const total = content.items.length;
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
  const [isReading, setIsReading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => () => stopTimer(), [stopTimer]);

  const handleStart = () => {
    if (isReading) {
      stopTimer();
      setIsReading(false);
      return;
    }
    setIsReading(true);
    setActiveIndex((prev) => (prev >= total ? 1 : prev < 1 ? 1 : prev));
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next > total) {
          stopTimer();
          setIsReading(false);
          return total;
        }
        return next;
      });
    }, STEP_INTERVAL_MS);
  };

  const handleReset = () => {
    stopTimer();
    setIsReading(false);
    setActiveIndex(INITIAL_INDEX);
  };

  return (
    <section
      aria-labelledby="screen-reader-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-mdl flex flex-col items-start justify-between gap-sm sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
              02
            </span>
            읽기 순서 체험
          </span>
          <h2
            id="screen-reader-heading"
            className="text-xl font-bold text-text-default sm:text-xxl"
          >
            {content.title}
          </h2>
          <p className="text-xsm leading-relaxed text-text-light sm:text-sm">
            {content.description}
          </p>
        </div>
        <div className="flex gap-sm">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-md border border-stroke-default bg-background-surface px-mdl py-sml text-xsm font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
          >
            <ResetIcon />
            {content.resetLabel}
          </button>
          <button
            type="button"
            onClick={handleStart}
            aria-pressed={isReading}
            className="inline-flex items-center gap-1.5 rounded-md bg-background-primary px-mdl py-sml text-xsm font-semiBold text-text-contrastText shadow-sm transition-colors hover:bg-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
          >
            {isReading ? <PauseIcon /> : <PlayIcon />}
            {isReading ? content.stopLabel : content.startLabel}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[1.35fr_1fr] lg:gap-lg">
        <div className="min-w-0">
          <AccessibleDemoPage content={content} activeIndex={activeIndex} />
          <p className="mt-2 text-[0.6875rem] text-text-light">{content.helper}</p>
        </div>
        <div className="min-w-0">
          <ScreenReaderLogPanel content={content} activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
};
