import { cn } from '@it-tech-blog/utils';

import type { SuspenseHydrationLinkContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ContainerIcon,
  DropletsIcon,
  RefreshCcwIcon,
  SearchIcon,
  XCircleIcon,
} from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['boundaryHydrationFlow'] };

const stepIcons = [DropletsIcon, RefreshCcwIcon, SearchIcon, ContainerIcon, XCircleIcon];

export const BoundaryHydrationFlowSection = ({ content }: Props) => (
  <section aria-labelledby="boundary-hydration-heading" className="flex flex-col gap-md">
    <SectionHeader id="boundary-hydration-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] items-stretch">
      {/* 5-step flow */}
      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:flex-row items-stretch">
          {content.steps.map((step, i) => {
            const accent = phaseAccent[step.phase];
            const Icon = stepIcons[i] ?? DropletsIcon;
            const isLast = i === content.steps.length - 1;
            return (
              <li
                key={step.title}
                className="flex flex-col lg:flex-row items-stretch gap-2 lg:flex-1"
              >
                <article
                  className={cn(
                    'flex flex-1 flex-col gap-2 rounded-2xl border-2 p-md',
                    accent.border,
                    accent.bg,
                    step.highlight && 'ring-2 ring-violet-300/60 dark:ring-violet-700/40',
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-transform motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                        accent.solidBg,
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                        accent.iconChip,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <h3 className={cn('text-xsm font-mono font-bold break-keep', accent.text)}>
                    {step.title}
                  </h3>
                  {step.caption && (
                    <p className="text-[11px] text-[var(--term-muted)] break-keep">
                      {step.caption}
                    </p>
                  )}
                </article>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
                  >
                    <ArrowRightIcon className="hidden lg:block h-4 w-4" />
                    <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* reason card */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-teal-700 dark:text-teal-200 break-keep">
          {content.reasonTitle}
        </h3>
        <ul className="flex flex-col gap-2">
          {content.reasonBullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-400"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
