import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { LayoutHeroDiagram } from '../components/LayoutHeroDiagram';
import type { LayoutPhaseContent } from '../content';

type Props = { content: LayoutPhaseContent['hero'] };

export const LayoutHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/layout-phase.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// mutation → layout → paint'}</span>}
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
        <span className="block">{content.title.line4}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-layout-phase" className="min-w-0">
      <LayoutHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
