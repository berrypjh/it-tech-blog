import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RootSchedulerHeroDiagram } from '../components/RootSchedulerHeroDiagram';
import type { RootSchedulerContent } from '../content';

type Props = { content: RootSchedulerContent['hero'] };

export const RootSchedulerHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/root-scheduler.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // pendingLanes -> nextLanes -> sync - async'}
      </span>
    }
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription>{content.subtitle}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-pick-next-work">
      <RootSchedulerHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
