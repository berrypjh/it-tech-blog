import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { DomStage, FlowStep, FlowStepIcon, PlacementContent } from '../content';
import { ArrowDownIcon, CrosshairIcon, FlagIcon, LayersIcon, PlusIcon, TargetIcon } from '../icons';

type Props = { content: PlacementContent['commitFlow'] };

const iconMap: Record<FlowStepIcon, typeof FlagIcon> = {
  flag: FlagIcon,
  target: TargetIcon,
  crosshair: CrosshairIcon,
  plus: PlusIcon,
};

export const PlacementCommitFlowSection = ({ content }: Props) => (
  <section
    id="commit-insertion-flow"
    aria-labelledby="heading-commit-insertion-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="commit-insertion-flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-3">
      {/* Left: 4 step flow */}
      <article
        className={cn(
          'rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="mb-md flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">commit insert flow</h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 rounded-md border border-violet-200/70 dark:border-violet-800/60 px-2 py-0.5">
            4 steps
          </span>
        </header>
        <ol className="flex flex-col">
          {content.steps.map((step, idx) => (
            <li key={step.title} className="flex flex-col">
              <FlowCard step={step} index={idx + 1} />
              {idx < content.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-2 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>

      {/* Right: DOM stage flow */}
      <article
        className={cn(
          'rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-teal-50/40',
          'dark:from-sky-950/15 dark:via-[var(--term-bg)] dark:to-teal-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="mb-md flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">
            {content.domStagesTitle}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
            dom stages
          </span>
        </header>
        <ol className="flex flex-col">
          {content.domStages.map((stage, idx) => (
            <li key={stage.label} className="flex flex-col">
              <DomStageCard stage={stage} index={idx + 1} />
              {idx < content.domStages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-2 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const FlowCard = ({ step, index }: { step: FlowStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <div className="flex flex-col items-center gap-1 pt-0.5">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {index}
        </span>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
          {step.title}
        </h4>
        {step.description && (
          <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {step.description}
          </p>
        )}
      </div>
    </article>
  );
};

const DomStageCard = ({ stage, index }: { stage: DomStage; index: number }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
      stage.highlightNew
        ? 'border-teal-300/80 dark:border-teal-700/70'
        : 'border-[var(--term-border)]',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5',
          'text-[10px] font-mono uppercase tracking-wider',
          stage.highlightNew
            ? 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200'
            : 'border-[var(--term-border)] bg-slate-50/60 text-[var(--term-muted)] dark:bg-slate-900/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-block h-1.5 w-1.5 rounded-full',
            stage.highlightNew ? 'bg-teal-500 dark:bg-teal-400' : 'bg-[var(--term-dim)]',
          )}
        />
        {stage.label}
      </span>
      <span className="text-[10px] font-mono tabular-nums text-[var(--term-muted)]">0{index}</span>
    </header>
    <pre
      className={cn(
        'overflow-x-auto rounded-lg border p-sm text-[10.5px] sm:text-[11px] leading-snug font-mono',
        stage.highlightNew
          ? 'border-teal-200/60 bg-teal-50/50 text-teal-900 dark:border-teal-800/50 dark:bg-teal-950/25 dark:text-teal-100'
          : 'border-[var(--term-border)] bg-slate-50/40 text-[var(--term-fg)] dark:bg-slate-900/30',
      )}
    >
      <code>{stage.code}</code>
    </pre>
    {stage.note && (
      <p
        className={cn(
          'text-[10px] sm:text-xsm break-keep',
          stage.highlightNew
            ? 'text-teal-700 dark:text-teal-300 font-bold'
            : 'text-violet-700 dark:text-violet-300 font-bold',
        )}
      >
        {stage.note}
      </p>
    )}
  </article>
);
