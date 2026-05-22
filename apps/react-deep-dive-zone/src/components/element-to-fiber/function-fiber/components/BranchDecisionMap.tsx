import { cn } from '@it-tech-blog/utils';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ComponentIcon,
  HelpCircleIcon,
  SquareFunctionIcon,
} from '../icons';

type Props = {
  startTitle: string;
  startSubtitle: string;
  questionTitle: string;
  noLabel: string;
  yesLabel: string;
  functionTitle: string;
  functionLine1: string;
  functionLine2: string;
  classTitle: string;
  classLine1: string;
  classLine2: string;
};

/**
 * Hero 우측의 type(function) → 질문 → Function/Class 분기 비주얼.
 * - lg: type → question → (위 Function / 아래 Class) 가로 흐름
 * - mobile: type ↓ question ↓ Function ↓ Class 세로 흐름
 */
export const BranchDecisionMap = ({
  startTitle,
  startSubtitle,
  questionTitle,
  noLabel,
  yesLabel,
  functionTitle,
  functionLine1,
  functionLine2,
  classTitle,
  classLine1,
  classLine2,
}: Props) => (
  <div className="flex flex-col gap-sm lg:gap-md min-w-0">
    {/* Mobile/tablet: vertical stack */}
    <div className="lg:hidden flex flex-col gap-2 min-w-0">
      <StartCard title={startTitle} subtitle={startSubtitle} />
      <DownArrow tone="blue" />
      <QuestionCard title={questionTitle} />
      <DownArrow tone="green" label={noLabel} />
      <FunctionCard title={functionTitle} line1={functionLine1} line2={functionLine2} />
      <DownArrow tone="purple" label={yesLabel} />
      <ClassCard title={classTitle} line1={classLine1} line2={classLine2} />
    </div>

    {/* Desktop: type → question → (function / class) */}
    <div
      className={cn(
        'hidden lg:grid items-stretch min-w-0',
        'grid-cols-[minmax(0,_0.95fr)_auto_minmax(0,_0.95fr)_auto_minmax(0,_1.2fr)]',
        'gap-md',
      )}
    >
      {/* col 1: start, spans rows */}
      <div className="row-span-2 self-center">
        <StartCard title={startTitle} subtitle={startSubtitle} />
      </div>

      {/* col 2: right arrow, spans rows */}
      <div className="row-span-2 flex items-center justify-center" aria-hidden="true">
        <RightArrow tone="blue" />
      </div>

      {/* col 3: question, spans rows */}
      <div className="row-span-2 self-center">
        <QuestionCard title={questionTitle} />
      </div>

      {/* col 4 row 1: no arrow */}
      <BranchArrow tone="green" label={noLabel} />

      {/* col 5 row 1: function */}
      <FunctionCard title={functionTitle} line1={functionLine1} line2={functionLine2} />

      {/* col 4 row 2: yes arrow */}
      <BranchArrow tone="purple" label={yesLabel} />

      {/* col 5 row 2: class */}
      <ClassCard title={classTitle} line1={classLine1} line2={classLine2} />
    </div>

    <p className="sr-only">
      type이 함수인 경우 React는 클래스 컴포넌트인지 먼저 판단합니다. 아니오면
      FunctionComponent(Work Tag 0), 예이면 ClassComponent(Work Tag 1) Fiber tag가 선택됩니다.
    </p>
  </div>
);

const StartCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-2xl border-2 p-md min-w-0',
      'bg-gradient-to-br from-sky-50 to-white',
      'dark:from-sky-950/30 dark:to-[var(--term-bg)]',
      'border-sky-400 dark:border-sky-500/70',
      'shadow-[0_8px_22px_-12px_rgba(2,132,199,0.55)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
        'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
      )}
    >
      <SquareFunctionIcon className="h-6 w-6" />
    </span>
    <div className="flex flex-col min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700/80 dark:text-sky-300/80">
        input
      </span>
      <code className="font-mono text-md font-extrabold tracking-tight text-sky-800 dark:text-sky-100">
        {title}
      </code>
      <code className="font-mono text-xsm text-sky-700/80 dark:text-sky-300/80">{subtitle}</code>
    </div>
  </article>
);

const QuestionCard = ({ title }: { title: string }) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-2xl border-2 p-md min-w-0',
      'border-dashed border-sky-400 bg-sky-50/60',
      'dark:border-sky-500/70 dark:bg-sky-950/30',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
        'bg-white text-sky-700 border-2 border-sky-300/80',
        'dark:bg-[var(--term-bg)] dark:text-sky-200 dark:border-sky-700/70',
      )}
    >
      <HelpCircleIcon className="h-6 w-6" />
    </span>
    <div className="flex flex-col min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700/80 dark:text-sky-300/80">
        decision
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {title}
      </p>
    </div>
  </article>
);

const FunctionCard = ({ title, line1, line2 }: { title: string; line1: string; line2: string }) => (
  <article
    className={cn(
      'flex items-start gap-sm rounded-2xl border-2 p-md min-w-0',
      'bg-emerald-50/60 dark:bg-emerald-950/30',
      'border-emerald-400 dark:border-emerald-500/70',
      'shadow-[0_6px_18px_-12px_rgba(16,185,129,0.55)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
        'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
      )}
    >
      <SquareFunctionIcon className="h-5 w-5" />
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-emerald-700/80 dark:text-emerald-300/80">
        result · function branch
      </span>
      <code className="font-mono text-sm font-extrabold text-emerald-800 dark:text-emerald-100">
        {title}
      </code>
      <code className="font-mono text-[11px] text-emerald-700/90 dark:text-emerald-300/90">
        {line1}
      </code>
      <code className="font-mono text-[11px] text-emerald-700/80 dark:text-emerald-300/80 font-bold">
        {line2}
      </code>
    </div>
  </article>
);

const ClassCard = ({ title, line1, line2 }: { title: string; line1: string; line2: string }) => (
  <article
    className={cn(
      'flex items-start gap-sm rounded-2xl border-2 p-md min-w-0',
      'bg-violet-50/60 dark:bg-violet-950/30',
      'border-violet-400 dark:border-violet-500/70',
      'shadow-[0_6px_18px_-12px_rgba(139,92,246,0.55)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
        'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
      )}
    >
      <ComponentIcon className="h-5 w-5" />
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-violet-700/80 dark:text-violet-300/80">
        result · class branch
      </span>
      <code className="font-mono text-sm font-extrabold text-violet-800 dark:text-violet-100">
        {title}
      </code>
      <code className="font-mono text-[11px] text-violet-700/90 dark:text-violet-300/90">
        {line1}
      </code>
      <code className="font-mono text-[11px] text-violet-700/80 dark:text-violet-300/80 font-bold">
        {line2}
      </code>
    </div>
  </article>
);

const toneStyles = {
  blue: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
  green: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
  purple: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
} as const;

const toneLabel = {
  blue: 'border-sky-300/70 bg-sky-50 text-sky-700 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200',
  green:
    'border-emerald-300/70 bg-emerald-50 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
  purple:
    'border-violet-300/70 bg-violet-50 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
} as const;

const BranchArrow = ({ tone, label }: { tone: 'green' | 'purple'; label: string }) => (
  <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
        toneLabel[tone],
      )}
    >
      {label}
    </span>
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full w-9 h-9',
        toneStyles[tone],
        'shadow-[0_6px_18px_-6px_rgba(0,0,0,0.25)]',
      )}
    >
      <ArrowRightIcon className="h-4 w-4" />
    </span>
  </div>
);

const RightArrow = ({ tone }: { tone: 'blue' }) => (
  <span
    className={cn(
      'inline-flex items-center justify-center rounded-full w-9 h-9',
      toneStyles[tone],
      'shadow-[0_6px_18px_-6px_rgba(2,132,199,0.55)]',
    )}
  >
    <ArrowRightIcon className="h-4 w-4" />
  </span>
);

const DownArrow = ({ tone, label }: { tone: 'blue' | 'green' | 'purple'; label?: string }) => (
  <div className="flex items-center justify-center gap-2 py-1" aria-hidden="true">
    {label && (
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          toneLabel[tone],
        )}
      >
        {label}
      </span>
    )}
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full w-8 h-8',
        toneStyles[tone],
      )}
    >
      <ArrowDownIcon className="h-4 w-4" />
    </span>
  </div>
);
