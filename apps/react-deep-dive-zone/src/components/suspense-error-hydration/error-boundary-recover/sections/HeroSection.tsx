import {
  HeroDescription,
  HeroSection as HeroShell,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ErrorBoundaryHeroDiagram } from '../components/ErrorBoundaryHeroDiagram';
import type { ErrorBoundaryRecoverContent } from '../content';

type Props = { content: ErrorBoundaryRecoverContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/ReactFiberThrow.js"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // throw → ShouldCapture → captured update → fallback'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[42ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-error-boundary">
      <ErrorBoundaryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
