import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { PhaseDetectionContent } from '../content';
import { CheckCircleIcon, GitBranchIcon, HelpCircleIcon, XIcon } from '../icons';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';

type Props = { content: PhaseDetectionContent['roleComparison'] };

export const PhaseRoleComparisonSection = ({ content }: Props) => {
  return (
    <section
      id="section-role-comparison"
      aria-labelledby="heading-role-comparison"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="role-comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<GitBranchIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.columns.map((col) => {
          const t = getPhaseClasses(col.phase);
          return (
            <li key={col.phase}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <header className="flex items-center justify-between">
                  <PhaseBadge phase={col.phase} size="lg" strong />
                </header>

                {/* Core question */}
                <div
                  className={cn('flex items-start gap-2 rounded-md border-2 p-3', t.border, t.chip)}
                >
                  <HelpCircleIcon
                    className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                      {content.questionLabel}
                    </span>
                    <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
                      {col.question}
                    </p>
                  </div>
                </div>

                {/* Does */}
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider',
                      'text-emerald-700 dark:text-emerald-300',
                    )}
                  >
                    <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />
                    {content.doesLabel}
                  </span>
                  <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {col.does}
                  </p>
                </div>

                {/* Does NOT */}
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider',
                      'text-amber-700 dark:text-amber-300',
                    )}
                  >
                    <XIcon className="h-3 w-3" aria-hidden="true" />
                    {content.doesNotLabel}
                  </span>
                  <p
                    className={cn(
                      'text-xsm leading-relaxed break-keep',
                      'text-amber-900 dark:text-amber-100',
                    )}
                  >
                    {col.doesNot}
                  </p>
                </div>

                {/* Functions */}
                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] block mb-1.5">
                    {content.functionsLabel}
                  </span>
                  <ul className="flex flex-wrap gap-1">
                    {col.functions.map((fn) => (
                      <li key={fn}>
                        <code
                          className={cn(
                            'inline-flex items-center rounded-md border px-1.5 py-0.5',
                            t.border,
                            'bg-white dark:bg-[var(--term-bg)]',
                            t.text,
                            'font-mono text-[10.5px] font-bold',
                          )}
                        >
                          {fn}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
