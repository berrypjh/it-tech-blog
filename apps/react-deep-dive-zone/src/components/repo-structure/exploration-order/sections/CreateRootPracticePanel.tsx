import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { ExplorationContent, PracticeStep } from '../content';
import { CheckCircleIcon, PencilIcon } from '../icons';

type Props = { content: ExplorationContent['practice1'] };

export const CreateRootPracticePanel = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-practice1" className="space-y-md">
      <SectionHeader
        id="practice1"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckCircleIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)]',
          'border-blue-200/80 dark:border-blue-700/60',
          'shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        )}
      >
        <ol className="relative flex flex-col gap-sm">
          <span
            aria-hidden="true"
            className="hidden sm:block absolute left-[14px] top-3 bottom-3 w-px border-l border-dashed border-blue-300/70 dark:border-blue-700/60"
          />
          {content.steps.map((step) => (
            <li key={step.badge}>
              <PracticeRow step={step} />
            </li>
          ))}
        </ol>

        <div
          className={cn(
            'flex items-center gap-sm rounded-lg border px-md py-md',
            'border-blue-200/80 bg-blue-50/70 text-blue-900',
            'dark:border-blue-700/60 dark:bg-blue-950/30 dark:text-blue-100',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
              'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-950',
            )}
          >
            <PencilIcon className="h-4 w-4" />
          </span>
          <p className="text-sm sm:text-md font-bold tracking-tight break-keep">
            {content.bottomNote}
          </p>
        </div>
      </article>
    </section>
  );
};

type RowProps = { step: PracticeStep };

const PracticeRow = ({ step }: RowProps) => (
  <div
    className={cn(
      'relative flex items-center gap-md rounded-lg border bg-[var(--term-bg)]',
      'border-[var(--term-border)] p-md transition-colors hover:bg-blue-50/40 dark:hover:bg-blue-950/20',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0',
        'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-950',
      )}
    >
      <CheckCircleIcon className="h-4 w-4" />
    </span>

    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
        'border-blue-300 bg-blue-100 text-blue-800',
        'dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-200',
      )}
    >
      {step.badge}
    </span>

    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
      <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </div>

    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
        'border-emerald-300 bg-emerald-100 text-emerald-800',
        'dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
      )}
    >
      <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />
      {step.status}
    </span>
  </div>
);
