import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ModeCard, RnContent } from '../content';
import { CheckCircleIcon, rnIcon, SparklesIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = { content: RnContent['modes'] };

export const ModesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-modes" className="space-y-md">
      <SectionHeader
        id="modes"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card, i) => {
          const pill = content.pills[i];
          return (
            <li key={card.id} className="flex flex-col gap-sm">
              <ModeCardView card={card} />
              {pill && <ModePill pill={pill} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const ModePill = ({ pill }: { pill: RnContent['modes']['pills'][number] }) => (
  <span
    className={cn(
      'flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-full border px-md py-2 text-center text-xsm font-bold font-mono tracking-tight',
      'bg-[var(--term-surface)] border-[var(--term-border)]',
      toneText(pill.tone),
    )}
  >
    <span className="break-keep">{pill.left}</span>
    <span aria-hidden="true" className="text-[var(--term-accent)]">
      →
    </span>
    <span className="break-keep">{pill.right}</span>
  </span>
);

const ModeCardView = ({ card }: { card: ModeCard }) => {
  const Icon = rnIcon[card.iconName];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', toneText(card.tone))}>
            {card.name}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <span aria-hidden="true" className={cn('shrink-0 mt-0.5', toneText(card.tone))}>
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
