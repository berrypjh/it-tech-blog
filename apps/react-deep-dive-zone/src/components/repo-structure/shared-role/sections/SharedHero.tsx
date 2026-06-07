import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SharedHubDiagram } from '../components/SharedHubDiagram';
import type { SharedContent } from '../content';

type Props = { content: SharedContent['hero'] };

export const SharedHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="ls"
      promptPath="packages/shared"
      gridColumns="lg:grid-cols-[minmax(0,_0.46fr)_minmax(0,_0.54fr)]"
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

      <HeroVisualColumn id="hero-shared">
        <SharedHubDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
