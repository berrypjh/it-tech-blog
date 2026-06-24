import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroStep, RootAccent, RootPendingWorkContent } from '../content';
import { ClockIcon, DatabaseIcon, ZapIcon } from '../icons';

type Props = { content: RootPendingWorkContent['hero']; className?: string };

/** RootAccent → 공유 ToneKey 매핑 (blue/teal/violet 모두 유효 ToneKey). */
const accentTone: Record<RootAccent, ToneKey> = {
  blue: 'blue',
  teal: 'teal',
  violet: 'violet',
};

const stepIcon: Record<RootAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: DatabaseIcon,
  violet: ClockIcon,
};

const ROOT_LANES_CODE = `FiberRoot {
  pendingLanes:   0b...,  // 처리 대기 작업
  suspendedLanes: 0b...,  // 중단된 작업
  pingedLanes:    0b...,  // 깨어난 작업
}`;

/**
 * Hero 핵심 비주얼.
 * Fiber 업데이트 → root.pendingLanes 기록 → Root Scheduler로 이어지는
 * 흐름을, root 객체의 lane 비트셋 필드와 함께 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RootPendingWorkHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.steps
    .map((s) => `${s.title}(${s.content.join(' ')})`)
    .join(' → ')}. ${content.subtitle}`;

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
          {content.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <StepCard step={step} />
              {i === content.steps.length - 1 && (
                <CodePreviewPanel
                  code={ROOT_LANES_CODE}
                  header="FiberRoot"
                  caption="pending / suspended / pinged 비트셋"
                  size="sm"
                />
              )}
              {i < content.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const StepCard = ({ step }: { step: HeroStep }) => {
  const t = toneTokens[accentTone[step.accent]];
  const Icon = stepIcon[step.accent];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={accentTone[step.accent]} size="sm">
          <Icon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{step.title}</h3>
      </header>

      <ul className="flex flex-wrap gap-1">
        {step.content.map((line) => (
          <li
            key={line}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
          >
            {line}
          </li>
        ))}
      </ul>

      <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] break-keep">
        {step.footer}
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
