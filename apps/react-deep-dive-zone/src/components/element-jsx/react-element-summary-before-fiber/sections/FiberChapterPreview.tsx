import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { ArrowDownIcon, ScanSearchIcon, SparklesIcon, WorkflowIcon } from '../icons';
import { neutralBorder, toneChip, toneText } from '../localTone';

type Props = { content: ReactElementSummaryBeforeFiberContent['fiberPreview'] };

export const FiberChapterPreview = ({ content }: Props) => (
  <section aria-labelledby="heading-fiber-preview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fiber-preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      {/* preview question */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border p-md bg-[var(--term-bg)]',
          'border-[var(--term-border)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            'bg-[var(--term-surface)] border-[var(--term-border)] text-violet-600 dark:text-violet-300',
          )}
        >
          <ScanSearchIcon className="h-5 w-5" />
        </span>
        <span className="text-[10px] uppercase tracking-wider font-mono text-violet-600 dark:text-violet-300">
          next chapter
        </span>
        <p className="text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.previewQuestion}
        </p>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.previewDescription}
        </p>
      </article>

      {/* flow steps */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ol className="flex flex-col gap-2">
          {content.flowSteps.map((step, idx) => {
            return (
              <li key={step.id} className="flex flex-col">
                <article
                  className={cn(
                    'flex items-start gap-md rounded-xl border p-sm bg-[var(--term-bg)]',
                    neutralBorder,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-lg border font-mono text-[11px] font-bold tabular-nums',
                      toneChip(step.tone),
                    )}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <code
                      className={cn(
                        'font-mono text-xsm font-bold tracking-tight',
                        toneText(step.tone),
                      )}
                    >
                      {step.title}
                    </code>
                    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                      {step.body}
                    </p>
                    {step.id === 'fiber-kinds' && (
                      <ul className="flex flex-wrap gap-1.5 pt-1">
                        {content.fiberChips.map((chip) => (
                          <li key={chip}>
                            <span
                              className={cn(
                                'inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-mono font-bold tracking-tight',
                                toneChip(step.tone),
                              )}
                            >
                              {chip}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
                {idx < content.flowSteps.length - 1 && (
                  <span className="flex justify-center py-1" aria-hidden="true">
                    <ArrowDownIcon className="h-3 w-3 text-[var(--term-muted)]" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.infoBanner}
      </p>
    </div>
  </section>
);
