import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { JsxTransformHeroDiagram } from '../components/JsxTransformHeroDiagram';
import type { JsxTransformFlowContent } from '../content';

type Props = { content: JsxTransformFlowContent['hero'] };

export const JsxTransformHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/jsx-transform-flow.md"
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

    <HeroVisualColumn>
      <JsxTransformHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
