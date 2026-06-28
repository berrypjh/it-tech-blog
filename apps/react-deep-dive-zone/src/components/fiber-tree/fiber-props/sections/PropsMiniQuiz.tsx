import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberPropsContent } from '../content';
import { HelpCircleIcon, LightbulbIcon, MessageQuestionIcon, SparklesIcon } from '../icons';

type Props = { content: FiberPropsContent['quiz'] };

export const PropsMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        <div className="flex flex-col gap-md min-w-0">
          <div className="flex items-start gap-sm">
            <LetterBadge tone="sky">Q</LetterBadge>
            <div className="flex flex-col gap-1 min-w-0">
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider font-mono',
                  toneTokens.sky.text,
                )}
              >
                {content.questionLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.question}
              </p>
            </div>
          </div>

          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border p-md bg-[var(--term-surface)]',
              toneTokens.emerald.border,
            )}
          >
            <LetterBadge tone="emerald">A</LetterBadge>
            <div className="flex flex-col gap-1 min-w-0">
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider font-mono',
                  toneTokens.emerald.text,
                )}
              >
                {content.answerLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.answer}
              </p>
            </div>
          </div>

          <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
            <span className="font-normal">
              <span className="font-bold">{content.explanationLabel}</span>
              {' — '}
              {content.explanationParts.map((part, i) =>
                part.bold ? (
                  <strong key={i} className="font-bold text-[var(--term-fg)]">
                    {part.text}
                  </strong>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </span>
          </SectionNote>
        </div>

        <QuizIllustration />
      </div>
    </article>
  </section>
);

const LetterBadge = ({
  tone,
  children,
}: {
  tone: 'sky' | 'emerald';
  children: React.ReactNode;
}) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center w-10 h-10 rounded-lg border shrink-0 font-mono text-sm font-bold',
      toneTokens[tone].chip,
    )}
  >
    {children}
  </span>
);

const QuizIllustration = () => (
  <div
    className={cn(
      'relative flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed p-md',
      'border-[var(--term-border)] bg-[var(--term-surface)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'absolute left-6 top-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl border',
        toneTokens.sky.chip,
      )}
    >
      <MessageQuestionIcon className="h-7 w-7" />
    </span>
    <span
      aria-hidden="true"
      className={cn(
        'absolute right-6 bottom-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl border',
        toneTokens.emerald.chip,
      )}
    >
      <SparklesIcon className="h-7 w-7" />
    </span>
    <p className="text-[11px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      {'// question → answer'}
    </p>
  </div>
);
