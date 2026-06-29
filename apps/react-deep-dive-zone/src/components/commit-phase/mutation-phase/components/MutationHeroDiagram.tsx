import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlagCard, HeroFlagIcon, HeroOpCard, MutationPhaseContent } from '../content';
import { PencilIcon, PlusIcon, TrashIcon } from '../icons';

type Props = { content: MutationPhaseContent['hero']; className?: string };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

/**
 * Hero 핵심 비주얼.
 * Render Phase가 남긴 flags(Placement / Update / Deletion)가
 * Mutation Phase의 실제 host operation으로 이어지는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const MutationHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.leftTitle}: ${diagram.leftCards
    .map((c) => c.title)
    .join(', ')} → ${diagram.arrowLabel} → ${diagram.rightTitle}: ${diagram.rightCards
    .map((c) => c.title)
    .join(', ')}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <CardGroup title={diagram.leftTitle} cards={diagram.leftCards} variant="flag" />

        <DownArrow label={diagram.arrowLabel} />

        <CardGroup title={diagram.rightTitle} cards={diagram.rightCards} variant="op" />
      </div>
    </div>
  );
};

const CardGroup = ({
  title,
  cards,
  variant,
}: {
  title: string;
  cards: HeroFlagCard[] | HeroOpCard[];
  variant: 'flag' | 'op';
}) => (
  <div className="flex flex-col gap-sm">
    <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
      {title}
    </span>
    <ul className="flex flex-col gap-sm">
      {cards.map((card) => (
        <li key={card.title}>
          <FlowCard card={card} variant={variant} />
        </li>
      ))}
    </ul>
  </div>
);

const FlowCard = ({
  card,
  variant,
}: {
  card: HeroFlagCard | HeroOpCard;
  variant: 'flag' | 'op';
}) => {
  const tone = card.tone;
  const t = toneTokens[tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span
          className={cn(
            'text-sm font-bold tracking-tight break-keep',
            variant === 'flag' && 'font-mono',
            t.text,
          )}
        >
          {card.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </span>
      </div>
    </article>
  );
};

const DownArrow = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
    >
      ↓
    </span>
    <span className="rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
      {label}
    </span>
  </div>
);
