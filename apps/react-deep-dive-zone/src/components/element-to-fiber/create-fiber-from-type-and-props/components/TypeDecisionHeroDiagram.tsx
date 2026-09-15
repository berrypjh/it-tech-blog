import { cx } from '@berrypjh/react-ui';
import { Binary, Braces, Hexagon, type LucideIcon, SquareFunction, Type } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Branch, BranchKey, CreateFiberFromTypeAndPropsContent } from '../content';

import { branchTone } from './BranchMap';

type Props = { content: CreateFiberFromTypeAndPropsContent['hero'] };

const branchIcon: Record<BranchKey, LucideIcon> = {
  string: Binary,
  function: SquareFunction,
  fragment: Braces,
  mode: Hexagon,
};

export const TypeDecisionHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.centerLabel}: ${content.branches
    .map((b) => `${b.condition} → ${b.result}`)
    .join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col items-stretch gap-sm" aria-hidden="true">
        <CenterNode label={content.centerLabel} />

        <DownArrow />

        <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          {content.branches.map((branch) => (
            <li key={branch.id} className="flex min-w-0">
              <BranchCard branch={branch} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const CenterNode = ({ label }: { label: string }) => (
  <div
    className={cx(
      'flex items-center justify-center gap-sm rounded-xl border px-md py-2.5',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="sky" size="sm">
      <Type className="h-4 w-4" aria-hidden="true" />
    </ToneIconBox>
    <code className={cx('font-mono text-base font-bold tracking-tight', toneTokens.sky.text)}>
      {label}
    </code>
  </div>
);

const BranchCard = ({ branch }: { branch: Branch }) => {
  const tone = branchTone[branch.id];
  const t = toneTokens[tone];
  const Icon = branchIcon[branch.id];

  return (
    <article
      className={cx(
        'group flex w-full min-w-0 flex-col gap-1.5 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <span className="flex min-w-0 items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <code className={cx('min-w-0 truncate font-mono text-xsm font-bold', t.text)}>
          {branch.condition}
        </code>
      </span>
      <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">
        {branch.example}
      </code>
      <p className={cx('font-mono text-xsm font-bold break-keep', t.text)}>{branch.result}</p>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {branch.description}
      </p>
    </article>
  );
};
