import { cx } from '@berrypjh/react-ui';
import { Atom, Boxes, Code, type LucideIcon, Monitor, Workflow } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep, PackageDesignContent } from '../content';

type Props = { content: PackageDesignContent['userFlow'] };

const stepIcon: Record<FlowStep['id'], LucideIcon> = {
  jsx: Code,
  react: Atom,
  reconciler: Boxes,
  'react-dom': Monitor,
};

const toFlowStep = (step: FlowStep, index: number): FlowStepItem => {
  const Icon = stepIcon[step.id];
  return {
    id: step.id,
    number: String(index + 1),
    title: step.title,
    body: (
      <>
        <span className={cx('font-mono font-bold', toneTokens[step.tone].text)}>→ {step.pkg}</span>
        <br />
        {step.description}
      </>
    ),
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const UserFlowSection = ({ content }: Props) => {
  return (
    <section id="user-flow" aria-labelledby="heading-user-flow" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="user-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
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
    className={cx(
      'flex flex-col gap-1 rounded-xl border-2 border-dashed p-md',
      'border-[var(--term-border)] bg-[var(--term-surface)]',
      'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
    )}
  >
    <h3 className={cx('text-sm font-bold font-mono tracking-tight', toneTokens[tone].text)}>
      {title}
    </h3>
    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
  </article>
);
