import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { PkgAccent, SchedulerPackageContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  FlagIcon,
  PackageIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';
import { pkgCardBorder, pkgIconBox, pkgNumberBadge, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['callbackMoment'] };

const stepIcon: Record<PkgAccent, typeof ZapIcon> = {
  blue: FlagIcon,
  teal: ZapIcon,
  violet: PackageIcon,
  slate: WorkflowIcon,
  amber: WorkflowIcon,
};

export const ScheduleCallbackMoment = ({ content }: Props) => (
  <section aria-labelledby="heading-callback-moment">
    <NumberedSectionHeader
      id="callback-moment"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          const Icon = stepIcon[step.accent];
          return (
            <li
              key={step.title}
              className={cn(
                'relative flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                pkgCardBorder[step.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full text-white text-[11px] font-mono font-bold tabular-nums',
                    pkgNumberBadge[step.accent],
                  )}
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    pkgIconBox[step.accent],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
              </header>

              {step.isCode ? (
                <code
                  className={cn(
                    'font-mono text-xsm sm:text-sm font-bold break-all',
                    pkgTextStrong[step.accent],
                  )}
                >
                  {step.title}
                </code>
              ) : (
                <h3
                  className={cn(
                    'text-xsm sm:text-sm font-bold leading-tight break-keep',
                    pkgTextStrong[step.accent],
                  )}
                >
                  {step.title}
                </h3>
              )}
              <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {step.description}
              </p>

              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden md:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>

      {/* bottom note */}
      <aside
        className={cn(
          'flex items-center gap-3 rounded-2xl border-2 px-md py-3',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-blue-50/30',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
        >
          <PackageIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-300 break-keep">
          {content.bottomNote}
        </p>
      </aside>
    </div>
  </section>
);
