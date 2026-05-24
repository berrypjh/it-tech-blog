import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { ReadOrderContent, SequenceStep } from '../content';
import { LayersIcon } from '../icons';

type Props = { content: ReadOrderContent['sequence'] };

type SeqTone = SequenceStep['tone'];

const toneClasses: Record<
  SeqTone,
  { num: string; border: string; titleText: string; hoverBg: string }
> = {
  blue: {
    num: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900 ring-sky-100 dark:ring-sky-950',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    titleText: 'text-sky-800 dark:text-sky-100',
    hoverBg: 'group-hover:bg-sky-50/60 dark:group-hover:bg-sky-950/30',
  },
  teal: {
    num: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900 ring-teal-100 dark:ring-teal-950',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    titleText: 'text-teal-800 dark:text-teal-100',
    hoverBg: 'group-hover:bg-teal-50/60 dark:group-hover:bg-teal-950/30',
  },
  mint: {
    num: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900 ring-emerald-100 dark:ring-emerald-950',
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
    titleText: 'text-emerald-800 dark:text-emerald-100',
    hoverBg: 'group-hover:bg-emerald-50/60 dark:group-hover:bg-emerald-950/30',
  },
  violet: {
    num: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900 ring-violet-100 dark:ring-violet-950',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    titleText: 'text-violet-800 dark:text-violet-100',
    hoverBg: 'group-hover:bg-violet-50/60 dark:group-hover:bg-violet-950/30',
  },
  indigo: {
    num: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900 ring-indigo-100 dark:ring-indigo-950',
    border: 'border-indigo-200/80 dark:border-indigo-800/60',
    titleText: 'text-indigo-800 dark:text-indigo-100',
    hoverBg: 'group-hover:bg-indigo-50/60 dark:group-hover:bg-indigo-950/30',
  },
};

export const RecommendedSequenceTimeline = ({ content }: Props) => {
  return (
    <section id="section-sequence" aria-labelledby="heading-sequence" className="space-y-lg">
      <SectionHeader
        id="sequence"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      <ol className="relative pl-7 flex flex-col gap-sm">
        {/* 세로 축 — 그라데이션 sky → indigo */}
        <span
          aria-hidden="true"
          className="absolute left-2.5 top-3 bottom-3 w-px bg-gradient-to-b from-sky-300 via-teal-400 to-indigo-500 dark:from-sky-700 dark:via-teal-600 dark:to-indigo-500"
        />

        {content.steps.map((step) => {
          const t = toneClasses[step.tone];
          return (
            <li key={step.num} className="group relative">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[1.6rem] top-md inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold tabular-nums ring-4 ring-[var(--color-canvas)]',
                  t.num,
                )}
              >
                {step.num}
              </span>

              <article
                className={cn(
                  'rounded-md border bg-[var(--term-bg)] p-md transition-all',
                  'hover:-translate-y-px hover:shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                  t.hoverBg,
                )}
              >
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold tracking-tight break-keep leading-snug',
                    t.titleText,
                  )}
                >
                  {step.title}
                </h3>
                <p className="mt-1 text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {step.description}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
