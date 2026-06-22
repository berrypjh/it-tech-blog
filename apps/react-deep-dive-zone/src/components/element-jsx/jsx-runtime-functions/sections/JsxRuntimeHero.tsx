import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { JsxRuntimeHeroDiagram } from '../components/JsxRuntimeHeroDiagram';
import type { JsxRuntimeFunctionsContent } from '../content';

type Props = { content: JsxRuntimeFunctionsContent['hero'] };

export const JsxRuntimeHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/jsx-runtime-functions.md"
    gridColumns="lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)]"
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

    <HeroVisualColumn id="hero-jsx-runtime">
      <JsxRuntimeHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
