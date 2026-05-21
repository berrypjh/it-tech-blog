import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { toneTokens } from '../../../start/_shared/tones';
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
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ChoiceCardItem card={card} />
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-md',
          'border-sky-200/80 bg-sky-50/70 text-sky-900',
          'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
            'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

type ItemProps = { card: ChoiceCard };

const ChoiceCardItem = ({ card }: ItemProps) => {
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'group flex w-full flex-col items-center text-center gap-sm rounded-xl border',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'p-md sm:p-lg transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

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
          tone.border,
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
