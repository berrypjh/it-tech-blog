import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroStep, SetStateFlowContent, Tone } from '../content';
import { CalendarIcon, FileTextIcon, Link2Icon } from '../icons';

type Props = { content: SetStateFlowContent['hero']; className?: string };

const stepIconMap = {
  file: FileTextIcon,
  queue: Link2Icon,
  calendar: CalendarIcon,
} as const;

/** content의 Tone을 공유 ToneKey로 매핑. 누락 톤은 가장 가까운 값으로 대체. */
const toneKeyMap: Record<Tone, ToneKey> = {
  sky: 'sky',
  cyan: 'cyan',
  teal: 'teal',
  emerald: 'emerald',
  violet: 'violet',
  amber: 'amber',
  rose: 'amber',
  indigo: 'indigo',
};

/**
 * Hero 핵심 비주얼.
 * setState 한 줄 호출 → Update 생성 → queue 등록 → render 예약으로 이어지는
 * setter 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SetStateFlowHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.titleLine1} ${content.titleAccent}. ${content.steps
    .map((s) => s.title)
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
        <CodePreviewPanel code={content.leftCode} showWindowDots language="JS" size="md" />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.steps.map((step, i) => (
            <li key={step.number} className="flex flex-col gap-sm">
              <FlowStepRow step={step} />
              {i < content.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const FlowStepRow = ({ step }: { step: HeroStep }) => {
  const tone = toneKeyMap[step.tone];
  const t = toneTokens[tone];
  const Icon = stepIconMap[step.visual];
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
