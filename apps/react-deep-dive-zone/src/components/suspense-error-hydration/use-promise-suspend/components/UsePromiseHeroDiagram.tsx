import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UsePromiseSuspendContent } from '../content';
import { CheckCircleIcon, HourglassIcon, TriangleAlertIcon } from '../icons';
import type { PromiseState } from '../tone';

type Props = { content: UsePromiseSuspendContent['hero']; className?: string };

/** Promise 상태별 아이콘. */
const stateIcon: Record<PromiseState, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  fulfilled: CheckCircleIcon,
  rejected: TriangleAlertIcon,
};

/** shared ToneKey에 rose가 없어 rejected는 가장 가까운 amber로 매핑. */
const stateTone: Record<PromiseState, ToneKey> = {
  pending: 'violet',
  fulfilled: 'emerald',
  rejected: 'amber',
};

/**
 * Hero 핵심 비주얼.
 * use(messagePromise) 한 줄이 Promise 상태에 따라 Suspense·값 렌더·Error Boundary
 * 세 갈래로 갈라지는 흐름을, 코드 → 분기 카드로 위에서 아래로 잇는 컴팩트 stepper.
 */
export const UsePromiseHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.flowCard.title}: ${content.flowCard.rootLabel} → ${content.flowCard.states
    .map((s) => `${s.label}(${s.result})`)
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

      <div className="relative flex flex-col gap-sm">
        <StepHeader
          tone="violet"
          label={content.code.label}
          icon={<HourglassIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
        />
        <CodePreviewPanel
          code={content.code.content}
          header={content.code.fileLabel}
          badge={content.code.pill}
          showWindowDots
          size="md"
        />

        <DownArrow />

        <h2
          className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep"
          aria-hidden="true"
        >
          {content.flowCard.title}
        </h2>

        <CodePreviewPanel code={content.flowCard.rootLabel} showWindowDots size="md" />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.flowCard.states.map((s, i) => (
            <li key={s.state} className="flex flex-col gap-sm">
              <StateRow state={s.state} label={s.label} result={s.result} />
              {i < content.flowCard.states.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm" aria-hidden="true">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const StateRow = ({
  state,
  label,
  result,
}: {
  state: PromiseState;
  label: string;
  result: string;
}) => {
  const tone = stateTone[state];
  const t = toneTokens[tone];
  const Icon = stateIcon[state];
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
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {result}
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
