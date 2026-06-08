import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { EagerBailoutContent } from '../content';
import { BanIcon, CheckCircleIcon, EqualIcon, GitCompareIcon } from '../icons';

type Props = { content: EagerBailoutContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 현재 state와 미리 계산한 eagerState를 비교(==)하고, 같으면 bailout(렌더 예약 생략),
 * 다르면 렌더 예약으로 분기하는 결정 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EagerBailoutHeroDiagram = ({ content, className }: Props) => {
  const d = content.diagram;
  const a11y = `${d.currentTitle} ${d.currentValue} ${d.compareSymbol} ${d.eagerTitle} ${d.eagerValue} — ${d.question} ${d.leftBranch}: ${d.leftResultTitle}, ${d.rightBranch}: ${d.rightResultTitle}`;

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
        <div className="grid grid-cols-1 @sm:grid-cols-2 gap-sm">
          <CompareCard tone="cyan" title={d.currentTitle} value={d.currentValue} />
          <CompareCard
            tone="cyan"
            title={d.eagerTitle}
            subtitle={d.eagerSubtitle}
            value={d.eagerValue}
          />
        </div>

        <DownArrow />

        <DecisionChip symbol={d.compareSymbol} question={d.question} />

        <DownArrow />

        <div className="grid grid-cols-1 @sm:grid-cols-2 gap-sm">
          <ResultCard
            tone="emerald"
            branch={d.leftBranch}
            title={d.leftResultTitle}
            body={d.leftResultBody}
            icon={<CheckCircleIcon className="h-[18px] w-[18px]" />}
          />
          <ResultCard
            tone="violet"
            branch={d.rightBranch}
            title={d.rightResultTitle}
            body={d.rightResultBody}
            icon={<BanIcon className="h-[18px] w-[18px] rotate-12" />}
          />
        </div>
      </div>
    </div>
  );
};

const CompareCard = ({
  tone,
  title,
  subtitle,
  value,
}: {
  tone: ToneKey;
  title: string;
  subtitle?: string;
  value: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <div className="flex flex-col">
        <span className={cn('font-mono text-[11px] font-bold uppercase tracking-wider', t.text)}>
          {title}
        </span>
        {subtitle && (
          <span className="text-[10px] text-[var(--term-muted)] leading-snug">{subtitle}</span>
        )}
      </div>
      <code className="inline-flex w-fit items-center rounded-md border border-slate-800 bg-slate-950 px-2 py-1 font-mono text-xsm font-bold">
        <span className="text-cyan-300">{value}</span>
      </code>
    </article>
  );
};

const DecisionChip = ({ symbol, question }: { symbol: string; question: string }) => (
  <div className="flex items-center justify-center gap-sm">
    <ToneIconBox tone="sky" size="sm">
      <EqualIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-1 font-mono text-xsm font-bold text-[var(--term-fg)]">
      <GitCompareIcon aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-accent)]" />
      <span className="text-[var(--term-muted)]">{symbol}</span>
      {question}
    </span>
  </div>
);

const ResultCard = ({
  tone,
  branch,
  title,
  body,
  icon,
}: {
  tone: ToneKey;
  branch: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
            t.chip,
          )}
        >
          {branch}
        </span>
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
      </header>
      <h3 className={cn('text-sm font-bold leading-tight tracking-tight break-keep', t.text)}>
        {title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
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
