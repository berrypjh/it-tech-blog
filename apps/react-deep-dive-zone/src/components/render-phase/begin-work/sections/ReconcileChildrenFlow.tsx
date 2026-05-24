import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { BeginWorkContent } from '../content';
import { ChevronDownIcon, WorkflowIcon } from '../icons';

type Props = { content: BeginWorkContent['reconcile'] };

const stepPalette = [
  {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    text: 'text-sky-800 dark:text-sky-100',
    chip: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    bg: 'bg-sky-50/40 dark:bg-sky-950/20',
  },
  {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    text: 'text-sky-800 dark:text-sky-100',
    chip: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    bg: 'bg-sky-50/40 dark:bg-sky-950/20',
  },
  {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    text: 'text-teal-800 dark:text-teal-100',
    chip: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    bg: 'bg-teal-50/40 dark:bg-teal-950/20',
  },
  {
    border: 'border-indigo-300/80 dark:border-indigo-700/70',
    text: 'text-indigo-800 dark:text-indigo-100',
    chip: 'bg-indigo-100 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/60',
    bg: 'bg-indigo-50/40 dark:bg-indigo-950/20',
  },
  {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    text: 'text-violet-800 dark:text-violet-100',
    chip: 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    bg: 'bg-violet-50/40 dark:bg-violet-950/20',
  },
] as const;

export const ReconcileChildrenFlow = ({ content }: Props) => (
  <section
    id="reconcile-flow"
    aria-labelledby="heading-reconcile-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="reconcile-flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className="flex flex-col gap-2">
      {content.steps.map((step, idx) => {
        const palette = stepPalette[idx % stepPalette.length];
        const isMono = step.title.includes('(') || step.title.includes('workInProgress');
        const isHighlight = idx === 2 || idx === 3; // nextChildren 계산, reconcileChildren(...)
        return (
          <li key={step.title} className="flex flex-col">
            <article
              className={cn(
                'grid grid-cols-[auto_minmax(0,_1.1fr)_minmax(0,_1fr)] items-center gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
                palette.border,
                palette.bg,
                isHighlight && 'border-2',
                'shadow-[0_1px_0_var(--term-border)]',
                'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-xl border font-mono font-bold text-xsm tabular-nums',
                  palette.chip,
                )}
              >
                {idx + 1}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                {isMono ? (
                  <code
                    className={cn(
                      'font-mono text-xsm sm:text-sm font-bold leading-tight break-all',
                      palette.text,
                    )}
                  >
                    {step.title}
                  </code>
                ) : (
                  <h3
                    className={cn(
                      'text-xsm sm:text-sm font-bold leading-tight break-keep',
                      palette.text,
                    )}
                  >
                    {step.title}
                  </h3>
                )}
                <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {step.description}
                </p>
              </div>
              <p className="hidden md:block text-xsm leading-snug text-[var(--term-fg)] break-keep">
                {step.sideExplanation}
              </p>
            </article>
            {/* Show side explanation under card on mobile */}
            <p className="md:hidden mt-1 text-xsm leading-snug text-[var(--term-muted)] break-keep px-md">
              {step.sideExplanation}
            </p>
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ChevronDownIcon className="h-5 w-5" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
