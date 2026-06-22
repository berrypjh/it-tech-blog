import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { DispatchQueueHeroDiagram } from '../components/DispatchQueueHeroDiagram';
import type { DispatchQueueOrderContent } from '../content';
import { ListOrderedIcon } from '../icons';

type Props = { content: DispatchQueueOrderContent['hero'] };

const toneBadge = (tone: 'violet' | 'teal' | 'rose') => {
  if (tone === 'violet')
    return 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200';
  if (tone === 'teal')
    return 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200';
  return 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200';
};

const toneNumber = (tone: 'violet' | 'teal' | 'rose') => {
  if (tone === 'violet') return 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900';
  if (tone === 'teal') return 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900';
  return 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900';
};

export const DispatchQueueHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/dispatch-queue.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // collect → dispatchQueue → execute (capture / bubble)'}
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
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

      <article
        className={cn(
          'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
          >
            <ListOrderedIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.listenerTitle}
          </span>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.collected.map((entry) => (
            <li
              key={entry.label}
              className={cn(
                'flex items-center gap-2 rounded-lg border px-3 py-2',
                toneBadge(entry.tone),
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold',
                  toneNumber(entry.tone),
                )}
              >
                {entry.step}
              </span>
              <code className="font-mono text-[11px] sm:text-xsm font-bold break-all flex-1">
                {entry.label}
              </code>
              <code className="font-mono text-[10px] uppercase tracking-wider opacity-80">
                {entry.phase}
              </code>
            </li>
          ))}
        </ol>
      </article>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-dispatch-queue">
      <DispatchQueueHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
