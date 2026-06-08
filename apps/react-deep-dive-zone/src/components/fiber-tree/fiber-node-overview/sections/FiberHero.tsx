import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FiberHeroDiagram } from '../components/FiberHeroDiagram';
import type { FiberNodeOverviewContent } from '../content';
import { CircuitBoardIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['hero'] };

export const FiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactInternalTypes.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      <div className="flex items-center gap-sm pt-xs text-xxsm text-[var(--term-muted)]">
        <CircuitBoardIcon className="h-4 w-4 text-[var(--term-accent)]" aria-hidden="true" />
        <span className="font-mono">
          {'// '}
          <span className="text-[var(--term-accent)] font-bold">{content.emphasis}</span>
        </span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-fiber-node">
      <FiberHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
