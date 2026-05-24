import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { TargetFiberContent } from '../content';
import { ArrowRightIcon, BoxIcon, GlobeIcon } from '../icons';

type Props = { content: TargetFiberContent['hero'] };

const renderHighlighted = (line: string) => {
  const parts = line.split(/(Fiber)/);
  return parts.map((part, i) =>
    part === 'Fiber' ? (
      <span key={i} className="text-teal-600 dark:text-teal-300">
        Fiber
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
};

export const TargetFiberHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-dom/events/target-to-fiber.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // event.target → findInstanceBlockingTarget → return_targetInst'}
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

    {/* Heading + description */}
    <div className="mt-md flex flex-col gap-md max-w-[68ch]">
      <h1
        id="hero-heading"
        className={cn(
          'text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.9rem]',
          'font-bold leading-[1.14] tracking-tight break-keep',
        )}
      >
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">
          {renderHighlighted(content.titleLines[1])}
        </span>
      </h1>

      <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep">
        {content.description}
      </p>
    </div>

    {/* DOM card | arrow | Fiber card */}
    <div
      className={cn(
        'mt-lg grid grid-cols-1 items-stretch gap-md',
        'lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-lg',
      )}
    >
      {/* DOM card (blue) */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/40',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/20',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-blue-400',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
          >
            <GlobeIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              browser
            </span>
            <h2 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.domCard.title}
            </h2>
          </div>
        </header>

        <pre className="overflow-x-auto rounded-xl border border-blue-200/70 bg-white px-md py-3 font-mono text-xsm sm:text-sm text-blue-700 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200">
          <code className="whitespace-pre">{content.domCard.code}</code>
        </pre>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xsm text-[var(--term-muted)]">
            {content.domCard.caption}
          </span>
          <code className="inline-flex items-center rounded-full border border-blue-200/80 bg-blue-50 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200">
            {content.domCard.tag}
          </code>
        </div>
      </article>

      {/* Center arrow */}
      <div aria-hidden="true" className="flex items-center justify-center">
        <span
          className={cn(
            'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full',
            'bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-[0_4px_0_rgba(124,58,237,0.35)]',
          )}
        >
          <ArrowRightIcon
            className="h-6 w-6 sm:h-7 sm:w-7 lg:rotate-0 rotate-90"
            strokeWidth={2.4}
          />
        </span>
      </div>

      {/* Fiber card (teal) */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/40',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-teal-400',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
          >
            <BoxIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              react
            </span>
            <h2 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.fiberCard.title}
            </h2>
          </div>
        </header>

        <dl
          className={cn(
            'grid grid-cols-[auto_minmax(0,1fr)] rounded-xl border border-teal-200/70 bg-white',
            'dark:border-teal-800/60 dark:bg-slate-950/40',
            'overflow-hidden',
          )}
        >
          {content.fiberCard.rows.map((row, i) => (
            <div key={row.key} className="contents">
              <dt
                className={cn(
                  'px-md py-2 text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300',
                  i > 0 && 'border-t border-teal-100/80 dark:border-teal-800/40',
                )}
              >
                {row.key}
              </dt>
              <dd
                className={cn(
                  'px-md py-2 font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all',
                  i > 0 && 'border-t border-teal-100/80 dark:border-teal-800/40',
                )}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xsm text-[var(--term-muted)]">
            {content.fiberCard.caption}
          </span>
          <code className="inline-flex items-center rounded-full border border-teal-200/80 bg-teal-50 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200">
            {content.fiberCard.tag}
          </code>
        </div>
      </article>

      <p className="sr-only">
        DOM → Fiber : {content.domCard.title} → {content.fiberCard.title}
      </p>
    </div>
  </section>
);
