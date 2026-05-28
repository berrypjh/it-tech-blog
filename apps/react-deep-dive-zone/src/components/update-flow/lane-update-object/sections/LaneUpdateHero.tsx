import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { toneTokens } from '../../../shared/tones';
import type {
  HeroFlowIconName,
  HeroFlowStep,
  HeroSummaryPill,
  LaneUpdateObjectContent,
} from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BracesIcon,
  CrosshairIcon,
  DatabaseIcon,
  HandIcon,
  Link2Icon,
  RouteIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: LaneUpdateObjectContent['hero'] };

const stepIconMap: Record<HeroFlowIconName, typeof HandIcon> = {
  hand: HandIcon,
  route: RouteIcon,
  crosshair: CrosshairIcon,
  braces: BracesIcon,
};

const summaryIconMap: Record<HeroSummaryPill['iconName'], typeof CrosshairIcon> = {
  crosshair: CrosshairIcon,
  database: DatabaseIcon,
  link: Link2Icon,
};

export const LaneUpdateHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="grep -n"
      path="dispatchSetStateInternal"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' '}
          packages/react-reconciler/src/ReactFiberHooks.js
        </span>
      }
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)] gap-xl lg:gap-2xl items-start">
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

        {/* Category pills */}
        <ul className="flex flex-wrap items-center gap-2">
          {content.categoryPills.map((pill) => {
            const t = toneTokens[pill.tone];
            return (
              <li
                key={pill.label}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
                  'text-[10px] font-mono uppercase tracking-wider',
                  t.chip,
                )}
              >
                <span aria-hidden="true" className={cn('block h-1.5 w-1.5 rounded-full', t.dot)} />
                {pill.label}
              </li>
            );
          })}
        </ul>

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

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <a
            href="#requestlane"
            className={cn(
              'group inline-flex items-center gap-2 rounded-md px-4 py-2',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            {content.ctaPrimary}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#checkpoint"
            className={cn(
              'inline-flex items-center gap-2 rounded-md border px-4 py-2',
              'border-sky-300/80 bg-white text-sky-700 text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-50',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
              'dark:border-sky-700/70 dark:bg-slate-950/50 dark:text-sky-200 dark:hover:bg-sky-950/40',
            )}
          >
            {content.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram content={content} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ content }: { content: LaneUpdateObjectContent['hero'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-amber-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-amber-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-sm">
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          {content.flow.caption}
        </span>
        <h2 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)]">
          {content.flow.heading}
        </h2>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
        setCount ▸ update
      </span>
    </header>

    <ol className="flex flex-col">
      {content.flow.steps.map((step, idx) => (
        <li key={step.id} className="flex flex-col">
          {step.kind === 'card' ? <FlowCard step={step} /> : <ObjectCard step={step} />}
          {idx < content.flow.steps.length - 1 && (
            <StepConnector label={step.connectorLabel ?? '↓'} />
          )}
        </li>
      ))}
    </ol>

    {/* Bottom summary */}
    <ul className="mt-md grid grid-cols-3 gap-2">
      {content.summary.map((pill) => {
        const Icon = summaryIconMap[pill.iconName];
        return (
          <li
            key={pill.label}
            className={cn(
              'flex items-center gap-2 rounded-xl border px-2.5 py-2',
              'border-sky-200/70 bg-white/70 text-xsm font-mono text-sky-800',
              'dark:border-sky-800/60 dark:bg-slate-950/40 dark:text-sky-200',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                'border-sky-200/80 bg-sky-50 text-sky-700',
                'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="truncate text-[11px] sm:text-xxsm">{pill.label}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

const FlowCard = ({ step }: { step: HeroFlowStep }) => {
  const Icon = stepIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
          t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className={cn('text-xsm sm:text-sm font-bold break-keep', t.text)}>{step.label}</span>
        {step.code && (
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-md border px-2 py-0.5',
              'border-slate-800 bg-slate-950 text-slate-100 font-mono text-[11px]',
            )}
          >
            {step.code}
          </code>
        )}
        {step.description && (
          <span className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
            {step.description}
          </span>
        )}
      </div>
    </div>
  );
};

const ObjectCard = ({ step }: { step: HeroFlowStep }) => {
  const Icon = stepIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-3xl border-2 p-sm',
        'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/60 text-slate-100',
        'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.65)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
              'border-amber-300/40 bg-amber-300/10 text-amber-200',
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span className="text-sm font-mono font-bold text-white">{step.label}</span>
          <span className="text-[10px] font-mono text-amber-200/80">{'= {'}</span>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          object
        </span>
      </header>

      <ul className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-[12px] leading-[1.75]">
        {step.fields?.map((field) => (
          <li key={field} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-amber-300">
              ·
            </span>
            <span className="text-amber-200 font-bold">{field}</span>
            <span className="text-slate-500">,</span>
          </li>
        ))}
      </ul>
      <span className="text-[10px] font-mono text-amber-200/80 self-end">{'}'}</span>
    </article>
  );
};

const StepConnector = ({ label }: { label: string }) => (
  <div
    aria-hidden="true"
    className="my-1.5 flex flex-col items-center gap-0.5 text-[var(--term-dim)]"
  >
    <span className="block h-3 w-px bg-[var(--term-border)]" />
    <span className="inline-flex items-center gap-1.5">
      <ArrowDownIcon className="h-3.5 w-3.5" />
      <span className="text-[10px] font-mono text-[var(--term-muted)]">{label}</span>
    </span>
    <span className="block h-3 w-px bg-[var(--term-border)]" />
  </div>
);
