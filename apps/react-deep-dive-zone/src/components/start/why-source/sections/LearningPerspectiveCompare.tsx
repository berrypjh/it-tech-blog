import { cn } from '@it-tech-blog/utils';

import { CompareColumn } from '../components/CompareColumn';
import { SectionHeader } from '../components/SectionHeader';
import type { WhySourceContent } from '../content';
import { SparkIcon } from '../icons';

type Props = { content: WhySourceContent['compare'] };

export const LearningPerspectiveCompare = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-lg">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'relative rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)]',
          'p-md sm:p-lg lg:p-xl overflow-hidden',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-lg lg:gap-xl items-start">
          <CompareColumn side="left" tone="sky" data={content.left} />

          {/* 중앙 VS 배지 + 세로 구분선 */}
          <div className="relative flex lg:flex-col items-center justify-center lg:py-md">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
            />
            <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-xxsm font-bold tracking-wider text-[var(--term-muted)] shadow-[0_2px_0_var(--term-border)]">
              VS
            </span>
          </div>

          <CompareColumn side="right" tone="cyan" data={content.right} />
        </div>

        {/* 하단 강조 배너 */}
        <div className="mt-lg rounded-md border border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100 p-md flex items-center gap-sm">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900 shrink-0"
            aria-hidden="true"
          >
            <SparkIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm font-medium leading-snug break-keep">
            {content.banner}
          </p>
        </div>
      </div>
    </section>
  );
};
