import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import type { EffectKind, RepresentativeFlagCard } from '../content';
import { ArrowDownIcon, MoveIcon, PencilIcon, TrashIcon } from '../icons';

import { effectIconWrap, effectText } from './effectStyles';

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

const cardBorder: Record<EffectKind, string> = {
  placement:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  update:
    'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
  childDeletion:
    'border-rose-200/80 dark:border-rose-800/60 hover:border-rose-400/70 dark:hover:border-rose-500/60',
};

export const BeforeAfterCard = ({ card, beforeLabel, afterLabel }: Props) => {
  const Icon = iconMap[card.id];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cardBorder[card.id],
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl',
            effectIconWrap[card.id],
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
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
          <ArrowDownIcon className="h-3.5 w-3.5" />
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
