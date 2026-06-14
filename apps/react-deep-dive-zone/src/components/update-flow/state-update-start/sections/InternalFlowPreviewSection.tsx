import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type {
  InternalFlowStep,
  InternalFlowStepIconName,
  StateUpdateStartContent,
} from '../content';
import {
  ArrowDownIcon,
  CalendarClockIcon,
  CodeIcon,
  DatabaseIcon,
  FilePlusIcon,
  FlagIcon,
  LayersIcon,
  LoaderIcon,
  MousePointerIcon,
  PlayIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: StateUpdateStartContent['internalFlow'] };

const flowIconMap: Record<InternalFlowStepIconName, typeof MousePointerIcon> = {
  mouse: MousePointerIcon,
  play: PlayIcon,
  code: CodeIcon,
  flag: FlagIcon,
  filePlus: FilePlusIcon,
  database: DatabaseIcon,
  calendar: CalendarClockIcon,
  loader: LoaderIcon,
};

export const InternalFlowPreviewSection = ({ content }: Props) => (
  <section
    id="internal-flow"
    aria-labelledby="heading-internal-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="internal-flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-b from-white via-sky-50/30 to-white',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex items-center justify-between gap-sm">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// 8 steps · click → render'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          inside react-reconciler
        </span>
      </header>

      <ol className="flex flex-col mx-auto max-w-[28rem]">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="flex flex-col">
            <FlowStep step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Bottom note */}
      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-amber-200/80 bg-amber-50/70',
          'dark:border-amber-800/60 dark:bg-amber-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
          {content.bottomNote}
        </p>
      </div>
    </article>
  </section>
);

const FlowStep = ({ step }: { step: InternalFlowStep }) => {
  const Icon = flowIconMap[step.iconName];
  const tone = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-sm py-2',
        tone.border,
        tone.borderHover,
        'shadow-[0_1px_0_var(--term-border)] transition-colors',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className={cn('flex-1 text-xsm sm:text-sm font-bold break-keep', tone.text)}>
        {step.label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-1.5',
          'text-[10px] font-mono font-bold tabular-nums',
          tone.chip,
        )}
      >
        {step.number}
      </span>
    </div>
  );
};
