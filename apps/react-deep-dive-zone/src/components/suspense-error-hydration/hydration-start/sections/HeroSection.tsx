import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HydrationStartHeroDiagram } from '../components/HydrationStartHeroDiagram';
import type { HydrationStartContent } from '../content';

type Props = { content: HydrationStartContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/ReactFiberHydrationContext.js"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // hydrateRoot → enterHydrationState → match'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
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

      <HeroDescription maxWidth="max-w-[48ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-hydration-start">
      <HydrationStartHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
