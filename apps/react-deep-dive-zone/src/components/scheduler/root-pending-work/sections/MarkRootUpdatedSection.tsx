import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Code2, Database, Flag, Zap } from 'lucide-react';

import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootAccent, RootPendingWorkContent } from '../content';

type Props = { content: RootPendingWorkContent['markRoot'] };

const stepIcon: Record<RootAccent, typeof Zap> = {
  blue: Zap,
  teal: Flag,
  violet: Database,
};

export const MarkRootUpdatedSection = ({ content }: Props) => (
  <section aria-labelledby="heading-mark-root">
    <NumberedSectionHeader
      id="mark-root"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      description={content.description}
      icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
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

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-3 py-2">
              <code className="font-mono text-[11px] sm:text-xsm text-slate-100 break-all">
                {step.code}
              </code>
            </div>

            {step.description && (
              <p className="mt-auto text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {step.description}
              </p>
            )}

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
