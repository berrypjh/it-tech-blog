import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { JsxHeroDiagram } from '../components/JsxHeroDiagram';
import type { JsxIsNotHtmlContent } from '../content';

type Props = { content: JsxIsNotHtmlContent['hero'] };

export const JsxHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/jsx-is-not-html.md"
    gridColumns="lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)]"
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

    <HeroVisualColumn id="hero-jsx">
      <JsxHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
