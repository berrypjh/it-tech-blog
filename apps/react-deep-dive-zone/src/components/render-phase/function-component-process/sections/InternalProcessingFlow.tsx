import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FunctionComponentContent, InternalFlowStep } from '../content';
import { ChevronDownIcon, WorkflowIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: FunctionComponentContent['internalFlow'] };

export const InternalProcessingFlow = ({ content }: Props) => (
  <section
    id="internal-flow"
    aria-labelledby="heading-internal-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="internal-flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-teal-50/20 to-violet-50/20',
        'dark:from-[var(--term-bg)] dark:via-teal-950/12 dark:to-violet-950/12',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="mx-auto flex w-full max-w-[640px] flex-col items-stretch">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <Step step={step} />
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="my-1.5 flex justify-center text-[var(--term-dim)]"
              >
                <ChevronDownIcon className="h-5 w-5" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const Step = ({ step }: { step: InternalFlowStep }) => {
  const palette = tonePalette[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        palette.border,
        palette.bg,
        step.highlight && 'border-2 shadow-[0_2px_0_var(--term-border)]',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border font-mono font-bold text-xsm',
          palette.chip,
        )}
      >
        {step.title.charAt(0).toUpperCase()}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        {step.mono ? (
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
            className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', palette.text)}
          >
            {step.title}
          </h3>
        )}
        <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};
