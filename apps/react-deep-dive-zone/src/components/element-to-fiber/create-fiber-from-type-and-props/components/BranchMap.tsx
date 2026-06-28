import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { Branch, BranchKey } from '../content';
import { TypeIcon } from '../icons';

const branchTone: Record<BranchKey, ToneKey> = {
  string: 'emerald',
  function: 'sky',
  fragment: 'violet',
  mode: 'cyan',
};

const branchLabel: Record<BranchKey, string> = {
  string: 'string branch',
  function: 'function branch',
  fragment: 'symbol branch',
  mode: 'symbol branch',
};

type Props = {
  centerLabel: string;
  branches: Branch[];
  /** sm 사이즈는 Hero용으로 조금 컴팩트 */
  size?: 'md' | 'lg';
};

/**
 * 중앙 type 카드에서 4방향으로 분기되는 지도.
 * - lg(데스크톱): 3x3 grid로 + 모양 배치
 * - sm/md(모바일): 위에 type, 아래 4개 카드 세로 스택
 */
export const BranchMap = ({ centerLabel, branches, size = 'md' }: Props) => {
  const byPos = {
    top: branches.find((b) => b.position === 'top'),
    right: branches.find((b) => b.position === 'right'),
    bottom: branches.find((b) => b.position === 'bottom'),
    left: branches.find((b) => b.position === 'left'),
  };

  return (
    <>
      {/* Desktop: + grid */}
      <div
        className={cn(
          'hidden lg:grid items-stretch w-full min-w-0',
          'grid-cols-[minmax(0,1fr)_minmax(0,_0.85fr)_minmax(0,1fr)]',
          'grid-rows-[auto_auto_auto]',
          size === 'lg' ? 'gap-md' : 'gap-sm',
        )}
        aria-hidden="true"
      >
        {/* row 1 */}
        <div />
        {byPos.top && <BranchCard branch={byPos.top} />}
        <div />

        {/* row 2 */}
        {byPos.left && <BranchCard branch={byPos.left} />}
        <CenterCard label={centerLabel} size={size} />
        {byPos.right && <BranchCard branch={byPos.right} />}

        {/* row 3 */}
        <div />
        {byPos.bottom && <BranchCard branch={byPos.bottom} />}
        <div />
      </div>

      {/* Mobile/Tablet: vertical stack */}
      <div className="lg:hidden flex flex-col gap-sm">
        <CenterCard label={centerLabel} size={size} className="self-center min-w-[140px]" />
        {branches.map((b) => (
          <BranchCard branch={b} key={b.id} />
        ))}
      </div>

      {/* SR-only summary */}
      <div className="sr-only">
        <p>가운데 type 값을 기준으로 네 갈래 분기가 존재합니다.</p>
        <ul>
          {branches.map((b) => (
            <li key={b.id}>
              조건 {b.condition}일 때 {b.result}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const CenterCard = ({
  label,
  size,
  className,
}: {
  label: string;
  size: 'md' | 'lg';
  className?: string;
}) => (
  <div
    className={cn(
      'relative flex flex-col items-center justify-center rounded-2xl border-2',
      toneTokens.sky.fill.bg,
      toneTokens.sky.fill.border,
      toneTokens.sky.fill.text,
      'shadow-[0_2px_0_var(--term-border)]',
      size === 'lg' ? 'min-h-[120px] p-md' : 'min-h-[96px] p-md',
      className,
    )}
  >
    <TypeIcon
      className={cn(size === 'lg' ? 'h-7 w-7' : 'h-6 w-6', 'opacity-90 mb-1')}
      aria-hidden="true"
    />
    <code
      className={cn(
        'font-mono font-extrabold tracking-tight',
        size === 'lg' ? 'text-2xl' : 'text-xl',
      )}
    >
      {label}
    </code>
  </div>
);

const BranchCard = ({ branch }: { branch: Branch }) => {
  const t = toneTokens[branchTone[branch.id]];
  return (
    <article
      className={cn(
        'group flex flex-col gap-1.5 rounded-2xl border-2 p-sm sm:p-md min-w-0',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold',
            t.text,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)} />
          {branchLabel[branch.id]}
        </span>
      </header>

      <code className={cn('font-mono text-xsm font-bold break-all', t.text)}>
        {branch.condition}
      </code>

      <code className={cn('font-mono text-[11px] text-[var(--term-muted)] break-all')}>
        {branch.example}
      </code>

      <p className={cn('font-mono text-xsm font-bold break-keep', t.text)}>{branch.result}</p>

      <span className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {branch.description}
      </span>
    </article>
  );
};
