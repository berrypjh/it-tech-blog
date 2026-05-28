import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { BeforeMutationContent, SnapshotFlowStep } from '../content';
import { CameraIcon, EyeIcon } from '../icons';

type Props = { content: BeforeMutationContent['snapshot'] };

export const SnapshotConceptSection = ({ content }: Props) => (
  <section
    id="snapshot-concept"
    aria-labelledby="heading-snapshot-concept"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="snapshot-concept"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CameraIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)_minmax(0,_1.1fr)] gap-3 items-stretch">
      <DomStateCard
        title={content.beforeCard.title}
        items={content.beforeCard.items}
        variant="before"
      />
      <MiddleFlow steps={content.flowSteps} />
      <DomStateCard
        title={content.afterCard.title}
        items={content.afterCard.items}
        variant="after"
      />
    </div>
  </section>
);

const DomStateCard = ({
  title,
  items,
  variant,
}: {
  title: string;
  items: { label: string; value: string }[];
  variant: 'before' | 'after';
}) => {
  const isBefore = variant === 'before';
  const t = isBefore ? commitToneTokens.teal : commitToneTokens.orange;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-colors',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
          {title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isBefore ? 'snapshot src' : 'after mutation'}
        </span>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.label}
            className={cn(
              'flex items-center justify-between gap-2 rounded-xl border px-sm py-1.5',
              t.border,
              t.bgSoft,
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {item.label}
            </span>
            <code className={cn('text-xsm font-mono font-bold break-all', t.text)}>
              {item.value}
            </code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const MiddleFlow = ({ steps }: { steps: SnapshotFlowStep[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-b from-teal-50/40 via-white to-violet-50/30',
      'dark:from-teal-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/15',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] text-center">
      {'// snapshot lifecycle'}
    </span>
    <ol className="flex flex-col">
      {steps.map((step, idx) => (
        <li key={step.title} className="flex flex-col">
          <FlowStepCard step={step} index={idx + 1} />
          {idx < steps.length - 1 && (
            <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
              <span className="block h-3 w-px border-l border-dashed border-[var(--term-dim)]" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </article>
);

const FlowStepCard = ({ step, index }: { step: SnapshotFlowStep; index: number }) => {
  const t = commitToneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-start gap-2 rounded-xl border p-sm',
        step.active ? cn('border-2', t.borderStrong, t.bg) : cn(t.border, 'bg-[var(--term-bg)]'),
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-mono font-bold tabular-nums',
          step.active ? cn(t.chipSolid, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30') : t.chip,
        )}
      >
        {step.active ? <EyeIcon className="h-3.5 w-3.5" /> : String(index)}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span
          className={cn(
            'text-xsm sm:text-sm font-bold leading-tight break-keep',
            step.active ? t.textStrong : 'text-[var(--term-fg)]',
          )}
        >
          {step.title}
        </span>
        {step.description && (
          <span className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {step.description}
          </span>
        )}
      </div>
    </div>
  );
};
