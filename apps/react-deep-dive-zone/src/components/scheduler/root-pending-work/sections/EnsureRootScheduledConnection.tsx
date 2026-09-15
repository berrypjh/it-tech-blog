import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Clock3, Cog, Database, Link2 } from 'lucide-react';

import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootAccent, RootPendingWorkContent } from '../content';

type Props = { content: RootPendingWorkContent['ensure'] };

const stepIcon: Record<RootAccent, typeof Database> = {
  blue: Database,
  teal: Cog,
  violet: Clock3,
};

export const EnsureRootScheduledConnection = ({ content }: Props) => (
  <section aria-labelledby="heading-ensure">
    <NumberedSectionHeader
      id="ensure"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<Link2 className="h-5 w-5" aria-hidden="true" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcon[step.accent];
        return (
          <li
            key={step.title}
            className={cx(
              'relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-colors',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              axisCardBorder[step.accent],
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums text-white',
                  axisNumberBadge[step.accent],
                )}
              >
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  axisIconBox[step.accent],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
            </header>

            <h3
              className={cx(
                'text-xsm sm:text-sm font-bold leading-tight break-keep',
                axisTextStrong[step.accent],
              )}
            >
              {step.title}
            </h3>

            <ul className="mt-auto flex flex-col gap-1">
              {step.body.map((line, j) => (
                <li
                  key={line}
                  className={cx(
                    'text-[11px] sm:text-xsm leading-snug break-keep',
                    j === 0 ? 'font-mono text-[var(--term-fg)]' : 'text-[var(--term-muted)]',
                  )}
                >
                  {line}
                </li>
              ))}
            </ul>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden md:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                >
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
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
