import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, ClassSnapshotStep } from '../content';
import {
  ArchiveIcon,
  ArrowDownIcon,
  BoxIcon,
  FunctionIcon,
  GitBranchIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: BeforeMutationContent['classSnapshot'] };

const iconMap: Record<ClassSnapshotStep['iconName'], typeof BoxIcon> = {
  box: BoxIcon,
  function: FunctionIcon,
  archive: ArchiveIcon,
};

export const ClassSnapshotSection = ({ content }: Props) => (
  <section
    id="class-snapshot"
    aria-labelledby="heading-class-snapshot"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="class-snapshot"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-lg border p-md',
          toneTokens.violet.fill.border,
          toneTokens.violet.fill.bg,
        )}
      >
        <ToneIconBox tone="violet" size="sm">
          <LightbulbIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn(
            'text-xsm sm:text-sm leading-relaxed break-keep',
            toneTokens.violet.fill.text,
          )}
        >
          {content.description}
        </p>
      </aside>
    </article>
  </section>
);

const StepCard = ({ step, index }: { step: ClassSnapshotStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'group grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <ToneIconBox tone={step.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-all font-mono',
          t.fill.text,
        )}
      >
        {step.title}
      </h3>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
