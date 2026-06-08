import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SetStateHeroDiagram } from '../components/SetStateHeroDiagram';
import type { StateUpdateStartContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: StateUpdateStartContent['hero'] };

export const SetStateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberHooks.js"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// dispatchSetState'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      {/* Callout */}
      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-600 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {content.callout.title}
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.callout.lines[0].split(content.callout.emphasis).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="font-bold text-[var(--term-accent)]">
                    {content.callout.emphasis}
                  </span>
                )}
              </span>
            ))}
            <br />
            <span className="text-[var(--term-muted)]">{content.callout.lines[1]}</span>
          </p>
        </div>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-state-update-start" className="min-w-0">
      <SetStateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
