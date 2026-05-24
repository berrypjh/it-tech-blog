import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { HookLinkedListContent, Tone } from '../content';
import { BoxesIcon } from '../icons';

type Props = { content: HookLinkedListContent['multipleHooks'] };

const cardTone: Record<Tone, string> = {
  sky: 'border-sky-300/80 dark:border-sky-700/70 hover:border-sky-400 dark:hover:border-sky-600',
  cyan: 'border-cyan-300/80 dark:border-cyan-700/70 hover:border-cyan-400 dark:hover:border-cyan-600',
  teal: 'border-teal-300/80 dark:border-teal-700/70 hover:border-teal-400 dark:hover:border-teal-600',
  emerald:
    'border-emerald-300/80 dark:border-emerald-700/70 hover:border-emerald-400 dark:hover:border-emerald-600',
  violet:
    'border-violet-300/80 dark:border-violet-700/70 hover:border-violet-400 dark:hover:border-violet-600',
  amber:
    'border-amber-300/80 dark:border-amber-700/70 hover:border-amber-400 dark:hover:border-amber-600',
  rose: 'border-rose-300/80 dark:border-rose-700/70 hover:border-rose-400 dark:hover:border-rose-600',
};

const indexChipTone: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
};

const badgeTone: Record<Tone, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/40 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-50 text-violet-700 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
  amber:
    'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-800/60',
};

const textTone: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-700 dark:text-amber-200',
  rose: 'text-rose-700 dark:text-rose-200',
};

export const MultipleHooksRepresentation = ({ content }: Props) => (
  <section
    aria-labelledby="heading-multiple"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="multiple"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.index}>
          <article
            className={cn(
              'h-full flex flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
              'shadow-[0_2px_0_var(--term-border)] transition-all',
              'motion-safe:hover:-translate-y-0.5',
              cardTone[card.tone],
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 px-2.5 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
                    indexChipTone[card.tone],
                  )}
                >
                  Hook #{card.index}
                </span>
                <code
                  className={cn(
                    'font-mono text-xsm sm:text-sm font-bold break-all',
                    textTone[card.tone],
                  )}
                >
                  {card.hookName}
                </code>
              </div>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider break-keep',
                  badgeTone[card.tone],
                )}
              >
                {card.badge}
              </span>
            </header>

            <ul className="flex flex-col gap-2">
              {card.fields.map((field) => (
                <li
                  key={field.label}
                  className="rounded-lg border border-[var(--term-border)] bg-[var(--term-border)]/15 p-2"
                >
                  <p
                    className={cn(
                      'text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5',
                      textTone[card.tone],
                    )}
                  >
                    {field.label}
                  </p>
                  {field.mono ? (
                    <code className="font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all">
                      {field.value}
                    </code>
                  ) : (
                    <p className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
                      {field.value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
