import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { HooksEntryFlowContent, Tone } from '../content';
import { CodeIcon, SplitIcon, TargetIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['hero']; className?: string };

const stepIcons = [CodeIcon, SplitIcon, TargetIcon] as const;

/**
 * Hero 핵심 비주얼.
 * 공개 useState 호출 → Dispatcher → 실제 Hook 구현으로 이어지는
 * Hook 진입 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const HooksEntryHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.rightCard.title}: ${content.rightCard.steps
    .map((s) => s.label)
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
          <ToneIconBox tone="cyan" size="sm">
            <CodeIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.rightCard.title}
          </span>
        </header>

        <CodePreviewPanel code={content.leftCard.code} showWindowDots language="JS" size="md" />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.rightCard.steps.map((step, i) => (
            <li key={step.label} className="flex flex-col gap-sm">
              <StepRow label={step.label} tone={step.tone} icon={stepIcons[i] ?? CodeIcon} />
              {i < content.rightCard.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const StepRow = ({
  label,
  tone,
  icon: Icon,
}: {
  label: string;
  tone: Tone;
  icon: typeof CodeIcon;
}) => {
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
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
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
