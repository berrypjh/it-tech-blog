import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { After192Content, TimelineCard } from '../content';
import { iconRegistry } from '../sections/_iconRegistry';
import type { ToneKey as PageToneKey } from '../tone';

type Props = { content: After192Content['hero']; className?: string };

/** 페이지 톤 키를 공유 ToneIconBox/toneTokens가 아는 가장 가까운 톤으로 매핑한다. */
const toneMap: Record<PageToneKey, ToneKey> = {
  cache: 'blue',
  ppr: 'teal',
  batching: 'violet',
  perf: 'cyan',
  concept: 'indigo',
  stable: 'emerald',
  neutral: 'sky',
};

/**
 * Hero 핵심 비주얼.
 * 19.2 이후 운영 모델이 넓어진 네 축(cacheSignal → PPR → SSR Batching → Performance Tracks)을
 * 위에서 아래로 잇는 컴팩트 stepper. "어떻게 읽을지"의 접근 개요를 보여준다.
 */
export const After192HeroDiagram = ({ content, className }: Props) => {
  const a11y = content.cards
    .map((c) => `${c.number} ${c.title}: ${c.descriptionLines.join(', ')}`)
    .join('; ');

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

      <ol className="relative flex flex-col items-stretch gap-sm" aria-hidden="true">
        {content.cards.map((card, i) => (
          <li key={card.number} className="flex flex-col items-stretch gap-sm">
            <AxisCard card={card} />
            {i < content.cards.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </div>
  );
};

const AxisCard = ({ card }: { card: TimelineCard }) => {
  const tone = toneMap[card.tone];
  const t = toneTokens[tone];
  const Icon = iconRegistry[card.iconKey];

  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {card.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.descriptionLines.join(' · ')}
        </span>
      </div>
      <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {card.number}
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
