import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { BeforeMutationContent, ClassSnapshotStep } from '../content';
import {
  ArchiveIcon,
  ArrowDownIcon,
  BoxIcon,
  FunctionIcon,
  GitBranchIcon,
  LightbulbIcon,
} from '../icons';

type Props = { content: BeforeMutationContent['classSnapshot'] };

const iconMap: Record<ClassSnapshotStep['iconName'], typeof BoxIcon> = {
  box: BoxIcon,
  function: FunctionIcon,
  archive: ArchiveIcon,
};

export const ClassSnapshotSection = ({ content }: Props) => (
  <section
    id="class-snapshot"
    aria-labelledby="heading-class-snapshot"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="class-snapshot"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} index={idx + 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border p-md',
          'border-violet-200/80 bg-violet-50/60',
          'dark:border-violet-800/70 dark:bg-violet-950/25',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
            'bg-violet-100 text-violet-700 border-violet-200/80',
            'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-violet-900 dark:text-violet-100 break-keep">
          {content.description}
        </p>
      </aside>
    </article>
  </section>
);

const StepCard = ({ step, index }: { step: ClassSnapshotStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          t.chipSolid,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-all font-mono',
          t.textStrong,
        )}
      >
        {step.title}
      </h3>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
