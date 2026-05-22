import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { CheckPoint, JsxTransformFlowContent } from '../content';
import { CheckCircleIcon, GitCompareIcon, SparklesIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['comparison'] };

export const TransformComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    {/* sample JSX strip */}
    <div
      className={cn(
        'flex flex-col md:flex-row gap-md items-stretch md:items-center justify-between',
        'rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center gap-sm min-w-0">
        <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200">
          {content.sampleLabel}
        </span>
        <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.sampleTitle}</h3>
      </div>
      <div className="md:w-1/2 lg:w-2/5">
        <CodePanel code={content.sampleCode} language="JSX" />
      </div>
    </div>

    {/* two transform cards + VS badge */}
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-md">
      <TransformCard
        title={content.oldTitle}
        version={content.oldVersion}
        code={content.oldCode}
        checks={content.oldChecks}
        variant="old"
      />
      <TransformCard
        title={content.modernTitle}
        version={content.modernVersion}
        code={content.modernCode}
        checks={content.modernChecks}
        variant="modern"
      />
      {/* center VS badge */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:inline-flex',
          'items-center justify-center w-12 h-12 rounded-full',
          'bg-[var(--term-bg)] border-2 border-[var(--term-border)] shadow-md',
          'text-xsm font-extrabold text-[var(--term-fg)] tracking-tight',
        )}
      >
        VS
      </span>
    </div>

    {/* same-result card */}
    <div
      className={cn(
        'flex flex-col sm:flex-row gap-md items-stretch sm:items-center',
        'rounded-2xl border-2 bg-emerald-50/60 p-md',
        'border-emerald-200 dark:border-emerald-800/70 dark:bg-emerald-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0"
      >
        <CheckCircleIcon className="h-7 w-7" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <span className="inline-flex w-fit items-center rounded-full border border-emerald-300/80 bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300">
          {content.sameResultTitle}
        </span>
        <p className="text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
          {content.sameResultBody}
        </p>
      </div>
    </div>

    {/* emphasis banner */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-gradient-to-r from-teal-50 via-sky-50 to-violet-50',
        'dark:from-teal-950/40 dark:via-sky-950/40 dark:to-violet-950/40',
        'border border-sky-200/70 dark:border-sky-800/60',
      )}
    >
      <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0">
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.banner}
      </p>
    </div>
  </section>
);

type CardVariant = 'old' | 'modern';

const variantClass: Record<CardVariant, { chip: string; border: string; head: string }> = {
  old: {
    chip: 'border-slate-300/80 bg-slate-100 text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200',
    border: 'border-slate-300/70 dark:border-slate-700/70',
    head: 'text-slate-700 dark:text-slate-200',
  },
  modern: {
    chip: 'border-violet-300/80 bg-violet-100 text-violet-700 dark:border-violet-800/70 dark:bg-violet-950/60 dark:text-violet-200',
    border: 'border-violet-300/70 dark:border-violet-700/70',
    head: 'text-violet-700 dark:text-violet-200',
  },
};

const TransformCard = ({
  title,
  version,
  code,
  checks,
  variant,
}: {
  title: string;
  version: string;
  code: string;
  checks: CheckPoint[];
  variant: CardVariant;
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
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider tabular-nums',
            v.chip,
          )}
        >
          {version}
        </span>
      </header>

      <CodePanel code={code} language="JS" />

      <ul className="flex flex-col gap-2">
        {checks.map((check) => (
          <li key={check.id} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5"
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {check.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};
