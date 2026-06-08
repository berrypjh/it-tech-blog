import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { StateNodeHeroDiagram } from '../components/StateNodeHeroDiagram';
import type { FiberStateNodeContent } from '../content';

type Props = { content: FiberStateNodeContent['hero'] };

export const StateNodeHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberRoot.js"
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

      <HeroDescription maxWidth="max-w-[62ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-fiber-state-node">
      <StateNodeHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
