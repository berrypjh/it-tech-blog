import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { DispatchSelectionContent } from '../content';
import { CircleIcon, FilterIcon, MousePointerClickIcon, WavesIcon, ZapIcon } from '../icons';
import { priorityCard, priorityIconBox, priorityText } from '../priorityStyle';

type Props = { content: DispatchSelectionContent['hero'] };

const exampleIcons = [MousePointerClickIcon, WavesIcon, CircleIcon];
const rowIcons = [ZapIcon, WavesIcon, CircleIcon];

export const DispatchPriorityHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-dom/events/dispatch-priority.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // Discrete · Continuous · Default → dispatch wrapper'}
        </span>
      }
    />

    {/* Top badges */}
    <ul className="mt-md flex flex-wrap items-center gap-2">
      {content.badges.map((badge) => (
        <li
          key={badge.label}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            badge.tone === 'blue' &&
              'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500',
            badge.tone === 'cyan' &&
              'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'block h-1.5 w-1.5 rounded-full',
              badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
            )}
          />
          {badge.label}
        </li>
      ))}
    </ul>

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
      {/* LEFT */}
      <div className="flex flex-col gap-md">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.9rem]',
            'font-bold leading-[1.14] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
          {content.description}
        </p>

        {/* Event mini cards */}
        <ul className="flex flex-col gap-2">
          {content.examples.map((ex, i) => {
            const Icon = exampleIcons[i] ?? MousePointerClickIcon;
            return (
              <li
                key={ex.name}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl border-2 px-md py-3 transition-colors',
                  'shadow-[0_1px_0_var(--term-border)]',
                  priorityCard[ex.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                    priorityIconBox[ex.tone],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <code
                  className={cn(
                    'font-mono text-md sm:text-lg font-bold break-all',
                    priorityText[ex.tone],
                  )}
                >
                  {ex.name}
                </code>
                <span className="ml-auto text-[11px] sm:text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
                  {ex.tag}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* RIGHT: priority classification diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
          'border-blue-200/80 dark:border-blue-800/60 shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
            {content.diagram.title}
          </h2>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-blue-200/80 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:border-blue-800/60 dark:text-blue-200"
          >
            <FilterIcon className="h-3.5 w-3.5" />
          </span>
        </header>

        <ul className="flex flex-col gap-2">
          {content.diagram.rows.map((row, i) => {
            const Icon = rowIcons[i] ?? CircleIcon;
            return (
              <li
                key={row.priority}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl border-2 p-md transition-all',
                  'hover:-translate-y-0.5 motion-reduce:transform-none',
                  priorityCard[row.tone],
                )}
              >
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <code
                    className={cn('font-mono text-md sm:text-lg font-bold', priorityText[row.tone])}
                  >
                    {row.priority}
                  </code>
                  <p className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
                    {row.description}
                  </p>
                  <code className="text-[10px] sm:text-[11px] font-mono text-[var(--term-muted)] break-all">
                    예: {row.example}
                  </code>
                </div>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                    priorityIconBox[row.tone],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
