import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { CommitRootContent, ModernStep } from '../content';
import { ArrowDownIcon, ArrowRightIcon, FileCodeIcon, SparklesIcon } from '../icons';

type Props = { content: CommitRootContent['modern'] };

export const CommitRootModernCorrectionSection = ({ content }: Props) => (
  <section
    id="modern-correction"
    aria-labelledby="heading-modern-correction"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="modern-correction"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <StepRail steps={content.steps} />

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
          {content.bottomNote}
        </p>
      </aside>

      <footer className="mt-3 flex items-center gap-2 rounded-xl border border-dashed border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/30 px-md py-sm">
        <FileCodeIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--term-muted)]" />
        <code className="text-[11px] sm:text-xsm font-mono text-[var(--term-muted)] break-all">
          {content.relatedFileNote}
        </code>
      </footer>
    </article>
  </section>
);

const StepRail = ({ steps }: { steps: ModernStep[] }) => (
  <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
    {steps.map((step, idx) => (
      <Fragment key={step.label}>
        <li className="flex-1 min-w-0">
          <StepPill step={step} index={idx + 1} />
        </li>
        {idx < steps.length - 1 && (
          <li
            aria-hidden="true"
            className="flex md:items-center justify-center text-[var(--term-dim)]"
          >
            <span className="hidden md:inline-block">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <span className="md:hidden my-1">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const StepPill = ({ step, index }: { step: ModernStep; index: number }) => {
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-2xl border-2 p-sm sm:p-md text-center',
        t.borderStrong,
        t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'self-center inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-mono font-bold tabular-nums',
          t.chipSolid,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
      <span className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
        {step.label}
      </span>
    </article>
  );
};
