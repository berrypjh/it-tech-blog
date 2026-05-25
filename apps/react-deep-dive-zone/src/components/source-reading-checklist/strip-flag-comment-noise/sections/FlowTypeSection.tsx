import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { StripFlagCommentNoiseContent } from '../content';
import { BracesIcon, HelpCircleIcon, SparkIcon, TypeIcon } from '../icons';
import { getLabelClasses, LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['flowType'] };

export const FlowTypeSection = ({ content }: Props) => {
  const t = getLabelClasses('type');
  return (
    <section id="section-flow-type" aria-labelledby="heading-flow-type" className="space-y-lg">
      <SectionHeader
        id="flow-type"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<BracesIcon className="h-5 w-5" />}
      />

      {/* Main point */}
      <article
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300 bg-blue-50/60',
          'dark:border-blue-700/70 dark:bg-blue-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2',
              'border-blue-400 bg-white text-blue-700',
              'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <SparkIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold leading-snug text-blue-900 dark:text-blue-100 break-keep">
            {content.mainPoint}
          </h3>
        </div>
      </article>

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.types.map((type) => (
          <li key={type.name}>
            <article
              className={cn(
                'group flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
                'bg-white dark:bg-[var(--term-bg)]',
                t.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                t.borderHover,
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <code
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-md border-2 px-2.5 py-1',
                    t.border,
                    t.chip,
                    'font-mono text-xsm font-bold',
                  )}
                >
                  <TypeIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {type.name}
                </code>
              </header>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                  {content.hintLabel}
                </span>
                <p className={cn('text-xsm leading-relaxed break-keep', t.text)}>{type.hint}</p>
              </div>

              <div className="mt-auto flex items-start gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
                <HelpCircleIcon
                  className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', t.text)}
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.questionLabel}
                  </span>
                  <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                    {type.question}
                  </p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Spotlight: FiberRoot interpretation */}
      <aside
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/30',
          'dark:border-blue-700/70 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-label="example interpretation"
      >
        <div className="flex items-center gap-2 mb-md">
          <LabelChip label="type" size="md" strong />
          <span className="text-xsm font-bold text-blue-800 dark:text-blue-100 uppercase tracking-wider">
            {content.spotlightTitle}
          </span>
        </div>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
          {content.spotlightBody}
        </p>
      </aside>
    </section>
  );
};
