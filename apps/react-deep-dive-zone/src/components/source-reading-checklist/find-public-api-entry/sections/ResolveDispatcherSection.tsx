import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FindPublicApiEntryContent } from '../content';
import { ArrowDownIcon, CableIcon, dispatcherCardIcon, GitBranchIcon, SplitIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['resolveDispatcher'] };

export const ResolveDispatcherSection = ({ content }: Props) => {
  return (
    <section
      id="section-resolve-dispatcher"
      aria-labelledby="heading-resolve-dispatcher"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="resolve-dispatcher"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<SplitIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] gap-md lg:gap-lg items-start">
        {/* LEFT — concept + flow */}
        <div className="flex flex-col gap-md">
          {/* Main concept */}
          <article
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-cyan-300 bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/40',
              'dark:border-cyan-700/70 dark:from-cyan-950/40 dark:via-[var(--term-bg)] dark:to-blue-950/30',
              'shadow-[0_3px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2',
                  'border-cyan-300 bg-white text-cyan-700',
                  'dark:border-cyan-700/70 dark:bg-[var(--term-bg)] dark:text-cyan-200',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <GitBranchIcon className="h-5 w-5" />
              </span>
              <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.conceptHeadline}
              </h3>
            </div>
          </article>

          {/* Flow diagram */}
          <div
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-slate-200 bg-white shadow-[0_2px_0_var(--term-border)]',
              'dark:border-slate-700 dark:bg-[var(--term-bg)]',
            )}
            aria-label="resolve-dispatcher flow"
          >
            <ol className="flex flex-col gap-0">
              {content.flow.map((step, i) => {
                const t = toneTokens[step.tone];
                const isLast = i === content.flow.length - 1;
                return (
                  <Fragment key={step.label}>
                    <li
                      className={cn(
                        'group flex items-center gap-3 rounded-xl border-2 p-3',
                        'bg-white dark:bg-[var(--term-bg)]',
                        step.emphasize
                          ? cn(t.border, t.chip, 'shadow-[0_2px_0_var(--term-border)]')
                          : cn(t.border, 'border-dashed'),
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2',
                          'font-mono text-[11px] font-bold tabular-nums',
                          step.emphasize
                            ? cn(t.border, 'bg-white dark:bg-[var(--term-bg)]', t.text)
                            : cn(t.chip),
                        )}
                      >
                        {i + 1}
                      </span>
                      <code
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold break-keep',
                          step.emphasize ? t.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        {step.label}
                      </code>
                    </li>
                    {!isLast && (
                      <span aria-hidden="true" className="flex items-center justify-center py-1">
                        <ArrowDownIcon className={cn('h-4 w-4', 'text-cyan-500')} />
                      </span>
                    )}
                  </Fragment>
                );
              })}
            </ol>
          </div>
        </div>

        {/* RIGHT — 3 explanation cards stacked */}
        <ul className="flex flex-col gap-md">
          {content.cards.map((card) => {
            const t = toneTokens[card.tone];
            const Icon = dispatcherCardIcon[card.iconKey];
            return (
              <li key={card.id}>
                <article
                  className={cn(
                    'group flex flex-col gap-2 rounded-xl border-2 p-md',
                    'bg-white dark:bg-[var(--term-bg)]',
                    t.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    t.borderHover,
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                        t.chip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h4 className={cn('text-sm sm:text-md font-bold break-keep', t.text)}>
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {card.body}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bridge banner */}
      <aside
        className={cn(
          'flex items-center gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-800 bg-slate-900 text-slate-50',
          'dark:border-slate-700 dark:bg-slate-950',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-label="bridge"
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            'border border-cyan-400/60 bg-cyan-500/15 text-cyan-200',
          )}
        >
          <CableIcon className="h-5 w-5" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug break-keep">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            {content.bridgeBanner}
          </span>
        </p>
      </aside>
    </section>
  );
};
