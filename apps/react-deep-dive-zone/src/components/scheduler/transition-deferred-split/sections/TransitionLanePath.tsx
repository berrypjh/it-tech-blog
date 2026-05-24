import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ResponseAccent, TransitionDeferredContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  LayersIcon,
  NetworkIcon,
  RepeatIcon,
  SparklesIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';
import { responseCardBorder, responseIconBox, responseTextStrong } from '../responseAccent';

type Props = { content: TransitionDeferredContent['transitionFlow'] };

const stepIcon: Record<ResponseAccent, typeof ZapIcon> = {
  emerald: ZapIcon,
  violet: RepeatIcon,
  blue: LayersIcon,
  rose: NetworkIcon,
  teal: SparklesIcon,
};

export const TransitionLanePath = ({ content }: Props) => (
  <section aria-labelledby="heading-transition-flow">
    <NumberedSectionHeader
      id="transition-flow"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 items-stretch gap-3 sm:gap-4 relative">
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcon[step.accent];
        return (
          <li
            key={step.title}
            className={cn(
              'relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-colors',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              responseCardBorder[step.accent],
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  responseIconBox[step.accent],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span
                className={cn(
                  'font-mono text-[10px] uppercase tracking-wider',
                  responseTextStrong[step.accent],
                )}
              >
                step {i + 1}
              </span>
            </header>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold leading-tight break-keep',
                responseTextStrong[step.accent],
              )}
            >
              {step.title}
            </h3>
            <p className="mt-auto text-[11px] leading-snug text-[var(--term-muted)] break-keep">
              {step.description}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden xl:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="xl:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
  </section>
);
