import { cn } from '@it-tech-blog/utils';

import { CheckCircleIcon, HexagonIcon } from '../icons';

type Props = {
  title: string;
  items: string[];
};

/**
 * Hero 우측의 큰 HostComponent Fiber 결과 카드. primary blue 강조.
 */
export const HostComponentCard = ({ title, items }: Props) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg h-full min-w-0',
      'bg-gradient-to-br from-sky-50 via-white to-sky-50/40',
      'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-sky-950/20',
      'border-sky-500/70 dark:border-sky-400/70',
      'shadow-[0_16px_42px_-16px_rgba(2,132,199,0.55)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl',
          'bg-sky-600 text-white',
          'dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
        )}
      >
        <HexagonIcon className="h-6 w-6" />
      </span>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700/80 dark:text-sky-300/80">
          result fiber
        </span>
        <code className="font-mono text-md sm:text-lg font-extrabold tracking-tight text-sky-800 dark:text-sky-100">
          {title}
        </code>
      </div>
    </header>

    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'flex items-start gap-2 rounded-lg border px-sm py-2',
            'border-sky-200/80 bg-white',
            'dark:border-sky-800/60 dark:bg-[var(--term-bg)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950 shrink-0 mt-0.5"
          >
            <CheckCircleIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep font-bold">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </article>
);
