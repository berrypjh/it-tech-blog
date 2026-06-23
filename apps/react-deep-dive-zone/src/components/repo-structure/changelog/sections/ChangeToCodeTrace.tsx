import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChangelogContent, TraceStep } from '../content';
import { iconByName, SparklesIcon } from '../icons';

type Props = { content: ChangelogContent['trace'] };

export const ChangeToCodeTrace = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-trace" className="space-y-md">
      <SectionHeader
        id="trace"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ol className="relative flex flex-col gap-md">
        <span
          aria-hidden="true"
          className="hidden sm:block absolute left-[22px] top-3 bottom-3 w-px bg-[var(--term-border)]"
        />
        {content.steps.map((step, idx) => (
          <li key={step.id}>
            <StepCard step={step} index={idx} />
          </li>
        ))}
      </ol>
    </section>
  );
};

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

type StepProps = { step: TraceStep; index: number };

const StepCard = ({ step, index }: StepProps) => {
  const tone = toneTokens[toneCycle[index % toneCycle.length]];
  const Icon = iconByName[step.icon];

  return (
    <article
      className={cn(
        'relative flex items-start gap-md rounded-lg border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'p-md transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      {/* 원형 번호 */}
      <span
        aria-hidden="true"
        className={cn(
          'relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-full',
          'border-2 font-bold text-sm tabular-nums shrink-0',
          tone.chip,
          tone.border,
        )}
      >
        {step.number}
      </span>

      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className={cn('text-[10px] uppercase tracking-wider font-bold', tone.text)}>
          {step.label}
        </span>
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
          'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
    </article>
  );
};
