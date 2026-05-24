import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchSelectionContent, PriorityKey } from '../content';
import { CircleIcon, TimerIcon, WavesIcon, ZapIcon } from '../icons';
import { priorityBadge, priorityCard, priorityIconBox, priorityText } from '../priorityStyle';

type Props = { content: DispatchSelectionContent['urgency'] };

const cardIcon: Record<PriorityKey, React.ComponentType<{ className?: string }>> = {
  discrete: ZapIcon,
  continuous: WavesIcon,
  default: CircleIcon,
};

export const EventUrgencyCards = ({ content }: Props) => (
  <section aria-labelledby="heading-urgency">
    <NumberedSectionHeader
      id="urgency"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TimerIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.priority];
        return (
          <article
            key={card.title}
            className={cn(
              'group flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              priorityCard[card.priority],
            )}
          >
            <header className="flex items-start justify-between gap-2">
              <div className="flex flex-col">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    priorityText[card.priority],
                  )}
                >
                  priority / {card.priority}
                </span>
                <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep">
                  {card.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                  priorityIconBox[card.priority],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
            </header>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {card.body}
            </p>

            <ul className="mt-auto flex flex-wrap gap-2">
              {card.events.map((ev) => (
                <li
                  key={ev}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                    'font-mono text-[11px] sm:text-xsm font-medium',
                    priorityBadge[card.priority],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-1.5 rounded-full bg-current opacity-70"
                  />
                  {ev}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  </section>
);
