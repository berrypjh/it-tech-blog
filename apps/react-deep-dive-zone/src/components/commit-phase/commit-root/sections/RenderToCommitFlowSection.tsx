import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { CommitRootContent, RenderToCommitStep, RenderToCommitStepIcon } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  GateIcon,
  GitMergeIcon,
  RocketIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CommitRootContent['renderToCommit'] };

const iconMap: Record<RenderToCommitStepIcon, typeof CheckCircleIcon> = {
  checkCircle: CheckCircleIcon,
  gitMerge: GitMergeIcon,
  gate: GateIcon,
  rocket: RocketIcon,
};

export const RenderToCommitFlowSection = ({ content }: Props) => (
  <section
    id="render-to-commit"
    aria-labelledby="heading-render-to-commit"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="render-to-commit"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

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
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const StepCard = ({ step, index }: { step: RenderToCommitStep; index: number }) => {
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
          'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
          t.chipSolid,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
            {step.title}
          </h3>
          {step.emphasis && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              gate
            </span>
          )}
        </div>
        <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          'hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
