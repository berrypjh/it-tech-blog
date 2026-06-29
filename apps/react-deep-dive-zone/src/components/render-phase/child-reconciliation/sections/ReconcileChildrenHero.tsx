import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { ReconcileChildrenHeroDiagram } from '../components/ReconcileChildrenHeroDiagram';
import type { ReconcileChildrenContent } from '../content';

type Props = { content: ReconcileChildrenContent['hero'] };

export const ReconcileChildrenHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/child-reconciliation.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// reconciler entry'}</span>}
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-child-reconciliation" className="min-w-0">
      <ReconcileChildrenHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
