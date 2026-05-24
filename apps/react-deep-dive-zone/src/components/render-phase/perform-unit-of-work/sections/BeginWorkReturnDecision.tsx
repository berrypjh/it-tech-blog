import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { PerformUnitContent, ReturnDirectionCard } from '../content';
import { ArrowDownIcon, ArrowUpIcon, GitBranchIcon } from '../icons';

type Props = { content: PerformUnitContent['returnDirection'] };

export const BeginWorkReturnDecision = ({ content }: Props) => (
  <section
    id="return-direction"
    aria-labelledby="heading-return-direction"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="return-direction"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <DirectionCard card={content.cards.left} />
      <DirectionCard card={content.cards.right} />
    </div>
  </section>
);

const DirectionCard = ({ card }: { card: ReturnDirectionCard }) => {
  const isDown = card.direction === 'down';
  const Icon = isDown ? ArrowDownIcon : ArrowUpIcon;
  return (
    <article
      className={cn(
        'grid h-full grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-3xl border-2 p-md sm:p-lg',
        isDown
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2',
          isDown
            ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
            : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <Icon className="h-6 w-6" />
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        <h3
          className={cn(
            'text-sm sm:text-md font-bold leading-tight break-keep',
            isDown ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {card.title}
        </h3>
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-md border-2 px-2 py-0.5 text-xsm font-bold tracking-tight',
            isDown
              ? 'border-teal-300/80 bg-teal-100/70 text-teal-800 dark:bg-teal-950/60 dark:text-teal-100 dark:border-teal-700/70'
              : 'border-violet-300/80 bg-violet-100/70 text-violet-800 dark:bg-violet-950/60 dark:text-violet-100 dark:border-violet-700/70',
          )}
        >
          {card.subtitle}
        </span>
        <ul className="mt-1 flex flex-col gap-1.5">
          {card.items.map((item) => {
            const isMono = /[A-Za-z]/.test(item) && /[=()]/.test(item);
            return (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                    isDown ? 'bg-teal-500 dark:bg-teal-400' : 'bg-violet-500 dark:bg-violet-400',
                  )}
                />
                {isMono ? <code className="font-mono">{item}</code> : <span>{item}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};
