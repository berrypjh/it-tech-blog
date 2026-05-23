import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type {
  LaneDecisionStep,
  LaneDecisionStepIconName,
  LaneUpdateObjectContent,
} from '../content';
import {
  ArrowDownIcon,
  CrosshairIcon,
  HandIcon,
  LightbulbIcon,
  RouteIcon,
  SplitIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: LaneUpdateObjectContent['requestLane'] };

const decisionIconMap: Record<LaneDecisionStepIconName, typeof HandIcon> = {
  hand: HandIcon,
  workflow: WorkflowIcon,
  split: SplitIcon,
  crosshair: CrosshairIcon,
};

export const RequestUpdateLaneSection = ({ content }: Props) => (
  <section
    id="requestlane"
    aria-labelledby="heading-requestlane"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="requestlane"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RouteIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left explanation */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-violet-50/30',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Mini flow */}
        <ol className="flex flex-col">
          {content.flow.map((node, idx) => {
            const t = toneTokens[node.tone];
            return (
              <li key={node.label} className="flex flex-col">
                <div className={cn('rounded-xl border px-3 py-2 text-center font-mono', t.chip)}>
                  <span className={cn('text-xsm sm:text-sm font-bold', t.text)}>{node.label}</span>
                </div>
                {idx < content.flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="my-1 flex justify-center text-[var(--term-dim)]"
                  >
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="space-y-2">
          <p className="text-sm sm:text-md text-[var(--term-fg)] leading-relaxed break-keep">
            {content.mainBody}{' '}
            <span className="font-bold text-sky-700 dark:text-sky-300">
              {content.mainBodyEmphasis}
            </span>
          </p>
          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border px-3 py-2',
              'border-amber-200/80 bg-amber-50/60 text-amber-900',
              'dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-100',
            )}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700 border border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
            >
              <LightbulbIcon className="h-3.5 w-3.5" />
            </span>
            <p className="text-xxsm sm:text-xsm leading-relaxed break-keep">{content.subBody}</p>
          </div>
        </div>
      </article>

      {/* Right decision diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-amber-50/20 to-white',
          'dark:from-[var(--term-bg)] dark:via-amber-950/15 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <div className="flex flex-col min-w-0">
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
              {content.decisionTitle}
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
              {content.decisionSubtitle}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700/80 dark:text-amber-300/80 rounded-md border border-amber-200/70 dark:border-amber-800/60 px-2 py-0.5">
            inputs
          </span>
        </header>

        <ol className="flex flex-col">
          {content.decisionSteps.map((step, idx) => (
            <li key={step.number} className="flex flex-col">
              <DecisionStep step={step} />
              {idx < content.decisionSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-1 flex justify-center text-[var(--term-dim)]"
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const DecisionStep = ({ step }: { step: LaneDecisionStep }) => {
  const Icon = decisionIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm',
        step.emphasized ? 'border-2' : 'border',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5',
            'text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
        <span className={cn('text-xsm sm:text-sm font-bold break-keep', t.text)}>{step.title}</span>
        {step.emphasized && (
          <span
            className={cn(
              'ml-auto inline-flex items-center rounded-md border px-1.5 py-0.5',
              'border-amber-300/70 bg-amber-50/80 text-[9px] font-mono uppercase tracking-wider text-amber-700',
              'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
            )}
          >
            result
          </span>
        )}
      </div>
    </div>
  );
};
