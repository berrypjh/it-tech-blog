import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSelectionContent, PriorityKey } from '../content';
import { CircleIcon, FilterIcon, WavesIcon, ZapIcon } from '../icons';

type Props = { content: DispatchSelectionContent['hero']; className?: string };

type DiagramRow = DispatchSelectionContent['hero']['diagram']['rows'][number];

/** PriorityKey를 가장 가까운 공유 ToneKey로 매핑. */
const priorityTone: Record<PriorityKey, ToneKey> = {
  discrete: 'teal',
  continuous: 'violet',
  default: 'amber',
};

const rowIcon: Record<PriorityKey, typeof ZapIcon> = {
  discrete: ZapIcon,
  continuous: WavesIcon,
  default: CircleIcon,
};

/**
 * Hero 핵심 비주얼.
 * 이벤트 우선순위 분류(Discrete / Continuous / Default)를 위에서 아래로 잇는
 * 컴팩트 stepper. 각 lane을 ToneIconBox + accent arrow로 보여준다.
 */
export const DispatchPriorityHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.rows
    .map((r) => `${r.priority} — ${r.description} (${r.example})`)
    .join('; ')}`;

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

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <FilterIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </span>
        </header>

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {diagram.rows.map((row, i) => (
            <li key={row.priority} className="flex flex-col gap-sm">
              <PriorityRow row={row} />
              {i < diagram.rows.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const PriorityRow = ({ row }: { row: DiagramRow }) => {
  const t = toneTokens[priorityTone[row.tone]];
  const Icon = rowIcon[row.tone];
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={priorityTone[row.tone]} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
          {row.priority}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {row.description}
        </span>
        <code className="font-mono text-[11px] leading-relaxed text-[var(--term-muted)] break-all">
          {row.example}
        </code>
      </div>
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
