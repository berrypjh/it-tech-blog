'use client';

import { useMemo, useState } from 'react';

import { Bell, Eye, Keyboard, Palette, VolumeX, ZoomIn } from 'lucide-react';

import { PreviewControlBar } from '../components/PreviewControlBar';
import { PreviewWebsitePanel } from '../components/PreviewWebsitePanel';
import { SimulationExplanationPanel } from '../components/SimulationExplanationPanel';
import { SimulationModeList } from '../components/SimulationModeList';
import type { DisabilitiesContent, SimulationModeId } from '../content';

const iconClass = 'h-3.5 w-3.5';

const iconMap: Record<SimulationModeId, React.ReactNode> = {
  'low-vision': <Eye className={iconClass} />,
  'magnify-blur': <ZoomIn className={iconClass} />,
  'color-blind': <Palette className={iconClass} />,
  'no-sound': <VolumeX className={iconClass} />,
  'keyboard-only': <Keyboard className={iconClass} />,
  distraction: <Bell className={iconClass} />,
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
