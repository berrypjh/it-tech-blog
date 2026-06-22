import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PromiseStateCard, UseSuspenseErrorModelContent } from '../content';
import { AtomIcon } from '../icons';
import { iconRegistry } from '../sections/_iconRegistry';
import type { StateKey } from '../tone';

type Props = { content: UseSuspenseErrorModelContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * use(promise) 호출 한 줄이 Promise 상태(pending/fulfilled/rejected)에 따라
 * Suspense · 값 반환 · Error Boundary로 분기되는 통합 모델을 위에서 아래로 잇는 stepper.
 */
export const UseModelHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagram.title}: ${content.diagram.cards
    .map((c) => `${c.title}(${c.subtitle}) ${c.result}`)
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

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <ToneIconBox tone="blue" size="sm">
            <AtomIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagram.title}
          </h3>
        </header>

        <CodePreviewPanel
          code="const user = use(userPromise);"
          showWindowDots
          language="JS"
          size="md"
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.diagram.cards.map((card) => (
            <li key={card.title}>
              <StateCard card={card} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

/** content.ts의 StateKey를 공유 ToneKey로 매핑. rejected는 가장 가까운 amber로. */
const stateToneKey: Record<StateKey, ToneKey> = {
  pending: 'blue',
  fulfilled: 'emerald',
  rejected: 'amber',
  internals: 'violet',
  context: 'cyan',
  render: 'teal',
};

const StateCard = ({ card }: { card: PromiseStateCard }) => {
  const toneKey = stateToneKey[card.state];
  const t = toneTokens[toneKey];
  const Icon = iconRegistry[card.iconKey];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={toneKey} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold font-mono tracking-tight break-keep', t.text)}>
          {card.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </span>
      </div>
      <span
        className={cn(
          'ml-auto shrink-0 inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
          'font-mono text-[10px] font-bold break-keep',
          t.chip,
        )}
      >
        {card.result.replace('→ ', '')}
      </span>
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
