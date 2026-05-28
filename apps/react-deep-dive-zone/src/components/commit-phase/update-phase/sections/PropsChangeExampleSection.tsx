import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { UpdatePhaseContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, LockIcon, SquareEqualIcon } from '../icons';

type Props = { content: UpdatePhaseContent['propsExample'] };

export const PropsChangeExampleSection = ({ content }: Props) => (
  <section
    id="props-example"
    aria-labelledby="heading-props-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="props-example"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LockIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <CodeCard title={content.beforeTitle} code={content.beforeCode} variant="before" />
        <Arrow />
        <CodeCard title={content.afterTitle} code={content.afterCode} variant="after" />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border p-md',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
        )}
      >
        <SquareEqualIcon
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300"
        />
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center text-sky-500 dark:text-sky-300 py-1 md:py-0"
  >
    <span
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
        'border-sky-300/80 bg-gradient-to-br from-sky-100 to-blue-100',
        'dark:border-sky-700/70 dark:from-sky-950/70 dark:to-blue-950/60',
      )}
    >
      <span className="hidden md:inline-block">
        <ArrowRightIcon className="h-5 w-5" />
      </span>
      <span className="md:hidden">
        <ArrowDownIcon className="h-5 w-5" />
      </span>
    </span>
  </div>
);

const CodeCard = ({
  title,
  code,
  variant,
}: {
  title: string;
  code: string;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        isAfter
          ? 'border-sky-300/80 dark:border-sky-700/70'
          : 'border-slate-300/70 dark:border-slate-700/60',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isAfter ? 'text-sky-700 dark:text-sky-300' : 'text-slate-700 dark:text-slate-200',
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isAfter
              ? 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200'
              : 'border-slate-200/80 bg-slate-50 text-slate-700 dark:border-slate-700/60 dark:bg-slate-900/40 dark:text-slate-200',
          )}
        >
          jsx
        </span>
      </header>
      <pre
        className={cn(
          'overflow-x-auto rounded-lg border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
          isAfter
            ? 'border-sky-200/60 bg-sky-50/50 text-sky-900 dark:border-sky-800/50 dark:bg-sky-950/25 dark:text-sky-100'
            : 'border-slate-200/60 bg-slate-50/50 text-slate-900 dark:border-slate-700/50 dark:bg-slate-900/30 dark:text-slate-100',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};
