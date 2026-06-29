import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { CommitRootHeroDiagram } from '../components/CommitRootHeroDiagram';
import type { CommitRootContent } from '../content';

type Props = { content: CommitRootContent['hero'] };

export const CommitRootHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/commit-root.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// finishedWork → commitRoot'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
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

    <HeroVisualColumn id="hero-commit-root" className="min-w-0">
      <CommitRootHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
