import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { RoutineStep, WhyOpenSourceContent } from '../content';
import { BookIcon, ChevronRightIcon, routineIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['routine'] };

type RoutineTone = RoutineStep['tone'];

const houseBase = {
  iconBg: 'bg-[var(--term-surface)] border border-[var(--term-border)]',
  border: 'border-[var(--term-border)]',
};

// 소프트 액센트 3색: A amber / B sky / C violet
// num 배지·iconBg는 크롬 중립 고정, 텍스트만 액센트 색
const A = {
  ...houseBase,
  iconText: 'text-[var(--term-accent)]',
  num: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
};
const B = {
  ...houseBase,
  iconText: 'text-sky-600 dark:text-sky-300',
  num: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300',
};
const C = {
  ...houseBase,
  iconText: 'text-violet-600 dark:text-violet-300',
  num: 'bg-[var(--term-surface)] border border-[var(--term-border)] text-violet-600 dark:text-violet-300',
};

// 키 선언 순서대로 [A, B, C, A, B] 순환
const toneClasses: Record<RoutineTone, typeof A> = {
  blue: A,
  teal: B,
  emerald: C,
  mint: A,
  lavender: B,
};

export const GitHubLearningRoutine = ({ content }: Props) => {
  return (
    <section id="section-routine" aria-labelledby="heading-routine" className="space-y-lg">
      <SectionHeader
        id="routine"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BookIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
        {content.steps.map((step, idx) => {
          const t = toneClasses[step.tone];
          const Icon = routineIconByName[step.icon];
          const isLast = idx === content.steps.length - 1;
          return [
            <li key={step.num} className="flex">
              <article
                className={cn(
                  'group relative flex flex-col items-center text-center w-full gap-sm',
                  'rounded-lg border bg-[var(--term-bg)] p-md transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                )}
              >
                {/* 좌상 step num */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-2 left-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums',
                    t.num,
                  )}
                >
                  {step.num}
                </span>

                {/* 아이콘 */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-12 h-12 rounded-full mt-2',
                    t.iconBg,
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.25rem] w-[1.25rem]" />
                </span>

                <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
                  {step.title}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {step.description}
                </p>
              </article>
            </li>,
            !isLast && (
              <li
                key={`arrow-${step.num}`}
                aria-hidden="true"
                className="hidden lg:flex items-center justify-center text-[var(--term-accent)]"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </li>
            ),
          ];
        })}
      </ol>
    </section>
  );
};
