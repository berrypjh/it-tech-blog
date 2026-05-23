import { cn } from '@it-tech-blog/utils';

import type { FiberStateAndQueueContent } from '../content';
import { DatabaseIcon, ListIcon } from '../icons';

type Props = {
  cardLabel: string;
  fields: FiberStateAndQueueContent['hero']['fiberFields'];
  memoizedCard: FiberStateAndQueueContent['hero']['memoizedCard'];
  updateQueueCard: FiberStateAndQueueContent['hero']['updateQueueCard'];
};

export const StateQueueDiagram = ({ cardLabel, fields, memoizedCard, updateQueueCard }: Props) => (
  <div
    className={cn(
      'relative rounded-3xl p-md sm:p-lg',
      'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
      'border border-slate-800/80',
      'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.45fr)_24px_minmax(0,_0.55fr)] gap-md items-center">
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
                f.field === 'memoizedState'
                  ? 'border-l-4 border-l-emerald-400 bg-emerald-500/15 text-emerald-200 font-bold'
                  : f.field === 'updateQueue'
                    ? 'border-l-4 border-l-violet-400 bg-violet-500/15 text-violet-200 font-bold'
                    : 'text-slate-400 font-mono opacity-80',
              )}
            >
              <code className="font-mono">{f.label}</code>
            </li>
          ))}
        </ul>
      </article>

      {/* Connectors (desktop only) */}
      <div
        aria-hidden="true"
        className="hidden lg:flex flex-col items-stretch self-stretch gap-2 py-md"
      >
        <span className="block w-full flex-1 border-t-2 border-emerald-400/70 translate-y-1/2" />
        <span className="block w-full flex-1 border-t-2 border-violet-400/70 translate-y-1/2" />
      </div>

      {/* Connected cards */}
      <div className="flex flex-col gap-2 min-w-0">
        <ConnectedCard
          icon={<DatabaseIcon className="h-4 w-4" aria-hidden="true" />}
          title={memoizedCard.title}
          subtitle={memoizedCard.subtitle}
          description={memoizedCard.description}
          tone="emerald"
        />
        <ConnectedCard
          icon={<ListIcon className="h-4 w-4" aria-hidden="true" />}
          title={updateQueueCard.title}
          subtitle={updateQueueCard.subtitle}
          description={updateQueueCard.description}
          tone="violet"
        />
      </div>
    </div>
  </div>
);

const ConnectedCard = ({
  icon,
  title,
  subtitle,
  description,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tone: 'emerald' | 'violet';
}) => {
  const cls = {
    emerald: {
      border: 'border-emerald-200/80 dark:border-emerald-800/60',
      bg: 'bg-emerald-50/90 dark:bg-emerald-950/40',
      title: 'text-emerald-900 dark:text-emerald-100',
      subtitle: 'text-emerald-700 dark:text-emerald-300',
      iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
      desc: 'text-emerald-800/90 dark:text-emerald-200/90',
    },
    violet: {
      border: 'border-violet-200/80 dark:border-violet-800/60',
      bg: 'bg-violet-50/90 dark:bg-violet-950/40',
      title: 'text-violet-900 dark:text-violet-100',
      subtitle: 'text-violet-700 dark:text-violet-300',
      iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
      desc: 'text-violet-800/90 dark:text-violet-200/90',
    },
  }[tone];
  return (
    <article className={cn('rounded-xl border p-sm', cls.border, cls.bg)}>
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex items-center justify-center w-7 h-7 rounded-lg', cls.iconWrap)}
        >
          {icon}
        </span>
        <code className={cn('font-mono text-xsm font-bold tracking-tight', cls.title)}>
          {title}
        </code>
      </header>
      <p className={cn('mt-1 text-[11.5px] font-bold leading-snug break-keep', cls.subtitle)}>
        {subtitle}
      </p>
      <p className={cn('text-[11px] leading-relaxed break-keep', cls.desc)}>{description}</p>
    </article>
  );
};
