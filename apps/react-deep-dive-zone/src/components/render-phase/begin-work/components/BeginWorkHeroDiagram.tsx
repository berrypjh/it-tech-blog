import { cx } from '@berrypjh/react-ui';
import {
  Box,
  Code2,
  FunctionSquare,
  Home,
  type LucideIcon,
  MoreHorizontal,
  Settings,
  SquareDashed,
  TimerReset,
} from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeginWorkContent, FiberTagItem } from '../content';

const fiberTagIconByName: Record<FiberTagItem['icon'], LucideIcon> = {
  function: FunctionSquare,
  cube: Box,
  home: Home,
  code: Code2,
  fragment: SquareDashed,
  suspense: TimerReset,
  other: MoreHorizontal,
} as const;

type Props = { content: BeginWorkContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * beginWork가 현재 Fiber 처리를 시작하고 Fiber.tag에 따라 각 update 함수로
 * 분기하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const BeginWorkHeroDiagram = ({ content }: Props) => {
  const { center, branches } = content.diagram;
  const a11y = `${center.title}: ${center.subtitle} — ${branches.map((b) => b.title).join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <CenterNode title={center.title} subtitle={center.subtitle} />

        <DownArrow />

        <ol className="grid grid-cols-2 @sm:grid-cols-3 @2xl:grid-cols-4 gap-2">
          {branches.map((branch) => (
            <li key={branch.id} className="min-w-0">
              <BranchChip branch={branch} />
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const CenterNode = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cx(
        'flex w-full min-w-0 items-center gap-sm rounded-lg border px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)]',
        t.fill.bg,
        t.fill.border,
      )}
    >
      <ToneIconBox tone="sky" size="md">
        <Settings className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cx('text-sm font-bold font-mono tracking-tight break-keep', t.fill.text)}>
          {title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {subtitle}
        </span>
      </div>
    </article>
  );
};

const BranchChip = ({ branch }: { branch: FiberTagItem }) => {
  const t = toneTokens[branch.tone];
  const Icon = fiberTagIconByName[branch.icon];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          className={cx(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <span
          className={cx('min-w-0 truncate text-xsm font-bold leading-tight break-keep', t.text)}
        >
          {branch.title}
        </span>
      </header>
      <p className="text-xxsm leading-snug text-[var(--term-muted)] break-keep">
        {branch.description}
      </p>
    </article>
  );
};
