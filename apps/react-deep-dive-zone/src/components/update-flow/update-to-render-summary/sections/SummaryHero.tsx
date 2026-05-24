import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { toneTokens } from '../../../start/_shared/tones';
import type { FlowStep, FlowStepIconName, UpdateToRenderSummaryContent } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  CircleHelpIcon,
  ClockIcon,
  CodeIcon,
  DatabaseIcon,
  FlagIcon,
  GitBranchIcon,
  HourglassIcon,
  LightbulbIcon,
  MousePointerClickIcon,
  PanelsTopLeftIcon,
  SearchIcon,
  ServerIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: UpdateToRenderSummaryContent['hero'] };

export const flowIconMap: Record<FlowStepIconName, typeof MousePointerClickIcon> = {
  mousePointer: MousePointerClickIcon,
  code: CodeIcon,
  workflow: WorkflowIcon,
  search: SearchIcon,
  panels: PanelsTopLeftIcon,
  server: ServerIcon,
  circleHelp: CircleHelpIcon,
  database: DatabaseIcon,
  gitBranch: GitBranchIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  checkCircle: CheckCircleIcon,
  clock: ClockIcon,
  hourglass: HourglassIcon,
};

export const SummaryHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="update-request → render-phase.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// summary'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        <ul className="flex flex-wrap items-center gap-2">
          {content.pills.map((pill) => (
            <li
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                pill.tone === 'sky' &&
                  'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                pill.tone === 'slate' &&
                  'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40',
              )}
            >
              {pill.tone === 'sky' && (
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky-500" />
              )}
              {pill.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-violet-300 dark:to-fuchsia-300',
            )}
          >
            {content.title.line3}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

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
              'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.callout}
          </p>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <SummaryFlowDiagram
          title={content.diagram.title}
          steps={content.diagram.steps}
          variant="hero"
        />
      </div>
    </div>
  </section>
);

type DiagramProps = {
  title: string;
  steps: FlowStep[];
  variant?: 'hero' | 'body';
};

export const SummaryFlowDiagram = ({ title, steps, variant = 'hero' }: DiagramProps) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <h2 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">{title}</h2>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        14 steps
      </span>
    </header>

    <ol className="flex flex-col">
      {steps.map((step, idx) => (
        <li key={step.number} className="flex flex-col">
          <StepCard step={step} variant={variant} />
          {idx < steps.length - 1 && (
            <span aria-hidden="true" className="my-0.5 flex justify-center text-[var(--term-dim)]">
              <ArrowDownIcon className="h-3 w-3" />
            </span>
          )}
        </li>
      ))}
    </ol>
  </div>
);

const StepCard = ({ step, variant }: { step: FlowStep; variant: 'hero' | 'body' }) => {
  const Icon = flowIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] gap-sm items-center rounded-xl border bg-[var(--term-bg)] px-sm py-2',
        step.final
          ? 'border-2 border-violet-300/80 dark:border-violet-700/70 bg-violet-50/40 dark:bg-violet-950/25'
          : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          step.final
            ? 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60'
            : t.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'flex items-center gap-1.5 text-xsm sm:text-sm font-bold break-keep',
            step.final ? 'text-violet-800 dark:text-violet-100' : t.text,
          )}
        >
          <span className="text-[10px] font-mono tabular-nums text-[var(--term-muted)]">
            {step.number}.
          </span>
          <span className={variant === 'hero' ? 'truncate' : 'break-keep'}>{step.title}</span>
        </span>
        <span className="text-[10px] text-[var(--term-muted)] leading-snug break-keep">
          {step.description}
        </span>
      </div>
      {step.final && (
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-1.5 py-0.5',
            'border-violet-300/70 bg-violet-100/70 text-[9px] font-mono uppercase tracking-wider text-violet-700',
            'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          next
        </span>
      )}
    </article>
  );
};
