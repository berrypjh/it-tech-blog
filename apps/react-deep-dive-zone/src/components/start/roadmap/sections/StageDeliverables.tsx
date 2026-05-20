import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { RoadmapContent } from '../content';
import { CheckCircleIcon, deliverableIconByName } from '../icons';
import { tones } from '../tones';

type Props = { content: RoadmapContent['deliverables'] };

export const StageDeliverables = ({ content }: Props) => {
  return (
    <section
      id="section-deliverables"
      aria-labelledby="heading-deliverables"
      className="space-y-md"
    >
      <SectionHeader
        id="deliverables"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckCircleIcon className="h-5 w-5" />}
      />

      <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep -mt-sm">
        {content.supporting}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-md mt-md">
        {content.cards.map((card) => {
          const t = tones[card.tone];
          const Icon = deliverableIconByName[card.icon];
          const isFinal = card.icon === 'flag';
          return (
            <li key={card.num} className="flex">
              <article
                className={cn(
                  'group relative flex flex-col items-center text-center w-full h-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md pt-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  t.hoverBorder,
                  isFinal && 'ring-2 ring-amber-300/40 dark:ring-amber-500/30',
                )}
              >
                {/* num badge */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-2 left-2 inline-flex items-center justify-center w-5 h-5 rounded-md text-[10px] font-bold tabular-nums',
                    t.num,
                  )}
                >
                  {card.num}
                </span>

                {/* icon */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full mt-2 shadow-[0_1px_0_var(--term-border)]',
                    t.iconBg,
                    t.iconText,
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                <h3
                  className={cn(
                    'text-xsm sm:text-sm font-bold tracking-tight break-keep leading-snug',
                    t.text,
                  )}
                >
                  {card.title}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
