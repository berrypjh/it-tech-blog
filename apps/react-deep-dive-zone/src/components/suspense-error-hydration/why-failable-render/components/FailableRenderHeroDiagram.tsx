import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { WhyFailableRenderContent } from '../content';
import { AtomIcon, HourglassIcon, RefreshCcwIcon, ShieldCheckIcon } from '../icons';

type Props = { content: WhyFailableRenderContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 렌더는 순수 함수지만 Promise나 Error를 throw할 수 있고,
 * React는 그것을 대기 → 재시도 → 복구로 이어지는 제어된 흐름으로 바꾼다.
 */
export const FailableRenderHeroDiagram = ({ content, className }: Props) => {
  const { illustration } = content;
  const a11y = `${illustration.backCardLabel} ${illustration.frontCardLabel}: ${illustration.pendingBadge} → ${illustration.retryBadge} → ${illustration.recoverBadge}`;

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
          <ToneIconBox tone="blue" size="sm">
            <AtomIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
            {illustration.frontCardLabel}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {illustration.reactBadgeLabel}
          </span>
        </header>

        <CodePreviewPanel
          code={`function App() {\n  return <Suspense fallback={<Loading />} />;\n}`}
          header={illustration.backCardLabel}
          showWindowDots
          size="md"
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {STEPS.map((step, i) => (
            <li key={step.label} className="flex flex-col gap-sm">
              <StepRow label={getStepLabel(step.key, illustration)} step={step} />
              {i < STEPS.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

type StepKey = 'pending' | 'retry' | 'recover';

type Step = {
  key: StepKey;
  label: string;
  caption: string;
  tone: ToneKey;
  Icon: typeof HourglassIcon;
};

const STEPS: Step[] = [
  {
    key: 'pending',
    label: 'Suspend',
    caption: 'throw Promise — 데이터를 기다린다',
    tone: 'amber',
    Icon: HourglassIcon,
  },
  {
    key: 'retry',
    label: 'Retry',
    caption: 'resolve 후 렌더를 다시 시도한다',
    tone: 'cyan',
    Icon: RefreshCcwIcon,
  },
  {
    key: 'recover',
    label: 'Recover',
    caption: '제어된 복구로 화면을 완성한다',
    tone: 'emerald',
    Icon: ShieldCheckIcon,
  },
];

const getStepLabel = (
  key: StepKey,
  illustration: WhyFailableRenderContent['hero']['illustration'],
): string => {
  if (key === 'pending') return illustration.pendingBadge;
  if (key === 'retry') return illustration.retryBadge;
  return illustration.recoverBadge;
};

const StepRow = ({ label, step }: { label: string; step: Step }) => {
  const t = toneTokens[step.tone];
  const { Icon, caption } = step;
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
          {label}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {caption}
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
