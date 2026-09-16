import { cx } from '@berrypjh/react-ui';
import { type LucideIcon, Pencil, Plus, Trash2 } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlagCard, HeroFlagId, HeroOpCard, MutationPhaseContent } from '../content';

type Props = { content: MutationPhaseContent['hero'] };

const iconMap: Record<HeroFlagId, LucideIcon> = {
  plus: Plus,
  pencil: Pencil,
  trash: Trash2,
};

/**
 * Hero 핵심 비주얼.
 * Render Phase가 남긴 flags(Placement / Update / Deletion)가
 * Mutation Phase의 실제 host operation으로 이어지는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const MutationHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.leftTitle}: ${diagram.leftCards
    .map((c) => c.title)
    .join(', ')} → ${diagram.arrowLabel} → ${diagram.rightTitle}: ${diagram.rightCards
    .map((c) => c.title)
    .join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <CardGroup title={diagram.leftTitle} cards={diagram.leftCards} variant="flag" />

        <DownArrow label={diagram.arrowLabel} />

        <CardGroup title={diagram.rightTitle} cards={diagram.rightCards} variant="op" />
      </div>
    </HeroDiagramShell>
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
  const Icon = iconMap[card.id];
  return (
    <div
      className={cx(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span
          className={cx(
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
    </div>
  );
};

/** 라벨이 붙은 세로 연결 화살표. shared DownArrow는 라벨을 받지 않아 로컬로 둔다. */
const DownArrow = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <span className="rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
      {label}
    </span>
  </div>
);
