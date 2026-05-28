import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { HookLinkedListContent, Tone } from '../content';
import { ArrowDownIcon, ArrowRightIcon, DatabaseIcon, Link2Icon } from '../icons';

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
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react/hooks/hook-linked-list.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' '}
          {'// Fiber.memoizedState → Hook → Hook → ...'}
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
              'bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-[0_1px_0_var(--term-border)]',
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

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-lg items-start">
      {/* Left: text + concept cards */}
      <div className="flex flex-col gap-md min-w-0">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.14] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.titleLine1}</span>
          <span className="block">
            <span
              className={cn(
                'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
                'dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300',
              )}
            >
              {content.titleAccent}
            </span>
            {content.titleLine2 && (
              <span className="text-[var(--term-fg)]">{content.titleLine2}</span>
            )}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[55ch] break-keep">
          {content.description}
        </p>

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
      </div>

      {/* Right: Fiber → Hook linked list diagram */}
      <FiberDiagram content={content} />
    </div>
  </section>
);

const FiberDiagram = ({ content }: { content: HookLinkedListContent['hero'] }) => (
  <div
    className={cn(
      'relative flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <h2 className="text-center text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
      {content.diagramTitle}
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1.55fr)] gap-md items-stretch">
      {/* Fiber box */}
      <article className="flex flex-col gap-1 rounded-2xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_1px_0_var(--term-border)]">
        <header className="mb-1 flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            Fiber
          </span>
        </header>
        <ul className="flex flex-col gap-1 text-[11px] font-mono">
          {content.fiberFields.slice(0, 3).map((f) => (
            <li key={f} className="text-[var(--term-muted)] break-all">
              {f}
            </li>
          ))}
          <li
            className={cn(
              'rounded-md border-2 border-cyan-400/80 bg-cyan-50 px-2 py-1 font-bold text-cyan-700 break-all',
              'dark:border-cyan-500/80 dark:bg-cyan-950/60 dark:text-cyan-200',
            )}
          >
            {content.fiberHighlight}
            <span className="ml-1 text-[9px] font-normal opacity-80">→ Hook #1</span>
          </li>
          {content.fiberFields.slice(3).map((f) => (
            <li key={f} className="text-[var(--term-muted)] break-all">
              {f}
            </li>
          ))}
        </ul>
      </article>

      {/* Hook nodes row */}
      <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-1.5 min-w-0">
        {content.hookNodes.map((node, i) => {
          const isLast = i === content.hookNodes.length - 1;
          return (
            <div
              key={node.index}
              className="flex flex-col lg:flex-row items-stretch gap-1.5 min-w-0 lg:flex-1"
            >
              <article
                className={cn(
                  'group flex-1 flex flex-col gap-2 rounded-2xl border-2 p-3 transition-all',
                  toneCard[node.tone],
                  'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <header className="flex items-center justify-between gap-1">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 px-2 items-center justify-center rounded-full text-[10px] font-mono font-bold',
                      toneHeader[node.tone],
                    )}
                  >
                    Hook #{node.index}
                  </span>
                  <code
                    className={cn(
                      'font-mono text-[10px] font-bold break-all text-right',
                      toneTextStrong[node.tone],
                    )}
                  >
                    {node.hookName}
                  </code>
                </header>
                <ul className="flex flex-col gap-0.5 text-[10px] font-mono text-[var(--term-muted)]">
                  {node.fields.map((field) => (
                    <li
                      key={field.name}
                      className="flex items-center justify-between gap-1 break-all"
                    >
                      <span>{field.name}</span>
                      {field.value && (
                        <span className="text-orange-500 dark:text-orange-300 font-bold">
                          {field.value}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden lg:inline-flex self-center h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                  >
                    <ArrowRightIcon className="h-3 w-3" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="lg:hidden flex justify-center text-[var(--term-muted)]"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Bottom dashed bracket */}
    <div className="mt-1 flex flex-col items-center gap-1">
      <span
        aria-hidden="true"
        className="block w-full border-t-2 border-dashed border-[var(--term-border)]"
      />
      <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
        {content.bottomLabel}
      </span>
    </div>
  </div>
);
