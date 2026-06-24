import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ScheduleUpdateOnFiberContent } from '../content';
import { NetworkIcon, ZapIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Root의 pendingLanes 상태가 scheduleUpdateOnFiber 호출을 거쳐
 * "작업 없음 → 작업 대기 중"으로 바뀌는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ScheduleUpdateHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.beforeTitle}는 ${diagram.beforeState} 상태에서 ${diagram.functionLabel} 호출 이후 ${diagram.afterState} 상태로 바뀝니다.`;

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
          <StateCard
            tone="sky"
            label={diagram.beforeLabel}
            title={diagram.beforeTitle}
            state={diagram.beforeState}
            body={diagram.beforeBody}
          />
        </li>

        <DownArrow />

        <li>
          <CodePreviewPanel code={diagram.functionLabel} showWindowDots size="md" />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StateCard
            tone="teal"
            label={diagram.afterLabel}
            title={diagram.afterTitle}
            badge={diagram.afterBadge}
            state={diagram.afterState}
            body={diagram.afterBody}
            emphasized
          />
        </li>
      </ol>
    </div>
  );
};

type StateCardProps = {
  tone: ToneKey;
  label: string;
  title: string;
  badge?: string;
  state: string;
  body: string;
  emphasized?: boolean;
};

const StateCard = ({ tone, label, title, badge, state, body, emphasized }: StateCardProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        emphasized ? cn(t.chip, t.border) : cn('border-[var(--term-border)]', t.borderHover),
      )}
    >
      <div className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <NetworkIcon className="h-4 w-4" />
        </ToneIconBox>
        <span className={cn('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {title}
        </span>
        {badge ? (
          <span
            className={cn(
              'ml-auto shrink-0 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
              t.chip,
            )}
          >
            <ZapIcon aria-hidden="true" className="h-3 w-3" />
            {badge}
          </span>
        ) : (
          <span
            className={cn(
              'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
              'border-[var(--term-border)] text-[var(--term-muted)]',
            )}
          >
            {label}
          </span>
        )}
      </div>

      <code className="inline-flex w-fit items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[11px] font-bold text-[var(--term-fg)]">
        {state}
      </code>

      <p className="text-xxsm leading-snug text-[var(--term-muted)] break-keep">{body}</p>
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
