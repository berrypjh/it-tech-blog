import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { ReactNextBoundaryContent, ResponsibilityCard, ToneKey } from '../content';
import { NextIcon, ReactIcon, SparkIcon } from '../icons';

type Props = { content: ReactNextBoundaryContent['split'] };

const Card = ({
  card,
  tone,
  icon: Icon,
}: {
  card: ResponsibilityCard;
  tone: ToneKey;
  icon: typeof ReactIcon;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <h3 className={cn('text-lg font-bold tracking-tight', t.text)}>{card.title}</h3>
          <p className="text-[11px] text-[var(--term-muted)] break-keep">{card.summary}</p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-1.5">
        {card.items.map((item) => (
          <li key={item}>
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[11px] font-medium',
                t.chip,
              )}
            >
              <span aria-hidden="true" className={cn('inline-block h-1 w-1 rounded-full', t.dot)} />
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xsm font-bold',
            t.chip,
          )}
        >
          {card.pill}
        </span>
      </div>
    </article>
  );
};

export const ResponsibilitySplitCards = ({ content }: Props) => {
  return (
    <section id="section-split" aria-labelledby="heading-split" className="space-y-lg">
      <SectionHeader
        id="split"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<NextIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <Card card={content.react} tone="indigo" icon={ReactIcon} />
        <Card card={content.next} tone="cyan" icon={NextIcon} />
      </div>

      {/* 하단 강조 배너 */}
      <div className="flex items-start gap-sm rounded-lg border border-slate-700 bg-slate-900 p-md sm:p-lg dark:border-slate-700 dark:bg-slate-950">
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-cyan-400 text-slate-900"
        >
          <SparkIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm font-medium leading-relaxed text-slate-100 break-keep">
          {content.banner}
        </p>
      </div>
    </section>
  );
};
