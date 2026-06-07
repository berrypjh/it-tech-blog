import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FiberObjectGroupCard } from '../components/FiberObjectGroupCard';
import type { FiberNodeOverviewContent } from '../content';
import { CircuitBoardIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['hero'] };

export const FiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactInternalTypes.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      <div className="flex items-center gap-sm pt-xs text-xxsm text-[var(--term-muted)]">
        <CircuitBoardIcon className="h-4 w-4 text-[var(--term-accent)]" aria-hidden="true" />
        <span className="font-mono">
          {'// '}
          <span className="text-[var(--term-accent)] font-bold">{content.emphasis}</span>
        </span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn>
      <div
        className={cn(
          '@container relative rounded-3xl p-md sm:p-lg',
          'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
          'border border-slate-800/80',
          'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
        )}
      >
        <header className="mb-sm flex items-center justify-between">
          <h2 className="text-xsm sm:text-sm font-bold tracking-tight text-slate-100">
            {content.cardTitle}
          </h2>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 rounded-md border border-slate-700/70 px-2 py-0.5">
            {content.cardLabel}
          </span>
        </header>

        <div className="grid grid-cols-1 @lg:grid-cols-2 gap-2 @lg:gap-3">
          {content.groups.map((group) => (
            <FiberObjectGroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
