import { cx } from '@berrypjh/react-ui';
import { Clock, ListChecks, Network } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent, HeroRootCard } from '../content';

type Props = { content: EnsureRootScheduledContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * 업데이트가 생긴 여러 Root → Root Schedule Queue 등록 → microtask 예약으로
 * 이어지는 스케줄링 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EnsureRootHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title} → ${diagram.scheduleQueueTitle}: ${diagram.scheduleQueueItems.join(
    ' → ',
  )} → ${diagram.microtaskQueueTitle}: ${diagram.microtaskFunction}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative" aria-hidden="true">
        <ol className="flex flex-col gap-sm">
          <li className="flex flex-col gap-sm">
            <StepHeader tone="sky" label={diagram.title} icon={<Network className="h-4 w-4" />} />
            <ul className="grid grid-cols-2 gap-2 @sm:grid-cols-4">
              {diagram.roots.map((root) => (
                <li key={root.id} className="flex min-w-0">
                  <RootChip root={root} />
                </li>
              ))}
            </ul>
            <DownArrow />
          </li>

          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="emerald"
              label={diagram.scheduleQueueTitle}
              icon={<ListChecks className="h-4 w-4" />}
            />
            <ol className="flex flex-wrap items-center gap-2">
              {diagram.scheduleQueueItems.map((item, idx) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    className={cx(
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
            <DownArrow />
          </li>

          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="violet"
              label={diagram.microtaskQueueTitle}
              icon={<Clock className="h-4 w-4" />}
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
    </HeroDiagramShell>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center gap-sm">
    <ToneIconBox tone={tone} size="sm">
      {icon}
    </ToneIconBox>
    <span
      className={cx('min-w-0 truncate text-sm font-bold tracking-tight', toneTokens[tone].text)}
    >
      {label}
    </span>
    <span className="ml-auto flex-1 border-t border-dashed border-[var(--term-border)]" />
  </div>
);

const RootChip = ({ root }: { root: HeroRootCard }) => {
  const t = toneTokens[root.tone];
  return (
    <div
      className={cx(
        'flex w-full min-w-0 flex-col gap-1 rounded-xl border bg-[var(--term-bg)] px-sm py-2',
        'shadow-[0_2px_0_var(--term-border)]',
        root.inactive
          ? 'border-dashed border-[var(--term-border)] opacity-60'
          : 'border-[var(--term-border)]',
      )}
    >
      <span className="flex items-center gap-1.5">
        <span
          className={cx(
            'inline-block h-2 w-2 rounded-full',
            root.inactive ? 'bg-[var(--term-border)]' : t.dot,
          )}
        />
        <span
          className={cx(
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
    </div>
  );
};
