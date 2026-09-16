import { cx } from '@berrypjh/react-ui';
import { Droplet, LogOut, type LucideIcon, Repeat, Trash2, Unlink } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DeletionContent, HeroStepItem } from '../content';

type Props = { content: DeletionContent['hero'] };

const stepIconMap: Record<HeroStepItem['id'], LucideIcon> = {
  unlink: Unlink,
  droplet: Droplet,
  logOut: LogOut,
  trash: Trash2,
};

/**
 * Hero 핵심 비주얼.
 * 삭제 대상 subtree → ref detach → effect cleanup → unmount → host remove로
 * 이어지는 commitDeletionEffects cleanup 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const DeletionHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.subtreeTitle} → ${diagram.steps
    .map((s) => `${s.title} — ${s.body}`)
    .join(' → ')}. ${diagram.bottomLabel}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          {`// ${diagram.title}`}
        </span>

        <SubtreePanel title={diagram.subtreeTitle} nodes={diagram.subtreeNodes} />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {diagram.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-sm">
              <StepRow step={step} />
              {i < diagram.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <BottomLabel label={diagram.bottomLabel} />
      </div>
    </HeroDiagramShell>
  );
};

const SubtreePanel = ({ title, nodes }: { title: string; nodes: string[] }) => (
  <div
    className={cx(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className={cx('font-mono text-sm font-bold tracking-tight', toneTokens.violet.text)}>
      {title}
    </span>
    <ul className="flex flex-wrap gap-1.5">
      {nodes.map((node) => (
        <li
          key={node}
          className={cx(
            'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-mono',
            toneTokens.violet.chip,
          )}
        >
          <span className={cx('inline-block h-1.5 w-1.5 rounded-full', toneTokens.violet.dot)} />
          {node}
        </li>
      ))}
    </ul>
  </div>
);

const StepRow = ({ step }: { step: HeroStepItem }) => {
  const tone = step.tone;
  const t = toneTokens[tone];
  const Icon = stepIconMap[step.id];
  return (
    <div
      className={cx(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.body}
        </span>
        <ul className="flex flex-wrap gap-1">
          {step.examples.map((ex) => (
            <li
              key={ex}
              className={cx(
                'rounded border px-1.5 py-0.5 text-[10px] font-mono leading-snug break-all',
                t.chip,
              )}
            >
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BottomLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
        toneTokens.teal.chip,
      )}
    >
      <Repeat className="h-3.5 w-3.5" />
      {label}
    </span>
    <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
  </div>
);
