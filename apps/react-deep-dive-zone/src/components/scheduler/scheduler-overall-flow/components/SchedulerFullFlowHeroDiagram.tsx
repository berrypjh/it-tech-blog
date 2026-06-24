import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FullFlowContent, ScenarioId } from '../content';
import {
  CheckCircleIcon,
  ClockIcon,
  GitMergeIcon,
  MousePointerClickIcon,
  RepeatIcon,
  RouteIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: FullFlowContent['hero']; className?: string };

const sourceTone: Record<ScenarioId, { tone: ToneKey; icon: typeof MousePointerClickIcon }> = {
  click: { tone: 'blue', icon: MousePointerClickIcon },
  transition: { tone: 'teal', icon: RepeatIcon },
  deferred: { tone: 'violet', icon: ClockIcon },
};

const pipelineTones: ToneKey[] = ['sky', 'cyan', 'indigo', 'teal', 'amber'];

/**
 * Hero 핵심 비주얼.
 * click / transition / deferred update가 공통 scheduling 경로로 합류한 뒤
 * lane → pending work → Root Scheduler → render → yield → commit으로 이어지는
 * 전체 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SchedulerFullFlowHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle}: ${content.sourceCards
    .map((c) => c.label)
    .join(
      ', ',
    )} → ${content.mergeLabel} → ${content.pipeline.join(' → ')} → ${content.commitLabel}`;

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
            <RouteIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </span>
        </header>

        <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-3">
          {content.sourceCards.map((card) => (
            <li key={card.id}>
              <SourceChip id={card.id} label={card.label} />
            </li>
          ))}
        </ul>

        <DownArrow />

        <MergeNote label={content.mergeLabel} />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.pipeline.map((step, i) => (
            <li key={step} className="flex flex-col gap-sm">
              <PipelineStep
                index={i + 1}
                label={step}
                tone={pipelineTones[i % pipelineTones.length]}
              />
              {i < content.pipeline.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <DownArrow />

        <CommitStep label={content.commitLabel} />
      </div>
    </div>
  );
};

const SourceChip = ({ id, label }: { id: ScenarioId; label: string }) => {
  const { tone, icon: Icon } = sourceTone[id];
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full items-center gap-2 rounded-xl border bg-[var(--term-bg)] px-sm py-2',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <span className={cn('min-w-0 text-xsm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
    </article>
  );
};

const MergeNote = ({ label }: { label: string }) => (
  <div
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="emerald" size="sm">
      <GitMergeIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
      {label}
    </span>
  </div>
);

const PipelineStep = ({ index, label, tone }: { index: number; label: string; tone: ToneKey }) => {
  const t = toneTokens[tone];
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
        <span className="font-mono text-sm font-bold tabular-nums">{index}</span>
      </ToneIconBox>
      <span className={cn('min-w-0 text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      <WorkflowIcon className="ml-auto h-3.5 w-3.5 shrink-0 text-[var(--term-muted)]" />
    </article>
  );
};

const CommitStep = ({ label }: { label: string }) => {
  const t = toneTokens['emerald'];
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border px-md py-3',
        'bg-[var(--term-bg)] shadow-[0_3px_0_var(--term-border)]',
        t.chip,
        t.border,
      )}
    >
      <ToneIconBox tone="emerald" size="sm">
        <CheckCircleIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <span className={cn('text-sm font-bold uppercase tracking-wider font-mono', t.text)}>
        {label}
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
