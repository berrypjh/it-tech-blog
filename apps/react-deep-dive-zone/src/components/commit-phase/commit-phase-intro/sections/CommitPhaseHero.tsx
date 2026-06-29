import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { CommitPhaseHeroDiagram } from '../components/CommitPhaseHeroDiagram';
import type { CommitPhaseIntroContent } from '../content';

type Props = { content: CommitPhaseIntroContent['hero'] };

export const CommitPhaseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/commit-phase.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// what is the commit phase?'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
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

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-commit-phase-intro">
      <CommitPhaseHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
