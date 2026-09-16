import { Lightbulb } from 'lucide-react';

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

type Props = { content: RenderPhaseIntroContent['hero'] };

export const RenderPhaseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberWorkLoop.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
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

      <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />} className="mt-sm">
        {content.callout}
      </SectionNote>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-render-phase">
      <RenderPhaseHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
