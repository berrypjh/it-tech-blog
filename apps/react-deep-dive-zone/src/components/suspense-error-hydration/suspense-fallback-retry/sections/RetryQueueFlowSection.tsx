import { cn } from '@it-tech-blog/utils';

import { Bell, ChevronRight, ListOrdered, RefreshCcw, Target, Zap } from 'lucide-react';

import type { SuspenseFallbackRetryContent } from '../content';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['retryQueue'] };

const stepIcons = [Zap, ListOrdered, Target, Bell, RefreshCcw];

export const RetryQueueFlowSection = ({ content }: Props) => (
  <section aria-labelledby="retryqueue-heading" className="flex flex-col gap-md">
    <SectionHeader id="retryqueue-heading" number={content.number} title={content.title} />

    <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:flex-row items-stretch">
      {content.steps.map((step, i) => {
        const accent = phaseAccent[step.phase];
        const Icon = stepIcons[i] ?? Zap;
        const isLast = i === content.steps.length - 1;
        return (
          <li key={step.number} className="flex flex-col lg:flex-row items-stretch gap-2 lg:flex-1">
            <article
              className={cn(
                'flex flex-1 flex-col gap-2 rounded-2xl border-2 p-md',
                accent.border,
                accent.bg,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                    accent.solidBg,
                  )}
                >
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className={cn('text-sm font-bold break-keep', accent.text)}>{step.title}</h3>
              <p className="text-xsm text-[var(--term-muted)] break-keep">{step.description}</p>
            </article>
            {!isLast && (
              <span
                aria-hidden="true"
                className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
              >
                <ChevronRight className="hidden lg:block h-4 w-4" aria-hidden="true" />
                <ChevronRight className="lg:hidden h-4 w-4 rotate-90" aria-hidden="true" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
