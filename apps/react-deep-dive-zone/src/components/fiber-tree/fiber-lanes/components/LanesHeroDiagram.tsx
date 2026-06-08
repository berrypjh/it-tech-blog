import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberLanesContent, LaneTone } from '../content';

import { LaneIcon } from './LaneIcon';

type Hero = FiberLanesContent['hero'];
type Props = { content: Hero; className?: string };

/** LaneTone(슬레이트 포함)을 공유 ToneKey로 정규화. */
const toneKey: Record<LaneTone, ToneKey> = {
  emerald: 'emerald',
  sky: 'sky',
  cyan: 'cyan',
  violet: 'violet',
  amber: 'amber',
  slate: 'indigo',
};

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
    </div>
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
            ? cn('border-l-4 border-l-emerald-400', toneTokens.emerald.chip)
            : row.highlight === 'childLanes'
              ? cn('border-l-4 border-l-violet-400', toneTokens.violet.chip)
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
  const tone = toneKey[item.tone];
  const t = toneTokens[tone];
  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-lg border bg-[var(--term-bg)] px-2 py-1.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <LaneIcon iconName={item.iconName} className="h-4 w-4" />
      </ToneIconBox>
      <span className="flex min-w-0 flex-col">
        <code className={cn('truncate font-mono text-[11.5px] font-bold tracking-tight', t.text)}>
          {item.label}
        </code>
        <span className="truncate text-[10px] text-[var(--term-muted)]">{item.subtitle}</span>
      </span>
    </li>
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
