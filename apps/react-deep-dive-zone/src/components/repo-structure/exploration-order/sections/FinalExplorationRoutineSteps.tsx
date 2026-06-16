import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ExplorationContent, RoutineStep } from '../content';
import { iconByName, MapIcon } from '../icons';

type Props = { content: ExplorationContent['routine']; sectionId?: string };

export const FinalExplorationRoutineSteps = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-routine" className="space-y-md scroll-mt-24">
      <SectionHeader
        id="routine"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <ol
        className={cn(
          'flex flex-col rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'divide-y divide-dashed divide-[var(--term-border)]',
        )}
      >
        {content.steps.map((step, idx) => (
          <li key={step.number}>
            <RoutineRow step={step} index={idx} />
          </li>
        ))}
      </ol>
    </section>
  );
};

type RowProps = { step: RoutineStep; index: number };

/** 텍스트만 3색 소프트 순환: A=accent / B=sky / C=violet */
const stepTextTones = [
  'text-[var(--term-accent)]',
  'text-sky-600 dark:text-sky-300',
  'text-violet-600 dark:text-violet-300',
];

const RoutineRow = ({ step, index }: RowProps) => {
  const Icon = iconByName[step.icon];
  const textTone = stepTextTones[index % 3];
  return (
    <article
      className={cn(
        'group grid grid-cols-[auto_auto_minmax(0,1fr)] sm:grid-cols-[auto_auto_minmax(0,_0.4fr)_minmax(0,_0.6fr)]',
        'items-center gap-sm sm:gap-md px-md sm:px-lg py-md',
        'transition-colors hover:bg-[var(--term-surface)]',
      )}
    >
      {/* 번호 원형 */}
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-full border',
          'bg-[var(--term-surface)] border-[var(--term-border)] font-bold text-sm tabular-nums',
          'shadow-[0_2px_0_var(--term-border)]',
          textTone,
        )}
      >
        {step.number}
      </span>

      {/* 아이콘 박스 */}
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border',
          'bg-[var(--term-surface)] border-[var(--term-border)]',
          textTone,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      {/* 제목 */}
      <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {step.title}
      </h3>

      {/* 설명 */}
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep col-span-3 sm:col-span-1">
        {step.description}
      </p>
    </article>
  );
};
