import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { React19HooksHeroDiagram } from '../components/React19HooksHeroDiagram';
import type { React19HooksContent } from '../content';

type Props = { content: React19HooksContent['hero'] };

export const React19HooksHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/hooks-in-19.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]"> {'// extensions on the same foundation'}</span>
    }
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

    {/* Right: foundation → extends → new API cards */}
    <HeroVisualColumn id="hero-hooks-in-19">
      <React19HooksHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
