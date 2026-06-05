import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlowStep, HeroStepIconName, StateUpdateStartContent } from '../content';
import {
  ArrowDownIcon,
  HandIcon,
  HourglassIcon,
  LightbulbIcon,
  MonitorCheckIcon,
  PanelsTopLeftIcon,
  ShieldCheckIcon,
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
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberHooks.js"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// dispatchSetState'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      {/* Callout */}
      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
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
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {content.callout.title}
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.callout.lines[0].split(content.callout.emphasis).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="font-bold text-[var(--term-accent)]">
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
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <div
        className={cn(
          'relative rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
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
              'border-[var(--term-border)] bg-[var(--term-bg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl self-start',
                'bg-[var(--term-surface)] text-[var(--term-accent)] border border-[var(--term-border)]',
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
              className="mt-auto block h-px w-full bg-gradient-to-r from-transparent via-[var(--term-border)] to-transparent"
            />
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              why · efficient · consistent
            </span>
          </aside>
        </div>
      </div>
    </HeroVisualColumn>
  </HeroSection>
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
