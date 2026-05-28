import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { RvrContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: RvrContent['quiz'] };

export const QuickCheckSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quick-check" className="space-y-md">
      <SectionHeader
        id="quick-check"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card, index) => {
          const tone = toneTokens[card.tone];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-1 flex-col gap-md rounded-2xl border p-md sm:p-lg',
                  'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
                  tone.borderHover,
                )}
              >
                <header className="flex items-center gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-9 h-9 rounded-full',
                      'border border-emerald-300/80 bg-emerald-100 text-emerald-700',
                      'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
                    )}
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] tabular-nums font-mono">
                    Quiz {String(index + 1).padStart(2, '0')}
                  </span>
                </header>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono font-bold">
                    Q.
                  </span>
                  <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
                    {card.question}
                  </p>
                </div>

                <div
                  role="group"
                  aria-label="answer"
                  className={cn('flex items-start gap-sm rounded-lg border px-md py-3', tone.chip)}
                >
                  <span
                    className={cn(
                      'text-[10px] uppercase tracking-wider font-bold font-mono pt-0.5',
                      tone.text,
                    )}
                  >
                    정답
                  </span>
                  <span className={cn('text-sm font-bold font-mono break-words', tone.text)}>
                    {card.answer}
                  </span>
                </div>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.explanation}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
