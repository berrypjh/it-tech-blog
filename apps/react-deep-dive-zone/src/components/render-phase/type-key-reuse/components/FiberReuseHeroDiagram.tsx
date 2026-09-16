import { cx } from '@berrypjh/react-ui';
import { Box, CheckCircle2, XCircle } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import type { Tone, TypeKeyReuseContent } from '../content';
import { facetFor, type SemanticFacet } from '../facets';

type Props = { content: TypeKeyReuseContent['hero'] };

type Branch = TypeKeyReuseContent['hero']['diagram']['reuse'];

/**
 * Hero 핵심 비주얼.
 * 같은 위치의 이전 Fiber와 새 Element를 key/type으로 비교해
 * 재사용 또는 교체로 갈리는 판단 흐름을 두 분기로 나란히 보여주는 컴팩트 다이어그램.
 */
export const FiberReuseHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}. ${diagram.reuse.header} ${diagram.reuse.result} — ${diagram.reuse.bottom}. ${diagram.replace.header} ${diagram.replace.result} — ${diagram.replace.bottom}.`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {diagram.title}
        </span>

        <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <BranchPanel branch={diagram.reuse} tone="teal" kind="reuse" />
          <BranchPanel branch={diagram.replace} tone="rose" kind="replace" />
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const ChipBox = ({ t, children }: { t: SemanticFacet; children: React.ReactNode }) => (
  <span
    className={cx(
      'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border',
      t.chip,
    )}
  >
    {children}
  </span>
);

const BranchPanel = ({
  branch,
  tone,
  kind,
}: {
  branch: Branch;
  tone: Tone;
  kind: 'reuse' | 'replace';
}) => {
  const t = facetFor(tone);
  const Icon = kind === 'reuse' ? CheckCircle2 : XCircle;
  return (
    <article
      className={cx(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ChipBox t={t}>
          <Icon className="h-4 w-4" />
        </ChipBox>
        <div className="flex min-w-0 flex-col">
          <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {branch.header}
          </span>
          <span className={cx('text-sm font-bold font-mono tracking-tight', t.text)}>
            {branch.result}
          </span>
        </div>
      </header>

      <FiberBox t={t} node={branch.previous} />
      <DownArrow />
      <FiberBox t={t} node={branch.next} />

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {branch.bottom}
      </p>
    </article>
  );
};

const FiberBox = ({
  t,
  node,
}: {
  t: SemanticFacet;
  node: { label: string; details: string[] };
}) => (
  <div className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2.5 py-2">
    <ChipBox t={t}>
      <Box className="h-4 w-4" />
    </ChipBox>
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-xsm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {node.label}
      </span>
      {node.details.map((detail) => (
        <code key={detail} className="font-mono text-xxsm leading-snug text-[var(--term-muted)]">
          {detail}
        </code>
      ))}
    </div>
  </div>
);
