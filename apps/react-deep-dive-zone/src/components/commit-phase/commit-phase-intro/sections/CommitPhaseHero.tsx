import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { CommitPhaseHeroDiagram } from '../components/CommitPhaseHeroDiagram';
import type { CommitPhaseIntroContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: CommitPhaseIntroContent['hero'] };

export const CommitPhaseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/commit-phase.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// what is the commit phase?'}</span>}
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

      <HeroDescription>{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.insight}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-commit-phase-intro">
      <CommitPhaseHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
