import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { EagerBailoutContent, QueueCompareCard } from '../content';
import { AlertTriangleIcon, CheckCircleIcon, CircleDotDashedIcon } from '../icons';

type Props = { content: EagerBailoutContent['queueReason'] };

export const EmptyQueueReasonSection = ({ content }: Props) => (
  <section
    id="queue-reason"
    aria-labelledby="heading-queue-reason"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="queue-reason"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CircleDotDashedIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <CompareCard card={content.leftCard} variant="empty" />
      <CompareCard card={content.rightCard} variant="pending" />
    </div>
  </section>
);

const tonalClass = {
  emerald: {
    border: 'border-emerald-300/70 dark:border-emerald-700/70',
    bg: 'bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
    pill: 'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
    iconBox: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
    stateBox:
      'border-emerald-300/70 bg-emerald-50/70 text-emerald-900 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
  },
  rose: {
    border: 'border-rose-300/70 dark:border-rose-700/70',
    bg: 'bg-gradient-to-br from-rose-50/80 via-white to-amber-50/40 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/20',
    pill: 'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    title: 'text-rose-800 dark:text-rose-100',
    iconBox: 'bg-rose-600 text-white dark:bg-rose-500 dark:text-slate-950',
    stateBox:
      'border-rose-300/70 bg-rose-50/70 text-rose-900 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-100',
  },
} as const;

type CardProps = {
  card: QueueCompareCard;
  variant: 'empty' | 'pending';
};

const CompareCard = ({ card, variant }: CardProps) => {
  const t = tonalClass[card.tone];
  const Icon = card.iconName === 'checkCircle' ? CheckCircleIcon : AlertTriangleIcon;
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        t.border,
        t.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn('inline-flex h-12 w-12 items-center justify-center rounded-2xl', t.iconBox)}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.pill,
          )}
        >
          {card.pillLabel}
        </span>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.title)}>
        {card.title}
      </h3>

      {/* State visual */}
      <div className={cn('flex flex-col gap-2 rounded-2xl border-2 px-md py-3', t.stateBox)}>
        <code className="font-mono text-xsm sm:text-sm font-bold">{card.state}</code>
        <QueueVisual variant={variant} tone={card.tone} />
      </div>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.body}
      </p>
    </article>
  );
};

const QueueVisual = ({
  variant,
  tone,
}: {
  variant: 'empty' | 'pending';
  tone: 'emerald' | 'rose';
}) => {
  if (variant === 'empty') {
    return (
      <div aria-hidden="true" className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              'block h-3 w-3 rounded-full border-2 border-dashed',
              'border-emerald-400/60 dark:border-emerald-600/60',
            )}
          />
        ))}
        <span className="ml-1 text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80">
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
              tone === 'rose'
                ? 'border-rose-300/70 bg-rose-100 text-rose-700 dark:border-rose-700/60 dark:bg-rose-950/60 dark:text-rose-200'
                : '',
            )}
          >
            {label}
          </span>
          {i < arr.length - 1 && <span className="text-rose-500 dark:text-rose-400">→</span>}
        </span>
      ))}
    </div>
  );
};
