import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
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
    <SectionHeader
      id="commit-insertion-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-3">
      {/* Left: 4 step flow */}
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="mb-md flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">commit insert flow</h3>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
              toneTokens.violet.chip,
            )}
          >
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
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="mb-md flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)]">
            {content.domStagesTitle}
          </h3>
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
              toneTokens.teal.chip,
            )}
          >
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
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col items-center gap-1 pt-0.5">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
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
        <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
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

const DomStageCard = ({ stage, index }: { stage: DomStage; index: number }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        stage.highlightNew ? t.fill.border : 'border-[var(--term-border)]',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            stage.highlightNew
              ? t.chip
              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-block h-1.5 w-1.5 rounded-full',
              stage.highlightNew ? t.dot : 'bg-[var(--term-dim)]',
            )}
          />
          {stage.label}
        </span>
        <span className="text-[10px] font-mono tabular-nums text-[var(--term-muted)]">
          0{index}
        </span>
      </header>
      <pre
        className={cn(
          'overflow-x-auto rounded-md border p-sm text-[10.5px] sm:text-[11px] leading-snug font-mono',
          stage.highlightNew
            ? cn(t.fill.border, t.fill.bg, t.fill.text)
            : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <code>{stage.code}</code>
      </pre>
      {stage.note && (
        <p
          className={cn(
            'text-[10px] sm:text-xsm break-keep font-bold',
            stage.highlightNew ? t.text : toneTokens.violet.text,
          )}
        >
          {stage.note}
        </p>
      )}
    </article>
  );
};
