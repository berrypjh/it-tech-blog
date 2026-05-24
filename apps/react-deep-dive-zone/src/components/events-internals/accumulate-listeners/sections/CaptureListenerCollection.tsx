import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ListenerCollectionContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, RotateCwIcon } from '../icons';

type Props = { content: ListenerCollectionContent['capture'] };

export const CaptureListenerCollection = ({ content }: Props) => (
  <section aria-labelledby="heading-capture">
    <NumberedSectionHeader
      id="capture"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<RotateCwIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-violet-300/80 bg-gradient-to-br from-violet-50/60 via-white to-blue-50/30',
        'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-md lg:gap-lg items-start">
        {/* Flow */}
        <ol className="flex flex-col gap-1">
          {content.flow.map((step, i) => {
            const isLast = i === content.flow.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 px-md py-2.5',
                    'border-violet-200/80 bg-white dark:border-violet-700/60 dark:bg-slate-950/40',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white text-[10px] font-mono font-bold dark:bg-violet-400 dark:text-slate-900"
                  >
                    {i + 1}
                  </span>
                  <code className="font-mono text-xsm sm:text-sm font-bold text-violet-700 dark:text-violet-200 break-keep">
                    {step}
                  </code>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="ml-auto h-3.5 w-3.5 text-violet-400 dark:text-violet-500 hidden sm:block"
                  />
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="self-center my-0.5 text-violet-400 dark:text-violet-500"
                  >
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Result */}
        <div className="flex flex-col gap-md">
          <div
            className={cn(
              'rounded-2xl border-2 p-md',
              'border-violet-300/80 bg-white dark:border-violet-700/70 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
              {content.resultTitle}
            </span>
            <ol className="mt-2 flex flex-col gap-1.5">
              {content.results.map((entry) => (
                <li
                  key={entry.handler}
                  className={cn(
                    'flex items-center gap-2 rounded-lg border bg-violet-50/40 px-3 py-2',
                    'border-violet-200/70 dark:border-violet-800/60 dark:bg-violet-950/30',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white text-[10px] font-mono font-bold dark:bg-violet-400 dark:text-slate-900"
                  >
                    {entry.step}
                  </span>
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-200 break-all flex-1">
                    {entry.handler}
                  </code>
                </li>
              ))}
            </ol>
          </div>

          <aside
            className={cn(
              'rounded-2xl border-2 p-md',
              'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
            )}
          >
            <p className="text-[11px] sm:text-xsm leading-relaxed text-violet-900 dark:text-violet-100 break-keep">
              {content.note}
            </p>
          </aside>
        </div>
      </div>
    </article>
  </section>
);
