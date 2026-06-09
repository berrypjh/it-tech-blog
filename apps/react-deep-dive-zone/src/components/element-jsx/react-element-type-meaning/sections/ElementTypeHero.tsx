import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ElementTypeHeroDiagram } from '../components/ElementTypeHeroDiagram';
import type { ReactElementTypeMeaningContent } from '../content';

type Props = { content: ReactElementTypeMeaningContent['hero'] };

export const ElementTypeHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/src/jsx/ReactJSXElement.js"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-element-type">
      <ElementTypeHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
