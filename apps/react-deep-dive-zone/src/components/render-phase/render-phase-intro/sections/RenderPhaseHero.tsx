import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { SectionNote } from '../../../shared/note';
import { TerminalBadge } from '../../../shared/terminal';
import { RenderPhaseHeroDiagram } from '../components/RenderPhaseHeroDiagram';
import type { RenderPhaseIntroContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['hero'] };

export const RenderPhaseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/render-phase.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// what is the render phase?'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.88fr)_minmax(0,_1.12fr)]"
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

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <SectionNote icon={<LightbulbIcon className="h-4 w-4" />} className="mt-sm">
        {content.callout}
      </SectionNote>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-render-phase-intro" className="min-w-0">
      <RenderPhaseHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
