import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { QuizCard, WhySplitContent } from '../content';
import { CheckCircleIcon, SparklesIcon } from '../icons';

type Props = { content: WhySplitContent['quiz'] };

export const WhySplitQuickQuiz = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="flex">
            <QuizCardView card={card} index={index + 1} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const QuizCardView = ({ card, index }: { card: QuizCard; index: number }) => {
  const tone = toneTokens[card.tone];

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] tabular-nums font-mono">
          Q{String(index).padStart(2, '0')}
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            tone.chip,
          )}
        >
          classify
        </span>
      </header>

      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.question}
      </p>

      {/* select-처럼 보이는 정적 정답 박스 */}
      <div
        role="group"
        aria-label="answer"
        className={cn(
          'flex items-center justify-between gap-sm rounded-lg border px-md py-2.5',
          'border-emerald-300/80 bg-emerald-50',
          'dark:border-emerald-800/70 dark:bg-emerald-950/40',
        )}
      >
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
          >
            <CheckCircleIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xsm font-bold font-mono text-emerald-800 dark:text-emerald-200">
            {card.answer}
          </span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/70">
          answer
        </span>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.explanation}
      </p>
    </article>
  );
};
