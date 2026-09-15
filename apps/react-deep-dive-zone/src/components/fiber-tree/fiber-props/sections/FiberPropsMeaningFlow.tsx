import { cx } from '@berrypjh/react-ui';
import { Clock, GitCompare, Hammer, Lightbulb, RefreshCw, Share2, Zap } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberPropsContent, MeaningStep } from '../content';

type Props = { content: FiberPropsContent['meaning'] };

const stepIconMap = {
  clock: Clock,
  zap: Zap,
  gitCompare: GitCompare,
} as const;

const caseIconMap = {
  refresh: RefreshCw,
  share: Share2,
  hammer: Hammer,
} as const;

const toFlowStep = (step: MeaningStep): FlowStepItem => {
  const Icon = stepIconMap[step.iconName];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: formatInline(step.body),
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const FiberPropsMeaningFlow = ({ content }: Props) => (
  <section id="meaning" aria-labelledby="heading-meaning" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="meaning"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <div>
      <h3 className="text-xxsm uppercase tracking-wider font-mono text-[var(--term-muted)] mb-sm">
        {`// ${content.casesLabel}`}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cases.map((item) => {
          const Icon = caseIconMap[item.iconName];
          return (
            <ToneCardItem key={item.id} tone={item.tone} icon={<Icon className="h-5 w-5" />}>
              <h4
                className={cx(
                  'text-sm font-bold tracking-tight break-keep',
                  toneTokens[item.tone].text,
                )}
              >
                {item.title}
              </h4>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {formatInline(item.body)}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.note}
    </SectionNote>
  </section>
);
