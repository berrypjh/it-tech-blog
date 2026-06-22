import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import type { HeroDiagramItem, ReactElementTypeMeaningContent } from '../content';
import { SparklesIcon, TagIcon, UserIcon } from '../icons';
import { toneChip, ToneIconBox, toneText } from '../localTone';

type Props = { content: ReactElementTypeMeaningContent['hero']; className?: string };

const iconMap = {
  tag: TagIcon,
  user: UserIcon,
  sparkles: SparklesIcon,
} as const;

const ELEMENT_SHAPE = `const element = {
  $$typeof: REACT_ELEMENT_TYPE,
  type, // ← 무엇을 렌더할지
  key,
  props,
};`;

export const ElementTypeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle} — ${content.diagramItems
    .map((item) => `${item.value}: ${item.title}`)
    .join(', ')}. ${content.bottomNoteTitle}: ${content.bottomNoteBody}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col items-stretch gap-sm">
        <CodePreviewPanel code={ELEMENT_SHAPE} caption={content.diagramTitle} size="md" />

        <DownArrow />

        <ol className="grid grid-cols-1 @xl:grid-cols-3 gap-sm items-stretch" aria-hidden="true">
          {content.diagramItems.map((item) => (
            <li key={item.id} className="flex min-w-0">
              <BranchCard item={item} />
            </li>
          ))}
        </ol>

        <div
          className={cn(
            'mt-2 flex flex-col gap-0.5 rounded-xl border px-md py-3',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <p className="text-xsm font-bold tracking-tight text-[var(--term-accent)]">
            {content.bottomNoteTitle}
          </p>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.bottomNoteBody}
          </p>
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const BranchCard = ({ item }: { item: HeroDiagramItem }) => {
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-2 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
      )}
    >
      <span className="flex items-center gap-2">
        <ToneIconBox tone={item.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <code
          className={cn(
            'min-w-0 truncate font-mono text-xsm font-bold tracking-tight',
            toneText(item.tone),
          )}
        >
          {item.value}
        </code>
      </span>
      <p className="text-[11px] font-bold text-[var(--term-fg)] break-keep">{item.title}</p>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
          toneChip(item.tone),
        )}
      >
        {item.category}
      </span>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
    </article>
  );
};
