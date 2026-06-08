import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RootSchedulerContent, SchedulerAccent } from '../content';
import { ClockIcon, DatabaseIcon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: RootSchedulerContent['hero']; className?: string };

/** SchedulerAccent를 shared toneTokens의 ToneKey로 매핑한다. slate는 가장 가까운 중립 톤으로 보낸다. */
const accentToTone: Record<SchedulerAccent, ToneKey> = {
  blue: 'blue',
  teal: 'teal',
  violet: 'violet',
  slate: 'indigo',
};

/**
 * Hero 핵심 비주얼.
 * root.pendingLanes에 쌓인 여러 lane → 가장 높은 우선순위 nextLanes 선택 →
 * sync/async 실행 경로 결정으로 이어지는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RootSchedulerHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.step1.title}: ${content.step1.body} → ${content.step2.title}(${content.step2.selected}) → ${content.step3.title}: ${content.step3.paths
    .map((p) => p.label)
    .join(', ')}`;

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
        {/* Step 1: pendingLanes */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'transition-all hover:-translate-y-0.5',
            toneTokens.teal.borderHover,
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="teal" size="sm">
              <DatabaseIcon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <span
              className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.teal.text)}
            >
              {content.step1.title}
            </span>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.step1.body}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {content.step1.lanes.map((lane) => {
              const t = toneTokens[accentToTone[lane.accent]];
              return (
                <li
                  key={lane.label}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px]',
                    t.chip,
                  )}
                >
                  <span className={cn('block h-1.5 w-1.5 rounded-full', t.dot)} />
                  {lane.label}
                </li>
              );
            })}
          </ul>
        </article>

        <DownArrow />

        {/* Step 2: selected nextLanes */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-xl border p-md',
            toneTokens.blue.chip,
            toneTokens.blue.border,
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="blue" size="sm">
              <TargetIcon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <span
              className={cn('text-sm font-bold tracking-tight break-keep', toneTokens.blue.text)}
            >
              {content.step2.title}
            </span>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.step2.body}
          </p>
          <span
            className={cn(
              'inline-flex items-center self-start gap-2 rounded-lg border px-3 py-1.5',
              'font-mono text-xsm font-bold',
              toneTokens.blue.chip,
            )}
          >
            <span className={cn('inline-block h-2 w-2 rounded-full', toneTokens.blue.dot)} />
            {content.step2.selected}
          </span>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.step2.footer}
          </p>
        </article>

        <DownArrow />

        {/* Step 3: execution path */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'transition-all hover:-translate-y-0.5',
            toneTokens.teal.borderHover,
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="teal" size="sm">
              <ClockIcon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <span
              className={cn('text-sm font-bold tracking-tight break-keep', toneTokens.teal.text)}
            >
              {content.step3.title}
            </span>
          </header>
          <p className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.step3.body}
          </p>
          <ul className="flex flex-col gap-1.5">
            {content.step3.paths.map((p) => {
              const t = toneTokens[p.accent];
              const Icon = p.accent === 'blue' ? ZapIcon : ClockIcon;
              return (
                <li
                  key={p.label}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-lg border px-3 py-1.5',
                    'text-xsm font-mono',
                    t.chip,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {p.label}
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
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
