import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { CommitRootContent, HeroFlowCard, HeroFlowCardIcon } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CpuIcon,
  GateIcon,
  GitMergeIcon,
  LayersIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: CommitRootContent['hero'] };

const iconMap: Record<HeroFlowCardIcon, typeof CpuIcon> = {
  cpu: CpuIcon,
  gitMerge: GitMergeIcon,
  gate: GateIcon,
  layers: LayersIcon,
};

export const CommitRootHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/commit-root.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// finishedWork → commitRoot'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
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
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.6rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-teal-300 dark:to-cyan-300',
            )}
          >
            {content.title.line2}
          </span>
          <span className="block">{content.title.line3}</span>
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

const HeroDiagram = ({ diagram }: { diagram: CommitRootContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/55 via-white to-teal-50/55',
      'dark:from-sky-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] truncate">
        {`// ${diagram.flowLabel}`}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        {diagram.eyebrow}
      </span>
    </header>

    {/* Desktop: 4 cards in a row */}
    <ol className="hidden md:flex items-stretch gap-1.5">
      {diagram.cards.map((card, idx) => (
        <Fragment key={card.title}>
          <li className="flex-1 min-w-0">
            <FlowCard card={card} />
          </li>
          {idx < diagram.cards.length - 1 && (
            <li
              aria-hidden="true"
              className="flex items-center justify-center text-[var(--term-dim)] px-0.5"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>

    {/* Mobile: vertical stack */}
    <ol className="md:hidden flex flex-col">
      {diagram.cards.map((card, idx) => (
        <li key={card.title} className="flex flex-col">
          <FlowCard card={card} />
          {idx < diagram.cards.length - 1 && (
            <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const FlowCard = ({ card }: { card: HeroFlowCard }) => {
  const Icon = iconMap[card.iconName];
  const t = commitToneTokens[card.tone];
  const isGate = card.isGate;
  return (
    <article
      className={cn(
        'relative flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        isGate ? cn('border-2', t.borderStrong, t.bg) : cn(t.border),
        'shadow-[0_1px_0_var(--term-border)]',
        isGate && 'ring-2 ring-teal-300/40 dark:ring-teal-500/30',
      )}
    >
      {isGate && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
            'text-[9px] font-mono uppercase tracking-wider font-bold',
            'bg-teal-500 text-white border-teal-600',
            'dark:bg-teal-400 dark:text-slate-950 dark:border-teal-300',
          )}
        >
          gate
        </span>
      )}
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <CheckCircleIcon aria-hidden="true" className={cn('h-3.5 w-3.5 shrink-0', t.text)} />
      </header>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
          {card.title}
        </h3>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </span>
      </div>
      {card.description && (
        <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {card.description}
        </p>
      )}
      {card.items && (
        <ul className="flex flex-col gap-0.5 mt-auto">
          {card.items.map((item) => (
            <li
              key={item}
              className={cn(
                'flex items-center gap-1.5 text-[11px] sm:text-xsm leading-tight break-keep',
                t.text,
              )}
            >
              <span
                aria-hidden="true"
                className={cn('inline-block h-1 w-1 rounded-full shrink-0', t.dot)}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
