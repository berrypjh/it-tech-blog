import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { NextChapterCard, PassiveEffectsContent } from '../content';
import { LayersIcon, SparklesIcon, SquareCheckIcon, TrophyIcon } from '../icons';

type Props = {
  checklist: PassiveEffectsContent['checklist'];
  nextChapter: PassiveEffectsContent['nextChapter'];
};

export const FinalChecklistSection = ({ checklist, nextChapter }: Props) => (
  <section id="final" className="space-y-md scroll-mt-xl">
    <h2 id="heading-final" className="sr-only">
      final checklist and next chapter preview
    </h2>
    <ChecklistBlock checklist={checklist} />
    <NextChapterBlock nextChapter={nextChapter} />
  </section>
);

const ChecklistBlock = ({ checklist }: { checklist: PassiveEffectsContent['checklist'] }) => (
  <div className="space-y-md">
    <SectionHeader
      id="final-checklist"
      eyebrow={checklist.eyebrow}
      title={checklist.title}
      description={checklist.description}
      icon={<SquareCheckIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.6fr)] gap-3">
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {checklist.items.map((item, idx) => (
            <li key={item}>
              <ChecklistItem text={item} index={idx + 1} />
            </li>
          ))}
        </ul>
      </article>

      <TrophyCard text={checklist.trophy} />
    </div>
  </div>
);

const ChecklistItem = ({ text, index }: { text: string; index: number }) => (
  <div className="flex items-start gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] p-sm transition-colors hover:bg-[var(--term-surface)]">
    <span
      aria-hidden="true"
      className={cn(
        'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
        toneTokens.teal.fill.bg,
        toneTokens.teal.fill.border,
        toneTokens.teal.fill.text,
      )}
    >
      <SquareCheckIcon className="h-3.5 w-3.5" />
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        check {String(index).padStart(2, '0')}
      </span>
      <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{text}</span>
    </div>
  </div>
);

const TrophyCard = ({ text }: { text: string }) => {
  const t = toneTokens.amber;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-md rounded-lg border-2 p-md sm:p-lg text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-lg border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <TrophyIcon className="h-7 w-7" />
      </span>
      <p className={cn('text-sm sm:text-md leading-relaxed font-bold break-keep', t.fill.text)}>
        {text}
      </p>
    </article>
  );
};

const NextChapterBlock = ({
  nextChapter,
}: {
  nextChapter: PassiveEffectsContent['nextChapter'];
}) => (
  <div className="space-y-md">
    <SectionHeader
      id="next-chapter"
      eyebrow={nextChapter.eyebrow}
      title={nextChapter.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-3">
      <IntroCard intro={nextChapter.intro} chapterTitle={nextChapter.chapterTitle} />
      <NextChapterCards cards={nextChapter.cards} />
    </div>
  </div>
);

const IntroCard = ({ intro, chapterTitle }: { intro: string; chapterTitle: string }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="violet">
          <LayersIcon className="h-5 w-5" />
        </ToneIconBox>
        <h3 className={cn('text-sm sm:text-md font-bold break-keep', t.fill.text)}>
          {chapterTitle}
        </h3>
      </header>
      <p className={cn('text-xsm sm:text-sm leading-relaxed break-keep', t.fill.text)}>{intro}</p>
    </article>
  );
};

const NextChapterCards = ({ cards }: { cards: NextChapterCard[] }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {cards.map((card, idx) => (
      <li key={card.title}>
        <NextChapterCardView card={card} index={idx + 1} />
      </li>
    ))}
  </ul>
);

const NextChapterCardView = ({ card, index }: { card: NextChapterCard; index: number }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <code className={cn('text-xsm sm:text-sm font-bold font-mono break-all', t.fill.text)}>
          {card.title}
        </code>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>
      <p className={cn('text-[11px] sm:text-xsm leading-snug break-keep', t.text)}>
        {card.subtitle}
      </p>
    </article>
  );
};
