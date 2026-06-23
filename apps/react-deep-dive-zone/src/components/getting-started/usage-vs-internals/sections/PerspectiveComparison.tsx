import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { UsageStep, UsageVsInternalsContent } from '../content';
import { CubeWireframeIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['perspectives'] };

const StepRow = ({ step }: { step: UsageStep }) => {
  return (
    <li>
      <article className="group flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-sm transition-colors hover:border-[var(--term-accent)]">
        <span
          className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full text-xxsm font-bold tabular-nums bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]"
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
  panel,
}: {
  panel: UsageVsInternalsContent['perspectives']['left'];
}) => {
  return (
    <div className="flex flex-col gap-md rounded-lg border p-md sm:p-lg min-w-0 border-[var(--term-border)] bg-[var(--term-surface)]">
      <header className="flex flex-col gap-0.5">
        <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-accent)]">
          {panel.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)]">{panel.subtitle}</p>
      </header>
      <ol className="flex flex-col gap-1.5">
        {panel.steps.map((step) => (
          <StepRow key={step.num} step={step} />
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
      className="space-y-lg"
    >
      <SectionHeader
        id="perspectives"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CubeWireframeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        <PerspectivePanel panel={content.left} />

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

        <PerspectivePanel panel={content.right} />
      </div>
    </section>
  );
};
