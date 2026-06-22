import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroStep, PlacementContent } from '../content';
import { BoxIcon, PackageOpenIcon, PlusIcon } from '../icons';

type Props = { content: PlacementContent['hero']; className?: string };

const stepIcon: Record<HeroStep['kind'], typeof BoxIcon> = {
  fiber: BoxIcon,
  parent: PackageOpenIcon,
  insert: PlusIcon,
};

/**
 * Hero 핵심 비주얼.
 * 새 Fiber → host parent 탐색 → 실제 DOM 삽입(Commit)으로 이어지는
 * Placement 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PlacementHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.steps
    .map((s) => `${s.title} (${s.caption})`)
    .join(' → ')}. ${diagram.bottomLabel}`;

  const insertStep = diagram.steps[diagram.steps.length - 1];

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
            {'// new fiber → host parent → DOM'}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            placement flow
          </span>
        </header>

        <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {diagram.title}
        </h2>

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {diagram.steps.map((step, i) => (
            <li key={step.kind} className="flex flex-col gap-sm">
              <FlowStepRow step={step} />
              {i < diagram.steps.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <DownArrow />

        <CodePreviewPanel
          code={`<ul>\n  <li>A</li>\n  <li>B</li>\n  ${insertStep.caption}\n</ul>`}
          caption={diagram.bottomLabel}
          language="HTML"
          size="sm"
        />
      </div>
    </div>
  );
};

const FlowStepRow = ({ step }: { step: HeroStep }) => {
  const tone = step.tone as ToneKey;
  const t = toneTokens[tone];
  const Icon = stepIcon[step.kind];
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
        <span className="font-mono text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
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
