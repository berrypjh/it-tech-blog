import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { PriorityLevel, SchedulerContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, MapIcon, schedulerIcon } from '../icons';
import { ACCENT_A, ACCENT_B, ACCENT_C } from '../tone-house';

type Props = { content: SchedulerContent['priority']; sectionId: string };

/** 반복 항목 3색 순환: A=accent / B=sky / C=violet */
const CYCLE = [ACCENT_A, ACCENT_B, ACCENT_C] as const;

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
          {content.levels.map((level, i) => (
            <li key={level.id}>
              <PriorityBar level={level} accent={CYCLE[i % CYCLE.length]} />
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border p-md sm:p-lg',
              'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
              'border-[var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-sm">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-sky-600 dark:text-sky-300"
              >
                <LightbulbIcon className="h-5 w-5" />
              </span>
              <h3 className="text-md font-bold tracking-tight text-sky-600 dark:text-sky-300 break-keep">
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
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span aria-hidden="true" className="text-[var(--term-accent)]">
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

const PriorityBar = ({ level, accent }: { level: PriorityLevel; accent: string }) => {
  const Icon = schedulerIcon[level.iconName];

  return (
    <article
      className={cn(
        'group flex items-stretch gap-md rounded-xl border p-md sm:p-lg',
        'bg-[var(--term-surface)] text-[var(--term-fg)] border-[var(--term-border)]',
        'hover:border-[var(--term-accent)]',
        'shadow-[0_3px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'flex items-center justify-center text-3xl sm:text-4xl font-bold font-mono tabular-nums shrink-0 w-12 leading-none',
          accent,
        )}
      >
        {level.number}
      </span>

      <span
        aria-hidden="true"
        className={cn(
          'hidden sm:inline-flex items-center justify-center shrink-0 w-12 h-12 rounded-md border border-[var(--term-border)] bg-[var(--term-bg)]',
          accent,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <h3 className="text-md sm:text-lg font-bold tracking-tight break-keep">{level.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {level.description}
        </p>
      </div>

      <span
        className={cn(
          'inline-flex items-center self-start shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight font-mono',
          'border-[var(--term-border)] bg-[var(--term-bg)]',
          accent,
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
