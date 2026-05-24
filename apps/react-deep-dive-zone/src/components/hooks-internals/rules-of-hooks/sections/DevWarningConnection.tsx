import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { HookSlot, RulesOfHooksContent } from '../content';
import { AlertTriangleIcon, ArrowRightIcon, TerminalSquareIcon } from '../icons';

type Props = { content: RulesOfHooksContent['devWarning'] };

const SlotItem = ({ slot, side }: { slot: HookSlot; side: 'expected' | 'actual' }) => {
  const isActual = side === 'actual';
  const colorClass = isActual
    ? 'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-100'
    : 'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-100';
  return (
    <li className={cn('flex items-center gap-2 rounded-lg border-2 px-3 py-2', colorClass)}>
      <code className="font-mono text-[11px] font-bold tabular-nums">{slot.index}</code>
      <code
        className={cn(
          'font-mono text-xsm font-bold break-all',
          slot.status === 'missing' && 'line-through',
        )}
      >
        {slot.hookName}
      </code>
    </li>
  );
};

export const DevWarningConnection = ({ content }: Props) => (
  <section
    aria-labelledby="heading-dev-warning"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="dev-warning"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TerminalSquareIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      {/* Left: warning code */}
      <div className="overflow-hidden rounded-2xl border border-rose-700/50 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
        <div className="flex items-center justify-between gap-2 border-b border-rose-700/40 bg-rose-950/30 px-md py-2">
          <div className="flex items-center gap-1.5">
            <AlertTriangleIcon aria-hidden="true" className="h-3.5 w-3.5 text-rose-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-300">
              DEV warning
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            console
          </span>
        </div>
        <pre className="overflow-x-auto px-md py-md text-[11px] sm:text-xsm leading-[1.75] font-mono">
          <code className="text-rose-200">
            {content.warningText.split('\n').map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line.includes('Previous render') ||
                line.includes('useEffect') ||
                line.includes('useState') ? (
                  // bold a few key tokens by simple split: keep as-is for readability
                  line.startsWith('   ^^^') ? (
                    <span className="text-rose-400">{line}</span>
                  ) : (
                    <span>{line}</span>
                  )
                ) : line.startsWith('React has detected') ? (
                  <span className="text-rose-100 font-bold">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Right: expected vs actual */}
      <div className="flex flex-col gap-md">
        <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
          {content.rightTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 items-stretch">
          {/* Expected */}
          <article
            className={cn(
              'flex flex-col gap-md rounded-2xl border-2 p-md',
              'border-emerald-300/70 bg-emerald-50/40 dark:border-emerald-700/60 dark:bg-emerald-950/20',
            )}
          >
            <header>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                {content.expectedTitle}
              </p>
              <p className="text-[10px] font-mono text-[var(--term-muted)]">
                {content.expectedCaption}
              </p>
            </header>
            <ul className="flex flex-col gap-1.5">
              {content.expectedSlots.map((s) => (
                <SlotItem key={s.index} slot={s} side="expected" />
              ))}
            </ul>
          </article>

          {/* Mismatch arrow */}
          <div aria-hidden="true" className="flex items-center justify-center">
            <span className="inline-flex flex-col items-center gap-1 px-2 text-rose-600 dark:text-rose-300">
              <ArrowRightIcon className="hidden sm:block h-5 w-5" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider">
                {content.mismatchLabel}
              </span>
              <ArrowRightIcon className="sm:hidden h-5 w-5 rotate-90" />
            </span>
          </div>

          {/* Actual */}
          <article
            className={cn(
              'flex flex-col gap-md rounded-2xl border-2 p-md',
              'border-rose-300/70 bg-rose-50/40 dark:border-rose-700/60 dark:bg-rose-950/20',
            )}
          >
            <header>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
                {content.actualTitle}
              </p>
              <p className="text-[10px] font-mono text-[var(--term-muted)]">
                {content.actualCaption}
              </p>
            </header>
            <ul className="flex flex-col gap-1.5">
              {content.actualSlots.map((s) => (
                <SlotItem key={s.index} slot={s} side="actual" />
              ))}
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
);
