import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { HookLinkedListHeroDiagram } from '../components/HookLinkedListHeroDiagram';
import type { HookLinkedListContent, Tone } from '../content';
import { DatabaseIcon, Link2Icon } from '../icons';

type Props = { content: HookLinkedListContent['hero'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/40',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/40',
};

const toneHeader: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
};

const toneTextStrong: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-700 dark:text-amber-200',
  rose: 'text-rose-700 dark:text-rose-200',
};

const conceptIcons = [Link2Icon, DatabaseIcon];

export const HookLinkedListHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/hook-linked-list.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        {'// Fiber.memoizedState → Hook → Hook → ...'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    {/* Left: text + concept cards */}
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLine1}</span>
        <span className="block">
          <span className="text-[var(--term-accent)]">{content.titleAccent}</span>
          {content.titleLine2 && (
            <span className="text-[var(--term-fg)]">{content.titleLine2}</span>
          )}
        </span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

      {/* Concept cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-sm">
        {content.conceptCards.map((card, i) => {
          const Icon = conceptIcons[i] ?? Link2Icon;
          return (
            <li key={card.label}>
              <article
                className={cn(
                  'h-full flex items-start gap-3 rounded-2xl border-2 p-md',
                  'shadow-[0_2px_0_var(--term-border)] transition-all',
                  'motion-safe:hover:-translate-y-0.5',
                  toneCard[card.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                    toneHeader[card.tone],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {card.label}
                  </p>
                  <p
                    className={cn(
                      'text-xsm sm:text-sm font-bold break-all',
                      toneTextStrong[card.tone],
                    )}
                  >
                    {card.value}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </HeroTextColumn>

    {/* Right: Fiber → Hook linked list diagram */}
    <HeroVisualColumn id="hero-hook-linked-list">
      <HookLinkedListHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
