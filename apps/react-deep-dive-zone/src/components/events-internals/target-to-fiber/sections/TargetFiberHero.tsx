import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { TargetFiberHeroDiagram } from '../components/TargetFiberHeroDiagram';
import type { TargetFiberContent } from '../content';

type Props = { content: TargetFiberContent['hero'] };

const renderHighlighted = (line: string) => {
  const parts = line.split(/(Fiber)/);
  return parts.map((part, i) =>
    part === 'Fiber' ? (
      <span key={i} className="text-[var(--term-accent)]">
        Fiber
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
};

export const TargetFiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/target-to-fiber.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // event.target → findInstanceBlockingTarget → return_targetInst'}
      </span>
    }
    gridColumns="lg:grid-cols-1"
    align="center"
  >
    <HeroTextColumn className="max-w-[68ch]">
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">
          {renderHighlighted(content.titleLines[1])}
        </span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-target-to-fiber">
      <TargetFiberHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
