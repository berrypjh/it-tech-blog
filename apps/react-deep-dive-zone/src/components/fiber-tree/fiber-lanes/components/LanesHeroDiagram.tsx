import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberLanesContent } from '../content';

import { LaneIcon } from './LaneIcon';
import { laneStyle } from './laneTone';

type Hero = FiberLanesContent['hero'];
type Props = { content: Hero; className?: string };

/**
 * Hero 핵심 비주얼.
 * Fiber 객체의 lanes/childLanes 필드 → 작업 우선순위(lanes) 스택으로
 * 이어지는 흐름을 위에서 아래로 잇는 컴팩트 다이어그램.
 */
export const LanesHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.cardLabel} 객체의 lanes/childLanes 필드는 ${content.stackTitle}를 나타내며, ${content.items
    .map((item) => item.label)
    .join(', ')} 순으로 우선순위가 정리됩니다.`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <SectionHeader label={content.cardLabel} caption="object" />
          <FiberCard fields={content.fields} />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <SectionHeader label={content.stackTitle} caption="lanes" />
          <ul className="flex flex-col gap-1.5">
            {content.items.map((item) => (
              <LaneRow key={item.id} item={item} />
            ))}
          </ul>
        </li>
      </ol>
    </HeroDiagramShell>
  );
};

const SectionHeader = ({ label, caption }: { label: string; caption: string }) => (
  <div className="flex items-center gap-sm">
    <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
      {label}
    </span>
    <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {caption}
    </span>
  </div>
);

const FiberCard = ({ fields }: { fields: Hero['fields'] }) => (
  <ul className="flex flex-col gap-1 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
    {fields.map((row, i) => (
      <li
        key={`${row.field}-${i}`}
        className={cn(
          'rounded-md px-2 py-1 text-[11px] font-mono',
          row.highlight === 'lanes'
            ? cn('border', toneTokens.emerald.chip)
            : row.highlight === 'childLanes'
              ? cn('border', toneTokens.violet.chip)
              : 'text-[var(--term-muted)]',
        )}
      >
        <span className="font-bold">{row.field}</span>
        {row.value && (
          <>
            <span className="text-[var(--term-muted)]">: </span>
            <span>{row.value}</span>
          </>
        )}
      </li>
    ))}
  </ul>
);

const LaneRow = ({ item }: { item: Hero['items'][number] }) => {
  const t = laneStyle(item.tone);
  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-lg border bg-[var(--term-bg)] px-2 py-1.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      {item.tone === 'slate' ? (
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            t.chip,
          )}
        >
          <LaneIcon iconName={item.iconName} className="h-4 w-4" />
        </span>
      ) : (
        <ToneIconBox tone={item.tone} size="sm">
          <LaneIcon iconName={item.iconName} className="h-4 w-4" />
        </ToneIconBox>
      )}
      <span className="flex min-w-0 flex-col">
        <code className={cn('truncate font-mono text-[11.5px] font-bold tracking-tight', t.text)}>
          {item.label}
        </code>
        <span className="truncate text-[10px] text-[var(--term-muted)]">{item.subtitle}</span>
      </span>
    </li>
  );
};
