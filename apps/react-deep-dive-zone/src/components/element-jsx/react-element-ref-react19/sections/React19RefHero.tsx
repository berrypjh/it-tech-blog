import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { React19RefHeroDiagram } from '../components/React19RefHeroDiagram';
import type { ReactElementRefReact19Content } from '../content';

type Props = { content: ReactElementRefReact19Content['hero'] };

export const React19RefHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/src/ReactBaseClasses.js"
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

    <HeroVisualColumn id="hero-react19-ref">
      <React19RefHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
