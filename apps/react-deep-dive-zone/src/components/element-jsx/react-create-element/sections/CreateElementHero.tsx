import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { CreateElementHeroDiagram } from '../components/CreateElementHeroDiagram';
import type { ReactCreateElementContent } from '../content';

type Props = { content: ReactCreateElementContent['hero'] };

export const CreateElementHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/src/jsx/ReactJSXElement.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block break-words font-mono text-[var(--term-accent)]">
          {content.title.line2}
        </span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-create-element">
      <CreateElementHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
