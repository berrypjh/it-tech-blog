import { cx } from '@berrypjh/react-ui';
import { Box, type LucideIcon, PackageOpen, Plus } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroStep, PlacementContent } from '../content';

type Props = { content: PlacementContent['hero'] };

const stepIcon: Record<HeroStep['kind'], LucideIcon> = {
  fiber: Box,
  parent: PackageOpen,
  insert: Plus,
};

/**
 * Hero 핵심 비주얼.
 * 새 Fiber → host parent 탐색 → 실제 DOM 삽입(Commit)으로 이어지는
 * Placement 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PlacementHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.steps
    .map((s) => `${s.title} (${s.caption})`)
    .join(' → ')}. ${diagram.bottomLabel}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {diagram.title}
        </span>

        <ol className="flex flex-col gap-sm">
          {diagram.steps.map((step, i) => (
            <li key={step.kind} className="flex flex-col gap-sm">
              <FlowStepRow step={step} />
              {i < diagram.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <DownArrow />

        <CodePreviewPanel
          code={diagram.code}
          caption={diagram.bottomLabel}
          language="HTML"
          size="sm"
        />
      </div>
    </HeroDiagramShell>
  );
};

const FlowStepRow = ({ step }: { step: HeroStep }) => {
  const tone = step.tone;
  const t = toneTokens[tone];
  const Icon = stepIcon[step.kind];
  return (
    <div
      className={cx(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.caption}
        </span>
      </div>
    </div>
  );
};
