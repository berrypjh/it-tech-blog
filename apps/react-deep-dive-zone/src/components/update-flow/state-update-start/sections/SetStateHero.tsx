import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { HeroFlowStep, HeroStepIconName, StateUpdateStartContent } from '../content';
import {
  ArrowDownIcon,
  HandIcon,
  HourglassIcon,
  LightbulbIcon,
  MonitorCheckIcon,
  PanelsTopLeftIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TimerIcon,
} from '../icons';

type Props = { content: StateUpdateStartContent['hero'] };

const stepIconMap: Record<HeroStepIconName, typeof HandIcon> = {
  hand: HandIcon,
  shield: ShieldCheckIcon,
  timer: TimerIcon,
  panels: PanelsTopLeftIcon,
  monitor: MonitorCheckIcon,
};

export const SetStateHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiberHooks.js"
      suffix={<span className="text-[var(--term-dim)]"> {'// dispatchSetState'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-cyan-300 dark:to-teal-300',
            )}
          >
            {content.title.line2}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[60ch] break-keep">
          {content.description}
        </p>

        {/* Callout */}
        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-200/80 bg-sky-50/70',
            'dark:border-sky-800/70 dark:bg-sky-950/40',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-600 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
              {content.callout.title}
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.callout.lines[0].split(content.callout.emphasis).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="font-bold text-sky-700 dark:text-sky-300">
                      {content.callout.emphasis}
                    </span>
                  )}
                </span>
              ))}
              <br />
              <span className="text-[var(--term-muted)]">{content.callout.lines[1]}</span>
            </p>
          </div>
        </aside>
      </div>

      {/* Right flow + side reason */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-gradient-to-br from-sky-50/50 via-white to-cyan-50/40',
            'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="mb-sm flex items-center justify-between gap-sm">
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
                {content.flow.caption}
              </span>
              <h2 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)]">
                {content.flow.heading}
              </h2>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
              setState ▸ commit
            </span>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] gap-md items-stretch">
            {/* Flow column */}
            <ol className="relative flex flex-col gap-2">
              {content.flow.steps.map((step, idx) => (
                <li key={step.id} className="flex flex-col">
                  <FlowStepCard step={step} />
                  {idx < content.flow.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="my-0.5 flex justify-center text-[var(--term-dim)]"
                    >
                      <ArrowDownIcon className="h-3.5 w-3.5" />
                    </span>
                  )}
                </li>
              ))}
            </ol>

            {/* Side reason card */}
            <aside
              className={cn(
                'flex flex-col gap-2 rounded-2xl border-2 p-md',
                'border-sky-200/80 bg-white/70',
                'dark:border-sky-800/70 dark:bg-slate-950/40',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl self-start',
                  'bg-sky-100 text-sky-700 border border-sky-200/70',
                  'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
                )}
              >
                <HourglassIcon className="h-4 w-4" />
              </span>
              <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.reason.title}
              </h3>
              <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                {content.reason.body}
              </p>
              <span
                aria-hidden="true"
                className="mt-auto block h-px w-full bg-gradient-to-r from-transparent via-sky-300/60 to-transparent dark:via-sky-700/60"
              />
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
                why · efficient · consistent
              </span>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FlowStepCard = ({ step }: { step: HeroFlowStep }) => {
  const Icon = stepIconMap[step.iconName];
  const tone = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-sm py-2',
        tone.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col min-w-0">
        <span
          className={cn('text-xsm font-bold leading-tight tracking-tight break-keep', tone.text)}
        >
          {step.title}
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </span>
      </div>
    </div>
  );
};
