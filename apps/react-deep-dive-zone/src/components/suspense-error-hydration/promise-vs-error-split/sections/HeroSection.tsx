import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { PromiseErrorSplitHeroDiagram } from '../components/PromiseErrorSplitHeroDiagram';
import type { PromiseVsErrorSplitContent } from '../content';

type Props = { content: PromiseVsErrorSplitContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/ReactFiberThrow.js"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // throwException → thenable | regular error'}
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
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-promise-error-split">
      <PromiseErrorSplitHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
