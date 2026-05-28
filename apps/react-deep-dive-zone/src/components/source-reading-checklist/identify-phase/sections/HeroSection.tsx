import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { HeroPhaseCard, PhaseDetectionContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CalendarClockIcon,
  MonitorIcon,
  MousePointerClickIcon,
  RouteIcon,
  WorkflowIcon,
} from '../icons';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';

type Props = { content: PhaseDetectionContent['hero'] };

const heroPhaseIcon = {
  calendarClock: CalendarClockIcon,
  workflow: WorkflowIcon,
  monitor: MonitorIcon,
} as const;

export const HeroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="source-reading-checklist/identify-phase.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // setState → scheduling → render → commit'}
          </span>
        }
      />

      <div className="mt-md grid grid-cols-1 gap-lg lg:gap-xl lg:grid-cols-[minmax(0,_40fr)_minmax(0,_60fr)] items-stretch">
        {/* LEFT — Text */}
        <div className="flex flex-col gap-md">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
              'border-blue-300 bg-blue-50 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              'text-[11px] font-mono font-bold uppercase tracking-wider',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-blue-500" />
            {content.badge}
          </span>

          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.4rem]',
              'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
            )}
          >
            <span className="block">{content.titleLines[0]}</span>
            <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
          </h1>

          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep max-w-[44ch]">
            {content.description}
          </p>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
            {content.supporting}
          </p>

          <div className="mt-sm flex flex-col sm:flex-row gap-2">
            <a
              href="#section-role-comparison"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'bg-blue-600 text-white hover:bg-blue-700',
                'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.primaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#section-quiz"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* RIGHT — Phase flow visual */}
        <div
          className={cn(
            'relative rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
            'dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-lg',
                'border border-blue-300 bg-blue-100 text-blue-700',
                'dark:border-blue-700/70 dark:bg-blue-950/60 dark:text-blue-200',
              )}
            >
              <RouteIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.visualTitle}
            </h3>
          </div>

          {/* setState start card */}
          <div
            className={cn(
              'flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 mb-2',
              'border-amber-300 bg-amber-50',
              'dark:border-amber-700/70 dark:bg-amber-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-md',
                'border border-amber-400 bg-white text-amber-700',
                'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
              )}
            >
              <MousePointerClickIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200">
              start
            </span>
            <code className="font-mono text-xsm font-bold text-[var(--term-fg)]">
              {content.flowStart}
            </code>
          </div>

          {/* Connector */}
          <span aria-hidden="true" className="flex items-center justify-center py-1">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-blue-300 bg-white text-blue-600 dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-300">
              <ArrowDownIcon className="h-3 w-3" />
            </span>
          </span>

          {/* 3 phase cards */}
          <ol className="flex flex-col gap-2">
            {content.phaseCards.map((card, i) => (
              <li key={card.phase}>
                <HeroPhaseCardItem card={card} />
                {i < content.phaseCards.length - 1 && (
                  <span aria-hidden="true" className="flex items-center justify-center py-1">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full border border-blue-300 bg-white text-blue-600 dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-300">
                      <ArrowDownIcon className="h-3 w-3" />
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="mt-md text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
            {content.visualCaption}
          </p>
        </div>
      </div>
    </section>
  );
};

const HeroPhaseCardItem = ({ card }: { card: HeroPhaseCard }) => {
  const Icon = heroPhaseIcon[card.iconKey];
  const t = getPhaseClasses(card.phase);
  return (
    <article
      className={cn(
        'group flex flex-col gap-2 rounded-xl border-2 p-3',
        'bg-white dark:bg-[var(--term-bg)]',
        t.border,
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
        'motion-safe:hover:shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
              t.chip,
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
          <PhaseBadge phase={card.phase} size="sm" />
        </div>
        <span className={cn('text-[10px] italic break-keep text-right', t.text)}>
          {card.subtitle}
        </span>
      </div>

      <ul className="flex flex-wrap gap-1">
        {card.functions.map((fn) => (
          <li key={fn}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-1.5 py-0.5',
                t.border,
                'bg-white dark:bg-[var(--term-bg)]',
                'font-mono text-[10.5px] text-[var(--term-fg)]',
              )}
            >
              {fn}
            </code>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'flex items-start gap-1.5 rounded-md border px-2 py-1',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span aria-hidden="true" className={cn('font-bold text-[10px]', t.text)}>
          Q.
        </span>
        <p className="text-[11px] leading-snug text-[var(--term-fg)] break-keep">{card.question}</p>
      </div>
    </article>
  );
};
