import { cn } from '@it-tech-blog/utils';

import type { FiberStateNodeContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { diagram: FiberStateNodeContent['hostRoot']['diagram'] };

export const HostRootDiagram = ({ diagram }: Props) => (
  <div
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-stretch gap-md">
      {/* FiberRoot object card */}
      <article
        className={cn(
          'rounded-2xl border bg-sky-50/50 dark:bg-sky-950/20 p-md',
          'border-sky-200/80 dark:border-sky-800/60',
        )}
      >
        <header className="mb-2">
          <h3 className="text-xsm font-bold tracking-tight text-sky-900 dark:text-sky-100">
            {diagram.leftTitle}
          </h3>
          <span className="text-[10px] font-mono text-sky-700/80 dark:text-sky-300/80">
            {diagram.leftSubtitle}
          </span>
        </header>
        <ul className="flex flex-col gap-0.5">
          {diagram.leftFields.map((f) => (
            <li
              key={f}
              className={cn(
                'rounded-md px-2 py-1 text-[11.5px]',
                f === 'current'
                  ? 'border border-sky-300/80 bg-sky-100 dark:border-sky-700/70 dark:bg-sky-900/40 font-bold text-sky-800 dark:text-sky-100'
                  : 'text-[var(--term-muted)]',
              )}
            >
              <code className="font-mono">{f}</code>
            </li>
          ))}
        </ul>
      </article>

      {/* Center arrows */}
      <div className="flex flex-col items-center justify-center gap-md py-2 min-w-[140px] sm:min-w-[160px]">
        {/* current arrow: left → right */}
        <ArrowConnector label={diagram.arrow1Label} direction="right" tone="sky" />
        {/* stateNode arrow: right → left */}
        <ArrowConnector label={diagram.arrow2Label} direction="left" tone="emerald" />
      </div>

      {/* HostRoot Fiber card */}
      <article
        className={cn(
          'rounded-2xl border bg-emerald-50/30 dark:bg-emerald-950/15 p-md',
          'border-emerald-200/80 dark:border-emerald-800/60',
        )}
      >
        <header className="mb-2">
          <h3 className="text-xsm font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
            {diagram.rightTitle}
          </h3>
          <span className="text-[10px] font-mono text-emerald-700/80 dark:text-emerald-300/80">
            {diagram.rightSubtitle}
          </span>
        </header>
        <ul className="flex flex-col gap-0.5">
          {diagram.rightFields.map((f, i) => (
            <li
              key={`${f.label}-${i}`}
              className={cn(
                'rounded-md px-2 py-1 text-[11.5px]',
                f.isStateNode
                  ? 'border border-emerald-300/80 bg-emerald-100 dark:border-emerald-700/70 dark:bg-emerald-900/40 font-bold text-emerald-800 dark:text-emerald-100'
                  : 'text-[var(--term-muted)]',
              )}
            >
              <code className="font-mono">{f.label}</code>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </div>
);

const ArrowConnector = ({
  label,
  direction,
  tone,
}: {
  label: string;
  direction: 'right' | 'left';
  tone: 'sky' | 'emerald';
}) => {
  const toneClasses = {
    sky: {
      label:
        'text-sky-700 dark:text-sky-300 border-sky-300/80 dark:border-sky-700/70 bg-sky-50 dark:bg-sky-950/40',
      line: 'border-sky-400/80 dark:border-sky-500/70',
      arrowBg:
        'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-300/80 dark:border-sky-700/70',
    },
    emerald: {
      label:
        'text-emerald-700 dark:text-emerald-300 border-emerald-300/80 dark:border-emerald-700/70 bg-emerald-50 dark:bg-emerald-950/40',
      line: 'border-emerald-400/80 dark:border-emerald-500/70',
      arrowBg:
        'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-300/80 dark:border-emerald-700/70',
    },
  }[tone];

  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight font-mono',
          toneClasses.label,
        )}
      >
        {label}
      </span>
      <div className="flex items-center w-full">
        {direction === 'left' && (
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-6 h-6 rounded-full border',
              toneClasses.arrowBg,
            )}
          >
            <ArrowRightIcon className="h-3 w-3 rotate-180" />
          </span>
        )}
        <span
          aria-hidden="true"
          className={cn('flex-1 border-t-2 border-dashed', toneClasses.line)}
        />
        {direction === 'right' && (
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-6 h-6 rounded-full border',
              toneClasses.arrowBg,
            )}
          >
            <ArrowRightIcon className="h-3 w-3" />
          </span>
        )}
      </div>
    </div>
  );
};
