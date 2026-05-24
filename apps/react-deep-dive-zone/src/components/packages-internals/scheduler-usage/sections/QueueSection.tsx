import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import type { SchedulerContent } from '../content';
import { CheckCircleIcon, ChevronRightIcon, ListOrderedIcon, SparklesIcon } from '../icons';

type Props = { content: SchedulerContent['queue'] };

export const QueueSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-queue" className="space-y-md">
      <SectionHeader
        id="queue"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListOrderedIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
        {/* Card 1 — Waiting queue */}
        <article
          className={cn(
            'group flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-sky-200/70 dark:border-sky-800/60',
            'transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="sky" size="md">
              <ListOrderedIcon className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <h3 className="text-md font-bold tracking-tight text-sky-700 dark:text-sky-300 break-keep">
              {content.waiting.title}
            </h3>
          </header>

          <ol className="flex flex-col gap-2">
            {content.waiting.items.map((item, i) => (
              <li
                key={item}
                className={cn(
                  'flex items-stretch gap-sm rounded-lg border px-3 py-2',
                  'bg-[var(--term-bg)] border-[var(--term-border)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0 font-mono text-[11px] font-bold mt-0.5',
                    'border-2 border-sky-300/80 bg-sky-50 text-sky-700',
                    'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
                  )}
                >
                  {i + 1}
                </span>
                <span className="flex-1 self-center text-xsm leading-snug text-[var(--term-fg)] break-keep">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </article>

        {/* Card 2 — Processing order */}
        <article
          className={cn(
            'group flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-violet-200/70 dark:border-violet-800/60',
            'transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="violet" size="md">
              <SparklesIcon className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <h3 className="text-md font-bold tracking-tight text-violet-700 dark:text-violet-300 break-keep">
              {content.order.title}
            </h3>
          </header>

          <div className="flex items-center justify-center gap-2 py-2" aria-hidden="true">
            {content.order.steps.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center justify-center w-12 h-12 rounded-full font-mono text-lg font-bold',
                    'border-2 border-violet-400 bg-violet-100 text-violet-700',
                    'dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-200',
                  )}
                >
                  {step}
                </span>
                {i < content.order.steps.length - 1 && (
                  <ChevronRightIcon className="h-4 w-4 text-violet-500 dark:text-violet-400" />
                )}
              </span>
            ))}
          </div>

          <ul className="flex flex-col gap-1.5">
            {content.order.reasons.map((reason) => (
              <li
                key={reason}
                className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                {reason}
              </li>
            ))}
          </ul>
        </article>

        {/* Card 3 — Result */}
        <article
          className={cn(
            'group flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-emerald-200/70 dark:border-emerald-800/60',
            'transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="emerald" size="md">
              <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <h3 className="text-md font-bold tracking-tight text-emerald-700 dark:text-emerald-300 break-keep">
              {content.result.title}
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.result.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="text-emerald-600 dark:text-emerald-300 shrink-0 mt-0.5"
                >
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
