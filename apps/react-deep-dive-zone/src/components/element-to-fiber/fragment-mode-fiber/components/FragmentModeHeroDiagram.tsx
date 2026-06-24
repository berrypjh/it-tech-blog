import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FragmentModeFiberContent } from '../content';
import { CheckCircleIcon, GroupIcon, HexagonIcon, ShieldCheckIcon, TypeIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['hero']; className?: string };

type Branch = {
  tone: ToneKey;
  branchTitle: string;
  branchSubtitle: string;
  resultTitle: string;
  resultItems: string[];
  BranchIcon: typeof GroupIcon;
};

/**
 * Hero 핵심 비주얼.
 * type 한 갈래가 Fragment / StrictMode 특수 타입으로 갈라지고,
 * 각자 Fragment Fiber / Mode Fiber 전용 경로로 이어지는 fork를 컴팩트하게 보여준다.
 */
export const FragmentModeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.typeLabel} → ${content.fragmentTitle} ${content.fragmentSubtitle} → ${content.fragmentResultTitle}, ${content.strictTitle} ${content.strictSubtitle} → ${content.modeResultTitle}`;

  const branches: Branch[] = [
    {
      tone: 'violet',
      branchTitle: content.fragmentTitle,
      branchSubtitle: content.fragmentSubtitle,
      resultTitle: content.fragmentResultTitle,
      resultItems: content.fragmentResultItems,
      BranchIcon: GroupIcon,
    },
    {
      tone: 'emerald',
      branchTitle: content.strictTitle,
      branchSubtitle: content.strictSubtitle,
      resultTitle: content.modeResultTitle,
      resultItems: content.modeResultItems,
      BranchIcon: ShieldCheckIcon,
    },
  ];

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
        <TypeStartCard label={content.typeLabel} />

        <DownArrow />

        <div className="grid grid-cols-1 gap-sm @lg:grid-cols-2">
          {branches.map((branch) => (
            <BranchColumn key={branch.tone} branch={branch} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TypeStartCard = ({ label }: { label: string }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone="sky" size="sm">
        <TypeIcon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className="flex min-w-0 flex-col">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          input
        </span>
        <code className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</code>
      </span>
    </article>
  );
};

const BranchColumn = ({ branch }: { branch: Branch }) => {
  const t = toneTokens[branch.tone];
  const { BranchIcon } = branch;

  return (
    <div className="flex flex-col gap-sm">
      <article
        className={cn(
          'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          t.borderHover,
        )}
      >
        <ToneIconBox tone={branch.tone} size="sm">
          <BranchIcon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className="flex min-w-0 flex-col">
          <code className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>
            {branch.branchTitle}
          </code>
          <code className="font-mono text-[11px] text-[var(--term-muted)]">
            {branch.branchSubtitle}
          </code>
        </span>
      </article>

      <DownArrow />

      <article
        className={cn(
          'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          t.borderHover,
        )}
      >
        <header className="flex items-center gap-sm">
          <ToneIconBox tone={branch.tone} size="sm">
            <HexagonIcon className="h-4 w-4" aria-hidden="true" />
          </ToneIconBox>
          <span className="flex min-w-0 flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              result fiber
            </span>
            <code className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>
              {branch.resultTitle}
            </code>
          </span>
        </header>
        <ul className="flex flex-col gap-1.5">
          {branch.resultItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircleIcon
                className={cn('h-3.5 w-3.5 shrink-0 mt-0.5', t.text)}
                aria-hidden="true"
              />
              <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
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
