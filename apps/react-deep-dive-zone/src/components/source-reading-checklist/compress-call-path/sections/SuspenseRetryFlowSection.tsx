import { cx } from '@berrypjh/react-ui';
import { Repeat, ScanSearch, ShieldQuestion, Sparkles } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { CallPathFlow } from '../CallPathFlow';
import type { CallPathCompressionContent } from '../content';

type Props = { content: CallPathCompressionContent['suspenseFlow'] };

export const SuspenseRetryFlowSection = ({ content }: Props) => {
  return (
    <section
      id="section-suspense-flow"
      aria-labelledby="heading-suspense-flow"
      className="space-y-lg"
    >
      <SectionHeader
        id="suspense-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<Repeat className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-md lg:gap-lg items-start">
        <CallPathFlow flow={content.flow} />

        <div className="flex flex-col gap-md">
          {/* One-line summary */}
          <aside
            className={cx(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-cyan-300 bg-gradient-to-br from-cyan-50/80 via-white to-emerald-50/40',
              'dark:border-cyan-700/70 dark:from-cyan-950/40 dark:via-[var(--term-bg)] dark:to-emerald-950/30',
              'shadow-[0_3px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                  'border border-cyan-300 bg-white text-cyan-700',
                  'dark:border-cyan-700/70 dark:bg-[var(--term-bg)] dark:text-cyan-200',
                )}
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-cyan-900 dark:text-cyan-100 break-keep">
                {content.oneLineSummary}
              </p>
            </div>
          </aside>

          {/* Reading point */}
          <aside
            className={cx(
              'rounded-xl border-2 p-md',
              'border-amber-200 bg-amber-50/40',
              'dark:border-amber-800/60 dark:bg-amber-950/20',
            )}
          >
            <div className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
                  'border border-amber-300 bg-white text-amber-700',
                  'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
                )}
              >
                <ScanSearch className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <p className="text-xsm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
                {content.readingPoint}
              </p>
            </div>
          </aside>

          {/* Visual hint */}
          <aside
            className="hidden lg:flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[var(--term-border)] p-md text-[var(--term-muted)]"
            aria-hidden="true"
          >
            <ShieldQuestion className="h-4 w-4" aria-hidden="true" />
            <span className="text-[10px] font-mono uppercase tracking-wider">
              pending → suspend → capture → retry
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
};
