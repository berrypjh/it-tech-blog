import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../shared/CodePanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementRefReact19Content } from '../content';
import { ArrowDownIcon, ArrowRightIcon, GitCompareIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['compare'] };

export const RefBeforeAfterCompare = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <CompareCard
        title={content.leftTitle}
        version={content.leftVersion}
        code={content.leftCode}
        note={content.leftNote}
        variant="legacy"
      />
      <CompareCard
        title={content.rightTitle}
        version={content.rightVersion}
        code={content.rightCode}
        note={content.rightNote}
        variant="modern"
      />

      {/* desktop center arrow */}
      <span
        aria-hidden="true"
        className="hidden lg:inline-flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-sky-600 text-white shadow-md"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </span>
    </div>

    {/* mobile/tablet center arrow */}
    <div className="flex justify-center lg:hidden -my-2" aria-hidden="true">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white shadow-md">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
    </div>
  </section>
);

const variantClass = {
  legacy: {
    badge:
      'border-slate-300/80 bg-slate-100 text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200',
    border: 'border-slate-300/70 dark:border-slate-700/70',
    head: 'text-slate-700 dark:text-slate-200',
  },
  modern: {
    badge:
      'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200',
    border: 'border-teal-300/70 dark:border-teal-700/70',
    head: 'text-teal-700 dark:text-teal-200',
  },
} as const;

const CompareCard = ({
  title,
  version,
  code,
  note,
  variant,
}: {
  title: string;
  version: string;
  code: string;
  note: string;
  variant: keyof typeof variantClass;
}) => {
  const v = variantClass[variant];
  return (
    <article
      className={cn(
        'group flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        v.border,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <h3 className={cn('text-md font-bold tracking-tight', v.head)}>{title}</h3>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
            v.badge,
          )}
        >
          {version}
        </span>
      </header>

      <CodePanel code={code} language="JSX" />

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{note}</p>
    </article>
  );
};
