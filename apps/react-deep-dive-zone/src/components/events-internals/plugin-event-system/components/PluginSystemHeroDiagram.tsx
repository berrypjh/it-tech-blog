import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep, PluginEventSystemContent, Tone } from '../content';
import { BoxesIcon, LayersIcon, MousePointerClickIcon, PuzzleIcon } from '../icons';

type Props = { content: PluginEventSystemContent['hero']; className?: string };

const stepIcons = [MousePointerClickIcon, PuzzleIcon, LayersIcon, BoxesIcon];

/** content.ts의 Tone 중 공유 ToneKey에 없는 값을 가장 가까운 톤으로 매핑한다. */
const toneKeyMap: Record<Tone, ToneKey> = {
  sky: 'sky',
  cyan: 'cyan',
  teal: 'teal',
  emerald: 'emerald',
  violet: 'violet',
  blue: 'blue',
  amber: 'amber',
  rose: 'violet',
  mint: 'emerald',
};

/**
 * Hero 핵심 비주얼.
 * native event → plugin extraction → SyntheticEvent + listeners → dispatchQueue로
 * 이어지는 Plugin Event System 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PluginSystemHeroDiagram = ({ content, className }: Props) => {
  const a11y = content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ');

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

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.steps.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-sm">
            <StepCard step={step} index={i} />
            {i < content.steps.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </div>
  );
};

const StepCard = ({ step, index }: { step: FlowStep; index: number }) => {
  const tone = toneKeyMap[step.tone];
  const t = toneTokens[tone];
  const Icon = stepIcons[index] ?? MousePointerClickIcon;

  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex min-w-0 items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn(
            'min-w-0 flex-1 truncate font-mono text-sm font-bold tracking-tight',
            t.text,
          )}
        >
          {step.title}
        </span>
        <span className="shrink-0 rounded-md border border-[var(--term-border)] px-1.5 py-0.5 font-mono text-[10px] tabular-nums text-[var(--term-muted)]">
          {index + 1}
        </span>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.description}
      </p>

      {step.example && (
        <code className="w-fit rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]/60 px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)] break-all">
          {step.example}
        </code>
      )}
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
