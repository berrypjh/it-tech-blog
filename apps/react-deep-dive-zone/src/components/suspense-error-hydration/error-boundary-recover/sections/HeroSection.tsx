import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { ErrorBoundaryRecoverContent, HeroFlowStep } from '../content';
import {
  ArrowRightIcon,
  RefreshCcwIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  UserIcon,
} from '../icons';
import { phaseAccent } from '../tone';

import { CodeBlock } from './_CodeBlock';

type Props = { content: ErrorBoundaryRecoverContent['hero'] };

const stepIcon: Record<HeroFlowStep['icon'], React.ComponentType<{ className?: string }>> = {
  profile: UserIcon,
  shield: ShieldCheckIcon,
  update: RefreshCcwIcon,
  alert: ShieldAlertIcon,
};

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/ReactFiberThrow.js"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // throw → ShouldCapture → captured update → fallback'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,4fr)] items-stretch">
      {/* LEFT: title */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.6rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[2]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[42ch]">
          {content.description}
        </p>
      </div>

      {/* CENTER: user code */}
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
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="jsx" />
      </article>

      {/* RIGHT: flow overview */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/40 via-teal-50/30 to-rose-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-teal-950/20 dark:to-rose-950/20',
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
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
                      accent.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
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
                  <span aria-hidden="true" className="ml-3.5 inline-flex items-center">
                    <ArrowRightIcon className="h-3.5 w-3.5 rotate-90 text-blue-400 dark:text-blue-500" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
