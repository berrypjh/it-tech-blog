import { cn } from '@it-tech-blog/utils';

import type { WhyFailableRenderContent } from '../content';
import { CheckCircleIcon, ShieldCheckIcon, TriangleAlertIcon } from '../icons';
import { toneCardSoft, toneNumberBadge } from '../tone';

type Props = { content: WhyFailableRenderContent['takeaways'] };

const cardIcon = [TriangleAlertIcon, ShieldCheckIcon, CheckCircleIcon];

export const TakeawaysSection = ({ content }: Props) => (
  <section aria-labelledby="takeaways-heading" className="flex flex-col gap-md">
    <header className="flex flex-col gap-1">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        {content.eyebrow}
      </span>
      <h2
        id="takeaways-heading"
        className="text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
    </header>

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card, i) => {
        const Icon = cardIcon[i] ?? CheckCircleIcon;
        return (
          <li key={card.number}>
            <article
              className={cn(
                'flex flex-col gap-3 h-full rounded-3xl border-2 p-md sm:p-lg',
                toneCardSoft[card.tone],
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-full',
                    'font-mono text-xsm font-bold tabular-nums',
                    toneNumberBadge[card.tone],
                  )}
                >
                  {card.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                    card.tone === 'blue' &&
                      'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/50 dark:text-blue-200',
                    card.tone === 'red' &&
                      'border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/50 dark:text-rose-200',
                    card.tone === 'green' &&
                      'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-200',
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="text-md font-bold text-[var(--term-fg)] break-keep leading-snug">
                {card.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.body}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
