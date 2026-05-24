import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { SetStateFlowContent, Tone } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CalendarIcon, FileTextIcon, Link2Icon } from '../icons';

type Props = { content: SetStateFlowContent['hero'] };

const visualMap = {
  file: FileTextIcon,
  queue: Link2Icon,
  calendar: CalendarIcon,
};

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/40',
  rose: 'border-rose-300/80 bg-rose-50/70 dark:border-rose-700/70 dark:bg-rose-950/40',
  indigo: 'border-indigo-300/80 bg-indigo-50/70 dark:border-indigo-700/70 dark:bg-indigo-950/40',
};

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  rose: 'text-rose-700 dark:text-rose-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

const renderHeroCode = () => (
  <>
    <span className="text-amber-200">setCount</span>
    <span className="text-slate-300">((</span>
    <span className="text-amber-200">c</span>
    <span className="text-slate-300">) =&gt; </span>
    <span className="text-amber-200">c</span>
    <span className="text-slate-300"> + </span>
    <span className="text-emerald-300">1</span>
    <span className="text-slate-300">);</span>
  </>
);

export const SetStateHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react/hooks/set-state-flow.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// update → enqueue → schedule'}</span>}
    />

    <ul className="mt-md flex flex-wrap items-center gap-2">
      {content.badges.map((badge) => (
        <li
          key={badge.label}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            badge.tone === 'blue' &&
              'bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-[0_1px_0_var(--term-border)]',
            badge.tone === 'cyan' &&
              'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'block h-1.5 w-1.5 rounded-full',
              badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
            )}
          />
          {badge.label}
        </li>
      ))}
    </ul>

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-lg items-start">
      {/* Left: text + compact code */}
      <div className="flex flex-col gap-md min-w-0">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.14] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.titleLine1}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300',
            )}
          >
            {content.titleAccent}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[55ch] break-keep">
          {content.description}
        </p>

        {/* Compact code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center gap-2 border-b border-slate-800 px-md py-1.5">
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[10px] font-mono text-slate-500">setCount</span>
          </div>
          <pre className="overflow-x-auto px-md py-2.5 text-[12px] sm:text-xsm leading-[1.7] font-mono">
            <code>{renderHeroCode()}</code>
          </pre>
        </div>
      </div>

      {/* Right: 3-step flow */}
      <ol className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-2 sm:gap-3 relative">
        {content.steps.map((step, i) => {
          const Icon = visualMap[step.visual];
          const isLast = i === content.steps.length - 1;
          return (
            <li key={step.number} className="relative">
              <article
                className={cn(
                  'flex h-full flex-col items-center gap-2 rounded-2xl border-2 p-md text-center',
                  'shadow-[0_1px_0_var(--term-border)] transition-all',
                  'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  toneCard[step.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
                    toneNumber[step.tone],
                  )}
                >
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
                    'border-[var(--term-border)]',
                    toneText[step.tone],
                  )}
                >
                  <Icon className={cn('h-5 w-5', toneIconBox[step.tone])} />
                </span>
                <h3
                  className={cn(
                    'text-xsm sm:text-sm font-bold leading-tight break-keep',
                    toneText[step.tone],
                  )}
                >
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {step.description}
                </p>
              </article>

              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden sm:inline-flex absolute -right-[7px] top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="sm:hidden flex justify-center text-[var(--term-muted)] mt-1"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
