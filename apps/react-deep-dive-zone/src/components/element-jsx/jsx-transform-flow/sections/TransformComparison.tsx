import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
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
        <span className="inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-300">
          {content.sampleLabel}
        </span>
        <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.sampleTitle}</h3>
      </div>
      <div className="md:w-1/2 lg:w-2/5">
        <CodePreviewPanel code={content.sampleCode} language="JSX" />
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
        'rounded-2xl border bg-[var(--term-surface)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0"
      >
        <CheckCircleIcon className="h-7 w-7" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <span className="inline-flex w-fit items-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)]">
          {content.sameResultTitle}
        </span>
        <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.sameResultBody}
        </p>
      </div>
    </div>

    {/* emphasis banner */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0">
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.banner}
      </p>
    </div>
  </section>
);

type CardVariant = 'old' | 'modern';

const chrome = 'border border-[var(--term-border)] bg-[var(--term-surface)]';

const variantClass: Record<CardVariant, { chip: string; head: string; check: string }> = {
  old: {
    chip: cn(chrome, 'text-[var(--term-muted)]'),
    head: 'text-[var(--term-fg)]',
    check: 'text-[var(--term-accent)]',
  },
  modern: {
    chip: cn(chrome, 'text-violet-600 dark:text-violet-300'),
    head: 'text-violet-600 dark:text-violet-300',
    check: 'text-violet-600 dark:text-violet-300',
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
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <h3 className={cn('text-md font-bold tracking-tight', v.head)}>{title}</h3>
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider tabular-nums',
            v.chip,
          )}
        >
          {version}
        </span>
      </header>

      <CodePreviewPanel code={code} language="JS" />

      <ul className="flex flex-col gap-2">
        {checks.map((check) => (
          <li key={check.id} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5',
                'bg-[var(--term-surface)] border border-[var(--term-border)]',
                v.check,
              )}
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
