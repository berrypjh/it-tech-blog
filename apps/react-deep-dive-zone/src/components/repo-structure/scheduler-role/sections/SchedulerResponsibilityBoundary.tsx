import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ResponsibilityItem, SchedulerContent } from '../content';
import { CheckCircleIcon, InfoIcon, XCircleIcon } from '../icons';

type Props = { content: SchedulerContent['responsibility'] };

export const SchedulerResponsibilityBoundary = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-responsibility" className="space-y-md">
      <SectionHeader
        id="responsibility"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckCircleIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-[var(--term-border)]">
          <Column title={content.leftTitle} items={content.leftItems} iconType="check" />
          <Column title={content.rightTitle} items={content.rightItems} iconType="x" />
        </div>
      </div>

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
            'border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md leading-snug font-bold break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

type ColumnProps = {
  title: string;
  items: ResponsibilityItem[];
  iconType: 'check' | 'x';
};

const Column = ({ title, items, iconType }: ColumnProps) => {
  const isCheck = iconType === 'check';
  // 긍정(does) = A(amber) / 부정(does NOT) = rose
  const accentText = isCheck ? 'text-[var(--term-accent)]' : 'text-rose-600 dark:text-rose-300';

  return (
    <article className="flex flex-col">
      <header
        className={cn(
          'flex items-center gap-sm px-md sm:px-lg py-md border-b',
          'bg-[var(--term-surface)] border-b-[var(--term-border)] text-[var(--term-fg)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-md border',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            accentText,
          )}
        >
          {isCheck ? <CheckCircleIcon className="h-4 w-4" /> : <XCircleIcon className="h-4 w-4" />}
        </span>
        <h3 className="text-sm sm:text-md font-bold tracking-tight break-keep">{title}</h3>
      </header>
      <ul className="flex flex-col px-md sm:px-lg py-md gap-2">
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            {isCheck ? (
              <CheckCircleIcon
                className={cn('mt-0.5 h-4 w-4 shrink-0', accentText)}
                aria-hidden="true"
              />
            ) : (
              <XCircleIcon
                className={cn('mt-0.5 h-4 w-4 shrink-0', accentText)}
                aria-hidden="true"
              />
            )}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
