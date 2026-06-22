import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FormActionsEventSystemContent, PipelineMiniStep } from '../content';
import { HourglassIcon, PuzzleIcon, SendIcon, WorkflowIcon, ZapIcon } from '../icons';
import type { PipelineKey } from '../tone';

type Props = { content: FormActionsEventSystemContent['hero']; className?: string };

/** 페이지 고유 PipelineKey → 공유 ToneKey 매핑. purple은 가장 가까운 violet으로. */
const pipelineToneKey: Record<PipelineKey, ToneKey> = {
  submit: 'blue',
  plugin: 'violet',
  action: 'teal',
  formData: 'cyan',
  pending: 'indigo',
  transition: 'emerald',
};

const stepIcon: Record<PipelineKey, typeof SendIcon> = {
  submit: SendIcon,
  plugin: PuzzleIcon,
  action: PuzzleIcon,
  formData: PuzzleIcon,
  pending: HourglassIcon,
  transition: ZapIcon,
};

/**
 * Hero 핵심 비주얼.
 * <form action={fn}>의 submit 이벤트가 이벤트 플러그인 → pendingState →
 * transition 실행으로 이어지는 React 내부 Action 파이프라인을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const FormActionsHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.pipeline.title}: ${content.pipeline.steps
    .map((s) => s.title)
    .join(' → ')}. ${content.pipeline.footer}`;

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
          <ToneIconBox tone="teal" size="sm">
            <WorkflowIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.pipeline.title}
          </span>
        </header>

        <CodePreviewPanel
          code={content.heroCode.code}
          header={content.heroCode.fileName}
          language={content.heroCode.langBadge}
          showWindowDots
          size="md"
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.pipeline.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <PipelineStepRow step={step} />
              {i < content.pipeline.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <p
          className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep"
          aria-hidden="true"
        >
          {content.pipeline.footer}
        </p>
      </div>
    </div>
  );
};

const PipelineStepRow = ({ step }: { step: PipelineMiniStep }) => {
  const tone = pipelineToneKey[step.pipeline];
  const t = toneTokens[tone];
  const Icon = stepIcon[step.pipeline];
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
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
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
