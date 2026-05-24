import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  AtomIcon,
  DatabaseIcon,
  GitBranchIcon,
  LayersIcon,
  MousePointerClickIcon,
  PlayCircleIcon,
  PuzzleIcon,
  RadioIcon,
  RepeatIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';
import { toneAccent, toneCard, toneNumber } from '../styles';

type Props = { content: AdvancedWrapupContent['review'] };

const stepIcons = [
  MousePointerClickIcon,
  RadioIcon,
  ZapIcon,
  GitBranchIcon,
  PuzzleIcon,
  AtomIcon,
  LayersIcon,
  DatabaseIcon,
  PlayCircleIcon,
];

export const FullEventFlowReview = ({ content }: Props) => (
  <section aria-labelledby="heading-review">
    <NumberedSectionHeader
      id="review"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol
      className={cn(
        'grid items-stretch gap-2 sm:gap-3',
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-9',
      )}
    >
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? RepeatIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col items-center gap-2 rounded-2xl border-2 p-3 transition-all text-center',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              toneCard[step.tone],
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute -top-3 inline-flex h-7 w-7 items-center justify-center rounded-full',
                'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_var(--term-border)]',
                toneNumber[step.tone],
              )}
            >
              {i + 1}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                'mt-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white dark:bg-slate-950/40',
                toneAccent[step.tone],
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className="text-[11px] sm:text-xsm font-bold leading-tight text-[var(--term-fg)] break-keep">
              {step.title}
            </h3>
            <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
              {step.body}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden xl:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3 w-3" />
                </span>
                <span
                  aria-hidden="true"
                  className="xl:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
  </section>
);
