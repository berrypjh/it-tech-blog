import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { NextChapterCard, PassiveEffectsContent } from '../content';
import { LayersIcon, SparklesIcon, SquareCheckIcon, TrophyIcon } from '../icons';

type Props = {
  checklist: PassiveEffectsContent['checklist'];
  nextChapter: PassiveEffectsContent['nextChapter'];
};

export const FinalChecklistSection = ({ checklist, nextChapter }: Props) => (
  <section id="final" className="space-y-md scroll-mt-xl">
    <ChecklistBlock checklist={checklist} />
    <NextChapterBlock nextChapter={nextChapter} />
  </section>
);

const ChecklistBlock = ({ checklist }: { checklist: PassiveEffectsContent['checklist'] }) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="final-checklist"
      number={checklist.number}
      eyebrow={checklist.eyebrow}
      title={checklist.title}
      description={checklist.description}
      icon={<SquareCheckIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.6fr)] gap-3">
      <article
        className={cn(
          'rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
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
  <div
    className={cn(
      'flex items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
      'border-[var(--term-border)]',
      'transition-colors hover:bg-[var(--term-surface)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
        'border-teal-300/80 bg-white text-teal-700',
        'dark:border-teal-700/70 dark:bg-slate-950 dark:text-teal-200',
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

const TrophyCard = ({ text }: { text: string }) => (
  <article
    className={cn(
      'flex h-full flex-col items-center justify-center gap-md rounded-3xl border-2 p-md sm:p-lg text-center',
      'border-amber-300/80 bg-amber-50/70',
      'dark:border-amber-700/70 dark:bg-amber-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2',
        'bg-amber-100 text-amber-700 border-amber-200/80',
        'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
      )}
    >
      <TrophyIcon className="h-7 w-7" />
    </span>
    <p className="text-sm sm:text-md leading-relaxed text-amber-900 dark:text-amber-100 font-bold break-keep">
      {text}
    </p>
  </article>
);

const NextChapterBlock = ({
  nextChapter,
}: {
  nextChapter: PassiveEffectsContent['nextChapter'];
}) => (
  <div className="space-y-md">
    <SectionBadgeHeader
      id="next-chapter"
      number={nextChapter.number}
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

const IntroCard = ({ intro, chapterTitle }: { intro: string; chapterTitle: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-violet-200/80 bg-violet-50/60',
      'dark:border-violet-800/70 dark:bg-violet-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          'bg-violet-100 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <LayersIcon className="h-5 w-5" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-violet-900 dark:text-violet-100 break-keep">
        {chapterTitle}
      </h3>
    </header>
    <p className="text-xsm sm:text-sm leading-relaxed text-violet-900 dark:text-violet-100 break-keep">
      {intro}
    </p>
  </article>
);

const NextChapterCards = ({ cards }: { cards: NextChapterCard[] }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {cards.map((card, idx) => (
      <li key={card.title}>
        <NextChapterCardView card={card} index={idx + 1} />
      </li>
    ))}
  </ul>
);

const NextChapterCardView = ({ card, index }: { card: NextChapterCard; index: number }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-1 rounded-2xl border bg-[var(--term-bg)] p-md',
      'border-violet-200/70 dark:border-violet-800/60',
      'shadow-[0_1px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      'hover:border-violet-400/70 dark:hover:border-violet-500/60',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <code className="text-xsm sm:text-sm font-bold font-mono text-violet-800 dark:text-violet-100 break-all">
        {card.title}
      </code>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
          'bg-violet-50 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </header>
    <p className="text-[11px] sm:text-xsm leading-snug text-violet-700 dark:text-violet-300 break-keep">
      {card.subtitle}
    </p>
  </article>
);
