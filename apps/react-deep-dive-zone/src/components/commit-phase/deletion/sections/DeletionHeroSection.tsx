import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { DeletionContent, HeroStepItem } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DropletIcon,
  LightbulbIcon,
  LogOutIcon,
  RepeatIcon,
  TrashIcon,
  UnlinkIcon,
} from '../icons';

type Props = { content: DeletionContent['hero'] };

const stepIconMap: Record<HeroStepItem['iconName'], typeof UnlinkIcon> = {
  unlink: UnlinkIcon,
  droplet: DropletIcon,
  logOut: LogOutIcon,
  trash: TrashIcon,
};

export const DeletionHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/deletion.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// cleanup pipeline'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.62fr)_minmax(0,_1.38fr)] gap-xl lg:gap-2xl items-start">
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
              'block bg-gradient-to-r from-violet-600 via-sky-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-violet-300 dark:via-sky-300 dark:to-teal-300',
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
            'border-violet-200/80 bg-violet-50/60',
            'dark:border-violet-800/70 dark:bg-violet-950/30',
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
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              {content.insightLabel}
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.insight}
            </p>
          </div>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ diagram }: { diagram: DeletionContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-violet-50/50 via-white to-teal-50/50',
      'dark:from-violet-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <h2 className="text-[10px] sm:text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        {`// ${diagram.title}`}
      </h2>
      <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80 rounded-md border border-violet-200/70 dark:border-violet-800/60 px-2 py-0.5">
        cleanup pipeline
      </span>
    </header>

    {/* Desktop: subtree + 4 step row */}
    <div className="hidden md:grid grid-cols-[minmax(0,_0.55fr)_minmax(0,_1.45fr)] gap-3 items-stretch">
      <SubtreePanel title={diagram.subtreeTitle} nodes={diagram.subtreeNodes} />
      <StepRow steps={diagram.steps} />
    </div>

    {/* Mobile: vertical */}
    <div className="md:hidden flex flex-col gap-2">
      <SubtreePanel title={diagram.subtreeTitle} nodes={diagram.subtreeNodes} />
      {diagram.steps.map((step) => (
        <Fragment key={step.title}>
          <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
            <ArrowDownIcon className="h-4 w-4" />
          </span>
          <StepCard step={step} />
        </Fragment>
      ))}
    </div>

    {/* Bottom recursive label */}
    <div className="mt-md flex items-center gap-2">
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-teal-300/70 dark:border-teal-700/60"
      />
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
          'text-[10px] font-mono uppercase tracking-wider',
          'border-teal-200/80 bg-teal-50 text-teal-700',
          'dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200',
        )}
      >
        <RepeatIcon aria-hidden="true" className="h-3 w-3" />
        {diagram.bottomLabel}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-teal-300/70 dark:border-teal-700/60"
      />
    </div>
  </div>
);

const SubtreePanel = ({ title, nodes }: { title: string; nodes: string[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-2xl border-2 border-dashed bg-[var(--term-bg)] p-sm sm:p-md',
      'border-violet-300/80 dark:border-violet-700/70',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 break-keep">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-violet-200/80 bg-violet-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200">
        fiber
      </span>
    </header>
    <ul className="flex flex-col gap-1.5">
      {nodes.map((node, idx) => (
        <li key={node}>
          <SubtreeNode label={node} depth={depthFor(idx)} />
        </li>
      ))}
    </ul>
  </article>
);

const depthFor = (idx: number) => (idx === 0 ? 0 : idx === 1 ? 1 : 2);

const SubtreeNode = ({ label, depth }: { label: string; depth: number }) => (
  <div className="flex items-center gap-1.5" style={{ paddingLeft: depth * 12 }}>
    {depth > 0 && (
      <span
        aria-hidden="true"
        className="inline-block h-3 w-3 border-l border-b border-violet-300/70 dark:border-violet-700/60 mb-1"
      />
    )}
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-mono',
        'border-violet-200/80 bg-violet-50/80 text-violet-800',
        'dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-100',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400"
      />
      {label}
    </span>
  </div>
);

const StepRow = ({ steps }: { steps: HeroStepItem[] }) => (
  <ol className="flex items-stretch gap-1.5">
    {steps.map((step, idx) => (
      <Fragment key={step.title}>
        <li className="flex-1 min-w-0">
          <StepCard step={step} />
        </li>
        {idx < steps.length - 1 && (
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
);

const StepCard = ({ step }: { step: HeroStepItem }) => {
  const Icon = stepIconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
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
        <h3 className={cn('text-xsm font-bold leading-tight break-keep', t.textStrong)}>
          {step.title}
        </h3>
      </header>
      <p className="text-[10.5px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {step.body}
      </p>
      <ul className="flex flex-col gap-0.5 mt-auto">
        {step.examples.map((ex) => (
          <li
            key={ex}
            className={cn(
              'text-[10px] font-mono leading-snug break-all rounded border px-1.5 py-0.5',
              t.chip,
            )}
          >
            {ex}
          </li>
        ))}
      </ul>
    </article>
  );
};
