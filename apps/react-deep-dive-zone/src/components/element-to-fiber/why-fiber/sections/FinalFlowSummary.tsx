import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberWhyNeededContent, FinalFlowRow } from '../content';
import { ArrowDownIcon, BoxIcon, HexagonIcon, MapIcon, PlayCircleIcon, WandIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['finalFlow'] };

const accentTokens = {
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    surface: 'bg-emerald-50/60 dark:bg-emerald-950/30',
    icon: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    text: 'text-emerald-800 dark:text-emerald-100',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    surface: 'bg-violet-50/60 dark:bg-violet-950/30',
    icon: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    text: 'text-violet-800 dark:text-violet-100',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    surface: 'bg-sky-50/60 dark:bg-sky-950/30',
    icon: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
    text: 'text-sky-800 dark:text-sky-100',
  },
  amber: {
    border: 'border-amber-300/80 dark:border-amber-700/70',
    surface: 'bg-amber-50/60 dark:bg-amber-950/30',
    icon: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-950',
    text: 'text-amber-800 dark:text-amber-100',
  },
} as const;

const iconByRow: Record<string, React.ComponentType<{ className?: string }>> = {
  jsx: BoxIcon,
  element: BoxIcon,
  'create-from-element': WandIcon,
  'create-from-type-and-props': WandIcon,
  'fiber-created': HexagonIcon,
  'render-phase': PlayCircleIcon,
};

export const FinalFlowSummary = ({ content }: Props) => (
  <section
    id="final-flow"
    aria-labelledby="heading-final-flow"
    className="space-y-md scroll-mt-xl h-full"
  >
    <SectionBadgeHeader
      id="final-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-1">
        {content.rows.map((row, idx) => (
          <li key={row.id} className="flex flex-col">
            <Row row={row} />
            {idx < content.rows.length - 1 && (
              <span className="flex justify-center py-1" aria-hidden="true">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const Row = ({ row }: { row: FinalFlowRow }) => {
  const a = accentTokens[row.accent];
  const Icon = iconByRow[row.id] ?? BoxIcon;
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border-2 p-md',
        a.border,
        a.surface,
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0',
          a.icon,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <code
          className={cn(
            'font-mono text-xsm sm:text-sm font-extrabold tracking-tight break-all',
            a.text,
          )}
        >
          {row.title}
        </code>
        <span className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {row.description}
        </span>
      </div>
    </article>
  );
};
