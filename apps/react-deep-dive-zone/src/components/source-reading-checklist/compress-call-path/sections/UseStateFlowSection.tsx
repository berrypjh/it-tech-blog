import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { CallPathFlow } from '../CallPathFlow';
import type { CallPathCompressionContent } from '../content';
import { CableIcon, CompassIcon, SparkIcon } from '../icons';

type Props = { content: CallPathCompressionContent['useStateFlow'] };

export const UseStateFlowSection = ({ content }: Props) => {
  return (
    <section
      id="section-use-state-flow"
      aria-labelledby="heading-use-state-flow"
      className="space-y-lg"
    >
      <SectionHeader
        id="use-state-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<CableIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-md lg:gap-lg items-start">
        <CallPathFlow flow={content.flow} />

        <div className="flex flex-col gap-md">
          {/* One-line summary */}
          <aside
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-blue-300 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/40',
              'dark:border-blue-700/70 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
              'shadow-[0_3px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                  'border border-blue-300 bg-white text-blue-700',
                  'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
                )}
              >
                <SparkIcon className="h-4 w-4" />
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-blue-900 dark:text-blue-100 break-keep">
                {content.oneLineSummary}
              </p>
            </div>
          </aside>

          {/* Related note */}
          <aside
            className={cn(
              'rounded-xl border-2 p-md',
              'border-emerald-200 bg-emerald-50/40',
              'dark:border-emerald-800/60 dark:bg-emerald-950/20',
            )}
          >
            <div className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md',
                  'border border-emerald-300 bg-white text-emerald-700',
                  'dark:border-emerald-700/70 dark:bg-[var(--term-bg)] dark:text-emerald-200',
                )}
              >
                <CompassIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xsm leading-relaxed text-emerald-900 dark:text-emerald-100 break-keep">
                {content.relatedNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
