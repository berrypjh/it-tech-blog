import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { FunctionComponentHeroDiagram } from '../components/FunctionComponentHeroDiagram';
import type { FunctionComponentContent } from '../content';

type Props = { content: FunctionComponentContent['hero'] };

export const FunctionComponentHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/function-component-process.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// function component flow'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-function-component" className="min-w-0">
      <FunctionComponentHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
