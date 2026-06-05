import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { HookSideCard, UseReducerSharedContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, MergeIcon, SproutIcon } from '../icons';

type Props = { content: UseReducerSharedContent['hero'] };

const renderCode = (code: string) => {
  // const [a, b] = useX(...);
  const KEYWORDS = new Set(['const']);
  const FN_NAMES = new Set(['useState', 'useReducer']);
  const tokens = code.split(/(\s+|[(){}[\];,.=])/);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok))
      return (
        <span key={i} className="text-sky-300">
          {tok}
        </span>
      );
    if (FN_NAMES.has(tok))
      return (
        <span key={i} className="text-violet-300">
          {tok}
        </span>
      );
    if (/^\d+$/.test(tok))
      return (
        <span key={i} className="text-emerald-300">
          {tok}
        </span>
      );
    if (/^[a-z][a-zA-Z]*$/.test(tok))
      return (
        <span key={i} className="text-amber-200">
          {tok}
        </span>
      );
    return (
      <span key={i} className="text-slate-300">
        {tok}
      </span>
    );
  });
};

const sideCardTone: Record<'sky' | 'teal', string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
};

const sideTextTone: Record<'sky' | 'teal', string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  teal: 'text-teal-700 dark:text-teal-200',
};

const SideCard = ({ card }: { card: HookSideCard }) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5',
      sideCardTone[card.tone],
    )}
  >
    <code
      className={cn('font-mono text-sm sm:text-md font-bold break-all', sideTextTone[card.tone])}
    >
      {card.hookName}
    </code>
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      <pre className="overflow-x-auto px-md py-2 text-[11px] sm:text-xsm leading-[1.65] font-mono">
        <code>{renderCode(card.code)}</code>
      </pre>
    </div>
    <p className="text-[10px] sm:text-[11px] font-mono text-[var(--term-muted)] break-keep">
      → <code className="font-bold">{card.caption}</code>
    </p>
  </article>
);

export const UseReducerSharedHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/use-reducer-shared.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]"> {'// useState ↔ shared ↔ useReducer'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    {/* Left: text */}
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLine1}</span>
        <span className="block text-[var(--term-accent)]">{content.titleAccent}</span>
      </HeroTitle>
      <HeroDescription maxWidth="max-w-[55ch]" className="whitespace-pre-line">
        {content.description}
      </HeroDescription>
    </HeroTextColumn>

    {/* Right: useState ↔ shared ↔ useReducer diagram */}
    <HeroVisualColumn>
      <div
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-teal-50/30',
          'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 lg:gap-3 items-stretch">
          <SideCard card={content.useStateCard} />

          {/* Arrow */}
          <div
            aria-hidden="true"
            className="hidden lg:flex items-center justify-center text-[var(--term-muted)]"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </div>
          <div
            aria-hidden="true"
            className="lg:hidden flex items-center justify-center text-[var(--term-muted)] py-1"
          >
            <ArrowDownIcon className="h-5 w-5" />
          </div>
        </div>

        {/* Shared queue card (center, full row) */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-violet-300/80 bg-violet-50/70 shadow-[0_3px_0_var(--term-border)]',
            'dark:border-violet-700/70 dark:bg-violet-950/40',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
            >
              <MergeIcon className="h-4 w-4" />
            </span>
            <h2 className="text-xsm sm:text-sm font-bold text-violet-800 dark:text-violet-100">
              {content.sharedCard.title}
            </h2>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {content.sharedCard.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-violet-200/70 bg-white/70 px-2.5 py-1.5 text-[11px] sm:text-xsm text-violet-900 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-100"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400 shrink-0"
                />
                <code className="font-mono break-all">{item}</code>
              </li>
            ))}
          </ul>
        </article>

        {/* Right side useReducer */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 lg:gap-3 items-stretch">
          <div
            aria-hidden="true"
            className="hidden lg:flex items-center justify-center text-[var(--term-muted)] lg:col-start-2"
          >
            <ArrowRightIcon className="h-5 w-5 rotate-180" />
          </div>
          <div
            aria-hidden="true"
            className="lg:hidden flex items-center justify-center text-[var(--term-muted)] py-1"
          >
            <ArrowDownIcon className="h-5 w-5" />
          </div>
          <div className="lg:col-start-3">
            <SideCard card={content.useReducerCard} />
          </div>
        </div>

        {/* Bottom dashed bracket */}
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex-1 border-t-2 border-dashed border-[var(--term-border)]"
          />
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            <SproutIcon aria-hidden="true" className="h-3.5 w-3.5" />
            {content.bottomLabel}
          </span>
          <span
            aria-hidden="true"
            className="flex-1 border-t-2 border-dashed border-[var(--term-border)]"
          />
        </div>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
