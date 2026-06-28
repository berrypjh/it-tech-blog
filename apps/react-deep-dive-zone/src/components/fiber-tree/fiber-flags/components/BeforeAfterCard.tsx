import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import type { EffectKind, RepresentativeFlagCard } from '../content';
import { MoveIcon, PencilIcon, TrashIcon } from '../icons';

import { EFFECT_NEUTRAL, effectBorder, effectText } from './effectStyles';

type Props = {
  card: RepresentativeFlagCard;
  beforeLabel: string;
  afterLabel: string;
};

const iconMap: Record<EffectKind, React.ComponentType<{ className?: string }>> = {
  placement: MoveIcon,
  update: PencilIcon,
  childDeletion: TrashIcon,
};

export const BeforeAfterCard = ({ card, beforeLabel, afterLabel }: Props) => {
  const Icon = iconMap[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        effectBorder[card.id],
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl border',
            EFFECT_NEUTRAL,
            effectText[card.id],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('font-mono text-md font-bold tracking-tight', effectText[card.id])}>
            {card.title}
          </h3>
          <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {card.description}
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${beforeLabel}`}
        </span>
        <CodePreviewPanel code={card.before} caption="before.html" language="HTML" size="sm" />
      </div>

      <div aria-hidden="true" className="flex justify-center">
        <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
          ↓
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${afterLabel}`}
        </span>
        <CodePreviewPanel code={card.after} caption="after.html" language="HTML" size="sm" />
      </div>
    </article>
  );
};
