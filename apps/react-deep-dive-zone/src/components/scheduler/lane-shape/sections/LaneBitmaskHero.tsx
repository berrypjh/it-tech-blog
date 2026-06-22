import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { LaneBitmaskHeroDiagram } from '../components/LaneBitmaskHeroDiagram';
import type { LaneBitmaskContent } from '../content';

type Props = { content: LaneBitmaskContent['hero'] };

export const LaneBitmaskHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/lane-bitmask.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // Lane / Lanes / pendingLanes'}</span>
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

      <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
        <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
        <span>SyncLane / DefaultLane / TransitionLane &rarr; bitmask</span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-lane-shape">
      <LaneBitmaskHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
