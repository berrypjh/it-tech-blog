import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { HooksEntryFlowContent } from '../content';
import { ArrowRightIcon, CodeIcon, SparklesIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['hero'] };

const toneRing: Record<'sky' | 'cyan' | 'emerald' | 'teal' | 'violet' | 'amber', string> = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-700 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
};

const renderCounterCode = (code: string) => {
  const parts = code.match(
    /^(const)(\s+\[)([a-zA-Z]+)(,\s)([a-zA-Z]+)(\]\s=\s)(useState)(\()(\d+)(\);)$/,
  );
  if (!parts) return <span>{code}</span>;
  const [, k1, b1, n1, b2, n2, b3, fn, b4, num, b5] = parts;
  return (
    <>
      <span className="text-sky-400">{k1}</span>
      <span className="text-slate-300">{b1}</span>
      <span className="text-amber-200">{n1}</span>
      <span className="text-slate-300">{b2}</span>
      <span className="text-amber-200">{n2}</span>
      <span className="text-slate-300">{b3}</span>
      <span className="text-violet-300">{fn}</span>
      <span className="text-slate-300">{b4}</span>
      <span className="text-emerald-300">{num}</span>
      <span className="text-slate-300">{b5}</span>
    </>
  );
};

export const HooksEntryHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/entry-flow.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]"> {'// public Hook → Dispatcher → impl'}</span>
    }
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      {/* Left: code card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'transition-colors hover:border-[var(--term-accent)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
            {content.leftCard.title}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/50"
          >
            <CodeIcon className="h-3.5 w-3.5" />
          </span>
        </header>
        <div className={cn('rounded-xl border bg-slate-950 px-md py-md', 'border-slate-800')}>
          <div className="flex items-start gap-3 font-mono text-[12px] sm:text-[13px] leading-[1.7]">
            <span
              aria-hidden="true"
              className="select-none w-4 shrink-0 text-right text-slate-600 tabular-nums"
            >
              1
            </span>
            <code className="break-all text-slate-100">
              {renderCounterCode(content.leftCard.code)}
            </code>
          </div>
        </div>
      </article>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-visual">
      {/* Entry flow card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'transition-colors hover:border-cyan-300/70 dark:hover:border-cyan-700/70',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200"
          >
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
            {content.rightCard.title}
          </h3>
        </header>

        <ol className="grid grid-cols-3 items-stretch gap-1.5 sm:gap-2">
          {content.rightCard.steps.map((step, i) => (
            <li
              key={step.label}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1 rounded-xl border-2 px-2 py-3 sm:py-4 text-center',
                toneRing[step.tone],
              )}
            >
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider opacity-70">
                step {i + 1}
              </span>
              <code className="font-mono text-[11px] sm:text-xsm font-bold leading-tight break-all">
                {step.label}
              </code>
              {i < content.rightCard.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-[12px] top-1/2 z-10 hidden -translate-y-1/2 sm:inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3 w-3" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);
