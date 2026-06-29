import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { EagerBailoutContent, QueueCompareCard } from '../content';
import { CircleDotDashedIcon, queueIconByName } from '../icons';

type Props = { content: EagerBailoutContent['queueReason'] };

export const EmptyQueueReasonSection = ({ content }: Props) => (
  <section id="section-queue-reason" aria-labelledby="heading-queue-reason" className="space-y-md">
    <SectionHeader
      id="queue-reason"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CircleDotDashedIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <CompareCard card={content.leftCard} />
      <CompareCard card={content.rightCard} />
    </div>
  </section>
);

const CompareCard = ({ card }: { card: QueueCompareCard }) => {
  const t = toneTokens[card.tone];
  const Icon = queueIconByName[card.icon];
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
        <ToneBadge tone={card.tone}>{card.pillLabel}</ToneBadge>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
        {card.title}
      </h3>

      <div
        className={cn(
          'flex flex-col gap-2 rounded-md border bg-[var(--term-surface)] px-md py-3',
          t.border,
        )}
      >
        <code className={cn('font-mono text-xsm sm:text-sm font-bold', t.text)}>{card.state}</code>
        <QueueVisual variant={card.variant} tone={card.tone} />
      </div>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.body}
      </p>
    </article>
  );
};

const QueueVisual = ({ variant, tone }: { variant: 'empty' | 'pending'; tone: ToneKey }) => {
  const t = toneTokens[tone];
  if (variant === 'empty') {
    return (
      <div aria-hidden="true" className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn('block h-3 w-3 rounded-full border-2 border-dashed', t.border)}
          />
        ))}
        <span className={cn('ml-1 text-[10px] font-mono uppercase tracking-wider', t.text)}>
          empty
        </span>
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="flex items-center gap-1.5 flex-wrap">
      {['U1', 'U2', 'U3'].map((label, i, arr) => (
        <span key={label} className="flex items-center gap-1.5">
          <span
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold',
              t.chip,
            )}
          >
            {label}
          </span>
          {i < arr.length - 1 && <span className={t.text}>→</span>}
        </span>
      ))}
    </div>
  );
};
