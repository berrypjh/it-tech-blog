'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { QuizOptionButton } from '../components/QuizOptionButton';
import type { AssistiveTechContent } from '../content';

const CrossSmall = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M6 18l12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CheckSmall = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type AccessibleNameAnswer = string | null;

const AccessibleNameQuizCard = ({
  content,
}: {
  content: AssistiveTechContent['quiz']['accessibleName'];
}) => {
  const [selected, setSelected] = useState<AccessibleNameAnswer>(null);
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
      <div className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-xxsm font-extraBold text-text-contrastText"
        >
          1
        </span>
        <h3 className="text-sm font-bold leading-snug text-text-default">{content.title}</h3>
      </div>
      <div role="radiogroup" aria-label={content.title} className="flex flex-col gap-1.5">
        {content.options.map((opt) => (
          <QuizOptionButton
            key={opt.id}
            id={opt.id}
            isSelected={selected === opt.id}
            isCorrect={opt.id === content.correctId}
            showResult={selected !== null}
            onSelect={setSelected}
          >
            <code className="block break-all font-mono text-[0.6875rem] leading-relaxed text-text-default">
              {opt.code}
            </code>
          </QuizOptionButton>
        ))}
      </div>
      {selected !== null && (
        <p
          aria-live="polite"
          className={cn(
            'mt-auto rounded-md border px-sm py-2 text-xsm leading-relaxed',
            selected === content.correctId
              ? 'border-stroke-success/40 bg-success-su100/40 text-text-default dark:bg-success-su900/30'
              : 'border-stroke-error/40 bg-error-er100/40 text-text-default dark:bg-error-er900/30',
          )}
        >
          {selected === content.correctId ? content.feedback : '다른 보기를 다시 확인해 보세요.'}
        </p>
      )}
    </article>
  );
};

const HeadingStructureQuizCard = ({
  content,
}: {
  content: AssistiveTechContent['quiz']['heading'];
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
      <div className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-xxsm font-extraBold text-text-contrastText"
        >
          2
        </span>
        <h3 className="text-sm font-bold leading-snug text-text-default">{content.title}</h3>
      </div>
      <div role="radiogroup" aria-label={content.title} className="flex flex-col gap-1.5">
        {content.options.map((opt) => (
          <QuizOptionButton
            key={opt.id}
            id={opt.id}
            isSelected={selected === opt.id}
            isCorrect={opt.id === content.correctId}
            showResult={selected !== null}
            onSelect={setSelected}
          >
            <span className="font-mono text-xsm text-text-default">{opt.text}</span>
          </QuizOptionButton>
        ))}
      </div>
      {selected !== null && (
        <p
          aria-live="polite"
          className={cn(
            'mt-auto rounded-md border px-sm py-2 text-xsm leading-relaxed',
            selected === content.correctId
              ? 'border-stroke-success/40 bg-success-su100/40 text-text-default dark:bg-success-su900/30'
              : 'border-stroke-error/40 bg-error-er100/40 text-text-default dark:bg-error-er900/30',
          )}
        >
          {selected === content.correctId
            ? content.feedback
            : '논리적인 순서(H1 → H2 → H3)를 다시 떠올려 보세요.'}
        </p>
      )}
    </article>
  );
};

type InputAnswer = 'before' | 'after' | null;

const AccessibleInputQuizCard = ({
  content,
}: {
  content: AssistiveTechContent['quiz']['accessibleInput'];
}) => {
  const [selected, setSelected] = useState<InputAnswer>(null);
  const afterId = 'quiz-accessible-input';
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm">
      <div className="flex items-start gap-2">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-rounded bg-background-primary text-xxsm font-extraBold text-text-contrastText"
        >
          3
        </span>
        <h3 className="text-sm font-bold leading-snug text-text-default">{content.title}</h3>
      </div>

      <div role="radiogroup" aria-label={content.title} className="flex flex-col gap-sm">
        <button
          type="button"
          role="radio"
          aria-checked={selected === 'before'}
          onClick={() => setSelected('before')}
          className={cn(
            'flex flex-col gap-1.5 rounded-md border px-md py-md text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2',
            selected === 'before' && 'border-stroke-error bg-error-er100/40 dark:bg-error-er900/30',
            selected !== 'before' &&
              'border-stroke-default bg-background-surface hover:border-stroke-primary',
          )}
        >
          <span className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-error">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-error-er100 text-text-error dark:bg-error-er900/40"
            >
              <CrossSmall />
            </span>
            잘못된 예
          </span>
          <span className="text-[0.6875rem] text-text-default">{content.beforeVisualLabel}</span>
          <span className="pointer-events-none flex h-8 items-center rounded-sm border border-stroke-default bg-background-surface px-2 text-[0.6875rem] text-text-light">
            {content.beforePlaceholder}
          </span>
          <span className="text-[0.625rem] leading-snug text-text-error">{content.beforeNote}</span>
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={selected === 'after'}
          onClick={() => setSelected('after')}
          className={cn(
            'flex flex-col gap-1.5 rounded-md border px-md py-md text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2',
            selected === 'after' &&
              'border-stroke-success bg-success-su100/40 dark:bg-success-su900/30',
            selected !== 'after' &&
              'border-stroke-default bg-background-surface hover:border-stroke-primary',
          )}
        >
          <span className="flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide text-text-success">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40"
            >
              <CheckSmall />
            </span>
            올바른 예
          </span>
          <span id={afterId} className="text-[0.6875rem] font-semiBold text-text-default">
            {content.afterLabel}
          </span>
          <span className="pointer-events-none flex h-8 items-center rounded-sm border border-stroke-default bg-background-surface px-2 text-[0.6875rem] text-text-light">
            {content.afterPlaceholder}
          </span>
          <span className="text-[0.625rem] leading-snug text-text-success">
            {content.afterNote}
          </span>
        </button>
      </div>

      {selected !== null && (
        <p
          aria-live="polite"
          className={cn(
            'mt-auto rounded-md border px-sm py-2 text-xsm leading-relaxed',
            selected === 'after'
              ? 'border-stroke-success/40 bg-success-su100/40 text-text-default dark:bg-success-su900/30'
              : 'border-stroke-error/40 bg-error-er100/40 text-text-default dark:bg-error-er900/30',
          )}
        >
          {selected === 'after'
            ? content.feedback
            : '시각 텍스트만으로는 스크린 리더가 이름을 알 수 없어요.'}
        </p>
      )}
    </article>
  );
};

export const PracticeQuizSection = ({ content }: { content: AssistiveTechContent['quiz'] }) => {
  // Progress is illustrative — show full at 3/3 for series consistency
  const total = 3;
  const completed = useMemo(() => total, []);

  return (
    <section
      aria-labelledby="quiz-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-lg flex flex-col items-start justify-between gap-sm sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
              06
            </span>
            실습 퀴즈
          </span>
          <h2 id="quiz-heading" className="text-xl font-bold text-text-default sm:text-xxl">
            {content.title}
          </h2>
          <p className="text-xsm leading-relaxed text-text-light sm:text-sm">
            {content.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xxsm font-semiBold uppercase tracking-wide text-text-light">
            {content.progressLabel}
          </span>
          <span className="text-xsm font-extraBold text-text-default">
            {completed}/{total}
          </span>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={completed}
            className="h-2 w-28 overflow-hidden rounded-full bg-stroke-default/40"
          >
            <div
              className="h-full rounded-full bg-background-success"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <p className="mb-sm text-[0.6875rem] text-text-light">{content.selectInstruction}</p>

      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        <AccessibleNameQuizCard content={content.accessibleName} />
        <HeadingStructureQuizCard content={content.heading} />
        <AccessibleInputQuizCard content={content.accessibleInput} />
      </div>
    </section>
  );
};
