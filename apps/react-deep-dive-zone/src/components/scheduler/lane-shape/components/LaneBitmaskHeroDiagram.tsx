import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import { BitCellRow } from '../../_shared/BitCellRow';
import type { HeroLaneCard, LaneAccent, LaneBitmaskContent } from '../content';
import { LayersIcon, RepeatIcon, SparklesIcon, ZapIcon } from '../icons';

type Props = { content: LaneBitmaskContent['hero']; className?: string };

const laneIcon: Record<LaneAccent, typeof ZapIcon> = {
  sync: ZapIcon,
  inputContinuous: ZapIcon,
  default: LayersIcon,
  transition: RepeatIcon,
  retry: RepeatIcon,
  offscreen: LayersIcon,
};

/** Map a LaneAccent to the closest shared ToneKey. */
const laneTone: Record<LaneAccent, ToneKey> = {
  sync: 'blue',
  inputContinuous: 'cyan',
  default: 'teal',
  transition: 'violet',
  retry: 'cyan',
  offscreen: 'amber',
};

const laneLegendLabel: Record<'sync' | 'default' | 'transition', string> = {
  sync: 'SyncLane',
  default: 'DefaultLane',
  transition: 'TransitionLane',
};

/**
 * Hero 핵심 비주얼.
 * 개별 Lane(각각 하나의 비트)들이 비트마스크로 병합되어 Lanes가 되는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const LaneBitmaskHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.laneCards
    .map((lc) => `${lc.name} ${lc.bits}`)
    .join(', ')} → ${content.result.title} ${content.result.bits}`;

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
        <ol className="flex flex-col gap-sm">
          {content.laneCards.map((lc) => (
            <li key={lc.name}>
              <LaneRow card={lc} />
            </li>
          ))}
        </ol>

        <DownArrow />

        <ResultCard title={content.result.title} bits={content.result.bits} />

        <ul className="flex flex-wrap gap-2 text-[10px] sm:text-xsm">
          {(['transition', 'default', 'sync'] as const).map((a) => {
            const t = toneTokens[laneTone[a]];
            return (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-0.5"
              >
                <span className={cn('block h-2 w-2 rounded-full', t.dot)} />
                <span className={cn('font-mono', t.text)}>{laneLegendLabel[a]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const LaneRow = ({ card }: { card: HeroLaneCard }) => {
  const tone = laneTone[card.accent];
  const t = toneTokens[tone];
  const Icon = laneIcon[card.accent];
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
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {card.name}
        </span>
        <BitCellRow bits={card.bits} accent={card.accent} size="md" />
      </div>
    </article>
  );
};

const ResultCard = ({ title, bits }: { title: string; bits: string }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="blue" size="sm">
        <SparklesIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">{title}</h2>
      <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        merged
      </span>
    </header>
    <BitCellRow
      bits={bits}
      accent="sync"
      ranges={[
        { start: 0, length: 3, accent: 'transition' },
        { start: 10, length: 1, accent: 'default' },
        { start: 14, length: 2, accent: 'sync' },
      ]}
      size="lg"
      className="overflow-x-auto"
      srLabel={`lane bitmask ${bits}`}
    />
  </article>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
