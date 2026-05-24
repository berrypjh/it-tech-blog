import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { Tone, WhyEventSystemContent } from '../content';
import { TrophyIcon } from '../icons';

type Props = { content: WhyEventSystemContent['takeaways'] };

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

const toneAccent: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  teal: 'text-teal-700 dark:text-teal-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  violet: 'text-violet-700 dark:text-violet-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

export const KeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="heading-takeaways">
    <SectionHeader
      id="takeaways"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TrophyIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card, i) => (
        <article
          key={card.title}
          className={cn(
            'group relative flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)] transition-all',
            'hover:-translate-y-0.5 motion-reduce:transform-none',
            toneCard[card.tone],
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                'text-md font-mono font-bold tabular-nums shadow-[0_3px_0_rgba(0,0,0,0.08)]',
                toneNumber[card.tone],
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                toneAccent[card.tone],
              )}
            >
              takeaway / {String(i + 1).padStart(2, '0')}
            </span>
          </header>

          <h3 className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
            {card.title}
          </h3>

          <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {card.body}
          </p>
        </article>
      ))}
    </div>
  </section>
);
