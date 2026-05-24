import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { AdvancedWrapupContent } from '../content';
import { DropletIcon, MapIcon, RocketIcon, ZapIcon } from '../icons';
import { toneAccent, toneCard, toneIconBox } from '../styles';

type Props = { content: AdvancedWrapupContent['hero'] };

const cardIcons = [ZapIcon, DropletIcon, RocketIcon];

export const AdvancedWrapupHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-dom/events/priority-replay-action.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // priority · hydration replay · form action'}
        </span>
      }
    />

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
      {/* LEFT: heading + description */}
      <div className="flex flex-col gap-md">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
            'font-bold leading-[1.14] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
          {content.description}
        </p>
      </div>

      {/* RIGHT: expansion map */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
          'border-blue-200/80 dark:border-blue-800/60 shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
          >
            <MapIcon className="h-4 w-4" />
          </span>
          <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </h2>
        </header>

        <ul className="flex flex-col gap-2">
          {content.expansionCards.map((card, i) => {
            const Icon = cardIcons[i] ?? ZapIcon;
            return (
              <li
                key={card.title}
                className={cn(
                  'group flex items-start gap-3 rounded-2xl border-2 p-md transition-all',
                  'hover:-translate-y-0.5 motion-reduce:transform-none',
                  'shadow-[0_1px_0_var(--term-border)]',
                  toneCard[card.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                    toneIconBox[card.tone],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <h3
                    className={cn(
                      'text-sm sm:text-md font-bold leading-tight break-keep',
                      toneAccent[card.tone],
                    )}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
                    {card.description}
                  </p>
                  {card.bullets && (
                    <ul className="mt-1 flex flex-col gap-0.5">
                      {card.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-[var(--term-muted)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-current opacity-60"
                          />
                          <span className="break-keep">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
