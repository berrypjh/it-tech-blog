import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { HeroPhase, Tone, UseEffectInternalsContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ClipboardIcon, PlayCircleIcon } from '../icons';

type Props = { content: UseEffectInternalsContent['hero'] };

const visualMap = {
  clipboard: ClipboardIcon,
  play: PlayCircleIcon,
};

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/40',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/40',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/40',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/40',
  violet: 'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/40',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/40',
  rose: 'border-rose-300/80 bg-rose-50/70 dark:border-rose-700/70 dark:bg-rose-950/40',
  orange: 'border-orange-300/80 bg-orange-50/70 dark:border-orange-700/70 dark:bg-orange-950/40',
  indigo: 'border-indigo-300/80 bg-indigo-50/70 dark:border-indigo-700/70 dark:bg-indigo-950/40',
};

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
  orange: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
  indigo: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  rose: 'text-rose-700 dark:text-rose-200',
  orange: 'text-orange-700 dark:text-orange-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

const toneDot: Record<Tone, string> = {
  sky: 'bg-sky-500 dark:bg-sky-400',
  cyan: 'bg-cyan-500 dark:bg-cyan-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
  rose: 'bg-rose-500 dark:bg-rose-400',
  orange: 'bg-orange-500 dark:bg-orange-400',
  indigo: 'bg-indigo-500 dark:bg-indigo-400',
};

const KEYWORDS = new Set(['return']);

const renderCodeLine = (line: string, key: number) => {
  const tokens = line.split(/(\s+|[(){}[\];,.=>])/);
  return (
    <div key={key} className="whitespace-pre">
      {tokens.map((tok, i) => {
        if (!tok) return null;
        if (KEYWORDS.has(tok))
          return (
            <span key={i} className="text-sky-300">
              {tok}
            </span>
          );
        if (tok === 'useEffect')
          return (
            <span key={i} className="text-violet-300">
              {tok}
            </span>
          );
        if (tok === 'console' || tok === 'log')
          return (
            <span key={i} className="text-teal-300">
              {tok}
            </span>
          );
        if (tok === 'count')
          return (
            <span key={i} className="text-amber-200">
              {tok}
            </span>
          );
        if (/^['"`].*['"`]$/.test(tok))
          return (
            <span key={i} className="text-emerald-300">
              {tok}
            </span>
          );
        return (
          <span key={i} className="text-slate-200">
            {tok}
          </span>
        );
      })}
    </div>
  );
};

const PhaseCard = ({ phase }: { phase: HeroPhase }) => {
  const Icon = visualMap[phase.visual];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5',
        toneCard[phase.tone],
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
            toneNumber[phase.tone],
          )}
        >
          {phase.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white dark:bg-slate-950/40',
            'border-[var(--term-border)]',
            toneText[phase.tone],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>
      <div className="flex flex-col gap-0.5">
        <h3 className={cn('text-sm sm:text-md font-bold break-keep', toneText[phase.tone])}>
          {phase.title}
        </h3>
        <p className="text-[11px] sm:text-xsm font-mono text-[var(--term-muted)] break-keep">
          {phase.subtitle}
        </p>
      </div>
      <ul className="mt-auto flex flex-col gap-1">
        {phase.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0',
                toneDot[phase.tone],
              )}
            />
            <span className="break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const UseEffectHero = ({ content }: Props) => {
  const lines = content.leftCode.split('\n');
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react/hooks/use-effect-internal.md"
      promptSuffix={
        <span className="text-[var(--term-dim)]"> {'// render → register, commit → run'}</span>
      }
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
            <span className="ml-2 text-[10px] font-mono text-slate-500">useEffect</span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
            <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
          </pre>
        </div>
      </HeroTextColumn>

      {/* Right: 2-phase flow */}
      <HeroVisualColumn>
        <ol className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-3 relative">
          {content.phases.map((phase, i) => {
            const isLast = i === content.phases.length - 1;
            return (
              <li key={phase.number} className="relative">
                <PhaseCard phase={phase} />
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="hidden sm:inline-flex absolute -right-[7px] top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="sm:hidden flex justify-center text-[var(--term-muted)] mt-1"
                    >
                      <ArrowDownIcon className="h-4 w-4" />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </HeroVisualColumn>
    </HeroSection>
  );
};
