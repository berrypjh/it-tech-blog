import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { EnqueueHeroDiagram } from '../components/EnqueueHeroDiagram';
import type { EnqueueConcurrentHookUpdateContent } from '../content';

type Props = { content: EnqueueConcurrentHookUpdateContent['hero'] };

export const EnqueueHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="enqueueConcurrentHookUpdate"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberConcurrentUpdates.js
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
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <div className="flex flex-wrap items-center gap-2 pt-2 text-xxsm font-mono text-[var(--term-muted)]">
        <span className="rounded-md border border-sky-300/70 bg-sky-50/70 px-2 py-0.5 text-sky-700 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200">
          fiber
        </span>
        <span className="rounded-md border border-emerald-300/70 bg-emerald-50/70 px-2 py-0.5 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
          queue
        </span>
        <span className="rounded-md border border-violet-300/70 bg-violet-50/70 px-2 py-0.5 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200">
          update
        </span>
        <span className="rounded-md border border-amber-300/70 bg-amber-50/70 px-2 py-0.5 text-amber-700 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-200">
          lane
        </span>
        <span className="text-[var(--term-dim)]">→</span>
        <span className="rounded-md border border-slate-800 bg-slate-950 px-2 py-0.5 text-slate-100">
          enqueue…
        </span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-enqueue-concurrent" className="min-w-0">
      <EnqueueHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
