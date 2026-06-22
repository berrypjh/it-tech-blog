import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroRenderSide, HookSlot, RulesOfHooksContent } from '../content';
import { AlertTriangleIcon, CheckCircleIcon, ListOrderedIcon, XCircleIcon } from '../icons';

type Props = { content: RulesOfHooksContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Hook은 이름이 아니라 호출 순서로 연결 리스트에 저장된다는 점을,
 * 정상 매칭 → 순서가 바뀐 다음 렌더로 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RulesOfHooksHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle}. ${content.normalRender.label}: ${content.normalRender.slots
    .map((s) => `${s.index} ${s.hookName}`)
    .join(', ')} — ${content.normalRender.matchLabel}. ${
    content.nextRender.label
  }: ${content.nextRender.slots
    .map((s) => `${s.index} ${s.hookName}`)
    .join(', ')} — ${content.nextRender.matchLabel}. ${content.warning}`;

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
          <ToneIconBox tone="violet" size="sm">
            <ListOrderedIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </h2>
        </header>

        <CodePreviewPanel code={content.leftCode} header="MyComponent.jsx" language="JSX" />

        <DownArrow />

        <RenderCard side={content.normalRender} variant="ok" />

        <DownArrow />

        <RenderCard side={content.nextRender} variant="broken" />

        <WarningNote text={content.warning} />
      </div>
    </div>
  );
};

const RenderCard = ({ side, variant }: { side: HeroRenderSide; variant: 'ok' | 'broken' }) => {
  const isBroken = variant === 'broken';
  const tone: ToneKey = isBroken ? 'amber' : 'emerald';
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {isBroken ? (
            <XCircleIcon className="h-[18px] w-[18px]" />
          ) : (
            <CheckCircleIcon className="h-[18px] w-[18px]" />
          )}
        </ToneIconBox>
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {side.label}
        </span>
      </header>

      <ul className="flex flex-col gap-1.5">
        {side.slots.map((slot) => (
          <SlotRow key={slot.index} slot={slot} />
        ))}
      </ul>

      <p className={cn('text-xsm font-bold leading-relaxed break-keep', t.text)}>
        {side.matchLabel}
      </p>
    </article>
  );
};

const slotTone: Record<HookSlot['status'], ToneKey> = {
  ok: 'emerald',
  shifted: 'amber',
  missing: 'amber',
};

const SlotRow = ({ slot }: { slot: HookSlot }) => {
  const t = toneTokens[slotTone[slot.status]];
  return (
    <li
      className={cn(
        'flex items-start gap-2 rounded-lg border bg-[var(--term-bg)] px-2.5 py-1.5',
        'border-[var(--term-border)]',
        t.borderHover,
        slot.status === 'missing' && 'opacity-90',
      )}
    >
      <code className="font-mono text-[11px] font-bold tabular-nums shrink-0 text-[var(--term-muted)]">
        {slot.index}
      </code>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code
          className={cn(
            'font-mono text-[11px] sm:text-xsm font-bold break-all',
            t.text,
            slot.status === 'missing' && 'line-through',
          )}
        >
          {slot.hookName}
        </code>
        {slot.caption && (
          <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep">
            {slot.caption}
          </span>
        )}
      </div>
    </li>
  );
};

const WarningNote = ({ text }: { text: string }) => (
  <div
    className={cn(
      'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="amber" size="sm">
      <AlertTriangleIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <p className="text-xsm font-bold leading-relaxed text-[var(--term-fg)] break-keep">{text}</p>
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
