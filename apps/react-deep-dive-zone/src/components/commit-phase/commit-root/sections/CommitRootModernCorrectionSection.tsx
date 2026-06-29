import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, ModernStep } from '../content';
import { ArrowDownIcon, ArrowRightIcon, FileCodeIcon, SparklesIcon } from '../icons';

type Props = { content: CommitRootContent['modern'] };

export const CommitRootModernCorrectionSection = ({ content }: Props) => (
  <section
    id="modern-correction"
    aria-labelledby="heading-modern-correction"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="modern-correction"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <StepRail steps={content.steps} />

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.sky.fill.border,
          toneTokens.sky.fill.bg,
        )}
      >
        <ToneIconBox tone="sky" size="sm" className="mt-0.5 shrink-0">
          <SparklesIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn('text-xsm sm:text-sm leading-relaxed break-keep', toneTokens.sky.fill.text)}
        >
          {content.bottomNote}
        </p>
      </aside>

      <footer className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-[var(--term-border)] bg-[var(--term-surface)] px-md py-sm">
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
            <ArrowRightIcon className="h-4 w-4 hidden md:inline-block" />
            <ArrowDownIcon className="h-4 w-4 md:hidden my-1" />
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const StepPill = ({ step, index }: { step: ModernStep; index: number }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-lg border-2 p-sm sm:p-md text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'self-center inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-mono font-bold tabular-nums',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
      <span className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
        {step.label}
      </span>
    </article>
  );
};
