import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { EffectCard, HeroFlagIcon, MutationPhaseContent } from '../content';
import { LayersIcon, PencilIcon, PlusIcon, TrashIcon } from '../icons';

type Props = { content: MutationPhaseContent['effects'] };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

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
  const t = commitToneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider tabular-nums rounded-md border px-1.5 py-0.5',
            t.chipSolid,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>

      <div className="flex flex-col gap-1">
        <h3
          className={cn(
            'text-sm sm:text-md font-bold leading-tight font-mono break-keep',
            t.textStrong,
          )}
        >
          {card.title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center self-start gap-1 rounded-md border px-2 py-0.5',
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
