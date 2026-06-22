import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberCentralContent, FlowStep } from '../content';
import {
  ActivityIcon,
  ArrowDownIcon,
  BoxesIcon,
  FlagIcon,
  PencilIcon,
  RepeatIcon,
  ShieldCheckIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberCentralContent['flow'] };

const iconMap = {
  cube: BoxesIcon,
  pulse: ActivityIcon,
  zap: ZapIcon,
  pencil: PencilIcon,
  flag: FlagIcon,
  shield: ShieldCheckIcon,
} as const;

const tone = {
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    number: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
  },
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    number: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    number: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-slate-950',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
  },
  amber: {
    border:
      'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
    number: 'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950',
    iconWrap: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
    title: 'text-amber-900 dark:text-amber-100',
  },
  rose: {
    border:
      'border-rose-200/80 dark:border-rose-800/60 hover:border-rose-400/70 dark:hover:border-rose-500/60',
    number: 'bg-rose-600 text-white dark:bg-rose-500 dark:text-slate-950',
    iconWrap: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
    title: 'text-rose-900 dark:text-rose-100',
  },
  teal: {
    border:
      'border-teal-200/80 dark:border-teal-800/60 hover:border-teal-400/70 dark:hover:border-teal-500/60',
    number: 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950',
    iconWrap: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
    title: 'text-teal-900 dark:text-teal-100',
  },
  blue: {
    border:
      'border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400/70 dark:hover:border-blue-500/60',
    number: 'bg-blue-600 text-white dark:bg-blue-500 dark:text-slate-950',
    iconWrap: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200',
    title: 'text-blue-900 dark:text-blue-100',
  },
} as const;

export const FiberRenderingFlowConnection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RepeatIcon className="h-5 w-5" />}
    />

    <ol className="flex flex-col gap-0">
      {content.steps.map((step, idx) => (
        <li key={step.id} className="flex flex-col">
          <StepCard step={step} />
          {idx < content.steps.length - 1 && (
            <span aria-hidden="true" className="flex justify-center py-1">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const StepCard = ({ step }: { step: FlowStep }) => {
  const t = tone[step.tone];
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_auto_1fr] items-start gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-full font-bold text-sm',
          t.number,
        )}
      >
        {step.number}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0',
          t.iconWrap,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm font-bold leading-snug break-keep', t.title)}>{step.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
      </div>
    </article>
  );
};
