import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { FlagCard, StripFlagCommentNoiseContent } from '../content';
import { FlagIcon, HelpCircleIcon, SparkIcon, ToggleLeftIcon } from '../icons';
import { LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['featureFlag'] };

const kindTone: Record<FlagCard['kind'], 'blue' | 'violet' | 'amber'> = {
  default: 'blue',
  experimental: 'violet',
  legacy: 'amber',
};

export const FeatureFlagSection = ({ content }: Props) => {
  return (
    <section
      id="section-feature-flag"
      aria-labelledby="heading-feature-flag"
      className="space-y-lg"
    >
      <SectionHeader
        id="feature-flag"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<FlagIcon className="h-5 w-5" />}
      />

      {/* Main point */}
      <article
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-300 bg-violet-50/60',
          'dark:border-violet-700/70 dark:bg-violet-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2',
              'border-violet-400 bg-white text-violet-700',
              'dark:border-violet-700/70 dark:bg-[var(--term-bg)] dark:text-violet-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <SparkIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold leading-snug text-violet-900 dark:text-violet-100 break-keep">
            {content.mainPoint}
          </h3>
        </div>
      </article>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-md lg:gap-lg items-start">
        {/* Flag cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {content.flags.map((flag) => {
            const t = toneTokens[kindTone[flag.kind]];
            return (
              <li key={flag.name}>
                <article
                  className={cn(
                    'group flex h-full flex-col gap-sm rounded-xl border-2 p-md',
                    'bg-white dark:bg-[var(--term-bg)]',
                    t.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    t.borderHover,
                  )}
                >
                  <header className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1',
                        t.chip,
                        'text-[10px] font-mono font-bold uppercase tracking-wider',
                        'shadow-[0_2px_0_var(--term-border)]',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('block h-1 w-1 rounded-full', t.dot)}
                      />
                      {content.kindLabel[flag.kind]}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-md border',
                        t.chip,
                      )}
                    >
                      <ToggleLeftIcon className="h-3.5 w-3.5" />
                    </span>
                  </header>

                  <code
                    className={cn(
                      'overflow-x-auto rounded-md border px-2.5 py-1.5',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                      'font-mono text-xsm font-bold text-[var(--term-fg)]',
                    )}
                  >
                    <span className="whitespace-nowrap">{flag.name}</span>
                  </code>

                  <div className="mt-auto flex items-start gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
                    <HelpCircleIcon
                      className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', t.text)}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                        {content.questionLabel}
                      </span>
                      <p className={cn('text-xsm leading-snug break-keep', t.text)}>
                        {flag.question}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Reading questions */}
        <aside
          className={cn(
            'sticky top-24 rounded-2xl border-2 p-md sm:p-lg',
            'border-violet-200 bg-gradient-to-br from-violet-50/60 via-white to-blue-50/30',
            'dark:border-violet-800/60 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
          aria-label="reading questions"
        >
          <div className="flex items-center gap-2 mb-md">
            <LabelChip label="feature-flag" size="md" strong />
            <span className="text-xsm font-bold text-violet-800 dark:text-violet-100 uppercase tracking-wider">
              {content.questionsLabel}
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            {content.questions.map((q, i) => (
              <li
                key={q}
                className={cn(
                  'flex items-start gap-2 rounded-md border px-2.5 py-2',
                  'border-violet-200 bg-white',
                  'dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                    'border-violet-300 bg-violet-50 text-violet-700',
                    'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
                    'font-mono text-[10px] font-bold tabular-nums',
                  )}
                >
                  {i + 1}
                </span>
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{q}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
