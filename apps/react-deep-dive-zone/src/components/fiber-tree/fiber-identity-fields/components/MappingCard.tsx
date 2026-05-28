import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../shared/tones';
import type { IdentityFieldKey, MappingCard as MappingCardData } from '../content';
import { BoxesIcon, PuzzleIcon, RocketIcon } from '../icons';

type Props = { card: MappingCardData };

const iconMap = {
  cube: BoxesIcon,
  rocket: RocketIcon,
  puzzle: PuzzleIcon,
} as const;

const fieldChipStyle: Record<IdentityFieldKey, string> = {
  tag: 'text-sky-700 dark:text-sky-200 bg-sky-50 dark:bg-sky-950/40 border-sky-200/80 dark:border-sky-800/60',
  key: 'text-emerald-700 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/80 dark:border-emerald-800/60',
  elementType:
    'text-violet-700 dark:text-violet-200 bg-violet-50 dark:bg-violet-950/40 border-violet-200/80 dark:border-violet-800/60',
  type: 'text-amber-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 border-amber-200/80 dark:border-amber-800/60',
};

const cardBorder: Record<ToneKey, string> = {
  sky: 'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'border-cyan-200/80 dark:border-cyan-800/60 hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet:
    'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
  emerald:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  blue: 'border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400/70 dark:hover:border-blue-500/60',
  teal: 'border-teal-200/80 dark:border-teal-800/60 hover:border-teal-400/70 dark:hover:border-teal-500/60',
  indigo:
    'border-indigo-200/80 dark:border-indigo-800/60 hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  amber:
    'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
};

const iconWrap: Record<ToneKey, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
};

export const MappingCardItem = ({ card }: Props) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cardBorder[card.tone],
      )}
    >
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-lg',
            iconWrap[card.tone],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <code className="font-mono text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-all">
          {card.code}
        </code>
      </header>

      <dl className="grid grid-cols-[auto_1fr] gap-y-1 gap-x-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 p-sm">
        {card.rows.map((row) => (
          <div key={row.field} className="contents">
            <dt
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold whitespace-nowrap',
                fieldChipStyle[row.field],
              )}
            >
              {row.field}
            </dt>
            <dd className="font-mono text-[11.5px] sm:text-xsm text-[var(--term-fg)] leading-[1.9] break-all">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};
