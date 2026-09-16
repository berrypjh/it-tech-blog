import { cx } from '@berrypjh/react-ui';
import {
  Hand,
  Hourglass,
  type LucideIcon,
  MonitorCheck,
  PanelsTopLeft,
  ShieldCheck,
  Timer,
} from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlowStep, HeroStepIcon, StateUpdateStartContent } from '../content';

const heroStepIconByName: Record<HeroStepIcon, LucideIcon> = {
  hand: Hand,
  shield: ShieldCheck,
  timer: Timer,
  panels: PanelsTopLeft,
  monitor: MonitorCheck,
};

type Props = { content: StateUpdateStartContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * setState 한 줄 호출 → 업데이트 요청 기록 → 스케줄링 → Render → Commit으로
 * 이어지는 업데이트 시작 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SetStateHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.flow.heading}: ${content.flow.steps
    .map((s) => s.title)
    .join(' → ')}. ${content.reason.title} — ${content.reason.body}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex min-w-0 flex-col">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {content.flow.caption}
          </span>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.flow.heading}
          </span>
        </header>

        <CodePreviewPanel code="setCount(count + 1);" showWindowDots language="JS" size="md" />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.flow.steps.map((step, i) => (
            <li key={step.id} className="flex flex-col gap-sm">
              <FlowStepRow step={step} />
              {i < content.flow.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <ReasonNote title={content.reason.title} body={content.reason.body} />
      </div>
    </HeroDiagramShell>
  );
};

const FlowStepRow = ({ step }: { step: HeroFlowStep }) => {
  const t = toneTokens[step.tone];
  const Icon = heroStepIconByName[step.icon];
  return (
    <div
      className={cx(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </span>
      </div>
    </div>
  );
};

const ReasonNote = ({ title, body }: { title: string; body: string }) => (
  <div
    className={cx(
      'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="amber" size="sm">
      <Hourglass className="h-4 w-4" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-1">
      <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {title}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </div>
  </div>
);
