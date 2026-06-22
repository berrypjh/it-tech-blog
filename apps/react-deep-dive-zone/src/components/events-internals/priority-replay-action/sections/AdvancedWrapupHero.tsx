import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { AdvancedWrapupHeroDiagram } from '../components/AdvancedWrapupHeroDiagram';
import type { AdvancedWrapupContent } from '../content';

type Props = { content: AdvancedWrapupContent['hero'] };

export const AdvancedWrapupHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/priority-replay-action.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // priority · hydration replay · form action'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-priority-replay-action">
      <AdvancedWrapupHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
