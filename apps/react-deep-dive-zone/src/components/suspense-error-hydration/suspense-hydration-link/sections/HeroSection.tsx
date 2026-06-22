import {
  HeroDescription,
  HeroSection as HeroShell,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SuspenseHydrationHeroDiagram } from '../components/SuspenseHydrationHeroDiagram';
import type { SuspenseHydrationLinkContent } from '../content';

type Props = { content: SuspenseHydrationLinkContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/SuspenseHydration.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // Server Render · Hydration · Client Recovery → Suspense Boundary'}
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
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[42ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-suspense-hydration-link">
      <SuspenseHydrationHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
