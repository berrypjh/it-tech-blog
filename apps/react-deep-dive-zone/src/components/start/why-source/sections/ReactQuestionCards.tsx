import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../components/SectionHeader';
import type { WhySourceContent } from '../content';
import { iconByName, QuestionIcon } from '../icons';
import { toneTokens } from '../tones';

type Props = { content: WhySourceContent['questions'] };

export const ReactQuestionCards = ({ content }: Props) => {
  return (
    <section id="section-questions" aria-labelledby="heading-questions" className="space-y-lg">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<QuestionIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          const Icon = iconByName[card.icon];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group relative flex flex-col gap-md h-full',
                  'rounded-lg border bg-[var(--term-bg)] p-md',
                  'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)]',
                  t.borderHover,
                )}
              >
                {/* 상단: 아이콘 + 번호 */}
                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-11 h-11 rounded-md border',
                      t.chip,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xxsm tabular-nums text-[var(--term-dim)] font-bold">
                    {card.number}
                  </span>
                </div>

                {/* 질문: 3줄 리듬 */}
                <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.question.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                {/* 하단: concept badge */}
                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-medium',
                      t.chip,
                    )}
                  >
                    <span
                      className={cn('inline-block w-1 h-1 rounded-full', t.dot)}
                      aria-hidden="true"
                    />
                    {card.badge}
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
