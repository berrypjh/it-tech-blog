import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { RequestUpdateLaneHeroDiagram } from '../components/RequestUpdateLaneHeroDiagram';
import type { RequestUpdateLaneContent } from '../content';

type Props = { content: RequestUpdateLaneContent['hero'] };

export const RequestUpdateLaneHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/request-update-lane.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // setState -> context -> lane'}</span>
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
        <span>click / startTransition / render &rarr; lane</span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-update-to-lane">
      <RequestUpdateLaneHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
