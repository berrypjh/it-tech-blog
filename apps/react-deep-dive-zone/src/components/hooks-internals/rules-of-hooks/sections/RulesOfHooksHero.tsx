import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RulesOfHooksHeroDiagram } from '../components/RulesOfHooksHeroDiagram';
import type { RulesOfHooksContent } from '../content';

type Props = { content: RulesOfHooksContent['hero'] };

export const RulesOfHooksHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react/hooks/rules-of-hooks.md"
      promptSuffix={<span className="text-[var(--term-dim)]"> {'// hook order is identity'}</span>}
      gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
      align="center"
    >
      {/* Left: text */}
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.titleLine1}</span>
          <span className="block text-[var(--term-accent)]">{content.titleAccent}</span>
        </HeroTitle>
        <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>
      </HeroTextColumn>

      {/* Right: diagram */}
      <HeroVisualColumn id="hero-rules-of-hooks">
        <RulesOfHooksHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
