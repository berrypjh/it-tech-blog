import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { HeroDiagramItem, ReactElementTypeMeaningContent } from '../content';
import { SparklesIcon, TagIcon, UserIcon } from '../icons';

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

/**
 * Hero 핵심 비주얼.
 * React Element 객체의 type 필드가 host / custom / special 세 갈래로
 * 나뉘는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ElementTypeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle} — ${content.diagramItems
    .map((item) => `${item.value}: ${item.title}`)
    .join(', ')}. ${content.bottomNoteTitle}: ${content.bottomNoteBody}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

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
            'mt-2 rounded-xl px-md py-3',
            'bg-slate-900 text-slate-100 dark:bg-slate-950',
            'shadow-[0_2px_8px_-4px_rgba(15,23,42,0.6)]',
          )}
        >
          <p className="text-xsm font-bold tracking-tight text-sky-300">
            {content.bottomNoteTitle}
          </p>
          <p className="text-xsm leading-relaxed text-slate-300 break-keep">
            {content.bottomNoteBody}
          </p>
        </div>
      </div>
    </div>
  );
};

const BranchCard = ({ item }: { item: HeroDiagramItem }) => {
  const t = toneTokens[item.tone];
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-2 rounded-xl border p-sm',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <span className="flex items-center gap-2">
        <ToneIconBox tone={item.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <code
          className={cn('min-w-0 truncate font-mono text-xsm font-bold tracking-tight', t.text)}
        >
          {item.value}
        </code>
      </span>
      <p className="text-[11px] font-bold text-[var(--term-fg)] break-keep">{item.title}</p>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        {item.category}
      </span>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
