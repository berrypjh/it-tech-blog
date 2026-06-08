import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { React19ErrorReportingContent, RootCallbackCard } from '../content';
import { AlertTriangleIcon, RefreshCcwIcon, ShieldAlertIcon, ShieldCheckIcon } from '../icons';
import type { CallbackKind } from '../tone';

type Props = { content: React19ErrorReportingContent['hero']; className?: string };

const callbackIcon: Record<CallbackKind, React.ComponentType<{ className?: string }>> = {
  caught: ShieldCheckIcon,
  uncaught: ShieldAlertIcon,
  recoverable: RefreshCcwIcon,
};

/** ToneKey에는 rose가 없어 가장 가까운 톤으로 매핑한다. */
const callbackTone: Record<CallbackKind, ToneKey> = {
  caught: 'blue',
  uncaught: 'amber',
  recoverable: 'teal',
};

/**
 * Hero 핵심 비주얼.
 * 하나의 에러 발생 지점 → 세 갈래 root error callback(caught / uncaught / recoverable)으로
 * 분류되는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ErrorReportingHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.titleLines.join(' ')}. ${content.description} ${content.callbacks
    .map((c) => `${c.name}: ${c.summary} (${c.badge})`)
    .join(' / ')}`;

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
        <SourceRow />
        <DownArrow />
        <ul className="flex flex-col gap-sm">
          {content.callbacks.map((card) => (
            <li key={card.kind}>
              <CallbackRow card={card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SourceRow = () => (
  <div
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="violet" size="sm">
      <AlertTriangleIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
      render error
    </span>
    <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      createRoot · hydrateRoot
    </span>
  </div>
);

const CallbackRow = ({ card }: { card: RootCallbackCard }) => {
  const tone = callbackTone[card.kind];
  const t = toneTokens[tone];
  const Icon = callbackIcon[card.kind];

  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className={cn('font-mono text-sm font-bold tracking-tight break-all', t.text)}>
            {card.name}
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              t.chip,
            )}
          >
            <span className={cn('block h-1.5 w-1.5 rounded-full', t.dot)} />
            {card.badge}
          </span>
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.summary}
        </span>
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
