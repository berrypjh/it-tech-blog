import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent, LaneFlowIconName, LaneFlowStep } from '../content';
import {
  ArrowRightIcon,
  CrosshairIcon,
  DatabaseIcon,
  LightbulbIcon,
  PenToolIcon,
  ServerIcon,
} from '../icons';

type Props = { content: DispatchSetStateEntryContent['laneReason'] };

const iconMap: Record<LaneFlowIconName, typeof CrosshairIcon> = {
  crosshair: CrosshairIcon,
  database: DatabaseIcon,
  server: ServerIcon,
  penTool: PenToolIcon,
};

export const LaneFirstReasonSection = ({ content }: Props) => (
  <section
    id="lane-reason"
    aria-labelledby="heading-lane-reason"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="lane-reason"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CrosshairIcon className="h-5 w-5" />}
    />

    {/* Intro */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-200/80 bg-amber-50/70',
        'dark:border-amber-800/60 dark:bg-amber-950/30',
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
      <p className="text-xsm sm:text-sm font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
        {content.intro}
      </p>
    </div>

    {/* Horizontal flow */}
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
      {content.steps.map((step, idx) => (
        <li key={step.number} className="contents">
          <FlowCard step={step} />
          {idx < content.steps.length - 1 && <FlowArrow />}
        </li>
      ))}
    </ol>
  </section>
);

const FlowCard = ({ step }: { step: LaneFlowStep }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md text-center',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-1.5',
            'text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
        {step.title}
      </h3>
      <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">{step.body}</p>
    </article>
  );
};

const FlowArrow = () => (
  <div
    aria-hidden="true"
    className="hidden lg:flex items-center justify-center text-[var(--term-dim)]"
  >
    <span
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-full border',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
      )}
    >
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  </div>
);
