import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FlowStep, NotAllFilesContent } from '../content';
import { ArrowRightIcon, DiagramIcon, flowIconByName } from '../icons';

type Props = { content: NotAllFilesContent['followFlow'] };

type FlowTone = FlowStep['tone'];

type ToneStyle = { iconBg: string; iconText: string; num: string; border: string };

// 중립 크롬 고정: 아이콘 박스/번호 배지는 surface+border, 색은 텍스트로만
const houseBadge = 'bg-[var(--term-surface)] border border-[var(--term-border)]';
const houseChrome = {
  border: 'border-[var(--term-border)] hover:border-[var(--term-accent)]',
};

// 소프트 액센트 3색: A amber / B sky / C violet (텍스트 색으로만)
const A: ToneStyle = {
  ...houseChrome,
  iconBg: houseBadge,
  iconText: 'text-[var(--term-accent)]',
  num: cn(houseBadge, 'text-[var(--term-accent)]'),
};
const B: ToneStyle = {
  ...houseChrome,
  iconBg: houseBadge,
  iconText: 'text-sky-600 dark:text-sky-300',
  num: cn(houseBadge, 'text-sky-600 dark:text-sky-300'),
};
const C: ToneStyle = {
  ...houseChrome,
  iconBg: houseBadge,
  iconText: 'text-violet-600 dark:text-violet-300',
  num: cn(houseBadge, 'text-violet-600 dark:text-violet-300'),
};

// 키 선언 순서대로 [A, B, C, A, B, C] 순환
const toneClasses: Record<FlowTone, ToneStyle> = {
  sky: A,
  blue: B,
  indigo: C,
  violet: A,
  mint: B,
  teal: C,
};

export const FollowQuestionFlow = ({ content }: Props) => {
  return (
    <section id="section-follow-flow" aria-labelledby="heading-follow-flow" className="space-y-lg">
      <SectionHeader
        id="follow-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<DiagramIcon className="h-5 w-5" />}
      />

      {/* 메인 질문 카드 */}
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] text-center">
        <p className="text-[10px] uppercase tracking-wider text-[var(--term-accent)] font-bold mb-1">
          main question
        </p>
        <h3 className="text-lg sm:text-xl lg:text-xxl font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
          {content.mainQuestion}
        </h3>
      </div>

      {/* 6-step flow */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-1 items-stretch">
        {content.steps.map((step, idx) => {
          const t = toneClasses[step.tone];
          const Icon = flowIconByName[step.icon];
          const isLast = idx === content.steps.length - 1;
          return [
            <li key={step.num} className="flex min-w-0">
              <article
                className={cn(
                  'group relative flex flex-col items-center text-center w-full min-w-0 gap-sm',
                  'rounded-lg border bg-[var(--term-bg)] p-md transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-2 left-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums',
                    t.num,
                  )}
                >
                  {step.num}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full mt-2',
                    t.iconBg,
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                <h4 className="text-xsm sm:text-sm font-bold font-mono text-[var(--term-fg)] break-keep [overflow-wrap:anywhere] leading-snug">
                  {step.title}
                </h4>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep [overflow-wrap:anywhere] flex-1">
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
                <ArrowRightIcon className="h-4 w-4" />
              </li>
            ),
          ];
        })}
      </ol>
    </section>
  );
};
