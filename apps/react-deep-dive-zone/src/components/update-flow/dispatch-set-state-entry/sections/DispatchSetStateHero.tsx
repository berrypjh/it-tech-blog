import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { DispatchSetStateHeroDiagram } from '../components/DispatchSetStateHeroDiagram';
import type { DispatchSetStateEntryContent } from '../content';

type Props = { content: DispatchSetStateEntryContent['hero'] };

export const DispatchSetStateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="dispatchSetState"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberHooks.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <div className="flex flex-wrap items-center gap-2 pt-2 text-xxsm font-mono text-[var(--term-muted)]">
        <span className="rounded-md border border-emerald-300/70 bg-emerald-50/70 px-2 py-0.5 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
          setCount
        </span>
        <span className="text-[var(--term-dim)]">→</span>
        <span className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[var(--term-accent)]">
          dispatchSetState
        </span>
        <span className="text-[var(--term-dim)]">→</span>
        <span className="rounded-md border border-violet-300/70 bg-violet-50/70 px-2 py-0.5 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200">
          internal
        </span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-dispatch-set-state-entry" className="min-w-0">
      <DispatchSetStateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
