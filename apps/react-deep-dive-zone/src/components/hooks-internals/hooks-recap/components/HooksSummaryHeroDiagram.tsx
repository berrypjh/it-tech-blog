import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep, HooksRecapContent, Tone } from '../content';
import {
  CogIcon,
  DatabaseIcon,
  FlagIcon,
  FunctionSquareIcon,
  Link2Icon,
  PlayCircleIcon,
  RocketIcon,
  SplitIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: HooksRecapContent['hero']; className?: string };

const visualMap = {
  play: PlayCircleIcon,
  fn: FunctionSquareIcon,
  split: SplitIcon,
  cog: CogIcon,
  list: Link2Icon,
  state: DatabaseIcon,
  effect: ZapIcon,
  commit: RocketIcon,
  zap: FlagIcon,
};

/** content.Tone(로컬) → 공유 ToneKey. 미지원 톤은 가장 가까운 값으로 매핑한다. */
const toToneKey: Record<Tone, ToneKey> = {
  sky: 'sky',
  cyan: 'cyan',
  teal: 'teal',
  emerald: 'emerald',
  violet: 'violet',
  amber: 'amber',
  orange: 'amber',
  rose: 'violet',
  indigo: 'indigo',
};

/**
 * Hero 핵심 비주얼.
 * 공개 API → Dispatcher → renderWithHooks → Hook linked list → 각 Hook 처리(상태/Effect)
 * → Commit 이후 실행으로 이어지는 Hooks 내부 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const HooksSummaryHeroDiagram = ({ content, className }: Props) => {
  const linear = content.diagramSteps.slice(0, 4);
  const branchHead = content.diagramSteps[4];
  const branchA = content.diagramSteps[5];
  const branchB = content.diagramSteps[6];
  const final = content.diagramSteps[7];

  const a11y = `${content.diagramTitle}: ${content.diagramSteps.map((s) => s.title).join(' → ')}`;

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
            <WorkflowIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </span>
        </header>

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {linear.map((step, i) => (
            <li key={step.number} className="flex flex-col gap-sm">
              <StepCard step={step} />
              {i < linear.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        {branchHead && (
          <>
            <DownArrow />
            <StepCard step={branchHead} />
          </>
        )}

        {branchA && branchB && (
          <>
            <DownArrow />
            <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
              <StepCard step={branchA} />
              <StepCard step={branchB} />
            </div>
          </>
        )}

        {final && (
          <>
            <DownArrow />
            <StepCard step={final} />
          </>
        )}
      </div>
    </div>
  );
};

const StepCard = ({ step }: { step: FlowStep }) => {
  const tone = toToneKey[step.tone];
  const t = toneTokens[tone];
  const Icon = visualMap[step.visual];
  return (
    <article
      className={cn(
        'group flex h-full items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('text-sm font-bold tracking-tight font-mono break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
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
