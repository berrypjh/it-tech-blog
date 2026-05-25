import { cn } from '@it-tech-blog/utils';

import type { React19ErrorReportingContent, WhyCard } from '../content';
import { LineChartIcon, SearchIcon, ShieldCheckIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ErrorReportingContent['why'] };

const cardIcon: Record<WhyCard['icon'], React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheckIcon,
  search: SearchIcon,
  chart: LineChartIcon,
};

const cardTone: Record<WhyCard['tone'], { border: string; iconChip: string; arrow: string }> = {
  blue: {
    border: 'border-blue-200/80 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    arrow: 'text-blue-600 dark:text-blue-300',
  },
  violet: {
    border: 'border-violet-200/80 bg-violet-50/30 dark:border-violet-800/60 dark:bg-violet-950/20',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    arrow: 'text-violet-600 dark:text-violet-300',
  },
  mixed: {
    border:
      'border-emerald-200/80 bg-gradient-to-br from-emerald-50/30 to-rose-50/20 dark:border-emerald-800/60 dark:from-emerald-950/20 dark:to-rose-950/15',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    arrow: 'text-emerald-600 dark:text-emerald-300',
  },
};

export const WhyNeededSection = ({ content }: Props) => (
  <section aria-labelledby="why-heading" className="flex flex-col gap-md">
    <SectionHeader id="why-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.icon];
        const tone = cardTone[card.tone];
        return (
          <li key={card.title}>
            <article
              className={cn(
                'flex flex-col gap-3 h-full rounded-2xl border-2 p-md sm:p-lg',
                tone.border,
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                  tone.iconChip,
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">{card.title}</h3>
                <span
                  className={cn(
                    'text-[11px] font-mono font-bold uppercase tracking-wider',
                    tone.arrow,
                  )}
                >
                  {card.arrow}
                </span>
              </div>
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
