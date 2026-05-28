import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ActionCompareCard, LaneUpdateObjectContent } from '../content';
import {
  ArrowRightIcon,
  CrosshairIcon,
  FunctionSquareIcon,
  LightbulbIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LaneUpdateObjectContent['action'] };

const iconMap: Record<ActionCompareCard['iconName'], typeof CrosshairIcon> = {
  crosshair: CrosshairIcon,
  functionSquare: FunctionSquareIcon,
};

export const ActionMeaningSection = ({ content }: Props) => (
  <section id="action" aria-labelledby="heading-action" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="action"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ZapIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
      <CompareCard card={content.leftCard} />

      <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center rounded-full border-2',
            'h-11 w-11',
            'border-sky-300/80 bg-white text-sky-600',
            'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ArrowRightIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.connectorLabel}
        </span>
      </div>

      <CompareCard card={content.rightCard} />
    </div>

    {/* Bottom note */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 px-md py-3',
        'border-amber-200/80 bg-amber-50/70',
        'dark:border-amber-800/60 dark:bg-amber-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
          'bg-amber-100 text-amber-700 border border-amber-200/80',
          'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
        )}
      >
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);

const CompareCard = ({ card }: { card: ActionCompareCard }) => {
  const Icon = iconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        t.border,
        'bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
              t.chip,
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
            {card.title}
          </h3>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.badge}
        </span>
      </header>

      <pre
        className={cn(
          'overflow-x-auto rounded-2xl border px-md py-3 font-mono text-xsm sm:text-sm leading-[1.7]',
          'border-slate-800 bg-slate-950 text-slate-100',
          'shadow-[0_8px_24px_-12px_rgba(2,6,23,0.55)]',
        )}
      >
        <code>{card.code}</code>
      </pre>

      <div className={cn('mt-auto rounded-xl border px-3 py-2 font-mono', t.chip)}>
        <span className="block text-[10px] uppercase tracking-wider opacity-80">{card.result}</span>
        <span className={cn('block text-xsm sm:text-sm font-bold break-keep', t.text)}>
          {card.resultDetail}
        </span>
      </div>
    </article>
  );
};
