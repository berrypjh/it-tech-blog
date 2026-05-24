import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CompleteWorkContent, FlowItem } from '../content';
import { ListChecksIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: CompleteWorkContent['summary'] };

export const RenderPhaseSummary = ({ content }: Props) => (
  <section id="summary" aria-labelledby="heading-summary" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="summary"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
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
  const palette = tonePalette[item.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-xl border p-sm sm:p-md',
        palette.border,
        palette.bg,
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border font-mono font-bold text-xsm tabular-nums',
          palette.chip,
        )}
      >
        {item.number}
      </span>
      <div className="flex flex-col gap-0 min-w-0">
        <span
          className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', palette.text)}
        >
          {item.title}
        </span>
        <span className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </article>
  );
};
