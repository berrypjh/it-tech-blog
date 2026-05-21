import { HeroDescription } from '../../../start/_shared/HeroDescription';
import { HeroSection } from '../../../start/_shared/HeroSection';
import { HeroTextColumn } from '../../../start/_shared/HeroTextColumn';
import { HeroTitle } from '../../../start/_shared/HeroTitle';
import { HeroVisualColumn } from '../../../start/_shared/HeroVisualColumn';
import { TerminalBadge } from '../../../start/_shared/TerminalBadge';
import { SharedHubDiagram } from '../components/SharedHubDiagram';
import type { SharedContent } from '../content';

type Props = { content: SharedContent['hero'] };

export const SharedHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/shared/ReactSymbols.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
      align="start"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.chapterBadge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-shared">
        <SharedHubDiagram hero={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
