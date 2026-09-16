import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { SummaryHeroDiagram } from '../components/SummaryHeroDiagram';
import type { UpdateToRenderSummaryContent } from '../content';

type Props = { content: UpdateToRenderSummaryContent['hero'] };

export const SummaryHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberWorkLoop.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-update-to-render">
      <SummaryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
