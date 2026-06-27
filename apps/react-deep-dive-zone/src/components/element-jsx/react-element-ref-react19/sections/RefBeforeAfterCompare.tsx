import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
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
        className="hidden lg:inline-flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </span>
    </div>

    {/* mobile/tablet center arrow */}
    <div className="flex justify-center lg:hidden -my-2" aria-hidden="true">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
    </div>
  </section>
);

const variantClass = {
  legacy: {
    badge: 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
    border: 'border-[var(--term-border)]',
    head: 'text-[var(--term-fg)]',
  },
  modern: {
    badge: 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
    border: 'border-[var(--term-border)]',
    head: 'text-[var(--term-accent)]',
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

      <CodePreviewPanel code={code} language="JSX" />

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{note}</p>
    </article>
  );
};
