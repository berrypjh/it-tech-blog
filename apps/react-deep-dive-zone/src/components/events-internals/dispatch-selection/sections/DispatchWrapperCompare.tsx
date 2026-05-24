import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchSelectionContent, PriorityKey } from '../content';
import { CircleIcon, GitBranchIcon, WavesIcon, ZapIcon } from '../icons';
import { priorityBadge, priorityCard, priorityIconBox, priorityText } from '../priorityStyle';

type Props = { content: DispatchSelectionContent['wrappers'] };

const wrapperIcon: Record<PriorityKey, React.ComponentType<{ className?: string }>> = {
  discrete: ZapIcon,
  continuous: WavesIcon,
  default: CircleIcon,
};

export const DispatchWrapperCompare = ({ content }: Props) => (
  <section aria-labelledby="heading-wrappers">
    <NumberedSectionHeader
      id="wrappers"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = wrapperIcon[card.priority];
        return (
          <article
            key={card.fnName}
            className={cn(
              'group flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              priorityCard[card.priority],
            )}
          >
            <header className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                  priorityIconBox[card.priority],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col min-w-0">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    priorityText[card.priority],
                  )}
                >
                  wrapper / {card.priority}
                </span>
                <code
                  className={cn(
                    'font-mono text-sm sm:text-md font-bold leading-tight break-all',
                    priorityText[card.priority],
                  )}
                >
                  {card.fnName}
                </code>
              </div>
            </header>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {card.description}
            </p>

            <div className="mt-auto flex flex-col gap-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                연결 이벤트
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {card.events.map((ev) => (
                  <li
                    key={ev}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
                      'font-mono text-[10px] sm:text-[11px] font-medium',
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
            </div>
          </article>
        );
      })}
    </div>
  </section>
);
