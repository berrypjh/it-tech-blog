import { cx } from '@berrypjh/react-ui';
import {
  CheckCircle2,
  CircleHelp,
  Clock,
  Code2,
  Database,
  Flag,
  GitBranch,
  Hourglass,
  type LucideIcon,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  Server,
  Workflow,
  Zap,
} from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, FlowStepIcon, UpdateToRenderSummaryContent } from '../content';

const flowIconByName: Record<FlowStepIcon, LucideIcon> = {
  mousePointer: MousePointerClick,
  code: Code2,
  workflow: Workflow,
  search: Search,
  panels: PanelsTopLeft,
  server: Server,
  circleHelp: CircleHelp,
  database: Database,
  gitBranch: GitBranch,
  flag: Flag,
  zap: Zap,
  checkCircle: CheckCircle2,
  clock: Clock,
  hourglass: Hourglass,
};

type Props = { content: UpdateToRenderSummaryContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * setState 한 줄 → lane 선택 → queue 등록 → Fiber/Root 표시 → Root 스케줄링 → Render Phase 대기로
 * 이어지는 업데이트 준비 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SummaryHeroDiagram = ({ content }: Props) => {
  const { title, steps } = content.diagram;
  const a11y = `${title}: ${steps.map((s) => `${s.number}. ${s.title}`).join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative" aria-hidden="true">
        <span className="mb-md block text-sm font-bold leading-tight text-[var(--term-fg)]">
          {title}
        </span>

        <ol className="flex flex-col gap-sm">
          {steps.map((step, i) => (
            <li key={step.number} className="flex flex-col gap-sm">
              <StepRow step={step} />
              {i < steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const StepRow = ({ step }: { step: FlowStep }) => {
  const tone = toneTokens[step.tone];
  const Icon = flowIconByName[step.icon];

  return (
    <div
      className={cx(
        'flex min-w-0 items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)]',
        step.final ? cx(tone.chip, tone.border) : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] tabular-nums text-[var(--term-muted)]">
            {step.number}.
          </span>
          <span className={cx('min-w-0 truncate text-sm font-bold tracking-tight', tone.text)}>
            {step.title}
          </span>
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </span>
      </div>
    </div>
  );
};
