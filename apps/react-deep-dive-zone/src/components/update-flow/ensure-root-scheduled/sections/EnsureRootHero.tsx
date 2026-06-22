import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { EnsureRootHeroDiagram } from '../components/EnsureRootHeroDiagram';
import type { EnsureRootScheduledContent } from '../content';

type Props = { content: EnsureRootScheduledContent['hero'] };

export const EnsureRootHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="ensureRootIsScheduled"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberRootScheduler.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
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

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-ensure-root" className="min-w-0">
      <EnsureRootHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
