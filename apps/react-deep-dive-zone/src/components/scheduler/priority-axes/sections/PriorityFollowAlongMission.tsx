import { cx } from '@berrypjh/react-ui';
import { Clock3, Code2, FileCode, FileSearch, ListChecks, ScanSearch } from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ThreePriorityAxesContent, Tone } from '../content';

type Props = { content: ThreePriorityAxesContent['mission'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/70 dark:bg-sky-950/20',
  cyan: 'border-cyan-300/80 bg-cyan-50/40 dark:border-cyan-700/70 dark:bg-cyan-950/20',
  teal: 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20',
  emerald:
    'border-emerald-300/80 bg-emerald-50/40 dark:border-emerald-700/70 dark:bg-emerald-950/20',
  violet: 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/20',
  blue: 'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/20',
  amber: 'border-amber-300/80 bg-amber-50/40 dark:border-amber-700/70 dark:bg-amber-950/20',
  rose: 'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/20',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

const missionIcons = [FileSearch, Code2, ScanSearch, Clock3];

export const PriorityFollowAlongMission = ({ content }: Props) => (
  <section aria-labelledby="heading-mission">
    <NumberedSectionHeader
      id="mission"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.cards.map((m, i) => {
        const Icon = missionIcons[i] ?? FileCode;
        return (
          <li key={m.title} className="h-full">
            <article
              className={cx(
                'group relative flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                toneCard[m.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    toneIconBox[m.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-bg)]"
                >
                  mission · {String(i + 1).padStart(2, '0')}
                </span>
              </header>

              <h3 className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {m.title}
              </h3>

              <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {m.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
