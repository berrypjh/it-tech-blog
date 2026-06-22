import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ActionsUpdateFlowContent, StateCard } from '../content';
import { AtomIcon } from '../icons';
import { iconRegistry } from '../sections/_iconRegistry';
import type { StateKey } from '../tone';

type Props = { content: ActionsUpdateFlowContent['hero']; className?: string };

/** StateKey → 공유 ToneKey 매핑 (가장 가까운 톤). */
const stateToneKey: Record<StateKey, ToneKey> = {
  pending: 'teal',
  error: 'violet',
  form: 'blue',
  optimistic: 'emerald',
};

/**
 * Hero 핵심 비주얼.
 * Action 코어 한 줄 선언이 pending · error · form · optimistic 네 가지 상태를
 * 하나의 선언적 모델로 묶는다는 점을, 코어 헤더 → 상태 카드 그리드로 보여준다.
 */
export const ActionsHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagram.centerTitle} ${content.diagram.centerSubtitle}: ${content.diagram.cards
    .map((c) => `${c.title}(${c.keyword})`)
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
            <AtomIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
            {content.diagram.centerTitle}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.diagram.centerSubtitle}
          </span>
        </header>

        <CodePreviewPanel
          code="const [state, formAction, isPending] = useActionState(action);"
          showWindowDots
          language="TS"
          size="md"
        />

        <DownArrow />

        <ol className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          {content.diagram.cards.map((card) => (
            <li key={card.state}>
              <StateCardBox card={card} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const StateCardBox = ({ card }: { card: StateCard }) => {
  const tone = stateToneKey[card.state];
  const t = toneTokens[tone];
  const Icon = iconRegistry[card.iconKey];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.caption}</p>
      <span className="w-fit rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]">
        {card.keyword}
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
