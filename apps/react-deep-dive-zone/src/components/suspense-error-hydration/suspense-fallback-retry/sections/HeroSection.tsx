import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { HeroFlowStep, SuspenseFallbackRetryContent } from '../content';
import { BoxIcon, CheckCircleIcon, LoaderIcon, PauseCircleIcon, RefreshCcwIcon } from '../icons';
import { phaseAccent } from '../tone';

import { CodeBlock } from './_CodeBlock';

type Props = { content: SuspenseFallbackRetryContent['hero'] };

const stepIcon: Record<HeroFlowStep['icon'], React.ComponentType<{ className?: string }>> = {
  suspend: PauseCircleIcon,
  fallback: LoaderIcon,
  resolve: CheckCircleIcon,
  retry: RefreshCcwIcon,
  content: BoxIcon,
};

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/ReactFiberThrow.js"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // suspend → capture → fallback → retry → content'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[42ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch">
        {/* user code */}
        <article
          className={cn(
            'flex flex-col rounded-2xl border-2 overflow-hidden',
            'border-blue-200/70 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2 border-b border-slate-200 px-md py-3 dark:border-slate-700">
            <span className="text-xsm font-bold text-[var(--term-fg)]">{content.code.label}</span>
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/50 dark:text-violet-200">
              {content.code.pill}
            </span>
          </header>
          <CodeBlock
            code={content.code.content}
            fileLabel={content.code.fileLabel}
            language="jsx"
          />
        </article>

        {/* flow overview */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200/70 bg-gradient-to-br from-blue-50/50 to-emerald-50/30',
            'dark:border-blue-800/60 dark:from-blue-950/30 dark:to-emerald-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.flow.title}
          </h2>

          <ol className="flex flex-col gap-1.5">
            {content.flow.steps.map((step, i) => {
              const accent = phaseAccent[step.phase];
              const Icon = stepIcon[step.icon];
              const isLast = i === content.flow.steps.length - 1;
              return (
                <li key={step.label} className="flex flex-col gap-1">
                  <div
                    className={cn(
                      'flex items-center gap-2.5 rounded-xl border-2 p-2.5',
                      accent.border,
                      accent.bg,
                      'transition-transform motion-safe:hover:-translate-x-0.5',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                        'font-mono text-[11px] font-bold tabular-nums text-white',
                        accent.solidBg,
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                        accent.iconChip,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex flex-col gap-0 min-w-0">
                      <span className={cn('text-xsm font-mono font-bold', accent.text)}>
                        {step.label}
                      </span>
                      <span className="text-[11px] text-[var(--term-muted)] break-keep">
                        {step.caption}
                      </span>
                    </span>
                  </div>
                  {!isLast && (
                    <span aria-hidden="true" className="ml-3.5 flex items-center">
                      <span
                        className={cn(
                          'block h-2 w-px border-l border-dashed',
                          accent.connector.replace('bg-', 'border-'),
                        )}
                      />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </article>
      </div>
    </HeroVisualColumn>
  </HeroShell>
);
