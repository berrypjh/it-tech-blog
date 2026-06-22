import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { LaneUpdateHeroDiagram } from '../components/LaneUpdateHeroDiagram';
import type { LaneUpdateObjectContent } from '../content';

type Props = { content: LaneUpdateObjectContent['hero'] };

export const LaneUpdateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="dispatchSetStateInternal"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberHooks.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-lane-update" className="min-w-0">
      <LaneUpdateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
