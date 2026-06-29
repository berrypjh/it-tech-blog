import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DeletionContent } from '../content';
import { CheckCircleIcon, SparklesIcon } from '../icons';

type Props = {
  quiz: DeletionContent['quiz'];
};

export const DeletionQuizSection = ({ quiz }: Props) => (
  <section id="quiz" aria-labelledby="heading-mini-quiz" className="space-y-md scroll-mt-xl">
    <SectionHeader
      id="mini-quiz"
      eyebrow={quiz.eyebrow}
      title={quiz.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <QuizCard tone="sky" eyebrow="question" badge="Q">
        {quiz.question}
      </QuizCard>
      <QuizCard
        tone="emerald"
        eyebrow="answer"
        badge="A"
        icon={<CheckCircleIcon className="h-5 w-5" />}
      >
        {quiz.answer}
      </QuizCard>
    </div>
  </section>
);

type QuizCardProps = {
  tone: ToneKey;
  eyebrow: string;
  badge: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const QuizCard = ({ tone, eyebrow, badge, icon, children }: QuizCardProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-lg border font-mono font-bold',
              t.fill.bg,
              t.fill.border,
              t.fill.text,
            )}
          >
            {badge}
          </span>
          <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
            {eyebrow}
          </span>
        </div>
        {icon && (
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full border',
              t.chip,
            )}
          >
            {icon}
          </span>
        )}
      </header>
      <p className={cn('text-sm sm:text-md leading-relaxed font-bold break-keep', t.fill.text)}>
        {children}
      </p>
    </article>
  );
};
