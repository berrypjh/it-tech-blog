import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { PkgAccent, SchedulerPackageContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CogIcon,
  DatabaseIcon,
  GaugeIcon,
  PackageIcon,
  TimerIcon,
  ZapIcon,
} from '../icons';
import { pkgCardBorder, pkgIconBox, pkgNumberBadge, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['internalFlow'] };

const stepIcon: Record<PkgAccent, typeof ZapIcon> = {
  blue: GaugeIcon,
  teal: TimerIcon,
  violet: CogIcon,
  slate: DatabaseIcon,
  amber: DatabaseIcon,
};

export const ScheduleCallbackInternalFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-internal-flow">
    <NumberedSectionHeader
      id="internal-flow"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<PackageIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-stretch gap-3 sm:gap-4 relative">
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
            <code
              className={cn(
                'font-mono text-xsm sm:text-sm font-bold break-all',
                pkgTextStrong[step.accent],
              )}
            >
              {step.title}
            </code>
            <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
              {step.description}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden xl:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="xl:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
