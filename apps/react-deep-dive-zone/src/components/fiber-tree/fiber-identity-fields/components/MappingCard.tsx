import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { IdentityFieldKey, MappingCard as MappingCardData } from '../content';
import { BoxesIcon, PuzzleIcon, RocketIcon } from '../icons';

type Props = { card: MappingCardData };

const iconMap = {
  cube: BoxesIcon,
  rocket: RocketIcon,
  puzzle: PuzzleIcon,
} as const;

/** 정체성 필드별 고정 톤(hero·summary와 동일): tag=sky, key=emerald, elementType=violet, type=amber. */
const fieldTone: Record<IdentityFieldKey, ToneKey> = {
  tag: 'sky',
  key: 'emerald',
  elementType: 'violet',
  type: 'amber',
};

export const MappingCardItem = ({ card }: Props) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        toneTokens[card.tone].border,
        toneTokens[card.tone].borderHover,
      )}
    >
      <header className="flex items-center justify-between">
        <ToneIconBox tone={card.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <code className="font-mono text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-all">
          {card.code}
        </code>
      </header>

      <dl className="grid grid-cols-[auto_1fr] gap-y-1 gap-x-2 rounded-xl bg-[var(--term-surface)] p-sm">
        {card.rows.map((row) => (
          <div key={row.field} className="contents">
            <dt
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold whitespace-nowrap',
                toneTokens[fieldTone[row.field]].chip,
              )}
            >
              {row.field}
            </dt>
            <dd className="font-mono text-[11.5px] sm:text-xsm text-[var(--term-fg)] leading-[1.9] break-all">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};
