import { Code2, FileCode, Lightbulb, type LucideIcon, Route, Settings2, Split } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FlowStepId, HooksEntryPointContent } from '../content';

type Props = { content: HooksEntryPointContent['overview'] };

const stepIcon: Record<FlowStepId, LucideIcon> = {
  user: Code2,
  'public-api': FileCode,
  resolve: Route,
  dispatch: Split,
  impl: Settings2,
};

export const HookEntryFlowOverview = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      num: step.num,
      tone: step.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: step.title,
      description: step.description,
      extra: step.file ? (
        <div className="col-span-full md:col-auto flex flex-col gap-0.5 min-w-0">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} {content.fileLabel}
          </span>
          <code className="font-mono text-[11px] text-[var(--term-fg)] break-all">{step.file}</code>
        </div>
      ) : undefined,
    };
  });

  return (
    <section
      id="entry-flow"
      aria-labelledby="heading-entry-flow"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="entry-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList
        rows={rows}
        rowClassName="md:grid-cols-[auto_auto_minmax(0,1fr)_minmax(0,0.9fr)]"
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
