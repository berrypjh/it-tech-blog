'use client';

import { useState } from 'react';

import { Brain, Hand, Keyboard, Pause, Play, Smartphone, Sun, VolumeX } from 'lucide-react';

import { ComparisonDemoCard } from '../components/ComparisonDemoCard';
import { SituationTabList } from '../components/SituationTabList';
import type { ImportanceContent, SituationId } from '../content';

const situationIconClass = 'h-3.5 w-3.5';

const iconMap: Record<SituationId, React.ReactNode> = {
  'one-hand': <Hand className={situationIconClass} aria-hidden="true" />,
  silent: <VolumeX className={situationIconClass} aria-hidden="true" />,
  sunlight: <Sun className={situationIconClass} aria-hidden="true" />,
  'no-mouse': <Keyboard className={situationIconClass} aria-hidden="true" />,
  'small-screen': <Smartphone className={situationIconClass} aria-hidden="true" />,
  'low-focus': <Brain className={situationIconClass} aria-hidden="true" />,
};

const SilentVideo = ({ playing }: { playing: boolean }) => (
  <div className="relative h-full w-full overflow-hidden rounded-md bg-neutral-ne800 dark:bg-neutral-ne200">
    <svg
      viewBox="0 0 120 80"
      className="absolute inset-0 h-full w-full text-neutral-ne800 dark:text-neutral-ne200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="120" height="80" fill="currentColor" />
      <circle cx="100" cy="22" r="6" fill="currentColor" opacity="0.7" />
      <path d="M0 60 L30 40 L50 50 L70 32 L120 60 V80 H0 Z" fill="currentColor" opacity="0.8" />
    </svg>
    <span
      className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-rounded bg-background-surface/90 text-text-default shadow-md"
      aria-hidden="true"
    >
      {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
    </span>
    <div className="absolute inset-x-2 bottom-2 h-1 rounded-full bg-background-surface/30">
      <div className="h-full w-1/3 rounded-full bg-background-surface/90" />
    </div>
  </div>
);

const CaptionedVideo = ({ caption, time }: { caption: string; time: string }) => (
  <div className="relative h-full w-full overflow-hidden rounded-md bg-neutral-ne800 dark:bg-neutral-ne200">
    <svg
      viewBox="0 0 120 80"
      className="absolute inset-0 h-full w-full text-neutral-ne800 dark:text-neutral-ne200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="120" height="80" fill="currentColor" />
      <circle cx="100" cy="22" r="6" fill="currentColor" opacity="0.7" />
      <path d="M0 60 L30 40 L50 50 L70 32 L120 60 V80 H0 Z" fill="currentColor" opacity="0.8" />
    </svg>
    <span
      className="absolute left-1/2 top-[40%] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-rounded bg-background-surface/90 text-text-default shadow-md"
      aria-hidden="true"
    >
      <Play className="h-3.5 w-3.5" />
    </span>
    <span className="absolute left-1.5 top-1.5 rounded-rounded bg-background-primary px-1.5 py-0.5 text-[0.5625rem] font-bold text-text-contrastText">
      CC
    </span>
    <div className="absolute inset-x-2 bottom-7 rounded-sm bg-neutral-ne900/80 px-1.5 py-1 text-center text-[0.625rem] leading-tight text-text-contrastText dark:bg-neutral-ne100/80">
      {caption}
    </div>
    <div className="absolute inset-x-2 bottom-2 flex items-center gap-1.5 text-[0.5625rem] text-text-contrastText/90">
      <div className="h-1 flex-1 rounded-full bg-background-surface/30">
        <div className="h-full w-1/2 rounded-full bg-background-surface/90" />
      </div>
      <span>{time}</span>
    </div>
  </div>
);

const LowContrastUI = ({ heading, body, cta }: { heading: string; body: string; cta: string }) => (
  <div className="flex h-full w-full flex-col justify-center gap-2 rounded-md bg-neutral-ne100 px-3 py-3 dark:bg-neutral-ne800">
    <p className="text-[0.6875rem] font-semiBold text-neutral-ne300 dark:text-neutral-ne600">
      {heading}
    </p>
    <p className="text-[0.6875rem] leading-snug text-neutral-ne200 dark:text-neutral-ne700">
      {body}
    </p>
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      className="pointer-events-none w-fit rounded-sm border border-neutral-ne200 bg-neutral-ne100 px-2.5 py-1 text-[0.625rem] font-semiBold text-neutral-ne300 dark:border-neutral-ne700 dark:bg-neutral-ne800 dark:text-neutral-ne600"
    >
      {cta}
    </button>
  </div>
);

const GoodContrastUI = ({ heading, body, cta }: { heading: string; body: string; cta: string }) => (
  <div className="flex h-full w-full flex-col justify-center gap-2 rounded-md border border-stroke-default bg-background-surface px-3 py-3">
    <p className="text-[0.6875rem] font-semiBold text-text-default">{heading}</p>
    <p className="text-[0.6875rem] leading-snug text-text-default">{body}</p>
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      className="pointer-events-none w-fit rounded-sm bg-background-primary px-2.5 py-1 text-[0.625rem] font-semiBold text-text-contrastText shadow-sm"
    >
      {cta}
    </button>
  </div>
);

const SmallTouchTarget = ({ label }: { label: string }) => (
  <div className="flex h-full w-full items-center justify-center">
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      className="pointer-events-none rounded-xs bg-background-primary px-1.5 py-0.5 text-[0.5625rem] font-semiBold text-text-contrastText"
    >
      {label}
    </button>
  </div>
);

const LargeTouchTarget = ({ label, hint }: { label: string; hint: string }) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-2">
    <div className="relative rounded-md border border-dashed border-stroke-primary/70 p-2">
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none rounded-md bg-background-primary px-4 py-2 text-xsm font-semiBold text-text-contrastText shadow-sm"
      >
        {label}
      </button>
    </div>
    <span className="text-[0.625rem] text-text-light">{hint}</span>
  </div>
);

export const SituationExperienceSection = ({
  content,
}: {
  content: ImportanceContent['situation'];
}) => {
  const [active, setActive] = useState<SituationId>('one-hand');
  const activeSituation = content.situations.find((s) => s.id === active) ?? content.situations[0];

  return (
    <section
      aria-labelledby="situation-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            02
          </span>
          상황으로 체험
        </span>
        <h2 id="situation-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="mb-lg">
        <SituationTabList
          situations={content.situations}
          active={active}
          onSelect={setActive}
          tabsLabel={content.tabsLabel}
          activeBadge={content.activeBadge}
          iconFor={(id) => iconMap[id]}
        />
      </div>

      <div
        id={`situation-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`situation-tab-${active}`}
        tabIndex={0}
        className="rounded-md border border-stroke-default/50 bg-background-default/30 px-sm py-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
      >
        <p className="text-xsm leading-relaxed text-text-default">
          <span className="font-semiBold text-text-primary">{activeSituation.label}</span>
          <span className="mx-2 text-text-light">—</span>
          <span className="text-text-light">{activeSituation.description}</span>
        </p>
      </div>

      <div className="mt-md grid grid-cols-1 gap-md lg:grid-cols-3">
        <ComparisonDemoCard
          title={content.demos.captions.title}
          beforeLabel={content.beforeLabel}
          afterLabel={content.afterLabel}
          beforeVisual={<SilentVideo playing={false} />}
          afterVisual={
            <CaptionedVideo
              caption={content.demos.captions.afterCaption}
              time={content.demos.captions.afterTime}
            />
          }
          helper={content.demos.captions.helper}
        />
        <ComparisonDemoCard
          title={content.demos.contrast.title}
          beforeLabel={content.beforeLabel}
          afterLabel={content.afterLabel}
          beforeVisual={
            <LowContrastUI
              heading={content.demos.contrast.beforeHeading}
              body={content.demos.contrast.beforeBody}
              cta={content.demos.contrast.beforeCta}
            />
          }
          afterVisual={
            <GoodContrastUI
              heading={content.demos.contrast.afterHeading}
              body={content.demos.contrast.afterBody}
              cta={content.demos.contrast.afterCta}
            />
          }
          helper={content.demos.contrast.helper}
        />
        <ComparisonDemoCard
          title={content.demos.touchTarget.title}
          beforeLabel={content.beforeLabel}
          afterLabel={content.afterLabel}
          beforeVisual={<SmallTouchTarget label={content.demos.touchTarget.beforeButton} />}
          afterVisual={
            <LargeTouchTarget
              label={content.demos.touchTarget.afterButton}
              hint={content.demos.touchTarget.targetHint}
            />
          }
          helper={content.demos.touchTarget.helper}
        />
      </div>
    </section>
  );
};
