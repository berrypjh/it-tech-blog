import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { LifecycleStep, RootCurrentRefContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ListChecksIcon, SwapIcon, TreeIcon } from '../icons';

type Props = {
  lifecycle: RootCurrentRefContent['lifecycle'];
  meaning: RootCurrentRefContent['meaning'];
};

export const RefLifecycleAndMeaningSection = ({ lifecycle, meaning }: Props) => (
  <section id="lifecycle-and-meaning" className="space-y-md scroll-mt-xl">
    <h2 id="heading-lifecycle-and-meaning" className="sr-only">
      refs lifecycle and root.current swap meaning
    </h2>

    <div className="grid grid-cols-1 gap-6">
      <LifecycleCard content={lifecycle} />
      <MeaningCard content={meaning} />
    </div>
  </section>
);

const LifecycleCard = ({ content }: { content: RootCurrentRefContent['lifecycle'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="refs-lifecycle"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Desktop: horizontal flow */}
      <ol className="hidden md:grid grid-cols-5 gap-2 items-stretch">
        {content.steps.map((step) => (
          <li key={step.label} className="flex">
            <LifecycleStepCard step={step} />
          </li>
        ))}
      </ol>

      {/* Mobile: vertical */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.label} className="flex flex-col">
            <LifecycleStepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </div>
);

const LifecycleStepCard = ({ step }: { step: LifecycleStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h4
        className={cn(
          'text-[10px] sm:text-xsm font-bold uppercase tracking-wider break-keep',
          t.text,
        )}
      >
        {step.label}
      </h4>
      <code
        className={cn(
          'inline-block rounded-md border px-2 py-1 text-[11px] font-mono break-all',
          t.chip,
        )}
      >
        {step.value}
      </code>
    </article>
  );
};

const MeaningCard = ({ content }: { content: RootCurrentRefContent['meaning'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="root-current-meaning"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SwapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <TreeSideCard
          title={content.beforeTitle}
          subtitle={content.beforeSubtitle}
          variant="before"
        />
        <FormulaArrow formula={content.formula} />
        <TreeSideCard title={content.afterTitle} subtitle={content.afterSubtitle} variant="after" />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border p-md',
          'border-blue-200/80 bg-blue-50/60',
          'dark:border-blue-800/70 dark:bg-blue-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-blue-100 text-blue-700 border border-blue-200/80',
            'dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
          )}
        >
          <SwapIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-blue-900 dark:text-blue-100 break-keep font-bold">
          {content.note}
        </p>
      </aside>
    </article>
  </div>
);

const TreeSideCard = ({
  title,
  subtitle,
  variant,
}: {
  title: string;
  subtitle: string;
  variant: 'before' | 'after';
}) => {
  const tone = variant === 'before' ? commitToneTokens.violet : commitToneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md text-center',
        tone.borderStrong,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
            tone.chipSolid,
          )}
        >
          <TreeIcon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            tone.chip,
          )}
        >
          {variant === 'before' ? 'before swap' : 'after swap'}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', tone.textStrong)}>
        {title}
      </h3>
      <p className={cn('text-xsm leading-snug break-keep', tone.text)}>{subtitle}</p>
    </article>
  );
};

const FormulaArrow = ({ formula }: { formula: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
        'border-blue-300/80 bg-gradient-to-br from-blue-100 to-teal-100',
        'dark:border-blue-700/70 dark:from-blue-950/70 dark:to-teal-950/60',
        'text-blue-700 dark:text-blue-200',
      )}
    >
      <span className="hidden md:inline-block">
        <ArrowRightIcon className="h-6 w-6" />
      </span>
      <span className="md:hidden">
        <ArrowDownIcon className="h-6 w-6" />
      </span>
    </span>
    <code
      className={cn(
        'inline-block rounded-md border px-2 py-1 text-[11px] font-mono font-bold whitespace-nowrap',
        'border-blue-300/80 bg-blue-50 text-blue-800',
        'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
      )}
    >
      {formula}
    </code>
  </div>
);
