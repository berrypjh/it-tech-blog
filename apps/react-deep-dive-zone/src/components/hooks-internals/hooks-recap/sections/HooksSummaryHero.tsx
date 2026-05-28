import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { FlowStep, HooksRecapContent } from '../content';
import {
  ArrowDownIcon,
  CogIcon,
  DatabaseIcon,
  FlagIcon,
  FunctionSquareIcon,
  Link2Icon,
  PlayCircleIcon,
  RocketIcon,
  SplitIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

import { toneCardBg, toneIconBox, toneNumber, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['hero'] };

const visualMap = {
  play: PlayCircleIcon,
  fn: FunctionSquareIcon,
  split: SplitIcon,
  cog: CogIcon,
  list: Link2Icon,
  state: DatabaseIcon,
  effect: ZapIcon,
  commit: RocketIcon,
  zap: FlagIcon,
};

const DiagramStep = ({ step }: { step: FlowStep }) => {
  const Icon = visualMap[step.visual];
  return (
    <article
      className={cn(
        'flex items-start gap-2 rounded-xl border-2 p-3',
        'shadow-[0_1px_0_var(--term-border)] transition-all',
        toneCardBg[step.tone],
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums',
          toneNumber[step.tone],
        )}
      >
        {step.number}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-white dark:bg-slate-950/40',
          'border-[var(--term-border)]',
          toneText[step.tone],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code
          className={cn(
            'font-mono text-[11px] font-bold leading-tight break-all',
            toneText[step.tone],
          )}
        >
          {step.title}
        </code>
        <p className="text-[10px] font-mono text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};

export const HooksSummaryHero = ({ content }: Props) => {
  // Split into linear (0..4) → branch (5,6) → final (7)
  const linear = content.diagramSteps.slice(0, 4);
  const branchHead = content.diagramSteps[4];
  const branchA = content.diagramSteps[5];
  const branchB = content.diagramSteps[6];
  const final = content.diagramSteps[7];
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="react/hooks/recap.md"
        suffix={<span className="text-[var(--term-dim)]"> {'// final recap'}</span>}
      />

      <ul className="mt-md flex flex-wrap items-center gap-2">
        {content.badges.map((badge) => (
          <li
            key={badge.label}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              badge.tone === 'blue' &&
                'bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow-[0_1px_0_var(--term-border)]',
              badge.tone === 'cyan' &&
                'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'block h-1.5 w-1.5 rounded-full',
                badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
              )}
            />
            {badge.label}
          </li>
        ))}
      </ul>

      <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-lg items-start">
        {/* Left: text + keywords */}
        <div className="flex flex-col gap-md min-w-0">
          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.6rem]',
              'font-bold leading-[1.14] tracking-tight text-[var(--term-fg)] break-keep',
            )}
          >
            <span className="block">{content.titleLine1}</span>
            <span
              className={cn(
                'block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
                'dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300',
              )}
            >
              {content.titleAccent}
            </span>
          </h1>
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[55ch] break-keep">
            {content.description}
          </p>

          <ul className="flex flex-wrap gap-1.5 mt-sm">
            {content.keywords.map((kw) => (
              <li key={kw.label}>
                <code
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold break-all',
                    'bg-white dark:bg-slate-950/40',
                    toneIconBox[kw.tone],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('inline-block h-1.5 w-1.5 rounded-full', toneNumber[kw.tone])}
                  />
                  {kw.label}
                </code>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: full flow diagram */}
        <div
          className={cn(
            'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
            'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900"
            >
              <WorkflowIcon className="h-4 w-4" />
            </span>
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.diagramTitle}
            </h2>
          </header>

          {/* Linear steps 1..4 */}
          <ol className="flex flex-col gap-1.5">
            {linear.map((step, i) => (
              <li key={step.number} className="flex flex-col gap-1.5">
                <DiagramStep step={step} />
                {i < linear.length - 1 && (
                  <span aria-hidden="true" className="flex justify-center text-[var(--term-muted)]">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </li>
            ))}
          </ol>

          {/* Branch head */}
          {branchHead && (
            <>
              <span aria-hidden="true" className="flex justify-center text-[var(--term-muted)]">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
              <DiagramStep step={branchHead} />
            </>
          )}

          {/* Branch A and B */}
          <span aria-hidden="true" className="flex justify-center text-[var(--term-muted)]">
            <SplitIcon className="h-4 w-4 rotate-180" />
          </span>
          {branchA && branchB && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <DiagramStep step={branchA} />
              <DiagramStep step={branchB} />
            </div>
          )}

          <span aria-hidden="true" className="flex justify-center text-[var(--term-muted)]">
            <ArrowDownIcon className="h-3.5 w-3.5" />
          </span>
          {final && <DiagramStep step={final} />}
        </div>
      </div>
    </section>
  );
};
