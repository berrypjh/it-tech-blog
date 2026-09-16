import { cx } from '@berrypjh/react-ui';
import { Layers, Sparkles } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { NextChapterCard, PassiveEffectsContent } from '../content';

type Props = { content: PassiveEffectsContent['nextChapter'] };

export const NextChapterPreviewSection = ({ content }: Props) => (
  <section
    id="next-chapter"
    aria-labelledby="heading-next-chapter"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="next-chapter"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-3">
      <IntroCard intro={content.intro} chapterTitle={content.chapterTitle} />
      <NextChapterCards cards={content.cards} />
    </div>
  </section>
);

const IntroCard = ({ intro, chapterTitle }: { intro: string; chapterTitle: string }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="violet">
          <Layers className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-sm sm:text-md font-bold break-keep', t.fill.text)}>
          {chapterTitle}
        </h3>
      </header>
      <p className={cx('text-xsm sm:text-sm leading-relaxed break-keep', t.fill.text)}>{intro}</p>
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
      className={cx(
        'flex h-full flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <code className={cx('text-xsm sm:text-sm font-bold font-mono break-all', t.fill.text)}>
          {card.title}
        </code>
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>
      <p className={cx('text-[11px] sm:text-xsm leading-snug break-keep', t.text)}>
        {card.subtitle}
      </p>
    </article>
  );
};
