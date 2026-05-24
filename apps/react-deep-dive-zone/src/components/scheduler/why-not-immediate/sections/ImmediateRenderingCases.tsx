import { cn } from '@it-tech-blog/utils';

import type { Tone, WhyNotImmediateContent } from '../content';
import { HelpCircleIcon } from '../icons';

import { NumberedSectionHeader } from './_NumberedSectionHeader';
import { ScenarioMockup } from './_ScenarioMockups';

type Props = { content: WhyNotImmediateContent['scenarios'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-gradient-to-br from-sky-50 to-white dark:border-sky-700/70 dark:from-sky-950/30 dark:to-[var(--term-bg)]',
  cyan: 'border-cyan-300/80 bg-gradient-to-br from-cyan-50 to-white dark:border-cyan-700/70 dark:from-cyan-950/30 dark:to-[var(--term-bg)]',
  teal: 'border-teal-300/80 bg-gradient-to-br from-teal-50 to-white dark:border-teal-700/70 dark:from-teal-950/30 dark:to-[var(--term-bg)]',
  emerald:
    'border-emerald-300/80 bg-gradient-to-br from-emerald-50 to-white dark:border-emerald-700/70 dark:from-emerald-950/30 dark:to-[var(--term-bg)]',
  violet:
    'border-violet-300/80 bg-gradient-to-br from-violet-50 to-white dark:border-violet-700/70 dark:from-violet-950/30 dark:to-[var(--term-bg)]',
  blue: 'border-blue-300/80 bg-gradient-to-br from-blue-50 to-white dark:border-blue-700/70 dark:from-blue-950/30 dark:to-[var(--term-bg)]',
  amber:
    'border-amber-300/80 bg-gradient-to-br from-amber-50 to-white dark:border-amber-700/70 dark:from-amber-950/30 dark:to-[var(--term-bg)]',
  rose: 'border-rose-300/80 bg-gradient-to-br from-rose-50 to-white dark:border-rose-700/70 dark:from-rose-950/30 dark:to-[var(--term-bg)]',
};

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-600 text-white dark:bg-sky-500',
  cyan: 'bg-cyan-600 text-white dark:bg-cyan-500',
  teal: 'bg-teal-600 text-white dark:bg-teal-500',
  emerald: 'bg-emerald-600 text-white dark:bg-emerald-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  amber: 'bg-amber-600 text-white dark:bg-amber-500',
  rose: 'bg-rose-600 text-white dark:bg-rose-500',
};

const toneNote: Record<Tone, string> = {
  sky: 'border-sky-200/80 bg-sky-50/60 text-sky-800 dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-200',
  cyan: 'border-cyan-200/80 bg-cyan-50/60 text-cyan-800 dark:border-cyan-800/60 dark:bg-cyan-950/30 dark:text-cyan-200',
  teal: 'border-teal-200/80 bg-teal-50/60 text-teal-800 dark:border-teal-800/60 dark:bg-teal-950/30 dark:text-teal-200',
  emerald:
    'border-emerald-200/80 bg-emerald-50/60 text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200',
  violet:
    'border-violet-200/80 bg-violet-50/60 text-violet-800 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-200',
  blue: 'border-blue-200/80 bg-blue-50/60 text-blue-800 dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-200',
  amber:
    'border-amber-200/80 bg-amber-50/60 text-amber-900 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-200',
  rose: 'border-rose-200/80 bg-rose-50/60 text-rose-800 dark:border-rose-800/60 dark:bg-rose-950/30 dark:text-rose-200',
};

export const ImmediateRenderingCases = ({ content }: Props) => (
  <section aria-labelledby="heading-scenarios">
    <NumberedSectionHeader
      id="scenarios"
      number={3}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cases.map((c, i) => (
        <li key={c.title} className="h-full">
          <article
            className={cn(
              'group relative flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
              'shadow-[0_2px_0_var(--term-border)] transition-all',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              toneCard[c.tone],
            )}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                  'text-sm font-mono font-bold tabular-nums shadow-[0_2px_0_rgba(0,0,0,0.08)]',
                  toneNumber[c.tone],
                )}
              >
                {i + 1}
              </span>
              <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                {c.title}
              </h3>
            </header>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {c.description}
            </p>

            <ScenarioMockup kind={c.mockup} />

            <p
              className={cn(
                'mt-auto rounded-xl border px-3 py-2 text-[11px] sm:text-xsm leading-snug break-keep',
                toneNote[c.tone],
              )}
            >
              {c.note}
            </p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
