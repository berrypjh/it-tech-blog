import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FunctionClassComponentFiberContent } from '../content';
import { ComponentIcon, HelpCircleIcon, SquareFunctionIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * type(function) → "클래스 컴포넌트일까?" 판단 → 아니오면 Function Component,
 * 예이면 Class Component Fiber tag로 갈라지는 흐름을 한 컨테이너 안에서
 * 위에서 아래로 잇는 컴팩트 결정 맵.
 */
export const FunctionClassHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.startTitle}${content.startSubtitle}: ${content.questionTitle} ${content.noLabel} → ${content.functionTitle} (${content.functionLine2}), ${content.yesLabel} → ${content.classTitle} (${content.classLine2})`;

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
        <StartNode title={content.startTitle} subtitle={content.startSubtitle} />

        <DownArrow />

        <QuestionNode title={content.questionTitle} />

        <DownArrow />

        <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <li className="flex min-w-0">
            <BranchCard
              tone="emerald"
              icon={<SquareFunctionIcon className="h-4 w-4" aria-hidden="true" />}
              branchLabel={content.noLabel}
              title={content.functionTitle}
              line1={content.functionLine1}
              line2={content.functionLine2}
            />
          </li>
          <li className="flex min-w-0">
            <BranchCard
              tone="violet"
              icon={<ComponentIcon className="h-4 w-4" aria-hidden="true" />}
              branchLabel={content.yesLabel}
              title={content.classTitle}
              line1={content.classLine1}
              line2={content.classLine2}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

const StartNode = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div
    className={cn(
      'flex items-center justify-center gap-sm rounded-xl border px-md py-2.5',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="sky" size="sm">
      <SquareFunctionIcon className="h-4 w-4" aria-hidden="true" />
    </ToneIconBox>
    <code className="font-mono text-base font-bold tracking-tight text-sky-600 dark:text-sky-300">
      {title}
      <span className="text-sky-700/70 dark:text-sky-300/70"> {subtitle}</span>
    </code>
  </div>
);

const QuestionNode = ({ title }: { title: string }) => (
  <div
    className={cn(
      'flex items-center gap-sm rounded-xl border border-dashed px-md py-2.5',
      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="cyan" size="sm">
      <HelpCircleIcon className="h-4 w-4" aria-hidden="true" />
    </ToneIconBox>
    <p className="min-w-0 text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
      {title}
    </p>
  </div>
);

type BranchCardProps = {
  tone: ToneKey;
  icon: React.ReactNode;
  branchLabel: string;
  title: string;
  line1: string;
  line2: string;
};

const BranchCard = ({ tone, icon, branchLabel, title, line1, line2 }: BranchCardProps) => {
  const t = toneTokens[tone];

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
          {icon}
        </ToneIconBox>
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
            t.chip,
          )}
        >
          {branchLabel}
        </span>
      </span>
      <code className={cn('min-w-0 truncate font-mono text-xsm font-bold', t.text)}>{title}</code>
      <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">{line1}</code>
      <code className={cn('font-mono text-[11px] font-bold break-keep', t.text)}>{line2}</code>
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
