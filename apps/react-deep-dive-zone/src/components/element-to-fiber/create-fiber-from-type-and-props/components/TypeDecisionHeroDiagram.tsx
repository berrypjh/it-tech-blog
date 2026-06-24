import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { Branch, BranchKey, CreateFiberFromTypeAndPropsContent } from '../content';
import { BinaryIcon, BracesIcon, HexagonIcon, SquareFunctionIcon, TypeIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['hero']; className?: string };

const branchTone: Record<BranchKey, ToneKey> = {
  string: 'emerald',
  function: 'sky',
  fragment: 'violet',
  mode: 'cyan',
};

const branchIcon: Record<BranchKey, typeof TypeIcon> = {
  string: BinaryIcon,
  function: SquareFunctionIcon,
  fragment: BracesIcon,
  mode: HexagonIcon,
};

export const TypeDecisionHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.centerLabel}: ${content.branches
    .map((b) => `${b.condition} → ${b.result}`)
    .join(', ')}`;

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
    </div>
  );
};

const CenterNode = ({ label }: { label: string }) => (
  <div
    className={cn(
      'flex items-center justify-center gap-sm rounded-xl border px-md py-2.5',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="sky" size="sm">
      <TypeIcon className="h-4 w-4" aria-hidden="true" />
    </ToneIconBox>
    <code className="font-mono text-base font-bold tracking-tight text-sky-600 dark:text-sky-300">
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
      className={cn(
        'group flex w-full min-w-0 flex-col gap-1.5 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span className="flex min-w-0 items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <code className={cn('min-w-0 truncate font-mono text-xsm font-bold', t.text)}>
          {branch.condition}
        </code>
      </span>
      <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">
        {branch.example}
      </code>
      <p className={cn('font-mono text-xsm font-bold break-keep', t.text)}>{branch.result}</p>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
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
