import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { HeroPriorityCards } from '../components/HeroPriorityCards';
import type { SchedulerContent } from '../content';

type Props = { content: SchedulerContent['hero'] };

export const SchedulerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="ls"
      promptPath="packages/scheduler"
      gridColumns="lg:grid-cols-[minmax(0,_0.46fr)_minmax(0,_0.54fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
          <span className="block">{content.title.line3}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-priority">
        <HeroPriorityCards content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
