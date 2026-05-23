import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../start/_shared/tones';
import type { FiberStateNodeContent } from '../content';
import { BoxesIcon, HomeIcon, UserIcon } from '../icons';

type Props = {
  cardLabel: string;
  fields: FiberStateNodeContent['hero']['fiberFields'];
  pillLabel: string;
  targets: FiberStateNodeContent['hero']['targets'];
};

const iconMap = {
  home: HomeIcon,
  cube: BoxesIcon,
  user: UserIcon,
} as const;

const targetBorder: Record<ToneKey, string> = {
  sky: 'border-sky-200/80 hover:border-sky-400/70 dark:border-sky-800/60 dark:hover:border-sky-500/60',
  cyan: 'border-cyan-200/80 hover:border-cyan-400/70 dark:border-cyan-800/60 dark:hover:border-cyan-500/60',
  violet:
    'border-violet-200/80 hover:border-violet-400/70 dark:border-violet-800/60 dark:hover:border-violet-500/60',
  emerald:
    'border-emerald-200/80 hover:border-emerald-400/70 dark:border-emerald-800/60 dark:hover:border-emerald-500/60',
  blue: 'border-blue-200/80 hover:border-blue-400/70 dark:border-blue-800/60 dark:hover:border-blue-500/60',
  teal: 'border-teal-200/80 hover:border-teal-400/70 dark:border-teal-800/60 dark:hover:border-teal-500/60',
  indigo:
    'border-indigo-200/80 hover:border-indigo-400/70 dark:border-indigo-800/60 dark:hover:border-indigo-500/60',
  amber:
    'border-amber-200/80 hover:border-amber-400/70 dark:border-amber-800/60 dark:hover:border-amber-500/60',
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

const titleColor: Record<ToneKey, string> = {
  sky: 'text-sky-800 dark:text-sky-100',
  cyan: 'text-cyan-800 dark:text-cyan-100',
  violet: 'text-violet-800 dark:text-violet-100',
  emerald: 'text-emerald-800 dark:text-emerald-100',
  blue: 'text-blue-800 dark:text-blue-100',
  teal: 'text-teal-800 dark:text-teal-100',
  indigo: 'text-indigo-800 dark:text-indigo-100',
  amber: 'text-amber-800 dark:text-amber-100',
};

export const StateNodeDiagram = ({ cardLabel, fields, pillLabel, targets }: Props) => (
  <div
    className={cn(
      'relative rounded-3xl p-md sm:p-lg',
      'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
      'border border-slate-800/80',
      'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_auto_minmax(0,_0.58fr)] gap-md items-center">
      {/* Dark Fiber card */}
      <article className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-md min-w-0">
        <header className="mb-2 flex items-center justify-between">
          <h3 className="font-mono text-xsm font-bold tracking-tight text-slate-100">
            {cardLabel}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            object
          </span>
        </header>
        <ul className="flex flex-col gap-1">
          {fields.map((f, i) => (
            <li
              key={`${f.label}-${i}`}
              className={cn(
                'rounded-md px-2 py-1 text-[12px]',
                f.isStateNode
                  ? 'border-l-4 border-l-emerald-400 bg-emerald-500/15 text-emerald-200 font-bold'
                  : 'text-slate-400 font-mono opacity-80',
              )}
            >
              <code className="font-mono">{f.label}</code>
            </li>
          ))}
        </ul>
      </article>

      {/* Center pill + connectors */}
      <div className="flex flex-col items-center gap-1">
        {/* connector to fiber card on lg only */}
        <span aria-hidden="true" className="hidden lg:block h-px w-6 bg-emerald-400/70" />
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full px-3 py-1 font-mono text-xsm font-bold tracking-tight',
            'bg-emerald-100 text-emerald-800 border border-emerald-300/80',
            'dark:bg-emerald-950/60 dark:text-emerald-100 dark:border-emerald-700/70',
            'shadow-[0_4px_12px_-4px_rgba(16,185,129,0.45)]',
          )}
        >
          {pillLabel}
        </span>
        <span aria-hidden="true" className="hidden lg:block h-px w-6 bg-emerald-400/70" />
      </div>

      {/* Target cards */}
      <ul className="flex flex-col gap-2 min-w-0">
        {targets.map((t) => {
          const Icon = iconMap[t.iconName];
          return (
            <li key={t.id}>
              <article
                className={cn(
                  'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)]/95 p-sm',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  targetBorder[t.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0',
                    iconWrap[t.tone],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className={cn('text-xsm font-bold tracking-tight', titleColor[t.tone])}>
                    {t.title}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--term-muted)] truncate">
                    {t.subtitle}
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
