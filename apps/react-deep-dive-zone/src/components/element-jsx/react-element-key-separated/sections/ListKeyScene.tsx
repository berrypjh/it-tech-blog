import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../shared/CodePanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ReactElementKeySeparatedContent, RenderedItem } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['list'] };

export const ListKeyScene = ({ content }: Props) => (
  <section aria-labelledby="heading-list" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="list"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <CodePanel
          code={content.code}
          language="JSX"
          showWindowDots
          caption="TodoList.tsx"
          size="md"
        />
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.supportExplanation}
        </p>
      </article>

      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.mainExplanation}
        </p>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {content.renderedTitle}
          </span>
          <ul className="flex flex-col gap-2">
            {content.items.map((item) => (
              <li key={item.id}>
                <ItemRow item={item} />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  </section>
);

const ItemRow = ({ item }: { item: RenderedItem }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex items-center justify-between gap-md rounded-xl border p-sm',
        'bg-[var(--term-bg)]',
        t.border,
      )}
    >
      <div className="flex items-center gap-sm min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md border font-mono text-[11px] font-bold tabular-nums',
            t.chip,
          )}
        >
          {item.id}
        </span>
        <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{item.title}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <code className="font-mono text-[10px] text-[var(--term-muted)] tabular-nums">
          {item.idText}
        </code>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
            t.chip,
          )}
        >
          {item.keyText}
        </span>
      </div>
    </article>
  );
};
