import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { RendererDiagram } from '../components/RendererDiagram';
import type { ReactDomContent } from '../content';

type Props = { content: ReactDomContent['hero'] };

export const ReactDomHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react-dom/src/client/ReactDOMRoot.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-renderer">
        <RendererDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
