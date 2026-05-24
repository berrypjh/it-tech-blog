import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ExplorationContent } from '../content';
import { CheckCircleIcon, SparklesIcon, TrophyIcon } from '../icons';

type Props = { content: ExplorationContent['checklist'] };

export const FinalReadinessChecklist = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-checklist" className="space-y-md">
      <SectionHeader
        id="checklist"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CheckCircleIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        <ChecklistCard items={content.groupOne} />
        <ChecklistCard items={content.groupTwo} />
        <CelebrationCard celebration={content.celebration} />
      </div>
    </section>
  );
};

type ListProps = { items: string[] };

const ChecklistCard = ({ items }: ListProps) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
    )}
  >
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0',
              'bg-emerald-100 text-emerald-700 border border-emerald-300',
              'dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-700/60',
            )}
          >
            <CheckCircleIcon className="h-3 w-3" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

type CelebrationProps = { celebration: ExplorationContent['checklist']['celebration'] };

const CelebrationCard = ({ celebration }: CelebrationProps) => (
  <article
    className={cn(
      'relative flex flex-col items-start gap-sm rounded-xl border overflow-hidden',
      'border-amber-300 bg-amber-50/80 text-amber-900',
      'dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-100',
      'shadow-[0_3px_0_var(--term-border)] p-md sm:p-lg',
    )}
  >
    {/* confetti sparkle 배경 */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-2 top-2 text-amber-400/70"
    >
      <SparklesIcon className="h-5 w-5" />
    </span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-3 left-3 text-amber-400/50"
    >
      <SparklesIcon className="h-3 w-3" />
    </span>

    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-14 h-14 rounded-xl',
        'bg-amber-400 text-amber-950 dark:bg-amber-300 dark:text-amber-950',
        'shadow-[0_3px_0_rgba(180,83,9,0.4)]',
      )}
    >
      <TrophyIcon className="h-7 w-7" />
    </span>

    <h3 className="text-lg sm:text-xl font-bold tracking-tight">{celebration.title}</h3>
    <p className="text-xsm sm:text-sm leading-relaxed font-medium break-keep mt-auto">
      {celebration.description}
    </p>
  </article>
);
