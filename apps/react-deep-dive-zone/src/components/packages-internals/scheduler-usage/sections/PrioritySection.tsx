import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { PriorityLevel, SchedulerContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, MapIcon, schedulerIcon } from '../icons';

type Props = { content: SchedulerContent['priority']; sectionId: string };

export const PrioritySection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-priority" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="priority"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_0.85fr)] gap-md items-start">
        <ol className="flex flex-col gap-sm">
          {content.levels.map((level) => (
            <li key={level.id}>
              <PriorityBar level={level} />
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border p-md sm:p-lg',
              'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
              'border-sky-200/70 dark:border-sky-800/60',
            )}
          >
            <header className="flex items-center gap-sm">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-sky-300/80 bg-sky-100 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200"
              >
                <LightbulbIcon className="h-5 w-5" />
              </span>
              <h3 className="text-md font-bold tracking-tight text-sky-700 dark:text-sky-300 break-keep">
                {content.criteriaTitle}
              </h3>
            </header>

            <ul className="flex flex-col gap-2">
              {content.criteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
                >
                  <span
                    aria-hidden="true"
                    className="text-sky-600 dark:text-sky-300 shrink-0 mt-0.5"
                  >
                    <CheckCircleIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div
            className={cn(
              'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
              'border-teal-300/80 bg-teal-50 text-teal-900',
              'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span aria-hidden="true" className="text-teal-600 dark:text-teal-300">
              <StarIcon className="h-4 w-4" />
            </span>
            <p className="text-sm sm:text-md font-bold tracking-tight break-keep">
              {content.banner}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const variantClass: Record<PriorityLevel['variant'], { container: string; badge: string }> = {
  navy: {
    container: 'bg-slate-900 text-white border-slate-700 dark:border-slate-700',
    badge: 'bg-white/15 text-white border-white/30',
  },
  teal: {
    container: 'bg-teal-600 text-white border-teal-700 dark:bg-teal-700 dark:border-teal-700',
    badge: 'bg-white/15 text-white border-white/30',
  },
  mint: {
    container:
      'bg-cyan-100 text-cyan-900 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-100 dark:border-cyan-800/60',
    badge:
      'bg-cyan-200/70 text-cyan-900 border-cyan-300 dark:bg-cyan-900/60 dark:text-cyan-100 dark:border-cyan-700/60',
  },
  violet: {
    container:
      'bg-violet-600 text-white border-violet-700 dark:bg-violet-700 dark:border-violet-700',
    badge: 'bg-white/15 text-white border-white/30',
  },
};

const PriorityBar = ({ level }: { level: PriorityLevel }) => {
  const v = variantClass[level.variant];
  const Icon = schedulerIcon[level.iconName];

  return (
    <article
      className={cn(
        'group flex items-stretch gap-md rounded-xl border p-md sm:p-lg',
        v.container,
        'shadow-[0_3px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center text-3xl sm:text-4xl font-bold font-mono tabular-nums shrink-0 w-12 leading-none"
      >
        {level.number}
      </span>

      <span
        aria-hidden="true"
        className="hidden sm:inline-flex items-center justify-center shrink-0 w-12 h-12 rounded-md border border-white/25 bg-white/10"
      >
        <Icon className="h-5 w-5" />
      </span>

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <h3 className="text-md sm:text-lg font-bold tracking-tight break-keep">{level.title}</h3>
        <p className="text-xsm leading-relaxed opacity-90 break-keep">{level.description}</p>
      </div>

      <span
        className={cn(
          'inline-flex items-center self-start shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight font-mono',
          v.badge,
        )}
      >
        {level.badge}
      </span>
    </article>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2 L14.6 8.4 L21.5 9 L16.3 13.6 L17.9 20.4 L12 16.8 L6.1 20.4 L7.7 13.6 L2.5 9 L9.4 8.4 Z" />
  </svg>
);
