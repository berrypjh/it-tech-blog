import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ReconcilerHeroDiagram } from '../components/ReconcilerHeroDiagram';
import type { ReconcilerEntryContent } from '../content';

type Props = { content: ReconcilerEntryContent['hero'] };

export const ReconcilerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-reconciler"
      gridColumns="lg:grid-cols-[minmax(0,_0.44fr)_minmax(0,_0.56fr)]"
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
          <span className="block">{content.title.line4}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-reconciler">
        <ReconcilerHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
