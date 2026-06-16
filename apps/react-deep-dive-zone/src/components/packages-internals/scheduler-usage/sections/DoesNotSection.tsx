import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
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
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
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
  const headText = isPositive ? 'text-[var(--term-accent)]' : 'text-rose-600 dark:text-rose-300';

  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--term-border)] bg-[var(--term-bg)]',
            headText,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-md font-bold tracking-tight', headText)}>{title}</h3>
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
                isPositive
                  ? 'bg-[var(--term-accent)]'
                  : 'border border-rose-500 dark:border-rose-400',
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
                    'border-[var(--term-border)] bg-[var(--term-surface)]',
                    item.assignee.includes('reconciler')
                      ? 'text-[var(--term-accent)]'
                      : 'text-violet-600 dark:text-violet-300',
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
