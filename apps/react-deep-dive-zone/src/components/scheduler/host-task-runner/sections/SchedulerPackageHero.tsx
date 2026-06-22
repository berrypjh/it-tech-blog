import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SchedulerPackageHeroDiagram } from '../components/SchedulerPackageHeroDiagram';
import type { SchedulerPackageContent } from '../content';

type Props = { content: SchedulerPackageContent['hero'] };

export const SchedulerPackageHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="scheduler/package-role.md"
    gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // Root Scheduler is not scheduler package'}
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

    <HeroVisualColumn id="hero-host-task-runner">
      <SchedulerPackageHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
