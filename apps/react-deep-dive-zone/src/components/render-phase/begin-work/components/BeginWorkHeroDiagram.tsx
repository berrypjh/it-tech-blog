import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeginWorkContent, FiberTagItem } from '../content';
import { SettingsIcon } from '../icons';
import { tagIconMap, tagPalette } from '../sections/tag-palette';

type Props = { content: BeginWorkContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * beginWork가 현재 Fiber 처리를 시작하고 Fiber.tag에 따라 각 update 함수로
 * 분기하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const BeginWorkHeroDiagram = ({ content, className }: Props) => {
  const { center, branches } = content.diagram;
  const a11y = `${center.title}: ${center.subtitle} — ${branches.map((b) => b.title).join(', ')}`;

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
          <span className="min-w-0 truncate text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {'// beginWork → Fiber.tag dispatch'}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            branch map
          </span>
        </header>

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
    </div>
  );
};

const CenterNode = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const tone = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex w-full min-w-0 items-center gap-sm rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        tone.chip,
        tone.border,
      )}
    >
      <ToneIconBox tone="sky" size="md">
        <SettingsIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold font-mono tracking-tight break-keep', tone.text)}>
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
  const palette = tagPalette[branch.accent];
  const Icon = tagIconMap[branch.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        palette.border,
        palette.borderHover,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
            palette.chip,
          )}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
        <h3
          className={cn(
            'min-w-0 truncate text-xsm font-bold leading-tight break-keep',
            palette.text,
          )}
        >
          {branch.title}
        </h3>
      </header>
      <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {branch.description}
      </p>
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
