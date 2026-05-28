import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { pointerCardBorder, pointerIconBg, pointerText } from '../components/pointerStyles';
import type { FiberTreePointersContent, PointerKind, TraversalStep } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  MoveDownIcon,
  MoveRightIcon,
  MoveUpIcon,
  StarIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: FiberTreePointersContent['traversal'] };

const iconMap: Record<PointerKind, React.ComponentType<{ className?: string }>> = {
  child: MoveDownIcon,
  sibling: MoveRightIcon,
  return: MoveUpIcon,
};

export const FiberTraversalReason = ({ content }: Props) => (
  <section id="traversal" aria-labelledby="heading-traversal" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="traversal"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol
      className={cn(
        'grid items-stretch gap-sm',
        'grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]',
      )}
    >
      {content.steps.map((step, idx) => (
        <li key={step.id} className="contents">
          <StepCard step={step} />
          {idx < content.steps.length - 1 && (
            <span
              aria-hidden="true"
              className="self-center justify-self-center flex items-center justify-center"
            >
              <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
              <span className="lg:hidden inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-sky-300/80 bg-sky-50/70',
        'dark:border-sky-800/60 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <StarIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.banner}
      </p>
    </div>
  </section>
);

const StepCard = ({ step }: { step: TraversalStep }) => {
  const Icon = iconMap[step.id];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        pointerCardBorder[step.id],
      )}
    >
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full font-bold text-sm',
            pointerIconBg[step.id],
          )}
        >
          {step.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-xl',
            pointerIconBg[step.id],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3
        className={cn(
          'text-xsm sm:text-sm font-bold leading-snug break-keep',
          pointerText[step.id],
        )}
      >
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
