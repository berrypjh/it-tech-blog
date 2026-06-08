import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { MismatchRecoverHeroDiagram } from '../components/MismatchRecoverHeroDiagram';
import type { MismatchDetectRecoverContent } from '../content';

type Props = { content: MismatchDetectRecoverContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/ReactFiberHydrationContext.js"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // mismatch → throwOnHydrationMismatch → onRecoverableError'}
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

    <HeroVisualColumn id="hero-mismatch-recover">
      <MismatchRecoverHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
