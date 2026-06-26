import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { WorkTagCard as WorkTagCardData } from '../content';

type Props = { card: WorkTagCardData };

export const WorkTagCardItem = ({ card }: Props) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] p-sm sm:p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full border font-mono font-bold text-[12px] shrink-0',
        toneTokens[card.tone].chip,
      )}
    >
      {card.value}
    </span>
    <div className="flex flex-col min-w-0">
      <code className="font-mono text-xsm font-bold tracking-tight text-[var(--term-fg)] truncate">
        {card.name}
      </code>
      <span
        className={cn('text-[10px] uppercase tracking-wider font-mono', toneTokens[card.tone].text)}
      >
        WorkTag = {card.value}
      </span>
    </div>
  </article>
);
