import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Droplet, MousePointerClick, PauseCircle } from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';

type Props = { content: AdvancedWrapupContent['hydration'] };

const stepIcons = [Droplet, PauseCircle, MousePointerClick];

const stepTone = (tone: 'sky' | 'violet' | 'rose') => {
  if (tone === 'sky')
    return 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30';
  if (tone === 'violet')
    return 'border-violet-300/80 bg-violet-50/60 border-dashed dark:border-violet-700/70 dark:bg-violet-950/30';
  return 'border-rose-300/80 bg-rose-50/60 border-dashed dark:border-rose-700/70 dark:bg-rose-950/30';
};

const stepIconBg = (tone: 'sky' | 'violet' | 'rose') => {
  if (tone === 'sky') return 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900';
  if (tone === 'violet') return 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900';
  return 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900';
};

const stepAccent = (tone: 'sky' | 'violet' | 'rose') => {
  if (tone === 'sky') return 'text-sky-700 dark:text-sky-300';
  if (tone === 'violet') return 'text-violet-700 dark:text-violet-300';
  return 'text-rose-700 dark:text-rose-300';
};

export const HydrationBlockedEvent = ({ content }: Props) => (
  <section aria-labelledby="heading-hydration">
    <NumberedSectionHeader
      id="hydration"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Droplet className="h-5 w-5" aria-hidden="true" />}
    />

    <ol className={cx('grid items-stretch gap-2 sm:gap-3', 'grid-cols-1 lg:grid-cols-3')}>
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? Droplet;
        return (
          <li
            key={step.title}
            className={cx(
              'group relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              stepTone(step.tone),
            )}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                  stepIconBg(step.tone),
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span
                  className={cx(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    stepAccent(step.tone),
                  )}
                >
                  step {i + 1}
                </span>
                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
                  {step.title}
                </h3>
              </div>
            </header>

            <p className="text-xsm sm:text-sm text-[var(--term-fg)] break-keep">{step.body}</p>

            {step.example && (
              <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-md py-2 font-mono text-[10px] leading-[1.7] text-slate-100">
                <code className="whitespace-pre">{step.example}</code>
              </pre>
            )}

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
