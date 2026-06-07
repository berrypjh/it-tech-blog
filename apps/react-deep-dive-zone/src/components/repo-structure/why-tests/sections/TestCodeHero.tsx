import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HeroCodeComparison } from '../components/HeroCodeComparison';
import type { TestCodeContent } from '../content';

type Props = { content: TestCodeContent['hero'] };

export const TestCodeHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="src/__tests__"
      gridColumns="lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_0.58fr)]"
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
          {content.title.line4 && <span className="block">{content.title.line4}</span>}
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-compare">
        <HeroCodeComparison content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
