import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { QueueFlowDiagram } from '../components/QueueFlowDiagram';
import type { SchedulerContent } from '../content';

type Props = { content: SchedulerContent['hero'] };

export const SchedulerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/scheduler/src/forks/Scheduler.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
          {content.title.line3 && <span className="block">{content.title.line3}</span>}
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-queue">
        <QueueFlowDiagram hero={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
