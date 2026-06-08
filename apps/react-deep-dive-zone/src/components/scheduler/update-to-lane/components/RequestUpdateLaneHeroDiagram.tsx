import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ContextAccent, ContextCard, RequestUpdateLaneContent } from '../content';
import { ClockIcon, MousePointerClickIcon, RefreshIcon, ZapIcon } from '../icons';

type Props = { content: RequestUpdateLaneContent['hero']; className?: string };

/** ContextAccent → 가장 가까운 ToneKey. 모두 유효한 ToneKey라 그대로 매핑된다. */
const accentTone: Record<ContextAccent, ToneKey> = {
  blue: 'blue',
  teal: 'teal',
  violet: 'violet',
};

const cardIcon: Record<ContextAccent, typeof ZapIcon> = {
  blue: MousePointerClickIcon,
  teal: ClockIcon,
  violet: RefreshIcon,
};

/**
 * Hero 핵심 비주얼.
 * 같은 setState 한 줄(코드 패널)이 호출된 문맥(클릭 / transition / 렌더)에 따라
 * 서로 다른 lane으로 갈라지는 결정 흐름을 컴팩트하게 보여준다.
 */
export const RequestUpdateLaneHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.codePill}: ${content.contextCards
    .map((c) => `${c.label} (${c.descriptionLines.join(', ')})`)
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

      <div className="relative flex flex-col gap-sm">
        <CodePreviewPanel code={`${content.codePill};`} language="JS" size="md" showWindowDots />

        <DownArrow />

        <ol className="grid grid-cols-1 gap-sm @md:grid-cols-3" aria-hidden="true">
          {content.contextCards.map((card) => (
            <li key={card.key}>
              <ContextCardBox card={card} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const ContextCardBox = ({ card }: { card: ContextCard }) => {
  const tone = accentTone[card.accent];
  const t = toneTokens[tone];
  const Icon = cardIcon[card.accent];

  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className="flex min-w-0 flex-col">
          <span className={cn('truncate text-sm font-bold tracking-tight', t.text)}>
            {card.label}
          </span>
          <span className="truncate text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {card.subtitle}
          </span>
        </span>
      </span>
      <ul className="flex flex-col gap-0.5">
        {card.descriptionLines.map((line, i) => (
          <li
            key={line}
            className={cn(
              'text-[11px] leading-snug break-keep',
              i === card.descriptionLines.length - 1
                ? cn('font-bold', t.text)
                : 'text-[var(--term-muted)]',
            )}
          >
            {line}
          </li>
        ))}
      </ul>
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
