import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { FiberTreeCard } from '../components/FiberTreeCard';
import type { ProcessStep, ReconcilerEntryContent } from '../content';
import { CuboidIcon, iconByName } from '../icons';

type Props = { content: ReconcilerEntryContent['process'] };

export const ReconcilerInternalProcess = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-process" className="space-y-md">
      <SectionHeader
        id="process"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CuboidIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {/* 좌측 timeline */}
        <ol className="relative flex flex-col gap-md">
          <span
            aria-hidden="true"
            className="hidden sm:block absolute left-[22px] top-3 bottom-3 w-px border-l border-dashed border-violet-300/70 dark:border-violet-700/60"
          />
          {content.steps.map((step) => (
            <li key={step.number}>
              <StepCard step={step} />
            </li>
          ))}
        </ol>

        {/* 우측 Fiber tree */}
        <FiberTreeCard content={content} />
      </div>
    </section>
  );
};

type StepCardProps = { step: ProcessStep };

const StepCard = ({ step }: StepCardProps) => {
  const Icon = iconByName[step.icon];

  return (
    <article
      className={cn(
        'relative flex items-start gap-md rounded-lg border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'p-md transition-all hover:-translate-y-0.5 hover:border-violet-400/60',
      )}
    >
      {/* 번호 원형 배지 */}
      <span
        aria-hidden="true"
        className={cn(
          'relative z-10 inline-flex items-center justify-center w-9 h-9 rounded-full',
          'border-2 border-violet-300 bg-violet-50 text-violet-700 font-bold text-sm tabular-nums',
          'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
          'shrink-0',
        )}
      >
        {step.number}
      </span>

      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {step.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>

      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-md border shrink-0',
          'border-violet-200 bg-violet-50/60 text-violet-700',
          'dark:border-violet-700/60 dark:bg-violet-950/30 dark:text-violet-200',
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
    </article>
  );
};
