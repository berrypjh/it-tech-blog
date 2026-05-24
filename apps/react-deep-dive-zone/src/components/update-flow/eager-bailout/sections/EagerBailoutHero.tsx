import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { EagerBailoutContent } from '../content';
import { ArrowDownIcon, BanIcon, CheckCircleIcon, EqualIcon, GitCompareIcon } from '../icons';

type Props = { content: EagerBailoutContent['hero'] };

export const EagerBailoutHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="grep -n"
      path="enqueueConcurrentHookUpdateAndEagerlyBailout"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' '}
          packages/react-reconciler/src/ReactFiberHooks.js
        </span>
      }
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        {/* Top pills */}
        <ul className="flex flex-wrap items-center gap-2">
          {content.pills.map((pill) => (
            <li
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                pill.tone === 'sky' &&
                  'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                pill.tone === 'slate' &&
                  'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40',
              )}
            >
              {pill.tone === 'sky' && (
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky-500" />
              )}
              {pill.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-cyan-300 dark:to-teal-300',
            )}
          >
            {content.title.line3}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        {/* Inline keyword chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xxsm font-mono text-[var(--term-muted)]">
          <span className="rounded-md border border-emerald-300/70 bg-emerald-50/70 px-2 py-0.5 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
            eagerState
          </span>
          <span className="text-[var(--term-dim)]">==</span>
          <span className="rounded-md border border-sky-300/70 bg-sky-50/70 px-2 py-0.5 text-sky-700 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200">
            currentState
          </span>
          <span className="text-[var(--term-dim)]">→</span>
          <span className="rounded-md border border-violet-300/70 bg-violet-50/70 px-2 py-0.5 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200">
            bailout
          </span>
        </div>
      </div>

      {/* Right branch diagram */}
      <div className="order-first lg:order-none min-w-0">
        <BranchDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const BranchDiagram = ({ diagram }: { diagram: EagerBailoutContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-emerald-50/30 via-white to-violet-50/30',
      'dark:from-emerald-950/15 dark:via-[var(--term-bg)] dark:to-violet-950/15',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* Compare row */}
    <div className="grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 sm:gap-3 items-stretch">
      <CompareCard title={diagram.currentTitle} value={diagram.currentValue} tone="cyan" />

      <div className="flex flex-col items-center justify-center gap-1">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2',
            'border-sky-300/80 bg-white text-sky-700',
            'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <EqualIcon className="h-4 w-4" />
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {diagram.compareSymbol}
        </span>
      </div>

      <CompareCard
        title={diagram.eagerTitle}
        subtitle={diagram.eagerSubtitle}
        value={diagram.eagerValue}
        tone="cyan"
      />
    </div>

    {/* Branch question */}
    <div className="mt-md flex items-center justify-center">
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full border-2 border-dashed px-4 py-1.5',
          'border-sky-300/80 bg-white text-sky-700 text-xsm font-bold',
          'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
        )}
      >
        <GitCompareIcon aria-hidden="true" className="h-3.5 w-3.5" />
        {diagram.question}
      </span>
    </div>

    {/* Dashed split connector */}
    <div aria-hidden="true" className="relative mt-3 mb-3 h-8 mx-2 sm:mx-8">
      <span className="absolute left-1/2 top-0 h-3 w-px bg-[var(--term-border)] -translate-x-1/2" />
      <span className="absolute top-3 left-1/2 -translate-x-1/2 w-[80%] h-px [background-image:linear-gradient(to_right,var(--term-border)_50%,transparent_50%)] [background-size:6px_1px]" />
      <span className="absolute top-3 left-[10%] h-5 w-px bg-[var(--term-border)]" />
      <span className="absolute top-3 right-[10%] h-5 w-px bg-[var(--term-border)]" />
    </div>

    {/* Result row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
      <ResultCard
        branch={diagram.leftBranch}
        title={diagram.leftResultTitle}
        body={diagram.leftResultBody}
        tone="emerald"
        icon={<CheckCircleIcon className="h-4 w-4" />}
      />
      <ResultCard
        branch={diagram.rightBranch}
        title={diagram.rightResultTitle}
        body={diagram.rightResultBody}
        tone="violet"
        icon={<BanIcon className="h-4 w-4 rotate-12" />}
      />
    </div>

    {/* Down hint between rows on mobile */}
    <div aria-hidden="true" className="sm:hidden mt-2 flex justify-center text-[var(--term-dim)]">
      <ArrowDownIcon className="h-3.5 w-3.5" />
    </div>
  </div>
);

type CompareCardProps = {
  title: string;
  subtitle?: string;
  value: string;
  tone: 'cyan';
};

const CompareCard = ({ title, subtitle, value }: CompareCardProps) => (
  <article
    className={cn(
      'flex flex-col gap-1 rounded-2xl border-2 bg-[var(--term-bg)] p-sm sm:p-md',
      'border-cyan-200/80 dark:border-cyan-800/70',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-700/80 dark:text-cyan-300/80">
        {title}
      </span>
      {subtitle && (
        <span className="text-[10px] text-[var(--term-muted)] leading-snug">{subtitle}</span>
      )}
    </div>
    <code
      className={cn(
        'inline-flex w-fit items-center rounded-md border px-2 py-1 font-mono text-xsm sm:text-sm font-bold',
        'border-slate-800 bg-slate-950 text-slate-100',
      )}
    >
      <span className="text-cyan-300">{value}</span>
    </code>
  </article>
);

type ResultCardProps = {
  branch: string;
  title: string;
  body: string;
  tone: 'emerald' | 'violet';
  icon: React.ReactNode;
};

const resultToneClass = {
  emerald: {
    border: 'border-emerald-300/70 dark:border-emerald-700/70',
    bg: 'bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
    pill: 'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
    iconBox: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
  },
  violet: {
    border: 'border-violet-300/70 dark:border-violet-700/70',
    bg: 'bg-gradient-to-br from-violet-50/80 via-white to-sky-50/40 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/20',
    pill: 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    title: 'text-violet-800 dark:text-violet-100',
    iconBox: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-slate-950',
  },
} as const;

const ResultCard = ({ branch, title, body, tone, icon }: ResultCardProps) => {
  const t = resultToneClass[tone];
  return (
    <article
      className={cn('flex flex-col gap-2 rounded-2xl border-2 p-sm sm:p-md', t.border, t.bg)}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            t.pill,
          )}
        >
          {branch}
        </span>
        <span
          aria-hidden="true"
          className={cn('inline-flex h-8 w-8 items-center justify-center rounded-lg', t.iconBox)}
        >
          {icon}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.title)}>
        {title}
      </h3>
      <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">{body}</p>
    </article>
  );
};
