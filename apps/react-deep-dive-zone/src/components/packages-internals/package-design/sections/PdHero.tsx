import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FinalArchitectureDiagram } from '../components/FinalArchitectureDiagram';
import type { PackageDesignContent } from '../content';

type Props = { content: PackageDesignContent['hero'] };

export const PdHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/README.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.8fr)_minmax(0,_1.2fr)]"
      align="start"
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

      <HeroVisualColumn id="hero-final">
        <FinalArchitectureDiagram
          main={content.main}
          scheduler={content.sideScheduler}
          shared={content.sideShared}
          a11y={content.a11y}
          compact
        />
      </HeroVisualColumn>
    </HeroSection>
  );
};
