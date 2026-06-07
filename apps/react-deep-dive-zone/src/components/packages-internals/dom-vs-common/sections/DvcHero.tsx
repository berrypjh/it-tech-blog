import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SplitDiagram } from '../components/SplitDiagram';
import type { DvcContent } from '../content';

type Props = { content: DvcContent['hero'] };

export const DvcHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react-dom/README.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
      align="start"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-split">
        <SplitDiagram hero={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
