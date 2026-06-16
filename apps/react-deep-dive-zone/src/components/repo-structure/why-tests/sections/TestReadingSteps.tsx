import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReadingStep, TestCodeContent } from '../content';
import { ArrowRightIcon, iconByName, ListChecksIcon } from '../icons';

const neutralChip =
  'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]';

type Props = { content: TestCodeContent['steps'] };

export const TestReadingSteps = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-steps" className="space-y-md">
      <SectionHeader
        id="steps"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
        {content.steps.map((step, idx) => (
          <StepWithArrow key={step.number} step={step} isLast={idx === content.steps.length - 1} />
        ))}
      </ol>
    </section>
  );
};

type WithArrowProps = { step: ReadingStep; isLast: boolean };

const StepWithArrow = ({ step, isLast }: WithArrowProps) => (
  <>
    <StepCard step={step} />
    {!isLast && <StepArrow />}
  </>
);

const StepArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <ArrowRightIcon className="hidden lg:inline-flex h-5 w-5 text-[var(--term-accent)]" />
    <ArrowRightIcon className="inline-flex lg:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]" />
  </div>
);

type StepCardProps = { step: ReadingStep };

const StepCard = ({ step }: StepCardProps) => {
  const Icon = iconByName[step.icon];

  return (
    <article
      className={cn(
        'group flex flex-col gap-md h-full w-full rounded-lg border p-md',
        'bg-[var(--term-bg)] border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)] hover:shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full border-2 font-bold text-sm tabular-nums',
            neutralChip,
          )}
        >
          {step.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            neutralChip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>

      <h3 className="text-sm sm:text-md font-bold tracking-tight break-keep whitespace-pre-line text-[var(--term-accent)]">
        {step.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
        {step.description}
      </p>
    </article>
  );
};
