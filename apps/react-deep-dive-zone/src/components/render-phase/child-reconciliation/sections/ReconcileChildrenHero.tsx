import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { ReconcileChildrenHeroDiagram } from '../components/ReconcileChildrenHeroDiagram';
import type { ReconcileChildrenContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['hero'] };

export const ReconcileChildrenHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/child-reconciliation.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// reconciler entry'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
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
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-child-reconciliation" className="min-w-0">
      <ReconcileChildrenHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
