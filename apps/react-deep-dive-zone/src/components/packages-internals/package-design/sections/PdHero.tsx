import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { PdHeroDiagram } from '../components/PdHeroDiagram';
import type { PackageDesignContent } from '../content';

type Props = { content: PackageDesignContent['hero'] };

export const PdHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/README.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.8fr)_minmax(0,_1.2fr)]"
      align="center"
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
        <PdHeroDiagram main={content.main} a11y={content.a11y} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
