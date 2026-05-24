import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { RenderPhaseIntroContent, WarningStep } from '../content';
import { ArrowRightIcon, BellRingIcon, CheckCircleIcon, CpuIcon, MonitorIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['warning'] };

const warningIconMap = {
  cpu: CpuIcon,
  monitor: MonitorIcon,
  checkCircle: CheckCircleIcon,
} as const;

export const DomNotChangedWarning = ({ content }: Props) => (
  <section id="dom-not-changed" aria-labelledby="heading-dom-not-changed" className="scroll-mt-xl">
    <div
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-amber-300/80 bg-amber-50/80',
        'dark:border-amber-700/70 dark:bg-amber-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-md lg:gap-lg items-start">
        {/* Left: warning header */}
        <div className="flex items-start gap-md min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2',
              'bg-amber-100 text-amber-700 border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <BellRingIcon className="h-7 w-7" />
          </span>
          <div className="flex flex-col gap-2 min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-200">
              {`// ${content.eyebrow}`}
            </span>
            <h2
              id="heading-dom-not-changed"
              className="text-lg sm:text-xl lg:text-xxl font-bold tracking-tight text-amber-900 dark:text-amber-100 break-keep leading-tight"
            >
              <span className="block">{content.title.line1}</span>
              <span className="block">{content.title.line2}</span>
            </h2>
            <p className="text-xsm sm:text-sm leading-relaxed text-amber-900/85 dark:text-amber-100/85 break-keep">
              {content.description}
            </p>
          </div>
        </div>

        {/* Right: 3-step mini flow */}
        <div
          className={cn(
            'w-full rounded-2xl border p-md',
            'border-amber-200/80 bg-white/70',
            'dark:border-amber-800/60 dark:bg-slate-950/40',
          )}
        >
          {/* Desktop: row */}
          <div className="hidden sm:flex items-stretch gap-2">
            {content.steps.map((step, idx) => (
              <Fragment key={step.title}>
                <div className="flex-1 min-w-0">
                  <MiniStep step={step} />
                </div>
                {idx < content.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="flex shrink-0 items-center justify-center text-amber-600/70 dark:text-amber-300/70 px-0.5"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          {/* Mobile: column */}
          <ol className="sm:hidden flex flex-col gap-2">
            {content.steps.map((step) => (
              <li key={step.title}>
                <MiniStep step={step} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

const MiniStep = ({ step }: { step: WarningStep }) => {
  const Icon = warningIconMap[step.iconName];
  const palette = stepPalette[step.tone] ?? stepPalette.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-1.5 rounded-xl border bg-[var(--term-bg)] p-sm',
        palette.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
          palette.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <h3 className={cn('text-xsm font-bold leading-tight text-center break-keep', palette.text)}>
        {step.title}
      </h3>
      <p className="text-[10px] leading-snug text-center text-[var(--term-muted)] break-keep">
        {step.subtitle}
      </p>
    </article>
  );
};

const stepPalette: Record<string, { text: string; chip: string; border: string }> = {
  sky: {
    text: 'text-sky-700 dark:text-sky-200',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    border: 'border-sky-200/70 dark:border-sky-800/60',
  },
  indigo: {
    text: 'text-indigo-700 dark:text-indigo-200',
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    border: 'border-indigo-200/70 dark:border-indigo-800/60',
  },
  teal: {
    text: 'text-teal-700 dark:text-teal-200',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    border: 'border-teal-200/70 dark:border-teal-800/60',
  },
};
