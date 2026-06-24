import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { NeedCard, SchedulerContent } from '../content';
import { CircleHelpIcon, iconByName } from '../icons';

type Props = { content: SchedulerContent['need'] };

// 반복 카드 3색 소프트 순환: A=accent, B=sky, C=violet
const accentByIndex = [
  { text: 'text-[var(--term-accent)]', dot: 'bg-[var(--term-accent)]' },
  { text: toneTokens.sky.text, dot: toneTokens.sky.dot },
  { text: toneTokens.violet.text, dot: toneTokens.violet.dot },
];

export const SchedulerNeedCards = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-need" className="space-y-md">
      <SectionHeader
        id="need"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, i) => (
          <li key={card.id} className="flex">
            <NeedCardItem card={card} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ItemProps = { card: NeedCard; index: number };

const NeedCardItem = ({ card, index }: ItemProps) => {
  const accent = accentByIndex[index % accentByIndex.length];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'group flex flex-col gap-md h-full w-full',
        'rounded-lg border bg-[var(--term-bg)] p-md',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-md border',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          accent.text,
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <h3
        className={cn(
          'text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line',
          accent.text,
        )}
      >
        {card.title}
      </h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-medium',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            accent.text,
          )}
        >
          <span
            aria-hidden="true"
            className={cn('inline-block w-1 h-1 rounded-full', accent.dot)}
          />
          {card.example}
        </span>
      </div>
    </article>
  );
};
