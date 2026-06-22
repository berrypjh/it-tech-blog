import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { RootPendingWorkHeroDiagram } from '../components/RootPendingWorkHeroDiagram';
import type { RootPendingWorkContent } from '../content';

type Props = { content: RootPendingWorkContent['hero'] };

export const RootPendingWorkHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/root-pending-work.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // fiber -> root.pendingLanes -> scheduler'}
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
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription>{content.subtitle}</HeroDescription>

      <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
        <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
        <span>Fiber update / root.pendingLanes / Root Scheduler</span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-root-pending-work">
      <RootPendingWorkHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
