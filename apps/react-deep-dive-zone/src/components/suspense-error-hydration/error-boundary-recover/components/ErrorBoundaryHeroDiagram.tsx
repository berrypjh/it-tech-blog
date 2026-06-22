import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ErrorBoundaryRecoverContent, HeroFlowStep } from '../content';
import { RefreshCcwIcon, ShieldAlertIcon, ShieldCheckIcon, UserIcon } from '../icons';
import type { Phase } from '../tone';

type Props = { content: ErrorBoundaryRecoverContent['hero']; className?: string };

const stepIcon: Record<HeroFlowStep['icon'], React.ComponentType<{ className?: string }>> = {
  profile: UserIcon,
  shield: ShieldCheckIcon,
  update: RefreshCcwIcon,
  alert: ShieldAlertIcon,
};

/**
 * Hero 핵심 비주얼.
 * ErrorBoundary로 감싼 코드 → 자식 render 중 throw → 가장 가까운 Boundary capture →
 * captured update 등록 → fallback UI 재렌더로 이어지는 복구 흐름을 컴팩트 stepper로 보여준다.
 * (rose는 공유 ToneKey에 없어 에러 단계는 amber로 매핑한다.)
 */
export const ErrorBoundaryHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.flow.title}: ${content.flow.steps
    .map((s) => `${s.label} — ${s.caption}`)
    .join(' → ')}`;

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
          <ToneIconBox tone="violet" size="sm">
            <ShieldCheckIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.code.label}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.code.pill}
          </span>
        </header>

        <CodePreviewPanel
          code={content.code.content}
          header={content.code.fileLabel}
          language="jsx"
          size="md"
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.flow.steps.map((step, i) => (
            <li key={step.label} className="flex flex-col gap-sm">
              <FlowStepRow step={step} />
              {i < content.flow.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const phaseTone: Record<Phase, ToneKey> = {
  error: 'amber',
  boundary: 'teal',
  update: 'violet',
  recover: 'emerald',
};

const FlowStepRow = ({ step }: { step: HeroFlowStep }) => {
  const tone = phaseTone[step.phase];
  const t = toneTokens[tone];
  const Icon = stepIcon[step.icon];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.label}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.caption}
        </span>
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
