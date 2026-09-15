import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { accentPhrase } from '../../../shared/text';
import { LanesHeroDiagram } from '../components/LanesHeroDiagram';
import type { FiberLanesContent } from '../content';

type Props = { content: FiberLanesContent['hero'] };

export const LanesHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberLane.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{accentPhrase(content.title.line1, content.emphasis)}</span>
        <span className="block">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[62ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-fiber-lanes">
      <LanesHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
