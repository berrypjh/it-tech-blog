import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { TransitionDeferredHeroDiagram } from '../components/TransitionDeferredHeroDiagram';
import type { TransitionDeferredContent } from '../content';

type Props = { content: TransitionDeferredContent['hero'] };

export const TransitionDeferredHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/transition-deferred.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // input -> instant - list -> deferred'}</span>
    }
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

      <HeroDescription>{content.subtitle}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-transition-deferred-split">
      <TransitionDeferredHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
