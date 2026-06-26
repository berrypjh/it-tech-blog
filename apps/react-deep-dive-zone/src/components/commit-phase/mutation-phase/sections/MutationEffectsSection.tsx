import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitToneKey } from '../../_shared/tones';
import type { EffectCard, HeroFlagIcon, MutationPhaseContent } from '../content';
import { LayersIcon, PencilIcon, PlusIcon, TrashIcon } from '../icons';

type Props = { content: MutationPhaseContent['effects'] };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

/** rose는 의미색(삭제 effect)으로 직접 색 허용. 나머지는 전역 toneTokens. */
const roseTokens = {
  text: 'text-rose-600 dark:text-rose-300',
  chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  border: 'border-rose-200/70 dark:border-rose-800/60',
};

const toneOf = (tone: CommitToneKey) =>
  tone === 'rose' ? roseTokens : toneTokens[tone === 'orange' ? 'amber' : (tone as ToneKey)];

export const MutationEffectsSection = ({ content }: Props) => (
  <section
    id="mutation-effects"
    aria-labelledby="heading-mutation-effects"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="mutation-effects"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {content.cards.map((card, idx) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} index={idx + 1} examplesLabel={content.examplesLabel} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({
  card,
  index,
  examplesLabel,
}: {
  card: EffectCard;
  index: number;
  examplesLabel: string;
}) => {
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
        <h3 className={cn('text-md font-bold tracking-tight font-mono break-keep', t.text)}>
          {card.title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center self-start gap-1 rounded-full border px-2 py-0.5',
            'text-[10px] font-mono lowercase tracking-wider',
            t.chip,
          )}
        >
          {card.subtitle}
        </span>
      </div>

      <div className="mt-1 flex flex-col gap-1.5 border-t border-dashed border-[var(--term-border)] pt-sm">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {examplesLabel}
        </span>
        <ul className="flex flex-wrap gap-1.5">
          {card.examples.map((ex) => (
            <li
              key={ex}
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-1',
                'text-[11px] font-mono',
                t.chip,
              )}
            >
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
