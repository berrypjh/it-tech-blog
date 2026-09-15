import { cx } from '@berrypjh/react-ui';
import { type LucideIcon, Move, Pencil, Trash2 } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import type { EffectKind, RepresentativeFlagCard } from '../content';

import { EFFECT_NEUTRAL, effectBorder, effectText } from './effectStyles';

type Props = {
  card: RepresentativeFlagCard;
  situationLabel: string;
  beforeLabel: string;
  afterLabel: string;
  resultLabel: string;
};

const effectIcon: Record<EffectKind, LucideIcon> = {
  placement: Move,
  update: Pencil,
  childDeletion: Trash2,
};

const SubLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
    {`// ${children}`}
  </span>
);

/** 대표 flag 한 장: 상황 → before / after 코드 → 기록되는 flag 결과. */
export const BeforeAfterCard = ({
  card,
  situationLabel,
  beforeLabel,
  afterLabel,
  resultLabel,
}: Props) => {
  const Icon = effectIcon[card.id];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        effectBorder[card.id],
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl border',
            EFFECT_NEUTRAL,
            effectText[card.id],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cx('font-mono text-md font-bold tracking-tight', effectText[card.id])}>
            {card.title}
          </h3>
          <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {card.description}
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-1 rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-sm">
        <SubLabel>{situationLabel}</SubLabel>
        <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{card.situation}</p>
      </div>

      <div className="flex flex-col gap-1">
        <SubLabel>{beforeLabel}</SubLabel>
        <CodePreviewPanel code={card.before} language="HTML" size="sm" />
      </div>

      <div aria-hidden="true" className="flex justify-center">
        <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
          ↓
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <SubLabel>{afterLabel}</SubLabel>
        <CodePreviewPanel code={card.after} language="HTML" size="sm" />
      </div>

      <div className="mt-auto flex flex-col gap-1 border-t border-dashed border-[var(--term-border)] pt-sm">
        <SubLabel>{resultLabel}</SubLabel>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.change}
          <span aria-hidden="true" className="mx-1">
            →
          </span>
          <span className={cx('font-bold', effectText[card.id])}>{card.resultDescription}</span>
        </p>
      </div>
    </article>
  );
};
