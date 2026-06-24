import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { TypeKeyReuseContent } from '../content';
import { BoxIcon, CheckCircleIcon, XCircleIcon } from '../icons';

type Props = { content: TypeKeyReuseContent['hero']; className?: string };

type Branch = TypeKeyReuseContent['hero']['diagram']['reuse'];

/**
 * Hero 핵심 비주얼.
 * 같은 위치의 이전 Fiber와 새 Element를 key/type으로 비교해
 * 재사용 또는 교체로 갈리는 판단 흐름을 두 분기로 나란히 보여주는 컴팩트 다이어그램.
 */
export const FiberReuseHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}. ${diagram.reuse.header} ${diagram.reuse.result} — ${diagram.reuse.bottom}. ${diagram.replace.header} ${diagram.replace.result} — ${diagram.replace.bottom}.`;

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
        <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {diagram.title}
        </h2>

        <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <BranchPanel branch={diagram.reuse} tone="teal" kind="reuse" />
          <BranchPanel branch={diagram.replace} tone="amber" kind="replace" />
        </div>
      </div>
    </div>
  );
};

const BranchPanel = ({
  branch,
  tone,
  kind,
}: {
  branch: Branch;
  tone: ToneKey;
  kind: 'reuse' | 'replace';
}) => {
  const t = toneTokens[tone];
  const Icon = kind === 'reuse' ? CheckCircleIcon : XCircleIcon;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {branch.header}
          </span>
          <span className={cn('text-sm font-bold font-mono tracking-tight', t.text)}>
            {branch.result}
          </span>
        </div>
      </header>

      <FiberBox tone={tone} node={branch.previous} />
      <DownArrow />
      <FiberBox tone={tone} node={branch.next} />

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {branch.bottom}
      </p>
    </article>
  );
};

const FiberBox = ({
  tone,
  node,
}: {
  tone: ToneKey;
  node: { label: string; details: string[] };
}) => (
  <div className="flex items-center gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] px-2.5 py-2">
    <ToneIconBox tone={tone} size="sm">
      <BoxIcon className="h-4 w-4" aria-hidden="true" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-xsm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {node.label}
      </span>
      {node.details.map((detail) => (
        <code key={detail} className="font-mono text-[10px] leading-snug text-[var(--term-muted)]">
          {detail}
        </code>
      ))}
    </div>
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
