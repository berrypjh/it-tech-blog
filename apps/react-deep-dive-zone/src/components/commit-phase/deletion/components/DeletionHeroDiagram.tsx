import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DeletionContent, HeroStepItem } from '../content';
import { DropletIcon, LogOutIcon, RepeatIcon, TrashIcon, UnlinkIcon } from '../icons';

type Props = { content: DeletionContent['hero']; className?: string };

const stepIconMap: Record<HeroStepItem['iconName'], typeof UnlinkIcon> = {
  unlink: UnlinkIcon,
  droplet: DropletIcon,
  logOut: LogOutIcon,
  trash: TrashIcon,
};

/**
 * Hero 핵심 비주얼.
 * 삭제 대상 subtree → ref detach → effect cleanup → unmount → host remove로
 * 이어지는 commitDeletionEffects cleanup 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const DeletionHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.subtreeTitle} → ${diagram.steps
    .map((s) => `${s.title} — ${s.body}`)
    .join(' → ')}. ${diagram.bottomLabel}`;

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
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {`// ${diagram.title}`}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            cleanup pipeline
          </span>
        </header>

        <SubtreePanel title={diagram.subtreeTitle} nodes={diagram.subtreeNodes} />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {diagram.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <StepRow step={step} />
              {i < diagram.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <BottomLabel label={diagram.bottomLabel} />
      </div>
    </div>
  );
};

const SubtreePanel = ({ title, nodes }: { title: string; nodes: string[] }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
    aria-hidden="true"
  >
    <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.violet.text)}>
      {title}
    </span>
    <ul className="flex flex-wrap gap-1.5">
      {nodes.map((node) => (
        <li
          key={node}
          className={cn(
            'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-mono',
            toneTokens.violet.chip,
          )}
        >
          <span
            aria-hidden="true"
            className={cn('inline-block h-1.5 w-1.5 rounded-full', toneTokens.violet.dot)}
          />
          {node}
        </li>
      ))}
    </ul>
  </article>
);

const StepRow = ({ step }: { step: HeroStepItem }) => {
  const tone = step.tone;
  const t = toneTokens[tone];
  const Icon = stepIconMap[step.iconName];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.body}
        </span>
        <ul className="flex flex-wrap gap-1">
          {step.examples.map((ex) => (
            <li
              key={ex}
              className={cn(
                'rounded border px-1.5 py-0.5 text-[10px] font-mono leading-snug break-all',
                t.chip,
              )}
            >
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const BottomLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2" aria-hidden="true">
    <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
        toneTokens.teal.chip,
      )}
    >
      <RepeatIcon className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
    <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
