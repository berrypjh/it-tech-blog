import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { Piece, Tone, UseStateInternalsContent } from '../content';
import {
  ArrowDownIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  FunctionSquareIcon,
  PlusIcon,
  SettingsIcon,
} from '../icons';

type Props = { content: UseStateInternalsContent['hero'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/40',
  indigo: 'border-indigo-300/80 bg-indigo-50/70 dark:border-indigo-700/70 dark:bg-indigo-950/40',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

const renderHeroCode = (code: string) => {
  // const [count, setCount] = useState(0);
  return (
    <>
      <span className="text-sky-400">const</span>
      <span className="text-slate-300"> [</span>
      <span className="text-amber-200">count</span>
      <span className="text-slate-300">, </span>
      <span className="text-amber-200">setCount</span>
      <span className="text-slate-300">] = </span>
      <span className="text-violet-300">useState</span>
      <span className="text-slate-300">(</span>
      <span className="text-emerald-300">0</span>
      <span className="text-slate-300">);</span>
      {/* The argument `code` is intentionally unused; kept for callers passing the source. */}
      {code && null}
    </>
  );
};

const PieceVisual = ({ piece }: { piece: Piece }) => {
  if (piece.visual === 'number')
    return (
      <span
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-2xl font-mono font-bold text-xl',
          toneIconBox[piece.tone],
        )}
      >
        {piece.value}
      </span>
    );
  if (piece.visual === 'fn')
    return (
      <code
        className={cn(
          'inline-flex items-center rounded-xl px-3 py-2 font-mono text-xsm font-bold',
          toneIconBox[piece.tone],
        )}
      >
        {piece.value}
      </code>
    );
  if (piece.visual === 'queue')
    return (
      <span aria-hidden="true" className="inline-flex items-center gap-1">
        <span className={cn('h-3 w-3 rounded-full', toneIconBox[piece.tone])} />
        <span className={cn('h-2 w-3', toneIconBox[piece.tone])} />
        <span className={cn('h-3 w-3 rounded-full', toneIconBox[piece.tone])} />
        <span className={cn('h-2 w-3', toneIconBox[piece.tone])} />
        <span className={cn('h-3 w-3 rounded-full', toneIconBox[piece.tone])} />
      </span>
    );
  // init
  return (
    <code
      className={cn(
        'inline-flex items-center rounded-xl px-3 py-2 font-mono text-xsm font-bold',
        toneIconBox[piece.tone],
      )}
    >
      {piece.value}
    </code>
  );
};

const visualIconMap = {
  number: DatabaseIcon,
  fn: FunctionSquareIcon,
  queue: CpuIcon,
  init: SettingsIcon,
};

export const UseStateInternalsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/use-state-internal.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// state + queue + dispatch'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    {/* Left: text + compact code */}
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLine1}</span>
        <span className="block text-[var(--term-accent)]">{content.titleAccent}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

      {/* Compact code panel */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
        <div className="flex items-center gap-2 border-b border-slate-800 px-md py-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono text-slate-500">useState</span>
        </div>
        <pre className="overflow-x-auto px-md py-2.5 text-[12px] sm:text-xsm leading-[1.7] font-mono">
          <code>{renderHeroCode(content.leftCode)}</code>
        </pre>
      </div>
    </HeroTextColumn>

    {/* Right: decomposition diagram */}
    <HeroVisualColumn>
      <div
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
          'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.diagramTitle}
          </span>
          {/* Top code bar */}
          <div className="w-full rounded-xl border border-slate-800 bg-slate-950 px-md py-2">
            <pre className="overflow-x-auto text-[11px] sm:text-xsm leading-[1.65] font-mono text-center">
              <code>{renderHeroCode(content.diagramCode)}</code>
            </pre>
          </div>
          <ArrowDownIcon aria-hidden="true" className="h-5 w-5 text-[var(--term-muted)]" />
          <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">
            {content.diagramSubtitle}
          </p>
        </header>

        {/* Pieces row with + separators */}
        <ol className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2">
          {content.pieces.map((piece, i) => {
            const Icon = visualIconMap[piece.visual];
            const isLast = i === content.pieces.length - 1;
            return (
              <li key={piece.title} className="contents">
                <article
                  className={cn(
                    'flex flex-col items-center gap-2 rounded-2xl border-2 p-3 text-center min-h-[140px]',
                    'transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                    toneCard[piece.tone],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-lg border bg-white dark:bg-slate-950/40',
                      'border-[var(--term-border)]',
                      toneText[piece.tone],
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <h3
                    className={cn(
                      'text-[11px] sm:text-xsm font-bold leading-tight break-keep',
                      toneText[piece.tone],
                    )}
                  >
                    {piece.title}
                  </h3>
                  <PieceVisual piece={piece} />
                  <code className="font-mono text-[10px] text-[var(--term-muted)] break-all">
                    {piece.label}
                  </code>
                </article>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center text-[var(--term-muted)] py-2 sm:py-0"
                  >
                    <span className="hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_1px_0_var(--term-border)]">
                      <PlusIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="sm:hidden inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)]">
                      <PlusIcon className="h-3 w-3" />
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="text-[10px] sm:text-xsm font-mono text-center text-[var(--term-muted)] flex items-center justify-center gap-1.5">
          <CodeIcon aria-hidden="true" className="h-3 w-3" />
          state + dispatch + queue + initialState
        </p>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
