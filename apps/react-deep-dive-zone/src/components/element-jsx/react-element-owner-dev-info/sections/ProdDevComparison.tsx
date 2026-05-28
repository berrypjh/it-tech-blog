import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ProdDevCard, ReactElementOwnerDevInfoContent } from '../content';
import { BugIcon, CheckCircleIcon, GaugeIcon, GitCompareIcon, SparklesIcon } from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['prodDev'] };

const iconMap = {
  gauge: GaugeIcon,
  bug: BugIcon,
} as const;

export const ProdDevComparison = ({ content }: Props) => (
  <section id="prod-dev" aria-labelledby="heading-prod-dev" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="prod-dev"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-gradient-to-r from-sky-50 via-violet-50 to-teal-50',
        'dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40',
        'border border-sky-200/70 dark:border-sky-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const CardView = ({ card }: { card: ProdDevCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full border',
            t.chip,
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code className={cn('font-mono text-lg font-bold tracking-tight', t.text)}>
            {card.title}
          </code>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            mode
          </span>
        </div>
      </header>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {card.body}
      </p>

      <ul className="flex flex-col gap-1.5 mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5"
            >
              <CheckCircleIcon className="h-3 w-3" />
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
