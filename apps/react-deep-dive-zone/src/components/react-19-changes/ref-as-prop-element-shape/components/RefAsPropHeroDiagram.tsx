import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RefAsPropElementShapeContent } from '../content';
import { BoxIcon, CodeIcon } from '../icons';

type Props = { content: RefAsPropElementShapeContent['hero']; className?: string };

type SideKey = 'before' | 'after';

const sideTone: Record<SideKey, ToneKey> = {
  before: 'indigo',
  after: 'emerald',
};

const sideIcon: Record<SideKey, typeof BoxIcon> = {
  before: BoxIcon,
  after: CodeIcon,
};

/**
 * Hero 핵심 비주얼.
 * React 18의 forwardRef wrapper → (ref as prop) → React 19의 props.ref 직접 수신으로
 * Element 외형이 바뀌는 흐름을 위에서 아래로 잇는 컴팩트 before/after stepper.
 */
export const RefAsPropHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.before.label}: forwardRef wrapper. ${content.after.label}: props.ref direct.`;

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
        <ShapeCard
          side="before"
          label={content.before.label}
          phase={content.centerLabels.before}
          code={content.before.code}
        />

        <DownArrow label="ref as prop" />

        <ShapeCard
          side="after"
          label={content.after.label}
          phase={content.centerLabels.after}
          code={content.after.code}
        />
      </div>
    </div>
  );
};

const ShapeCard = ({
  side,
  label,
  phase,
  code,
}: {
  side: SideKey;
  label: string;
  phase: string;
  code: string;
}) => {
  const t = toneTokens[sideTone[side]];
  const Icon = sideIcon[side];
  return (
    <article className="flex flex-col gap-sm">
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={sideTone[side]} size="sm">
          <Icon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
          {label}
        </span>
        <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {phase}
        </span>
      </header>
      <CodePreviewPanel code={code} showWindowDots language="JSX" size="sm" />
    </article>
  );
};

const DownArrow = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-2">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
    >
      ↓
    </span>
    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)] break-keep">
      {label}
    </span>
  </div>
);
