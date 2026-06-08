import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { KeyFiberReuseContent, ListItem } from '../content';
import { CheckCircleIcon, FingerprintIcon, KeyRoundIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 재정렬 전 목록 → key 추적 → 재정렬 후 목록 → 결과로 이어지는
 * key 기반 Fiber 재사용 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const KeyFiberReuseHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.beforeLabel}: ${content.beforeItems
    .map((i) => `${i.label}(${i.keyValue})`)
    .join(', ')} — ${content.centerLabel} — ${content.afterLabel}: ${content.afterItems
    .map((i) => `${i.label}(${i.keyValue})`)
    .join(', ')}. ${content.resultTitle}`;

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
        <ListBlock label={content.beforeLabel} items={content.beforeItems} />

        <TrackingStep label={content.centerLabel} />

        <ListBlock label={content.afterLabel} items={content.afterItems} />

        <DownArrow />

        <ResultBlock title={content.resultTitle} items={content.resultItems} />
      </div>
    </div>
  );
};

const ListBlock = ({ label, items }: { label: string; items: ListItem[] }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.id}>
          <KeyChipRow item={item} />
        </li>
      ))}
    </ul>
  </article>
);

const KeyChipRow = ({ item }: { item: ListItem }) => {
  const t = toneTokens[item.tone];
  return (
    <div className="flex items-center justify-between gap-sm min-w-0">
      <span className="flex items-center gap-2 min-w-0">
        <ToneIconBox tone={item.tone} size="sm">
          <span className="font-mono text-sm font-extrabold">{item.label}</span>
        </ToneIconBox>
        <code className={cn('font-mono text-sm font-extrabold', t.text)}>{item.label}</code>
      </span>
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
          t.chip,
        )}
      >
        <KeyRoundIcon className="h-3 w-3" aria-hidden="true" />
        {item.keyValue}
      </span>
    </div>
  );
};

const TrackingStep = ({ label }: { label: string }) => {
  const t = toneTokens.sky;
  return (
    <div className="flex flex-col items-center gap-sm">
      <DownArrow />
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
          'font-mono text-[10px] font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        <FingerprintIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </span>
      <DownArrow />
    </div>
  );
};

const ResultBlock = ({ title, items }: { title: string; items: string[] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone="sky" size="md">
        <CheckCircleIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-sm">
        <h3 className="text-sm font-bold leading-snug tracking-tight text-[var(--term-fg)] break-keep">
          {title}
        </h3>
        <ul className="flex flex-wrap gap-1.5">
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-bold',
                t.chip,
              )}
            >
              {item}
            </li>
          ))}
        </ul>
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
