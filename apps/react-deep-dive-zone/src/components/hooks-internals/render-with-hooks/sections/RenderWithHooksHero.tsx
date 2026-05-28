import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { RenderWithHooksContent, Tone } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CheckCircleIcon, CodeIcon, SettingsIcon } from '../icons';

type Props = { content: RenderWithHooksContent['hero'] };

const stepIcons = [CodeIcon, SettingsIcon, CheckCircleIcon];

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/40',
  indigo: 'border-indigo-300/80 bg-indigo-50/70 dark:border-indigo-700/70 dark:bg-indigo-950/40',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

export const RenderWithHooksHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react/hooks/render-with-hooks.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// hook execution stage'}</span>}
    />

    {/* Top badges */}
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

    {/* Layout: text left, flow right */}
    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.86fr)_minmax(0,_1.14fr)] gap-lg lg:gap-xl items-start">
      <div className="flex flex-col gap-md min-w-0">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.14] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.titleLine1}</span>
          <span
            className={cn(
              'block break-all bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300',
            )}
          >
            {content.titleAccent}
          </span>
        </h1>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[60ch] break-keep">
          {content.description}
        </p>
      </div>

      {/* Three step cards */}
      <ol className="grid grid-cols-1 sm:grid-cols-3 items-stretch gap-2 sm:gap-3 relative">
        {content.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? CodeIcon;
          const isLast = i === content.steps.length - 1;
          return (
            <li key={step.title} className="relative">
              <article
                className={cn(
                  'flex h-full flex-col items-center gap-2 rounded-2xl border-2 p-md text-center',
                  'transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  toneCard[step.tone],
                  step.emphasis && 'sm:scale-[1.04] shadow-[0_3px_0_var(--term-border)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-mono font-bold',
                    toneIconBox[step.tone],
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
                  <Icon className="h-5 w-5" />
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
                    className="hidden sm:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
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
