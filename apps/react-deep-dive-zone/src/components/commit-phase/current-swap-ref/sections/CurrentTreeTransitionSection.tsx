import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { RootCurrentRefContent, TransitionStep } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  HistoryIcon,
  RocketIcon,
  SwapIcon,
  WandIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: RootCurrentRefContent['transition'] };

const iconMap: Record<TransitionStep['iconName'], typeof HistoryIcon> = {
  history: HistoryIcon,
  check: CheckCircleIcon,
  wand: WandIcon,
  rocket: RocketIcon,
};

export const CurrentTreeTransitionSection = ({ content }: Props) => (
  <section
    id="current-tree-transition"
    aria-labelledby="heading-current-tree-transition"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="current-tree-transition"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_0.7fr)] gap-3">
      {/* Left: vertical flow */}
      <article
        className={cn(
          'rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ol className="flex flex-col">
          {content.steps.map((step, idx) => (
            <li key={step.title} className="flex flex-col">
              <StepCard step={step} index={idx + 1} />
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

      {/* Right: formula callout */}
      <FormulaCallout formula={content.formula} note={content.formulaCallout} />
    </div>
  </section>
);

const StepCard = ({ step, index }: { step: TransitionStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-2xl border p-md',
        step.emphasis ? cn('border-2', t.borderStrong, t.bg) : cn(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          t.chipSolid,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
          {step.title}
        </h3>
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          'hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};

const FormulaCallout = ({ formula, note }: { formula: string; note: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-blue-300/80 bg-blue-50/60',
      'dark:border-blue-700/70 dark:bg-blue-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
      'ring-2 ring-blue-300/30 dark:ring-blue-500/20',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          'bg-blue-100 text-blue-700 border-blue-200/80',
          'dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
        )}
      >
        <SwapIcon className="h-5 w-5" />
      </span>
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold">
        the swap
      </h3>
    </header>

    <pre className="overflow-x-auto rounded-lg border border-blue-200/60 bg-white p-md text-sm leading-snug font-mono font-bold text-blue-900 dark:border-blue-800/50 dark:bg-slate-950 dark:text-blue-100">
      <code>{formula}</code>
    </pre>

    <p className="text-xsm sm:text-sm leading-relaxed text-blue-900 dark:text-blue-100 break-keep">
      {note}
    </p>
  </article>
);
