import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroInputCard, HeroOutputCard, RecoveryModelOverviewContent } from '../content';
import {
  CompassIcon,
  HourglassIcon,
  PauseCircleIcon,
  ServerCrashIcon,
  ServerIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  TriangleAlertIcon,
} from '../icons';
import type { Domain } from '../tone';

type Props = { content: RecoveryModelOverviewContent['hero']; className?: string };

/** Domain → 공유 ToneKey 매핑. ToneKey에 없는 색은 가장 가까운 톤으로 맞춘다. */
const domainTone: Record<Domain, ToneKey> = {
  pending: 'violet',
  rejected: 'amber',
  error: 'amber',
  boundary: 'teal',
  hydration: 'teal',
  server: 'cyan',
  recovery: 'emerald',
  navy: 'indigo',
  completion: 'emerald',
};

const inputIcon: Record<Domain, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  rejected: TriangleAlertIcon,
  error: ServerCrashIcon,
  hydration: ServerIcon,
  server: ServerIcon,
  boundary: ShieldCheckIcon,
  recovery: ShieldCheckIcon,
  navy: PauseCircleIcon,
  completion: ShieldCheckIcon,
};

const outputIcon: Record<Domain, React.ComponentType<{ className?: string }>> = {
  pending: PauseCircleIcon,
  boundary: ShieldAlertIcon,
  hydration: ShieldCheckIcon,
  recovery: ShieldCheckIcon,
  rejected: TriangleAlertIcon,
  error: ShieldAlertIcon,
  server: ServerIcon,
  navy: ServerIcon,
  completion: ShieldCheckIcon,
};

/**
 * Hero 핵심 비주얼.
 * 5가지 실패/대기 입력 → 하나의 Recovery Model → 4가지 복구 출력으로
 * 이어지는 챕터 개요 맵을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RecoveryModelHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.inputs.map((c) => c.title).join(', ')} → ${
    content.central.title
  }(${content.central.lines.join(', ')}) → ${content.outputs.map((c) => c.title).join(', ')}`;

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
        <ul className="grid grid-cols-2 gap-sm @sm:grid-cols-3 @3xl:grid-cols-5">
          {content.inputs.map((card) => (
            <li key={card.title}>
              <InputCard card={card} />
            </li>
          ))}
        </ul>

        <DownArrow />

        <CentralCard central={content.central} />

        <DownArrow />

        <ul className="grid grid-cols-2 gap-sm @xl:grid-cols-4">
          {content.outputs.map((card) => (
            <li key={card.title}>
              <OutputCard card={card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const InputCard = ({ card }: { card: HeroInputCard }) => {
  const tone = domainTone[card.domain];
  const t = toneTokens[tone];
  const Icon = inputIcon[card.domain];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <span className={cn('text-[11px] font-mono font-bold break-keep', t.text)}>{card.title}</span>
      <span className="text-[10px] text-[var(--term-muted)] break-keep">{card.caption}</span>
    </article>
  );
};

const OutputCard = ({ card }: { card: HeroOutputCard }) => {
  const tone = domainTone[card.domain];
  const t = toneTokens[tone];
  const Icon = outputIcon[card.domain];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-1 rounded-xl border bg-[var(--term-bg)] p-2.5 text-center',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <span className={cn('text-xsm font-bold break-keep', t.text)}>{card.title}</span>
    </article>
  );
};

const CentralCard = ({ central }: { central: RecoveryModelOverviewContent['hero']['central'] }) => (
  <article
    className={cn(
      'flex flex-col items-center gap-2 rounded-xl border bg-[var(--term-bg)] p-md text-center',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="blue" size="md">
      <CompassIcon className="h-5 w-5" />
    </ToneIconBox>
    <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
      {central.title}
    </h3>
    <ul className="grid w-full grid-cols-2 gap-1.5 @sm:grid-cols-4">
      {central.lines.map((line) => (
        <li
          key={line}
          className="inline-flex items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 font-mono text-[10px] font-bold text-[var(--term-muted)] break-keep"
        >
          {line}
        </li>
      ))}
    </ul>
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
