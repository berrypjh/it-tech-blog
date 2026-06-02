import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { KeywordCard as KeywordCardType } from '../content';
import { keywordIconByName } from '../icons';

type Props = { card: KeywordCardType };

export const KeywordCard = ({ card }: Props) => {
  const t = toneTokens[card.tone];
  const Icon = keywordIconByName[card.id];

  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <h2 className={cn('text-md font-bold tracking-tight', t.text)}>{card.title}</h2>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <code
          className={cn(
            'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
            t.chip,
          )}
        >
          {card.keyword}
        </code>
      </div>
    </article>
  );
};
