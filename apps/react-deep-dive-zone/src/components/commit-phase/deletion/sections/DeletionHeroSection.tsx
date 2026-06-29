import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { DeletionHeroDiagram } from '../components/DeletionHeroDiagram';
import type { DeletionContent } from '../content';

type Props = { content: DeletionContent['hero'] };

export const DeletionHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/deletion.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// cleanup pipeline'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.62fr)_minmax(0,_1.38fr)]"
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

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-deletion" className="min-w-0">
      <DeletionHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
