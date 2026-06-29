import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent, FlowItem } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: CompleteWorkContent['summary'] };

export const RenderPhaseSummary = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md">
    <SectionHeader
      id="summary"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <ol className="flex flex-col gap-1.5">
        {content.items.map((item) => (
          <li key={item.number}>
            <ItemRow item={item} />
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const ItemRow = ({ item }: { item: FlowItem }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-md border font-mono font-bold text-xsm tabular-nums',
          t.chip,
        )}
      >
        {item.number}
      </span>
      <div className="flex flex-col gap-0 min-w-0">
        <span className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
          {item.title}
        </span>
        <span className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </article>
  );
};
