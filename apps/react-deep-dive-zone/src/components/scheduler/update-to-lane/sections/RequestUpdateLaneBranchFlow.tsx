import { cn } from '@it-tech-blog/utils';

import { axisCardBorder, axisIconBox, axisPill, axisTextStrong } from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { BranchExplanationCard, ContextAccent, RequestUpdateLaneContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CornerDownRightIcon,
  GitForkIcon,
  LayersIcon,
  RefreshIcon,
  TerminalIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RequestUpdateLaneContent['branchFlow'] };

const branchAccent: Record<string, ContextAccent> = {
  '1': 'blue',
  '2': 'violet',
  '3': 'teal',
  '4': 'blue',
};

const branchIcon: Record<string, typeof ZapIcon> = {
  '1': ZapIcon,
  '2': RefreshIcon,
  '3': WorkflowIcon,
  '4': LayersIcon,
};

const BadgeCard = ({ card }: { card: Extract<BranchExplanationCard, { kind: 'badge' }> }) => (
  <article
    className={cn(
      'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-colors',
      axisCardBorder[card.accent],
    )}
  >
    <header className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          axisIconBox[card.accent],
        )}
      >
        <ZapIcon className="h-4 w-4" />
      </span>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          axisTextStrong[card.accent],
        )}
      >
        {card.title}
      </h3>
    </header>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
      {card.body}
    </p>
    <span
      className={cn(
        'inline-flex items-center self-start gap-2 rounded-xl border-2 px-3 py-1.5',
        'font-mono text-xsm sm:text-sm font-bold',
        axisPill[card.accent],
      )}
    >
      <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-current" />
      {card.resultBadge}
    </span>
  </article>
);

const RenderCard = ({ card }: { card: Extract<BranchExplanationCard, { kind: 'render' }> }) => (
  <article
    className={cn(
      'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-colors',
      axisCardBorder[card.accent],
    )}
  >
    <header className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          axisIconBox[card.accent],
        )}
      >
        <RefreshIcon className="h-4 w-4" />
      </span>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          axisTextStrong[card.accent],
        )}
      >
        {card.title}
      </h3>
    </header>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
      {card.body}
    </p>

    {/* mini render-lane bit cells */}
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
        {card.middleLabel}
      </span>
      <ul aria-hidden="true" className="flex gap-1">
        {['0', '0', '1', '0', '1', '0', '0', '0'].map((b, i) => (
          <li
            key={i}
            className={cn(
              'inline-flex h-5 w-5 items-center justify-center rounded border font-mono text-[10px] font-bold',
              b === '1'
                ? 'bg-violet-500 border-violet-500 text-white dark:bg-violet-400 dark:border-violet-400 dark:text-slate-900'
                : 'bg-white text-[var(--term-dim)] border-[var(--term-border)] dark:bg-slate-950/40',
            )}
          >
            {b}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center gap-2 text-xsm">
      <ArrowRightIcon
        aria-hidden="true"
        className={cn('h-4 w-4 shrink-0', axisTextStrong[card.accent])}
      />
      <span className={cn('font-mono font-bold', axisTextStrong[card.accent])}>{card.result}</span>
    </div>
  </article>
);

const FlowCard = ({ card }: { card: Extract<BranchExplanationCard, { kind: 'flow' }> }) => (
  <article
    className={cn(
      'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-colors',
      axisCardBorder[card.accent],
    )}
  >
    <header className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          axisIconBox[card.accent],
        )}
      >
        <WorkflowIcon className="h-4 w-4" />
      </span>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          axisTextStrong[card.accent],
        )}
      >
        {card.title}
      </h3>
    </header>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
      {card.body}
    </p>

    {/* mini flow */}
    <ol className="flex flex-col gap-1.5">
      {card.flowSteps.map((step, i) => {
        const isLast = i === card.flowSteps.length - 1;
        return (
          <li key={step} className="flex flex-col">
            <div
              className={cn(
                'flex items-center gap-2 rounded-lg border px-2.5 py-1.5',
                'border-[var(--term-border)] bg-[var(--term-bg)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums text-white',
                  card.accent === 'teal' && 'bg-teal-600 dark:bg-teal-500',
                  card.accent === 'blue' && 'bg-blue-600 dark:bg-blue-500',
                  card.accent === 'violet' && 'bg-violet-600 dark:bg-violet-500',
                )}
              >
                {i + 1}
              </span>
              <code className="font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all">
                {step}
              </code>
            </div>
            {!isLast && (
              <span
                aria-hidden="true"
                className="ml-3 inline-block w-px h-2 border-l border-dashed border-[var(--term-border)]"
              />
            )}
          </li>
        );
      })}
    </ol>
  </article>
);

const ExplanationCard = ({ card }: { card: BranchExplanationCard }) => {
  if (card.kind === 'badge') return <BadgeCard card={card} />;
  if (card.kind === 'render') return <RenderCard card={card} />;
  return <FlowCard card={card} />;
};

export const RequestUpdateLaneBranchFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-branch-flow">
    <NumberedSectionHeader
      id="branch-flow"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md items-start">
      {/* LEFT: flow chart */}
      <article
        aria-label="branch flow chart"
        className={cn(
          'flex flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* start node */}
        <div className="flex justify-center">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-4 py-2',
              'bg-slate-950 text-white font-mono text-xsm sm:text-sm font-bold',
              'shadow-[0_2px_0_var(--term-border)] border border-slate-800',
            )}
          >
            <TerminalIcon aria-hidden="true" className="h-4 w-4 text-cyan-400" />
            {content.flowStart}
          </span>
        </div>

        <ol className="flex flex-col gap-2">
          {content.nodes.map((node, i) => {
            const accent = branchAccent[node.number];
            const Icon = branchIcon[node.number];
            const isLast = i === content.nodes.length - 1;
            return (
              <li key={node.number} className="flex flex-col">
                <span aria-hidden="true" className="self-center text-[var(--term-muted)] -my-1">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
                <div
                  className={cn(
                    'flex flex-col gap-2 rounded-2xl border-2 p-3 transition-colors',
                    'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                    axisCardBorder[accent],
                    node.isFinal && 'shadow-[0_3px_0_rgba(29,78,216,0.25)]',
                  )}
                >
                  <header className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums text-white',
                        accent === 'blue' && 'bg-blue-600 dark:bg-blue-500',
                        accent === 'teal' && 'bg-teal-600 dark:bg-teal-500',
                        accent === 'violet' && 'bg-violet-600 dark:bg-violet-500',
                      )}
                    >
                      {node.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                        axisIconBox[accent],
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <h3
                      className={cn(
                        'text-xsm sm:text-sm font-bold leading-tight break-keep',
                        axisTextStrong[accent],
                      )}
                    >
                      {node.question}
                    </h3>
                  </header>
                  <div className="ml-9 flex items-center gap-2">
                    <CornerDownRightIcon
                      aria-hidden="true"
                      className={cn('h-3.5 w-3.5', axisTextStrong[accent])}
                    />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                      {node.yesLabel}
                    </span>
                    <code
                      className={cn(
                        'font-mono text-[11px] sm:text-xsm font-bold break-all',
                        axisTextStrong[accent],
                      )}
                    >
                      {node.yesResult}
                    </code>
                  </div>
                  {!isLast && (
                    <p className="ml-9 font-mono text-[10px] uppercase tracking-wider text-[var(--term-dim)]">
                      No ↓ 다음 분기
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </article>

      {/* RIGHT: explanation cards */}
      <div className="flex flex-col gap-md">
        <p className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {content.explanationTitle}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {content.cards.map((card) => (
            <li key={card.key} className="h-full">
              <ExplanationCard card={card} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
