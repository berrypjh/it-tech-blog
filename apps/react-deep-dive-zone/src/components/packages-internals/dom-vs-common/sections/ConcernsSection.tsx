import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ConcernCard, DvcContent } from '../content';
import { dvcIcon, SparklesIcon } from '../icons';

type Props = { content: DvcContent['concerns'] };

export const ConcernsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-concerns" className="space-y-md">
      <SectionHeader
        id="concerns"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <ConcernCardView card={card} />
          </li>
        ))}
      </ul>

      <p
        className={cn(
          'inline-flex items-center gap-sm text-xsm font-bold font-mono tracking-tight',
          'text-[var(--term-muted)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-violet-300/80 bg-violet-50 text-violet-700 text-[10px] dark:border-violet-800/70 dark:bg-violet-950/40 dark:text-violet-200"
        >
          ●
        </span>
        DOM 전용 (브라우저 특화) — react-dom
      </p>
    </section>
  );
};

const ConcernCardView = ({ card }: { card: ConcernCard }) => {
  const tone = toneTokens[card.tone];
  const Icon = dvcIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', tone.text)}>{card.title}</h3>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
