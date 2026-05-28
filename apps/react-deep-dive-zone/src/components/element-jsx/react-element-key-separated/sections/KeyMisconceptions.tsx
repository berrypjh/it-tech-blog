import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { Misconception, ReactElementKeySeparatedContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon, MessageIcon, ShuffleIcon, XCircleIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['misconceptions'] };

const iconMap = {
  message: MessageIcon,
  shuffle: ShuffleIcon,
} as const;

export const KeyMisconceptions = ({ content }: Props) => (
  <section
    id="misconceptions"
    aria-labelledby="heading-misconceptions"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconceptions"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView
            card={card}
            wrongLabel={content.wrongLabel}
            correctLabel={content.correctLabel}
          />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({
  card,
  wrongLabel,
  correctLabel,
}: {
  card: Misconception;
  wrongLabel: string;
  correctLabel: string;
}) => {
  const t = toneTokens[card.tone];
  const SideIcon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group relative flex flex-1 flex-col rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'overflow-hidden transition-all hover:-translate-y-0.5 hover:border-[var(--term-muted)]',
      )}
    >
      {/* 오해 영역 */}
      <div
        className={cn(
          'flex flex-col gap-2 p-md',
          'bg-rose-50/70 dark:bg-rose-950/30',
          'border-b border-dashed border-[var(--term-border)]',
        )}
      >
        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full border',
              'border-rose-300/70 bg-rose-100 text-rose-700',
              'dark:border-rose-800/70 dark:bg-rose-950/60 dark:text-rose-300',
            )}
          >
            <XCircleIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                'border-rose-300/80 bg-rose-100 text-rose-700',
                'dark:border-rose-800/70 dark:bg-rose-950/60 dark:text-rose-300',
              )}
            >
              {wrongLabel} {card.index}
            </span>
            <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
              {card.wrong}
            </p>
          </div>
        </div>
      </div>

      {/* 정확히 영역 */}
      <div
        className={cn('flex flex-col gap-2 p-md flex-1', 'bg-emerald-50/40 dark:bg-emerald-950/20')}
      >
        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-full border',
              'border-emerald-300/70 bg-emerald-100 text-emerald-700',
              'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
            )}
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                'border-emerald-300/80 bg-emerald-100 text-emerald-700',
                'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
              )}
            >
              {correctLabel}
            </span>
            <p className="text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
              {card.correct}
            </p>
            <ul className="flex flex-col gap-1.5 pt-2">
              {card.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className={cn('mt-1.5 w-1.5 h-1.5 rounded-full shrink-0', t.dot)}
                  />
                  <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute bottom-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-lg border',
            t.chip,
            'opacity-70',
          )}
        >
          <SideIcon className="h-5 w-5" />
        </span>
      </div>
    </article>
  );
};
