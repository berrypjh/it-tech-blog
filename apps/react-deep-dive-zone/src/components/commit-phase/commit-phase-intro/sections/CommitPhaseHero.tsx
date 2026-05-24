import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { CommitPhaseIntroContent } from '../content';
import { ArrowDownIcon, CheckCircleIcon, CpuIcon, LayersIcon, LightbulbIcon } from '../icons';

type Props = { content: CommitPhaseIntroContent['hero'] };

export const CommitPhaseHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/commit-phase.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// what is the commit phase?'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)] gap-xl lg:gap-2xl items-start">
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
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-teal-300 dark:to-cyan-300',
            )}
          >
            {content.title.line3}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-200/80 bg-sky-50/70',
            'dark:border-sky-800/70 dark:bg-sky-950/40',
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

const HeroDiagram = ({ diagram }: { diagram: CommitPhaseIntroContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/55 via-white to-teal-50/55',
      'dark:from-sky-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// render → commit'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        {diagram.eyebrow}
      </span>
    </header>

    <div className="flex flex-col items-stretch gap-2">
      <PhaseCard kind="render" title={diagram.renderCard.title} items={diagram.renderCard.items} />
      <span
        aria-hidden="true"
        className={cn(
          'mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border',
          'border-[var(--term-border)] bg-white text-sky-600',
          'dark:bg-slate-950/60 dark:text-sky-300',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <ArrowDownIcon className="h-4 w-4" />
      </span>
      <PhaseCard kind="commit" title={diagram.commitCard.title} items={diagram.commitCard.items} />
    </div>
  </div>
);

type PhaseCardProps = {
  kind: 'render' | 'commit';
  title: string;
  items: string[];
};

const PhaseCard = ({ kind, title, items }: PhaseCardProps) => {
  const isRender = kind === 'render';
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] gap-md items-center rounded-2xl border-2 p-md sm:p-lg',
        isRender
          ? 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30'
          : 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
          isRender
            ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
            : 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        {isRender ? <CpuIcon className="h-6 w-6" /> : <LayersIcon className="h-6 w-6" />}
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h2
          className={cn(
            'text-sm sm:text-md font-bold leading-tight break-keep',
            isRender ? 'text-sky-800 dark:text-sky-100' : 'text-teal-800 dark:text-teal-100',
          )}
        >
          {title}
        </h2>
        <ul className="flex flex-col gap-0.5">
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                'flex items-center gap-1.5 text-xsm sm:text-sm leading-snug break-keep',
                isRender ? 'text-sky-700 dark:text-sky-200' : 'text-teal-700 dark:text-teal-200',
              )}
            >
              <CheckCircleIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
