import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { ConnectionTable } from '../components/ConnectionTable';
import type { FiberTreePointersContent } from '../content';
import { ArrowLeftRightIcon, ListTreeIcon } from '../icons';

type Props = { content: FiberTreePointersContent['comparison'] };

export const UiTreeVsFiberPointers = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      {/* Left card */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-lg',
              'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
            )}
          >
            <ListTreeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </h3>
        </header>
        <pre className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/50 p-sm font-mono text-xsm leading-[1.7] text-[var(--term-fg)]">
          {content.leftTree}
        </pre>
      </article>

      {/* Center icon */}
      <div className="flex items-center justify-center">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-full',
            'bg-sky-100 text-sky-700 border-2 border-sky-300/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
            'shadow-[0_4px_12px_-4px_rgba(2,132,199,0.45)]',
          )}
        >
          <ArrowLeftRightIcon className="h-5 w-5" />
        </span>
      </div>

      {/* Right card */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-lg',
              'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
            )}
          >
            <ListTreeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.rightTitle}
          </h3>
        </header>
        <ConnectionTable
          childSiblingRows={content.childSiblingRows}
          returnRows={content.returnRows}
        />
      </article>
    </div>
  </section>
);
