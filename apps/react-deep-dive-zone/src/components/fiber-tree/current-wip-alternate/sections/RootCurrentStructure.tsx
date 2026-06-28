import { cn } from '@it-tech-blog/utils';

import { DownArrow } from '../../../shared/icon';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CurrentWipAlternateContent } from '../content';
import { LightbulbIcon, NetworkIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['rootCurrent'] };
type Step = CurrentWipAlternateContent['rootCurrent']['steps'][number];

export const RootCurrentStructure = ({ content }: Props) => (
  <section
    id="root-current"
    aria-labelledby="heading-root-current"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="root-current"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col items-center gap-1">
        {content.steps.map((step, idx) => (
          <li key={step.id} className="flex flex-col items-center">
            <StepBox step={step} />
            {idx < content.steps.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>

      <SectionNote className="mt-md" icon={<LightbulbIcon className="h-4 w-4" />}>
        {content.emphasis}
      </SectionNote>
    </article>
  </section>
);

const StepBox = ({ step }: { step: Step }) => {
  const t = step.tone ? toneTokens[step.tone] : null;
  return (
    <article
      className={cn(
        'min-w-[180px] rounded-xl border px-4 py-2 text-center bg-[var(--term-surface)]',
        t ? t.border : 'border-[var(--term-border)]',
      )}
    >
      <code className={cn('font-mono text-xsm font-bold', t ? t.text : 'text-[var(--term-fg)]')}>
        {step.label}
      </code>
      {step.subtitle && (
        <span className="mt-0.5 block font-mono text-[10px] text-[var(--term-muted)]">
          {step.subtitle}
        </span>
      )}
    </article>
  );
};
