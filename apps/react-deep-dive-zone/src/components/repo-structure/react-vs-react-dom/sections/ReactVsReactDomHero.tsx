import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HeroComparePair } from '../components/HeroComparePair';
import type { ReactVsReactDomContent } from '../content';

type Props = { content: ReactVsReactDomContent['hero'] };

export const ReactVsReactDomHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react vs react-dom"
      gridColumns="lg:grid-cols-[minmax(0,_0.45fr)_minmax(0,_0.55fr)]"
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

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-compare">
        <HeroComparePair content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
