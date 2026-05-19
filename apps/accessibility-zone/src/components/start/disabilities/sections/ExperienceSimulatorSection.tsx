'use client';

import { useMemo, useState } from 'react';

import { PreviewControlBar } from '../components/PreviewControlBar';
import { PreviewWebsitePanel } from '../components/PreviewWebsitePanel';
import { SimulationExplanationPanel } from '../components/SimulationExplanationPanel';
import { SimulationModeList } from '../components/SimulationModeList';
import type { DisabilitiesContent, SimulationModeId } from '../content';

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 11h4M11 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M12 3a9 9 0 100 18c1 0 1.5-1 1.5-2s-1-1.5-1-2.5S13 14 14 14h3a4 4 0 004-4 7 7 0 00-9-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <circle cx="7" cy="13" r="1" fill="currentColor" />
    <circle cx="11" cy="7" r="1" fill="currentColor" />
    <circle cx="15" cy="7" r="1" fill="currentColor" />
  </svg>
);

const MuteIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M11 5L6 9H2v6h4l5 4V5zM22 9l-6 6M16 9l6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const KeyboardIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M6 9a6 6 0 0112 0v4l2 3H4l2-3V9zM10 19a2 2 0 004 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const iconMap: Record<SimulationModeId, React.ReactNode> = {
  'low-vision': <EyeIcon />,
  'magnify-blur': <ZoomIcon />,
  'color-blind': <PaletteIcon />,
  'no-sound': <MuteIcon />,
  'keyboard-only': <KeyboardIcon />,
  distraction: <BellIcon />,
};

const DEFAULT_CONTRAST = 35; // baseline tuned for low-vision mode
const DEFAULT_FONT_SCALE = 100;

export const ExperienceSimulatorSection = ({
  content,
}: {
  content: DisabilitiesContent['simulator'];
}) => {
  const [active, setActive] = useState<SimulationModeId>('low-vision');
  const [contrastLevel, setContrastLevel] = useState(DEFAULT_CONTRAST);
  const [fontScale, setFontScale] = useState(DEFAULT_FONT_SCALE);

  const activeMode = useMemo(
    () => content.modes.find((m) => m.id === active) ?? content.modes[0],
    [active, content.modes],
  );

  const handleSelect = (id: SimulationModeId) => {
    setActive(id);
    // Reset filters when changing mode for clearer experience
    setContrastLevel(id === 'low-vision' ? DEFAULT_CONTRAST : 50);
    setFontScale(DEFAULT_FONT_SCALE);
  };

  const handleReset = () => {
    setActive('low-vision');
    setContrastLevel(DEFAULT_CONTRAST);
    setFontScale(DEFAULT_FONT_SCALE);
  };

  return (
    <section
      aria-labelledby="simulator-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-lg flex flex-col items-start justify-between gap-sm sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
              02
            </span>
            직접 체험
          </span>
          <h2 id="simulator-heading" className="text-xl font-bold text-text-default sm:text-xxl">
            {content.title}
          </h2>
        </div>
        <div
          aria-live="polite"
          className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-rounded bg-primary-pr100 px-2.5 py-1 text-xxsm font-semiBold text-text-primary dark:bg-primary-pr900/40"
        >
          <span className="text-text-light">{content.currentModeLabel}:</span>
          <span className="break-keep">{activeMode.label}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-lg xl:grid-cols-[220px_minmax(0,1fr)_280px]">
        <SimulationModeList
          modes={content.modes}
          active={active}
          onSelect={handleSelect}
          iconFor={(id) => iconMap[id]}
          modesTitle={content.modesTitle}
          activeBadge={content.activeBadge}
        />

        <div className="flex min-w-0 flex-col gap-sm">
          <PreviewWebsitePanel
            preview={content.preview}
            mode={active}
            contrastLevel={contrastLevel}
            fontScale={fontScale}
          />
          <PreviewControlBar
            controls={content.controls}
            contrastLevel={contrastLevel}
            onContrastChange={setContrastLevel}
            fontScale={fontScale}
            onFontScaleChange={setFontScale}
            onReset={handleReset}
          />
        </div>

        <div className="min-w-0 lg:col-span-2 xl:col-span-1 xl:col-start-3">
          <SimulationExplanationPanel mode={activeMode} labels={content.explanation} />
        </div>
      </div>
    </section>
  );
};
