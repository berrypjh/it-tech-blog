import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { HookSideCard, UseReducerSharedContent } from '../content';
import { MergeIcon, SproutIcon } from '../icons';

type Props = { content: UseReducerSharedContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * useState와 useReducer가 각자의 API로 시작하지만,
 * 동일한 공통 queue 구조로 수렴한다는 점을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const UseReducerSharedHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.useStateCard.hookName} · ${content.useReducerCard.hookName} → ${
    content.sharedCard.title
  }: ${content.sharedCard.items.join(', ')}. ${content.bottomLabel}`;

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
        <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <HookCard card={content.useStateCard} />
          <HookCard card={content.useReducerCard} />
        </div>

        <DownArrow />

        <SharedCard title={content.sharedCard.title} items={content.sharedCard.items} />

        <BottomLabel label={content.bottomLabel} />
      </div>
    </div>
  );
};

const HookCard = ({ card }: { card: HookSideCard }) => {
  const t = toneTokens[card.tone];
  return (
    <article className="flex h-full flex-col gap-sm">
      <div className="flex items-center gap-sm">
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>
          {card.hookName}
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>
      <CodePreviewPanel code={card.code} language="JS" size="sm" />
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.caption}</p>
    </article>
  );
};

const SharedCard = ({ title, items }: { title: string; items: string[] }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        t.chip,
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="violet" size="sm">
          <MergeIcon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <h2 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</h2>
      </header>
      <ul className="flex flex-wrap gap-1">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

const BottomLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <span
      aria-hidden="true"
      className="flex-1 border-t border-dashed border-[var(--term-border)]"
    />
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] break-keep">
      <SproutIcon className="h-3.5 w-3.5" />
      {label}
    </span>
    <span
      aria-hidden="true"
      className="flex-1 border-t border-dashed border-[var(--term-border)]"
    />
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
