import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberNodeOverviewContent } from '../content';
import {
  ArrowRightIcon,
  FlagIcon,
  HelpCircleIcon,
  LightbulbIcon,
  LinkIcon,
  RefreshIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['quiz'] };

const diagramIconMap = {
  refresh: RefreshIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  link: LinkIcon,
} as const;

export const FiberMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* Q/A column */}
        <div className="flex flex-col gap-md">
          {/* Question */}
          <div className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
                'bg-sky-100 text-sky-700 font-mono font-bold',
                'dark:bg-sky-950/60 dark:text-sky-200',
              )}
            >
              Q.
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
                {content.questionLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.question}
              </p>
            </div>
          </div>

          {/* Answer */}
          <div
            className={cn(
              'flex items-start gap-sm rounded-2xl border-2 p-md',
              'border-emerald-300/70 bg-emerald-50/70',
              'dark:border-emerald-700/70 dark:bg-emerald-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
                'bg-emerald-600 text-white font-mono font-bold',
                'dark:bg-emerald-500 dark:text-slate-950',
              )}
            >
              A.
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-700 dark:text-emerald-200">
                {content.answerLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
                {content.answer}
              </p>
            </div>
          </div>

          {/* Explanation */}
          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border px-sm py-2',
              'border-amber-200/80 bg-amber-50/60',
              'dark:border-amber-800/60 dark:bg-amber-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider font-mono text-amber-700/80 dark:text-amber-300/80">
                {content.explanationLabel}
              </span>
              <p className="text-xsm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
                {content.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Diagram column */}
        <div className="min-w-0">
          <QuizDiagram diagram={content.diagram} />
        </div>
      </div>
    </article>
  </section>
);

const QuizDiagram = ({ diagram }: { diagram: FiberNodeOverviewContent['quiz']['diagram'] }) => (
  <div
    className={cn(
      'rounded-2xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/40',
    )}
  >
    <div className="grid grid-cols-[1fr_auto_1fr] gap-sm items-center">
      {/* Before */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {diagram.beforeLabel}
        </span>
        <PlainTree nodes={diagram.beforeNodes} />
      </div>

      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300"
      >
        <ArrowRightIcon className="h-4 w-4" />
      </span>

      {/* After */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 font-bold">
          {diagram.afterLabel}
        </span>
        <FiberTree nodes={diagram.afterNodes} />
      </div>
    </div>
  </div>
);

const PlainTree = ({ nodes }: { nodes: string[] }) => (
  <ul className="flex flex-col items-center gap-1">
    <li
      className={cn(
        'inline-flex items-center justify-center rounded-lg border bg-[var(--term-bg)] px-3 py-1.5',
        'border-[var(--term-border)] text-xxsm font-mono text-[var(--term-fg)]',
      )}
    >
      {nodes[0]}
    </li>
    <span aria-hidden="true" className="h-3 w-px bg-[var(--term-border)]" />
    <li className="flex items-center gap-2">
      {nodes.slice(1).map((n, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" className="block h-px w-2 bg-[var(--term-border)]" />}
          <span
            className={cn(
              'inline-flex items-center justify-center rounded-lg border bg-[var(--term-bg)] px-3 py-1.5',
              'border-[var(--term-border)] text-xxsm font-mono text-[var(--term-fg)]',
            )}
          >
            {n}
          </span>
        </span>
      ))}
    </li>
  </ul>
);

const FiberTree = ({
  nodes,
}: {
  nodes: FiberNodeOverviewContent['quiz']['diagram']['afterNodes'];
}) => (
  <div className="relative w-full max-w-[200px]">
    <div className="grid grid-cols-2 gap-1.5">
      {nodes.map((n) => {
        const Icon = diagramIconMap[n.iconName];
        return (
          <div
            key={n.label}
            className={cn(
              'flex items-center gap-1.5 rounded-lg border bg-sky-50/60 px-2 py-1.5',
              'border-sky-200/80 text-[11px] font-mono text-sky-800',
              'dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-100',
            )}
          >
            <Icon
              aria-hidden="true"
              className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300 shrink-0"
            />
            <span className="truncate">{n.label}</span>
          </div>
        );
      })}
    </div>
  </div>
);
