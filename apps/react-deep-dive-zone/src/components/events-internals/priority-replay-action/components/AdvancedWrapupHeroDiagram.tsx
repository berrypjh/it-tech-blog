import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { AdvancedWrapupContent, ExpansionCard, Tone } from '../content';
import { DropletIcon, MapIcon, RocketIcon, ZapIcon } from '../icons';

type Props = { content: AdvancedWrapupContent['hero']; className?: string };

const cardIcons = [ZapIcon, DropletIcon, RocketIcon] as const;

/** 콘텐츠 Tone을 공유 ToneKey로 매핑한다. (mint 등 미지원 톤은 근사값으로) */
const toToneKey = (tone: Tone): ToneKey => {
  switch (tone) {
    case 'rose':
      return 'amber';
    case 'mint':
      return 'emerald';
    default:
      return tone;
  }
};

/**
 * Hero 핵심 비주얼.
 * 이벤트 챕터의 마무리로서, 이벤트 시스템이 우선순위 · hydration replay ·
 * form action까지 확장된다는 점을 위에서 아래로 잇는 컴팩트 recap stepper.
 */
export const AdvancedWrapupHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle}: ${content.expansionCards
    .map((c) => `${c.title} — ${c.description}`)
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
            <MapIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </span>
        </header>

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.expansionCards.map((card, i) => (
            <li key={card.title} className="flex flex-col gap-sm">
              <ExpansionRow card={card} Icon={cardIcons[i] ?? ZapIcon} />
              {i < content.expansionCards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const ExpansionRow = ({
  card,
  Icon,
}: {
  card: ExpansionCard;
  Icon: (typeof cardIcons)[number];
}) => {
  const tone = toToneKey(card.tone);
  const t = toneTokens[tone];
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
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {card.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.description}
        </span>
        {card.bullets && (
          <ul className="mt-1 flex flex-wrap gap-1">
            {card.bullets.map((b) => (
              <li
                key={b}
                className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
              >
                {b}
              </li>
            ))}
          </ul>
        )}
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
