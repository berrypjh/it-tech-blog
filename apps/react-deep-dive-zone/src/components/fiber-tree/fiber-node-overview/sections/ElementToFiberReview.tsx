import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ToneKey } from '../../../start/_shared/tones';
import type { FiberNodeOverviewContent, ReviewStep } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxesIcon,
  HexagonIcon,
  LightbulbIcon,
  RefreshIcon,
  WandIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['review'] };

const iconMap = {
  cube: BoxesIcon,
  wand: WandIcon,
  hex: HexagonIcon,
} as const;

const cardTone: Record<ToneKey, string> = {
  sky: 'border-sky-200/80 bg-sky-50/40 dark:border-sky-800/60 dark:bg-sky-950/20',
  cyan: 'border-cyan-200/80 bg-cyan-50/40 dark:border-cyan-800/60 dark:bg-cyan-950/20',
  violet: 'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
  emerald:
    'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
  blue: 'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
  teal: 'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
  indigo: 'border-indigo-200/80 bg-indigo-50/40 dark:border-indigo-800/60 dark:bg-indigo-950/20',
  amber: 'border-amber-200/80 bg-amber-50/40 dark:border-amber-800/60 dark:bg-amber-950/20',
};

const iconWrap: Record<ToneKey, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
};

const titleColor: Record<ToneKey, string> = {
  sky: 'text-sky-800 dark:text-sky-100',
  cyan: 'text-cyan-800 dark:text-cyan-100',
  violet: 'text-violet-800 dark:text-violet-100',
  emerald: 'text-emerald-800 dark:text-emerald-100',
  blue: 'text-blue-800 dark:text-blue-100',
  teal: 'text-teal-800 dark:text-teal-100',
  indigo: 'text-indigo-800 dark:text-indigo-100',
  amber: 'text-amber-800 dark:text-amber-100',
};

export const ElementToFiberReview = ({ content }: Props) => (
  <section id="review" aria-labelledby="heading-review" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="review"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RefreshIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol
        className={cn(
          'grid items-stretch gap-sm',
          'grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]',
        )}
      >
        {content.steps.map((step, idx) => (
          <li key={step.id} className="contents">
            <StepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="self-center justify-self-center flex items-center justify-center"
              >
                <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
                <span className="lg:hidden inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-300/80 bg-sky-50/70',
          'dark:border-sky-800/60 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
        >
          <LightbulbIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          {content.banner}
        </p>
      </div>
    </article>
  </section>
);

const StepCard = ({ step }: { step: ReviewStep }) => {
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'flex flex-col items-start gap-2 rounded-2xl border p-md min-h-[140px]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        cardTone[step.tone],
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0',
          iconWrap[step.tone],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3
        className={cn(
          'font-mono text-xsm sm:text-sm font-bold tracking-tight break-all',
          titleColor[step.tone],
        )}
      >
        {step.title}
      </h3>
      <p className="text-[12px] sm:text-xsm leading-relaxed text-[var(--term-muted)] whitespace-pre-line break-keep">
        {step.body}
      </p>
    </article>
  );
};
