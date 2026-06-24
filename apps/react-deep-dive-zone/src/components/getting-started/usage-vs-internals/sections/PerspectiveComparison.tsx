import { CompareVs } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { StepNumberBadge } from '../../../shared/step';
import { formatInline } from '../../../shared/text';
import type { UsageStep, UsageVsInternalsContent } from '../content';
import { CubeWireframeIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['perspectives'] };

const StepRow = ({ step }: { step: UsageStep }) => {
  return (
    <li>
      <article className="group flex items-start gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-sm transition-all hover:-translate-y-0.5">
        <StepNumberBadge>{step.num}</StepNumberBadge>
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

        <CompareVs />

        <PerspectivePanel panel={content.right} />
      </div>
    </section>
  );
};
