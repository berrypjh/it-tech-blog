import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberCentralContent, PreviewItem } from '../content';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CompassIcon,
  HelpCircleIcon,
  ListIcon,
  RocketIcon,
  SendIcon,
} from '../icons';

type Props = { content: FiberCentralContent['nextPreview'] };

const iconMap = {
  send: SendIcon,
  list: ListIcon,
  compass: CompassIcon,
  arrowUp: ArrowUpIcon,
} as const;

export const FiberNextChapterPreview = ({ content }: Props) => (
  <section
    id="next-preview"
    aria-labelledby="heading-next-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="next-preview"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-violet-200/70 dark:border-violet-700/60',
        'bg-gradient-to-br from-sky-50/80 via-white to-violet-50/60',
        'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.42fr)_minmax(0,_0.26fr)] gap-md lg:gap-lg items-start">
        {/* Question */}
        <div className="flex flex-col gap-sm min-w-0">
          <span
            aria-hidden="true"
            className="inline-flex w-fit items-center justify-center w-10 h-10 rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200"
          >
            <HelpCircleIcon className="h-5 w-5" />
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.question.lines.map((line, i) => {
              const has = line.includes(content.question.emphasis);
              if (!has) {
                return (
                  <span key={i} className="block">
                    {line}
                  </span>
                );
              }
              const [before, after] = line.split(content.question.emphasis);
              return (
                <span key={i} className="block">
                  {before}
                  <code className="font-mono font-bold text-violet-700 dark:text-violet-300">
                    {content.question.emphasis}
                  </code>
                  {after}
                </span>
              );
            })}
          </p>
        </div>

        {/* Center flow */}
        <div className="min-w-0">
          <h3 className="text-xsm font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 mb-sm">
            {`// ${content.previewTitle}`}
          </h3>
          <ol className="flex flex-col gap-0">
            {content.items.map((item, idx) => (
              <li key={item.id} className="flex flex-col">
                <PreviewCard item={item} />
                {idx < content.items.length - 1 && (
                  <span aria-hidden="true" className="flex justify-center py-1">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                      <ArrowDownIcon className="h-3.5 w-3.5" />
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-2">
          <div className="relative w-24 h-24">
            <span
              aria-hidden="true"
              className={cn(
                'absolute left-0 top-0 w-16 h-16 rounded-2xl',
                'bg-gradient-to-br from-sky-200 via-violet-200 to-emerald-200',
                'dark:from-sky-700/50 dark:via-violet-700/50 dark:to-emerald-700/50',
                'shadow-[0_8px_16px_-8px_rgba(2,132,199,0.45)]',
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                'absolute right-0 bottom-0 w-14 h-14 rounded-2xl',
                'bg-gradient-to-br from-violet-200 via-sky-200 to-cyan-200',
                'dark:from-violet-700/50 dark:via-sky-700/50 dark:to-cyan-700/50',
                'shadow-[0_8px_16px_-8px_rgba(139,92,246,0.45)]',
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                'absolute inset-0 m-auto inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-sky-200/80',
                'dark:bg-slate-900 dark:border-sky-800/60',
                'shadow-[0_4px_12px_-4px_rgba(2,132,199,0.5)]',
                'text-sky-600 dark:text-sky-300',
              )}
            >
              <RocketIcon className="h-5 w-5" />
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-mono text-violet-700 dark:text-violet-300">
            {'// next step'}
          </span>
        </div>
      </div>
    </article>
  </section>
);

const PreviewCard = ({ item }: { item: PreviewItem }) => {
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-sm',
        'border-violet-200/80 dark:border-violet-800/60 shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0',
          'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col min-w-0">
        <code className="font-mono text-xsm font-bold tracking-tight text-violet-900 dark:text-violet-100 break-all">
          {item.title}
        </code>
        <span className="text-[11.5px] leading-relaxed text-[var(--term-muted)] break-keep">
          {item.body}
        </span>
      </div>
    </article>
  );
};
