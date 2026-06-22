import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { UseReducerSharedHeroDiagram } from '../components/UseReducerSharedHeroDiagram';
import type { UseReducerSharedContent } from '../content';

type Props = { content: UseReducerSharedContent['hero'] };

export const UseReducerSharedHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/use-reducer-shared.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]"> {'// useState ↔ shared ↔ useReducer'}</span>
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
      <HeroDescription maxWidth="max-w-[55ch]" className="whitespace-pre-line">
        {content.description}
      </HeroDescription>
    </HeroTextColumn>

    {/* Right: useState ↔ shared ↔ useReducer diagram */}
    <HeroVisualColumn id="hero-use-reducer-shared">
      <UseReducerSharedHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
