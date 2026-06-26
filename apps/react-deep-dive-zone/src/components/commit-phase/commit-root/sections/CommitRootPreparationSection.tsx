import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitToneKey } from '../../_shared/tones';
import type { CommitRootContent, PreparationCard, PreparationCardIcon } from '../content';
import { FlagIcon, InboxIcon, SettingsIcon, WorkflowIcon, ZapIcon } from '../icons';

type Props = { content: CommitRootContent['preparation'] };

const iconMap: Record<PreparationCardIcon, typeof InboxIcon> = {
  inbox: InboxIcon,
  flag: FlagIcon,
  workflow: WorkflowIcon,
  zap: ZapIcon,
};

/** rose는 의미색(정리/삭제 단계)으로 직접 색 허용. orange는 전역 밖이라 amber로 보정. */
const roseTokens = {
  text: 'text-rose-600 dark:text-rose-300',
  chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  border: 'border-rose-200/70 dark:border-rose-800/60',
};

const toneOf = (tone: CommitToneKey) =>
  tone === 'rose' ? roseTokens : toneTokens[tone === 'orange' ? 'amber' : (tone as ToneKey)];

export const CommitRootPreparationSection = ({ content }: Props) => (
  <section
    id="commit-root-preparation"
    aria-labelledby="heading-commit-root-preparation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="commit-root-preparation"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SettingsIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {content.cards.map((card, idx) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card, index }: { card: PreparationCard; index: number }) => {
  const Icon = iconMap[card.iconName];
  const t = toneOf(card.tone);
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)] motion-reduce:transform-none',
      )}
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xxsm font-bold tabular-nums text-[var(--term-muted)]">
          {String(index).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
        <span
          className={cn(
            'inline-flex items-center self-start gap-1 rounded-full border px-2 py-0.5',
            'text-[10px] font-mono lowercase tracking-wider',
            t.chip,
          )}
        >
          {card.keyword}
        </span>
      </div>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
