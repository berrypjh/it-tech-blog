import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep, PackageDesignContent } from '../content';
import { pdIcon } from '../icons';

type Props = { content: PackageDesignContent['userFlow'] };

const toFlowStep = (step: FlowStep, index: number): FlowStepItem => {
  const Icon = pdIcon[step.iconName];
  return {
    id: step.id,
    number: String(index + 1),
    title: step.title,
    body: (
      <>
        <span className={cn('font-mono font-bold', toneTokens[step.tone].text)}>→ {step.pkg}</span>
        <br />
        {step.description}
      </>
    ),
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const UserFlowSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-user-flow" className="space-y-md">
      <SectionHeader
        id="user-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<pdIcon.workflow className="h-5 w-5" />}
      />

      <CodePreviewPanel header={content.codeCaption} code={content.code} />

      <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <SideAxisCard
          title={content.sideScheduler.title}
          body={content.sideScheduler.description}
          tone="cyan"
        />
        <SideAxisCard
          title={content.sideShared.title}
          body={content.sideShared.description}
          tone="amber"
        />
      </div>
    </section>
  );
};

const SideAxisCard = ({ title, body, tone }: { title: string; body: string; tone: ToneKey }) => (
  <article
    className={cn(
      'flex flex-col gap-1 rounded-xl border-2 border-dashed p-md',
      'border-[var(--term-border)] bg-[var(--term-surface)]',
      'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
    )}
  >
    <h3 className={cn('text-sm font-bold font-mono tracking-tight', toneTokens[tone].text)}>
      {title}
    </h3>
    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
  </article>
);
