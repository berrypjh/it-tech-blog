'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../components/StepSectionHeader';
import type { UsageStep, UsageVsInternalsContent } from '../content';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['perspectives'] };

type PerspectiveTone = 'usage' | 'internal';

const toneClasses: Record<
  PerspectiveTone,
  { title: string; subtitle: string; cardBg: string; badge: string; cardBorder: string }
> = {
  usage: {
    title: 'text-teal-600 dark:text-teal-300',
    subtitle: 'text-teal-700/80 dark:text-teal-300/70',
    cardBg: 'bg-teal-50/40 dark:bg-teal-950/20',
    cardBorder: 'border-teal-200/70 dark:border-teal-800/60',
    badge: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  },
  internal: {
    title: 'text-sky-600 dark:text-sky-300',
    subtitle: 'text-sky-700/80 dark:text-sky-300/70',
    cardBg: 'bg-sky-50/40 dark:bg-sky-950/20',
    cardBorder: 'border-sky-200/70 dark:border-sky-800/60',
    badge: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  },
};

const StepRow = ({ step, tone }: { step: UsageStep; tone: PerspectiveTone }) => {
  const t = toneClasses[tone];
  return (
    <li>
      <article className="group flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-sm transition-colors hover:border-[var(--term-accent)]">
        <span
          className={cn(
            'inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full text-xxsm font-bold tabular-nums',
            t.badge,
          )}
          aria-hidden="true"
        >
          {step.num}
        </span>
        <div className="min-w-0 flex flex-col gap-0.5">
          <h4 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] leading-tight">
            {step.title}
          </h4>
          <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {formatInline(step.body)}
          </p>
        </div>
      </article>
    </li>
  );
};

const PerspectivePanel = ({
  tone,
  panel,
}: {
  tone: PerspectiveTone;
  panel: UsageVsInternalsContent['perspectives']['left'];
}) => {
  const t = toneClasses[tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-md rounded-lg border p-md sm:p-lg min-w-0',
        t.cardBorder,
        t.cardBg,
      )}
    >
      <header className="flex flex-col gap-0.5">
        <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.title)}>
          {panel.title}
        </h3>
        <p className={cn('text-xsm leading-relaxed', t.subtitle)}>{panel.subtitle}</p>
      </header>
      <ol className="flex flex-col gap-1.5">
        {panel.steps.map((step) => (
          <StepRow key={step.num} step={step} tone={tone} />
        ))}
      </ol>
    </div>
  );
};

export const PerspectiveComparison = ({ content }: Props) => {
  const [active, setActive] = useState<PerspectiveTone>('internal');
  return (
    <section
      id="section-perspectives"
      aria-labelledby="heading-perspectives"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-sky-50/30 dark:bg-sky-950/15 p-md sm:p-lg lg:p-xl"
    >
      <StepSectionHeader id="perspectives" num={content.sectionNum} title={content.title} />

      {/* 탭 토글 (시각/aria-pressed) */}
      <div
        role="group"
        aria-label={content.title}
        className="inline-flex w-full sm:w-fit mx-auto items-center gap-1 p-1 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]"
      >
        {(
          [
            ['usage', content.toggle.usage],
            ['internal', content.toggle.internal],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === key}
            onClick={() => setActive(key)}
            className={cn(
              'flex-1 sm:flex-none px-md py-1.5 rounded-full text-xsm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              active === key
                ? key === 'usage'
                  ? 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900'
                  : 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900'
                : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 좌우 카드 + 중앙 VS */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        <div
          className={cn('transition-opacity', active === 'internal' && 'opacity-60 lg:opacity-100')}
        >
          <PerspectivePanel tone="usage" panel={content.left} />
        </div>

        {/* VS */}
        <div className="relative flex lg:flex-col items-center justify-center py-md">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
          />
          <span
            aria-hidden="true"
            className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
          />
          <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-xxsm font-bold tracking-wider text-[var(--term-muted)] shadow-[0_2px_0_var(--term-border)]">
            Vs
          </span>
        </div>

        <div
          className={cn('transition-opacity', active === 'usage' && 'opacity-60 lg:opacity-100')}
        >
          <PerspectivePanel tone="internal" panel={content.right} />
        </div>
      </div>
    </section>
  );
};
