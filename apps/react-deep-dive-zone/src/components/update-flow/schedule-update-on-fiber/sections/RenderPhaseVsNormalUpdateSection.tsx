import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ContextCard, ScheduleUpdateOnFiberContent } from '../content';
import { CheckCircleIcon, contextIconByName, SplitIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['contextCompare'] };

export const RenderPhaseVsNormalUpdateSection = ({ content }: Props) => (
  <section
    id="section-context-compare"
    aria-labelledby="heading-context-compare"
    className="space-y-md"
  >
    <SectionHeader
      id="context-compare"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <CompareCard card={content.leftCard} />
      <CompareVs />
      <CompareCard card={content.rightCard} />
    </div>
  </section>
);

const CompareCard = ({ card }: { card: ContextCard }) => {
  const Icon = contextIconByName[card.icon];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
        {card.title}
      </h3>

      <ul className="flex flex-col gap-2">
        {card.bullets.map((b) => (
          <li
            key={b}
            className={cn(
              'flex items-start gap-2 rounded-md border bg-[var(--term-surface)] px-3 py-2',
              t.border,
            )}
          >
            <CheckCircleIcon aria-hidden="true" className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} />
            <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
