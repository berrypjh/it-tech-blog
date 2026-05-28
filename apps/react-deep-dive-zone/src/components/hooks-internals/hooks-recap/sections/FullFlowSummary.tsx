import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FlowStep, HooksRecapContent } from '../content';
import {
  ArrowDownIcon,
  CogIcon,
  DatabaseIcon,
  FlagIcon,
  FunctionSquareIcon,
  LightbulbIcon,
  Link2Icon,
  PlayCircleIcon,
  RocketIcon,
  SplitIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

import { toneCardBg, toneNumber, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['fullFlow'] };

const visualMap = {
  play: PlayCircleIcon,
  fn: FunctionSquareIcon,
  split: SplitIcon,
  cog: CogIcon,
  list: Link2Icon,
  state: DatabaseIcon,
  effect: ZapIcon,
  commit: RocketIcon,
  zap: FlagIcon,
};

const FlowStepRow = ({ step, hasArrow }: { step: FlowStep; hasArrow: boolean }) => {
  const Icon = visualMap[step.visual];
  return (
    <li className="flex flex-col gap-1.5">
      <article
        className={cn(
          'flex items-start gap-3 rounded-xl border-2 p-md',
          'shadow-[0_1px_0_var(--term-border)] transition-all',
          'motion-safe:hover:-translate-y-0.5',
          toneCardBg[step.tone],
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 px-2 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums shrink-0',
            toneNumber[step.tone],
          )}
        >
          {step.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
            'border-[var(--term-border)]',
            toneText[step.tone],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <code
            className={cn('font-mono text-xsm sm:text-sm font-bold break-all', toneText[step.tone])}
          >
            {step.title}
          </code>
          <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {step.description}
          </p>
        </div>
      </article>
      {hasArrow && (
        <span aria-hidden="true" className="flex justify-center text-[var(--term-muted)]">
          <ArrowDownIcon className="h-4 w-4" />
        </span>
      )}
    </li>
  );
};

export const FullFlowSummary = ({ content }: Props) => (
  <section
    aria-labelledby="heading-full-flow"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="full-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-md lg:gap-lg">
      {/* Left: 8 step flow */}
      <ol className="flex flex-col gap-0">
        {content.steps.map((step, i) => (
          <FlowStepRow key={step.number} step={step} hasArrow={i < content.steps.length - 1} />
        ))}
      </ol>

      {/* Right: explanation card */}
      <aside className="flex flex-col gap-md">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900"
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.explanationTitle}
            </h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.explanation.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0"
                />
                <span className="break-keep leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Memory point */}
        <aside
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-amber-300/70 bg-amber-50/60 dark:border-amber-700/60 dark:bg-amber-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900"
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm font-bold leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
            {content.memoryPoint}
          </p>
        </aside>
      </aside>
    </div>
  </section>
);
