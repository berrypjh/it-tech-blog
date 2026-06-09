import { cn } from '@it-tech-blog/utils';

import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { DiagramItem, ReactElementKeySeparatedContent } from '../content';
import { CheckCircleIcon, KeyIcon, NetworkIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 같은 형제 목록이 순서만 바뀌어도 React가 key로 각 요소를 따라가며
 * 식별을 유지하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ElementKeyHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle}. ${content.previousLabel}: ${content.previousItems
    .map((i) => i.keyText)
    .join(', ')} → ${content.nextLabel}: ${content.nextItems
    .map((i) => i.keyText)
    .join(', ')}. ${content.resultNote}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <StepHeader label={content.diagramTitle} />

        <ListRow label={content.previousLabel} items={content.previousItems} />
        <DownArrow />
        <ListRow label={content.nextLabel} items={content.nextItems} />

        <DownArrow />

        <ResultNote text={content.resultNote} />
      </div>
    </HeroDiagramShell>
  );
};

const StepHeader = ({ label }: { label: string }) => (
  <div className="flex items-center gap-sm">
    <ToneIconBox tone="sky" size="sm">
      <NetworkIcon className="h-4 w-4" aria-hidden="true" />
    </ToneIconBox>
    <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.sky.text)}>
      {label}
    </span>
    <span
      aria-hidden="true"
      className="flex-1 border-t border-dashed border-[var(--term-border)]"
    />
  </div>
);

const ListRow = ({ label, items }: { label: string; items: DiagramItem[] }) => (
  <div className="flex flex-col gap-2">
    <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      {label}
    </span>
    <ul className="grid grid-cols-1 @sm:grid-cols-3 gap-2">
      {items.map((item) => (
        <li key={`${item.id}-${item.label}`} className="flex min-w-0">
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  </div>
);

const ItemCard = ({ item }: { item: DiagramItem }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex flex-1 items-center gap-2 rounded-xl border p-sm',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={item.tone} size="sm">
        <span className="font-mono text-sm font-bold">{item.label}</span>
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          <KeyIcon className="h-3 w-3" aria-hidden="true" />
          key
        </span>
        <code className={cn('font-mono text-[11px] font-bold tracking-tight break-all', t.text)}>
          {item.keyText}
        </code>
      </div>
    </article>
  );
};

const ResultNote = ({ text }: { text: string }) => (
  <article
    className={cn(
      'flex items-start gap-sm rounded-xl border p-md',
      'border-teal-200/80 bg-teal-50/60 shadow-[0_2px_0_var(--term-border)]',
      'dark:border-teal-800/70 dark:bg-teal-950/30',
    )}
  >
    <ToneIconBox tone="teal" size="md">
      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
    </ToneIconBox>
    <p className="text-xsm sm:text-sm font-bold leading-snug text-teal-900 dark:text-teal-100 break-keep">
      {text}
    </p>
  </article>
);
