import { cn } from '@it-tech-blog/utils';

import type { CompareSide, ResultCard } from '../content';
import { AlertTriangleIcon, BoxIcon, CheckCircleIcon } from '../icons';

export const PreviousCard = ({ side }: { side: CompareSide }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
      'border-sky-300/80 bg-sky-50/40',
      'dark:border-sky-700/70 dark:bg-sky-950/20',
      'shadow-[0_1px_0_var(--term-border)]',
      'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          'border-sky-300/70 bg-white/70 text-sky-700 dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-700/60',
        )}
      >
        {side.label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-sky-100 text-sky-700 border-sky-200/80',
          'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
        )}
      >
        <BoxIcon className="h-4 w-4" />
      </span>
    </header>
    <code
      className={cn(
        'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
        'border-slate-800 bg-slate-950 text-sky-300',
      )}
    >
      {side.code}
    </code>
    {side.detail && (
      <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {side.detail}
      </p>
    )}
  </article>
);

export const NextCard = ({ side, kind }: { side: CompareSide; kind: 'reuse' | 'replace' }) => {
  const isReuse = kind === 'reuse';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
        isReuse
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/20',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isReuse
              ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60'
              : 'border-rose-300/70 bg-white/70 text-rose-700 dark:bg-slate-950/60 dark:text-rose-200 dark:border-rose-700/60',
          )}
        >
          {side.label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            isReuse
              ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
          )}
        >
          <BoxIcon className="h-4 w-4" />
        </span>
      </header>
      <code
        className={cn(
          'self-start inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xsm font-bold',
          'border-slate-800 bg-slate-950',
          isReuse ? 'text-teal-300' : 'text-rose-300',
        )}
      >
        {side.code}
      </code>
      {side.detail && (
        <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {side.detail}
        </p>
      )}
    </article>
  );
};

export const ResultCardView = ({ result }: { result: ResultCard }) => {
  const isReuse = result.kind === 'reuse';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
        isReuse
          ? 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/30'
          : 'border-rose-300/80 bg-rose-50/70 dark:border-rose-700/70 dark:bg-rose-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isReuse
              ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60 font-bold'
              : 'border-rose-300/70 bg-white/70 text-rose-700 dark:bg-slate-950/60 dark:text-rose-200 dark:border-rose-700/60 font-bold',
          )}
        >
          result
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full',
            isReuse
              ? 'bg-teal-100 text-teal-700 border border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-rose-100 text-rose-700 border border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
          )}
        >
          {isReuse ? (
            <CheckCircleIcon className="h-5 w-5" />
          ) : (
            <AlertTriangleIcon className="h-5 w-5" />
          )}
        </span>
      </header>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          isReuse ? 'text-teal-900 dark:text-teal-100' : 'text-rose-900 dark:text-rose-100',
        )}
      >
        {result.title}
      </h3>
      <ul className="flex flex-col gap-1">
        {result.descriptions.map((d) => (
          <li
            key={d}
            className={cn(
              'text-xsm sm:text-sm leading-snug break-keep',
              isReuse ? 'text-teal-800 dark:text-teal-100' : 'text-rose-800 dark:text-rose-100',
            )}
          >
            {d}
          </li>
        ))}
      </ul>
    </article>
  );
};
