import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TargetFiberContent, Tone } from '../content';
import { ArrowDownIcon, ArrowRightIcon, PuzzleIcon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: TargetFiberContent['handoff'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
  blue: 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
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

const toneAccent: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  teal: 'text-teal-700 dark:text-teal-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  violet: 'text-violet-700 dark:text-violet-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

const stepIcons = [TargetIcon, ZapIcon, PuzzleIcon];

const renderEmphasis = (line: string) => {
  const parts = line.split(/(Fiber|DOM)/);
  return parts.map((part, i) => {
    if (part === 'Fiber')
      return (
        <span key={i} className="text-teal-600 dark:text-teal-300 font-bold">
          Fiber
        </span>
      );
    if (part === 'DOM')
      return (
        <span key={i} className="text-blue-600 dark:text-blue-300 font-bold">
          DOM
        </span>
      );
    return <span key={i}>{part}</span>;
  });
};

export const PluginEventSystemHandoff = ({ content }: Props) => (
  <section aria-labelledby="heading-handoff">
    <NumberedSectionHeader
      id="handoff"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<PuzzleIcon className="h-5 w-5" />}
    />

    <ol className={cn('grid items-stretch gap-2 sm:gap-3', 'grid-cols-1 sm:grid-cols-3')}>
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? TargetIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[step.tone],
            )}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span
                className={cn(
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                  toneAccent[step.tone],
                )}
              >
                step {i + 1}
              </span>
            </div>

            <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
              {step.title}
            </h3>
            <code
              className={cn(
                'mt-auto inline-flex w-fit items-center rounded-md border bg-[var(--term-bg)] px-2 py-0.5',
                'font-mono text-[10px] sm:text-[11px] font-bold break-all',
                toneIconBox[step.tone],
              )}
            >
              {step.body}
            </code>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="sm:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    <aside
      className={cn(
        'mt-md rounded-2xl border-2 px-md py-md text-center',
        'border-teal-200/80 bg-teal-50/60 dark:border-teal-700/60 dark:bg-teal-950/30',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
        {renderEmphasis(content.emphasis)}
      </p>
    </aside>
  </section>
);
