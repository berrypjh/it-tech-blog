import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { CompareVs } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
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
        <span
          className={cn(
            'inline-flex items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            toneTokens.sky.text,
          )}
        >
          {content.sampleLabel}
        </span>
        <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.sampleTitle}</h3>
      </div>
      <div className="md:w-1/2 lg:w-2/5">
        <CodePreviewPanel code={content.sampleCode} language="JSX" />
      </div>
    </div>

    {/* two transform cards + VS divider */}
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <TransformCard
        title={content.oldTitle}
        version={content.oldVersion}
        code={content.oldCode}
        checks={content.oldChecks}
        variant="old"
      />
      <CompareVs />
      <TransformCard
        title={content.modernTitle}
        version={content.modernVersion}
        code={content.modernCode}
        checks={content.modernChecks}
        variant="modern"
      />
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

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
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
    chip: cn(chrome, toneTokens.violet.text),
    head: toneTokens.violet.text,
    check: toneTokens.violet.text,
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
