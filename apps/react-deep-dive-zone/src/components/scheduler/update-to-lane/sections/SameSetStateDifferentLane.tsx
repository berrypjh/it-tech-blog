import { cn } from '@it-tech-blog/utils';

import { axisCardBorder, axisIconBox, axisPill, axisTextStrong } from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ContextAccent, RequestUpdateLaneContent, SameSetStateCard } from '../content';
import { ClockIcon, GitForkIcon, MousePointerClickIcon, RefreshIcon, ZapIcon } from '../icons';

type Props = { content: RequestUpdateLaneContent['sameSetState'] };

const cardIcon: Record<ContextAccent, typeof ZapIcon> = {
  blue: MousePointerClickIcon,
  teal: ClockIcon,
  violet: RefreshIcon,
};

const KEYWORDS = new Set(['function', 'import', 'from', 'if', 'return', 'const']);
const STRINGS = /^['"`].*['"`]$/;
const FN_NAMES = new Set(['startTransition', 'setTab', 'setState']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (tok.startsWith('//'))
    return (
      <span key={i} className="text-emerald-600/80 italic dark:text-emerald-400/70">
        {tok}
      </span>
    );
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-blue-600 dark:text-blue-300 font-semibold">
        {tok}
      </span>
    );
  if (FN_NAMES.has(tok))
    return (
      <span key={i} className="text-amber-700 dark:text-amber-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'Component' || tok === 'needsFix')
    return (
      <span key={i} className="text-violet-700 dark:text-violet-300 font-semibold">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
    return (
      <span key={i} className="text-emerald-700 dark:text-emerald-300">
        {tok}
      </span>
    );
  if (tok === 'onClick')
    return (
      <span key={i} className="text-cyan-700 dark:text-cyan-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'button' || tok === 'div')
    return (
      <span key={i} className="text-rose-600 dark:text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-700 dark:text-slate-200">
      {tok}
    </span>
  );
};

const Card = ({ card, index }: { card: SameSetStateCard; index: number }) => {
  const Icon = cardIcon[card.accent];
  const lines = card.code.split('\n');
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-colors',
        'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
        axisCardBorder[card.accent],
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
              axisIconBox[card.accent],
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-0.5">
            <span
              className={cn(
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                axisTextStrong[card.accent],
              )}
            >
              {card.subtitle}
            </span>
            <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
              {card.title}
            </h3>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums bg-[var(--term-bg)] text-[var(--term-muted)] border border-[var(--term-border)]"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </header>

      {/* code box - light theme */}
      <div
        className={cn(
          'overflow-hidden rounded-xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-inner',
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-1.5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {card.fileLabel}
          </span>
          <span className="font-mono text-[10px] text-[var(--term-dim)]">setState</span>
        </div>
        <pre className="overflow-x-auto px-3 py-2.5 text-[11px] sm:text-xsm leading-[1.7] font-mono">
          <code>
            {lines.map((line, i) => {
              const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
              return (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="select-none w-6 shrink-0 pr-2 text-right text-[var(--term-dim)] tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* assigned lane row */}
      <div className="mt-auto flex flex-col gap-1">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          assigned lane
        </span>
        <span
          className={cn(
            'inline-flex items-center self-start gap-2 rounded-xl border-2 px-3 py-2',
            'font-mono text-xsm sm:text-sm font-bold',
            axisPill[card.accent],
          )}
        >
          <span aria-hidden="true" className={cn('inline-block h-2 w-2 rounded-full bg-current')} />
          {card.assignedLane}
        </span>
      </div>
    </article>
  );
};

export const SameSetStateDifferentLane = ({ content }: Props) => (
  <section aria-labelledby="heading-same-setstate">
    <NumberedSectionHeader
      id="same-setstate"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card, i) => (
        <li key={card.key} className="h-full">
          <Card card={card} index={i} />
        </li>
      ))}
    </ul>
  </section>
);
