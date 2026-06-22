import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent, HeroRootCard } from '../content';
import { ClockIcon, ListChecksIcon, NetworkIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 업데이트가 생긴 여러 Root → Root Schedule Queue 등록 → microtask 예약으로
 * 이어지는 스케줄링 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EnsureRootHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title} → ${diagram.scheduleQueueTitle}: ${diagram.scheduleQueueItems.join(
    ' → ',
  )} → ${diagram.microtaskQueueTitle}: ${diagram.microtaskFunction}`;

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
          <StepHeader
            tone="sky"
            label={diagram.title}
            icon={<NetworkIcon className="h-[18px] w-[18px]" />}
          />
          <ul className="grid grid-cols-2 gap-2 @sm:grid-cols-4">
            {diagram.roots.map((root) => (
              <li key={root.id} className="flex min-w-0">
                <RootChip root={root} />
              </li>
            ))}
          </ul>
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="emerald"
            label={diagram.scheduleQueueTitle}
            icon={<ListChecksIcon className="h-[18px] w-[18px]" />}
            badge="FIFO"
          />
          <ol className="flex flex-wrap items-center gap-2">
            {diagram.scheduleQueueItems.map((item, idx) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-md border font-mono text-sm font-bold tabular-nums',
                    'bg-[var(--term-accent)] text-[var(--term-bg)] border-[var(--term-accent)]',
                  )}
                >
                  {item}
                </span>
                {idx < diagram.scheduleQueueItems.length - 1 && (
                  <span className="font-mono text-[var(--term-accent)]">→</span>
                )}
              </li>
            ))}
          </ol>
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="violet"
            label={diagram.microtaskQueueTitle}
            icon={<ClockIcon className="h-[18px] w-[18px]" />}
            badge="reserved"
          />
          <CodePreviewPanel
            code={`${diagram.microtaskFunction}()`}
            caption={diagram.microtaskBody}
            language="JS"
            showWindowDots={false}
            size="md"
          />
        </li>
      </ol>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
  badge,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('min-w-0 truncate text-sm font-bold tracking-tight', t.text)}>
        {label}
      </span>
      {badge ? (
        <span
          className={cn(
            'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
            t.chip,
          )}
        >
          {badge}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="ml-auto flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      )}
    </div>
  );
};

const RootChip = ({ root }: { root: HeroRootCard }) => {
  const t = toneTokens[root.tone];
  return (
    <article
      className={cn(
        'flex w-full min-w-0 flex-col gap-1 rounded-xl border bg-[var(--term-bg)] px-sm py-2',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        root.inactive
          ? 'border-dashed border-[var(--term-border)] opacity-60'
          : cn('border-[var(--term-border)]', t.borderHover),
      )}
    >
      <span className="flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className={cn(
            'inline-block h-2 w-2 rounded-full',
            root.inactive ? 'bg-[var(--term-border)]' : t.dot,
          )}
        />
        <span
          className={cn(
            'min-w-0 truncate font-mono text-xsm font-bold tracking-tight',
            root.inactive ? 'text-[var(--term-muted)]' : t.text,
          )}
        >
          {root.title}
        </span>
      </span>
      <code className="truncate font-mono text-[10px] text-[var(--term-muted)]">{root.state}</code>
      {root.body && (
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {root.body}
        </span>
      )}
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
