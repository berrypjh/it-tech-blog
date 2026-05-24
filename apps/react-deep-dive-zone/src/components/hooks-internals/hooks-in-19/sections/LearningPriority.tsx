import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { React19HooksContent, Tone } from '../content';
import { AwardIcon, CompassIcon, CrownIcon, TargetIcon, TrophyIcon } from '../icons';

type Props = { content: React19HooksContent['priority'] };

const rankIcons = [CrownIcon, TrophyIcon, AwardIcon, TargetIcon];

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
  orange:
    'border-orange-300/80 dark:border-orange-700/70 hover:border-orange-400 dark:hover:border-orange-600',
  rose: 'border-rose-300/80 dark:border-rose-700/70 hover:border-rose-400 dark:hover:border-rose-600',
  indigo:
    'border-indigo-300/80 dark:border-indigo-700/70 hover:border-indigo-400 dark:hover:border-indigo-600',
};

const rankBadge: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  orange: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const iconBoxTone: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 border-teal-200/80 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  amber:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60',
  orange:
    'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-200 border-orange-200/80 dark:border-orange-800/60',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200 border-rose-200/80 dark:border-rose-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200 border-indigo-200/80 dark:border-indigo-800/60',
};

const toneTextStrong: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  orange: 'text-orange-700 dark:text-orange-200',
  rose: 'text-rose-700 dark:text-rose-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

export const LearningPriority = ({ content }: Props) => (
  <section
    aria-labelledby="heading-priority"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="priority"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CompassIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.items.map((item, i) => {
        const Icon = rankIcons[i] ?? TargetIcon;
        return (
          <li key={item.rank}>
            <article
              className={cn(
                'h-full flex flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5',
                cardTone[item.tone],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider',
                    rankBadge[item.tone],
                  )}
                >
                  <Icon aria-hidden="true" className="h-3 w-3" />
                  {item.rankLabel}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    iconBoxTone[item.tone],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
              </header>
              <code
                className={cn(
                  'font-mono text-md sm:text-lg font-bold break-all',
                  toneTextStrong[item.tone],
                )}
              >
                {item.apiName}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.description}
              </p>
            </article>
          </li>
        );
      })}
    </ol>
  </section>
);
