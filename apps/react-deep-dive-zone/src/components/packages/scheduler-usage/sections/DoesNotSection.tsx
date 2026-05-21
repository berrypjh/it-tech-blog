import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { DoesItem, SchedulerContent } from '../content';
import { CheckCircleIcon, StarIcon, XCircleIcon } from '../icons';

type Props = { content: SchedulerContent['doesNot'] };

export const DoesNotSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-does-not" className="space-y-md">
      <SectionHeader
        id="does-not"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<StarIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        <DoesColumn variant="does" title={content.doesTitle} items={content.doesItems} />
        <DoesColumn variant="doesNot" title={content.doesNotTitle} items={content.doesNotItems} />
      </div>

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-teal-300/80 bg-teal-50 text-teal-900',
          'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-teal-600 dark:text-teal-300">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

type DoesColumnProps = {
  variant: 'does' | 'doesNot';
  title: string;
  items: DoesItem[];
};

const DoesColumn = ({ variant, title, items }: DoesColumnProps) => {
  const isPositive = variant === 'does';
  const Icon = isPositive ? CheckCircleIcon : XCircleIcon;

  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        isPositive
          ? 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-800/70 dark:bg-emerald-950/30'
          : 'border-red-300/80 bg-red-50/60 dark:border-red-800/70 dark:bg-red-950/30',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            isPositive
              ? 'border-emerald-300/80 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-900/60 dark:text-emerald-200'
              : 'border-red-300/80 bg-red-100 text-red-700 dark:border-red-700/70 dark:bg-red-900/60 dark:text-red-200',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3
          className={cn(
            'text-md font-bold tracking-tight',
            isPositive
              ? 'text-emerald-800 dark:text-emerald-200'
              : 'text-red-800 dark:text-red-200',
          )}
        >
          {title}
        </h3>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.text}
            className={cn(
              'flex items-start gap-sm rounded-lg border px-3 py-2',
              'bg-[var(--term-bg)] border-[var(--term-border)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1 inline-block w-1.5 h-1.5 rounded-full shrink-0',
                isPositive ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-red-500 dark:bg-red-400',
              )}
            />
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
                {item.text}
              </span>
              {item.assignee && (
                <span
                  className={cn(
                    'inline-flex items-center self-start rounded-full border px-2 py-0.5 text-[10px] font-bold font-mono tracking-tight',
                    item.assignee.includes('reconciler')
                      ? 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-200'
                      : 'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-800/70 dark:bg-violet-950/40 dark:text-violet-200',
                  )}
                >
                  → {item.assignee}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
