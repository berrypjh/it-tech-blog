import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { UsageStep, UsageVsInternalsContent } from '../content';
import { CubeWireframeIcon } from '../icons';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['perspectives'] };

type PerspectiveTone = 'usage' | 'internal';

const toneClasses: Record<
  PerspectiveTone,
  { title: string; subtitle: string; cardBg: string; badge: string; cardBorder: string }
> = {
  usage: {
    title: 'text-[var(--term-accent)]',
    subtitle: 'text-[var(--term-muted)]',
    cardBg: 'bg-[var(--term-surface)]',
    cardBorder: 'border-[var(--term-border)]',
    badge: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
  },
  internal: {
    title: 'text-[var(--term-accent)]',
    subtitle: 'text-[var(--term-muted)]',
    cardBg: 'bg-[var(--term-surface)]',
    cardBorder: 'border-[var(--term-border)]',
    badge: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
  },
};

const StepRow = ({ step, tone }: { step: UsageStep; tone: PerspectiveTone }) => {
  const t = toneClasses[tone];
  return (
    <li>
      <article className="group flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-sm transition-colors hover:border-[var(--term-accent)]">
        <span
          className={cn(
            'inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full text-xxsm font-bold tabular-nums',
            t.badge,
          )}
          aria-hidden="true"
        >
          {step.num}
        </span>
        <div className="min-w-0 flex flex-col gap-0.5">
          <h4 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] leading-tight">
            {step.title}
          </h4>
          <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {formatInline(step.body)}
          </p>
        </div>
      </article>
    </li>
  );
};

const PerspectivePanel = ({
  tone,
  panel,
}: {
  tone: PerspectiveTone;
  panel: UsageVsInternalsContent['perspectives']['left'];
}) => {
  const t = toneClasses[tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-md rounded-lg border p-md sm:p-lg min-w-0',
        t.cardBorder,
        t.cardBg,
      )}
    >
      <header className="flex flex-col gap-0.5">
        <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.title)}>
          {panel.title}
        </h3>
        <p className={cn('text-xsm leading-relaxed', t.subtitle)}>{panel.subtitle}</p>
      </header>
      <ol className="flex flex-col gap-1.5">
        {panel.steps.map((step) => (
          <StepRow key={step.num} step={step} tone={tone} />
        ))}
      </ol>
    </div>
  );
};

export const PerspectiveComparison = ({ content }: Props) => {
  return (
    <section
      id="section-perspectives"
      aria-labelledby="heading-perspectives"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="perspectives"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CubeWireframeIcon className="h-5 w-5" />}
      />

      {/* 좌우 카드 + 중앙 VS */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        <PerspectivePanel tone="usage" panel={content.left} />

        {/* VS */}
        <div className="relative flex lg:flex-col items-center justify-center py-md">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
          />
          <span
            aria-hidden="true"
            className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
          />
          <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-xxsm font-bold tracking-wider text-[var(--term-muted)] shadow-[0_2px_0_var(--term-border)]">
            Vs
          </span>
        </div>

        <PerspectivePanel tone="internal" panel={content.right} />
      </div>
    </section>
  );
};
