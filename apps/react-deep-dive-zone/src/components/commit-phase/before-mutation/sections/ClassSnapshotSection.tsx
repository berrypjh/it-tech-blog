import { cx } from '@berrypjh/react-ui';
import {
  Archive,
  ArrowDown,
  Box,
  FunctionSquare,
  GitBranch,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, ClassSnapshotStep } from '../content';

type Props = { content: BeforeMutationContent['classSnapshot'] };

const iconMap: Record<ClassSnapshotStep['id'], LucideIcon> = {
  box: Box,
  function: FunctionSquare,
  archive: Archive,
};

export const ClassSnapshotSection = ({ content }: Props) => (
  <section
    id="class-snapshot"
    aria-labelledby="heading-class-snapshot"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="class-snapshot"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} index={idx + 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const StepCard = ({ step, index }: { step: ClassSnapshotStep; index: number }) => {
  const Icon = iconMap[step.id];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'group grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={step.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <h3
        className={cx(
          'text-sm sm:text-md font-bold leading-tight break-all font-mono',
          t.fill.text,
        )}
      >
        {step.title}
      </h3>
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
