import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import { MousePointerIcon, PencilIcon, PuzzleIcon, ZapIcon } from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneAccent, toneCard, toneIconBox, toneNumber } from '../styles';

type Props = { content: PluginEventSystemContent['why'] };

const cardIcons = [MousePointerIcon, PencilIcon, ZapIcon];

export const WhyPluginSystem = ({ content }: Props) => (
  <SectionFrame
    id="why"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<PuzzleIcon className="h-5 w-5" />}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card, i) => {
        const Icon = cardIcons[i] ?? PuzzleIcon;
        return (
          <article
            key={card.title}
            className={cn(
              'group flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[card.tone],
            )}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                  'text-[10px] font-mono font-bold tabular-nums',
                  toneNumber[card.tone],
                )}
              >
                {card.number}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                  toneIconBox[card.tone],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
            </header>

            <h3
              className={cn(
                'text-sm sm:text-md font-bold leading-tight break-keep',
                toneAccent[card.tone],
              )}
            >
              {card.title}
            </h3>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {card.body}
            </p>

            <code
              className={cn(
                'mt-auto inline-flex w-fit items-center rounded-md border px-2 py-0.5',
                'font-mono text-[10px] sm:text-[11px] font-bold break-all',
                toneIconBox[card.tone],
              )}
            >
              {card.example}
            </code>
          </article>
        );
      })}
    </div>
  </SectionFrame>
);
