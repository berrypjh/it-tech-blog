import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent, MountStateStep, MountStepIconName } from '../content';
import {
  ArrowDownIcon,
  BoxIcon,
  CornerDownRightIcon,
  DatabaseIcon,
  FileCodeIcon,
  FlameIcon,
  GitBranchIcon,
  SaveIcon,
} from '../icons';

type Props = { content: DispatchSetStateContent['flow'] };

const flowIconMap: Record<MountStepIconName, typeof BoxIcon> = {
  fileCode: FileCodeIcon,
  flame: FlameIcon,
  database: DatabaseIcon,
  box: BoxIcon,
  save: SaveIcon,
  cornerDownRight: CornerDownRightIcon,
};

export const MountStateFlowSection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-b from-white via-sky-50/30 to-white',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// 6 steps · useState first call'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          react-reconciler · mountState
        </span>
      </header>

      <ol className="flex flex-col mx-auto max-w-[36rem]">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="flex flex-col">
            <FlowStepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const FlowStepCard = ({ step }: { step: MountStateStep }) => {
  const Icon = flowIconMap[step.iconName];
  const tone = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'group flex items-start gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm',
        step.highlight ? 'border-2' : 'border',
        tone.border,
        tone.borderHover,
        'shadow-[0_1px_0_var(--term-border)] transition-colors',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>

      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5',
              'text-[10px] font-mono font-bold tabular-nums',
              tone.chip,
            )}
          >
            {step.number}
          </span>
          <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>
            {step.title}
          </h3>
          {step.highlight && (
            <span
              className={cn(
                'ml-auto inline-flex items-center rounded-md border px-1.5 py-0.5',
                'border-amber-300/70 bg-amber-50/80 text-[9px] font-mono uppercase tracking-wider text-amber-700',
                'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
              )}
            >
              key
            </span>
          )}
        </div>
        <p className="text-xxsm sm:text-xsm text-[var(--term-muted)] leading-snug break-keep">
          {step.description}
        </p>
      </div>
    </div>
  );
};
