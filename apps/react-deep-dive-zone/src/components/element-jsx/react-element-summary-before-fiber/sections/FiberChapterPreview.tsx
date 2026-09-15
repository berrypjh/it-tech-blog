import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ScanSearch, Sparkles, Workflow } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementSummaryBeforeFiberContent } from '../content';

type Props = { content: ReactElementSummaryBeforeFiberContent['fiberPreview'] };

export const FiberChapterPreview = ({ content }: Props) => (
  <section
    id="fiber-preview"
    aria-labelledby="heading-fiber-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="fiber-preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      {/* preview question */}
      <article
        className={cx(
          'flex flex-col gap-md rounded-2xl border p-md bg-[var(--term-bg)]',
          'border-[var(--term-border)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
            'bg-[var(--term-surface)] border-[var(--term-border)]',
            toneTokens.violet.text,
          )}
        >
          <ScanSearch className="h-5 w-5" aria-hidden="true" />
        </span>
        <span
          className={cx('text-[10px] uppercase tracking-wider font-mono', toneTokens.violet.text)}
        >
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
        className={cx(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ol className="flex flex-col gap-2">
          {content.flowSteps.map((step, idx) => {
            const t = toneTokens[step.tone];
            return (
              <li key={step.id} className="flex flex-col">
                <article
                  className={cx(
                    'flex items-start gap-md rounded-xl border p-sm bg-[var(--term-bg)]',
                    'border-[var(--term-border)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cx(
                      'inline-flex items-center justify-center w-10 h-10 rounded-lg border font-mono text-[11px] font-bold tabular-nums',
                      t.chip,
                    )}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <code className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
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
                              className={cx(
                                'inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-mono font-bold tracking-tight',
                                t.chip,
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
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
                      <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.infoBanner}
    </SectionNote>
  </section>
);
