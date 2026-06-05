import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { AdvancedWrapupContent } from '../content';
import { DropletIcon, MapIcon, RocketIcon, ZapIcon } from '../icons';
import { toneAccent, toneCard, toneIconBox } from '../styles';

type Props = { content: AdvancedWrapupContent['hero'] };

const cardIcons = [ZapIcon, DropletIcon, RocketIcon];

export const AdvancedWrapupHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/priority-replay-action.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // priority · hydration replay · form action'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
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
    </HeroTextColumn>

    <HeroVisualColumn>
      {/* expansion map */}
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
    </HeroVisualColumn>
  </HeroSection>
);
