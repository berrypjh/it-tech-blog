import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { After192Content } from '../content';
import { tone } from '../tone';

import { iconRegistry } from './_iconRegistry';

type Props = { content: After192Content['hero'] };

export const After192Hero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-19-changes/react-19-2-reading-method.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // operation-model expansion across 4 axes'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] items-stretch">
      {/* LEFT: badges + heading + subtitle */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[50ch]">
          {content.subtitleLines.join(' ')}
        </p>
      </div>

      {/* RIGHT: 4 timeline cards with dotted connector */}
      <article
        className={cn(
          'relative flex flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/30 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Timeline dotted connector (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute left-[10%] right-[10%] top-[64px] h-px border-t-2 border-dashed border-slate-300/80 dark:border-slate-700/70 pointer-events-none"
        />

        <ol className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {content.cards.map((card) => {
            const t = tone[card.tone];
            const Icon = iconRegistry[card.iconKey];
            return (
              <li key={card.number}>
                <article
                  className={cn(
                    'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
                    t.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-xsm font-bold',
                        t.iconChip,
                        'shadow-[0_2px_0_var(--term-border)]',
                      )}
                    >
                      {card.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                        t.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', t.text)}>
                    {card.title}
                  </h3>
                  <div className="flex flex-col gap-0.5">
                    {card.descriptionLines.map((line) => (
                      <span
                        key={line}
                        className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
