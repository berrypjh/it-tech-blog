import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
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
          'border-sky-200/80 bg-sky-50/70 text-sky-900',
          'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
            'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
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
  const headerTint = isCheck
    ? 'bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100 border-b-emerald-200/70 dark:border-b-emerald-800/60'
    : 'bg-rose-50/70 text-rose-900 dark:bg-rose-950/30 dark:text-rose-100 border-b-rose-200/70 dark:border-b-rose-800/60';

  return (
    <article className="flex flex-col">
      <header className={cn('flex items-center gap-sm px-md sm:px-lg py-md border-b', headerTint)}>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-md',
            isCheck
              ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950'
              : 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-950',
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
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300"
                aria-hidden="true"
              />
            ) : (
              <XCircleIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300"
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
