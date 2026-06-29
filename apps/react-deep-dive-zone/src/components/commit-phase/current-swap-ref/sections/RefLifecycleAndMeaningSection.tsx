import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
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
    <SectionHeader
      id="refs-lifecycle"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
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
    <SectionHeader
      id="root-current-meaning"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SwapIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.blue.fill.border,
          toneTokens.blue.fill.bg,
        )}
      >
        <ToneIconBox tone="blue" size="sm" className="mt-0.5 shrink-0">
          <SwapIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn(
            'text-xsm sm:text-sm leading-relaxed break-keep font-bold',
            toneTokens.blue.fill.text,
          )}
        >
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
  const tone: ToneKey = variant === 'before' ? 'violet' : 'teal';
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-md rounded-lg border-2 bg-[var(--term-bg)] p-md text-center',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={tone}>
          <TreeIcon className="h-5 w-5" />
        </ToneIconBox>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {variant === 'before' ? 'before swap' : 'after swap'}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
        {title}
      </h3>
      <p className={cn('text-xsm leading-snug break-keep', t.text)}>{subtitle}</p>
    </article>
  );
};

const FormulaArrow = ({ formula }: { formula: string }) => {
  const t = toneTokens.blue;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <ArrowRightIcon className="hidden md:inline-block h-6 w-6" />
        <ArrowDownIcon className="md:hidden h-6 w-6" />
      </span>
      <code
        className={cn(
          'inline-block rounded-md border px-2 py-1 text-[11px] font-mono font-bold whitespace-nowrap',
          t.chip,
        )}
      >
        {formula}
      </code>
    </div>
  );
};
