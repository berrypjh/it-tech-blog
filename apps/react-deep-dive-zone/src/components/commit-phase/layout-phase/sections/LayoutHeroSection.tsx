import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { HeroPhase, HeroPhaseIcon, LayoutPhaseContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  DatabaseIcon,
  LightbulbIcon,
  MonitorIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LayoutPhaseContent['hero'] };

const iconMap: Record<HeroPhaseIcon, typeof ZapIcon> = {
  database: DatabaseIcon,
  zap: ZapIcon,
  monitor: MonitorIcon,
  clock: ClockIcon,
};

export const LayoutHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/layout-phase.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// mutation → layout → paint'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left */}
      <div className="flex flex-col gap-md min-w-0">
        <ul className="flex flex-wrap items-center gap-2">
          {content.pills.map((pill) => (
            <li
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                pill.tone === 'sky' &&
                  'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                pill.tone === 'slate' &&
                  'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40',
              )}
            >
              {pill.tone === 'sky' && (
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky-500" />
              )}
              {pill.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.2rem] xl:text-[2.5rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-teal-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent',
              'dark:from-teal-300 dark:via-cyan-300 dark:to-sky-300',
            )}
          >
            {content.title.line3}
          </span>
          <span className="block">{content.title.line4}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-teal-200/80 bg-teal-50/60',
            'dark:border-teal-800/70 dark:bg-teal-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.insight}
          </p>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ diagram }: { diagram: LayoutPhaseContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-teal-50/55 via-white to-sky-50/55',
      'dark:from-teal-950/25 dark:via-[var(--term-bg)] dark:to-sky-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <h2 className="text-[10px] sm:text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold break-keep">
        {`// ${diagram.title}`}
      </h2>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        commit timeline
      </span>
    </header>

    {/* Desktop: 4 columns */}
    <ol className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-1.5 items-stretch">
      {diagram.phases.map((phase, idx) => (
        <Fragment key={phase.key}>
          <li className="flex">
            <PhaseCard phase={phase} />
          </li>
          {idx < diagram.phases.length - 1 && (
            <li
              aria-hidden="true"
              className="flex items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>

    {/* Mobile: vertical */}
    <ol className="md:hidden flex flex-col">
      {diagram.phases.map((phase, idx) => (
        <li key={phase.key} className="flex flex-col">
          <PhaseCard phase={phase} />
          {idx < diagram.phases.length - 1 && (
            <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          )}
        </li>
      ))}
    </ol>

    {/* Bottom timeline dots */}
    <TimelineDots phases={diagram.phases} />
  </div>
);

const PhaseCard = ({ phase }: { phase: HeroPhase }) => {
  const Icon = iconMap[phase.iconName];
  const t = commitToneTokens[phase.tone];
  return (
    <article
      className={cn(
        'relative flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        phase.active
          ? cn('border-2', t.borderStrong, t.bg, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
          : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      {phase.active && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 left-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
            'text-[9px] font-mono uppercase tracking-wider font-bold',
            'bg-teal-500 text-white border-teal-600',
            'dark:bg-teal-400 dark:text-slate-950 dark:border-teal-300',
          )}
        >
          active
        </span>
      )}
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-xsm font-bold leading-tight break-keep', t.textStrong)}>
            {phase.title}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {phase.subtitle}
          </span>
        </div>
      </header>
      <ul className="flex flex-col gap-0.5 mt-auto">
        {phase.details.map((detail) => (
          <li
            key={detail}
            className={cn(
              'flex items-center gap-1.5 text-[10.5px] sm:text-[11px] leading-snug break-keep',
              phase.active ? t.text : 'text-[var(--term-muted)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-1 w-1 rounded-full shrink-0',
                phase.active ? t.dot : 'bg-[var(--term-dim)]',
              )}
            />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const TimelineDots = ({ phases }: { phases: HeroPhase[] }) => (
  <div className="mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    <div className="relative flex items-center justify-between">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-1/2 h-px bg-[var(--term-border)]"
      />
      {phases.map((phase) => {
        const t = commitToneTokens[phase.tone];
        return (
          <div key={phase.key} className="relative flex flex-col items-center gap-1">
            <span
              aria-hidden="true"
              className={cn(
                'inline-block rounded-full border-2 bg-[var(--term-bg)] relative z-10',
                phase.active
                  ? cn(
                      'h-4 w-4',
                      t.borderStrong,
                      t.bg,
                      'ring-2 ring-teal-300/40 dark:ring-teal-500/30',
                    )
                  : 'h-3 w-3 border-[var(--term-border)]',
              )}
            />
            <span
              className={cn(
                'text-[9px] font-mono uppercase tracking-wider whitespace-nowrap',
                phase.active ? cn(t.text, 'font-bold') : 'text-[var(--term-muted)]',
              )}
            >
              {phase.title}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);
