import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChoiceCard, SurroundingContent } from '../content';
import { ArrowDownIcon, iconByName, MapPinnedIcon, SparklesIcon } from '../icons';

type Props = { content: SurroundingContent['choice'] };

export const DirectoryChoiceGuide = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-choice" className="space-y-md">
      <SectionHeader
        id="choice"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapPinnedIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, idx) => (
          <li key={card.id} className="flex">
            <ChoiceCardItem card={card} index={idx} />
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md border shrink-0',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

type ItemProps = { card: ChoiceCard; index: number };

const ChoiceCardItem = ({ card, index }: ItemProps) => {
  const tone = toneTokens[toneCycle[index % toneCycle.length]];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'group flex w-full flex-col items-center text-center gap-sm rounded-xl border',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'p-md sm:p-lg transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-md border',
          tone.chip,
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
        {card.question}
      </h3>

      <ArrowDownIcon
        className={cn('h-5 w-5 my-2 transition-transform group-hover:translate-y-0.5', tone.text)}
        aria-hidden="true"
      />

      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-bold font-mono',
          tone.chip,
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn('inline-block w-1.5 h-1.5 rounded-full', tone.dot)}
        />
        {card.destination}
      </span>
    </article>
  );
};
