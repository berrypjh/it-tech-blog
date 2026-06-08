import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as SharedHeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ReconstructHeroDiagram } from '../components/ReconstructHeroDiagram';
import type { ReconstructContent } from '../content';

type Props = { content: ReconstructContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <SharedHeroSection
    promptCommand="cat"
    promptPath="source-reading-checklist/reconstruct-with-words-and-flow.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // read code → compress flow → explain in my words'}
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
        <span className="block">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
        {content.supporting}
      </p>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-reconstruct-with-words-and-flow">
      <ReconstructHeroDiagram content={content} />
    </HeroVisualColumn>
  </SharedHeroSection>
);
