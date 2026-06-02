import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { CompareCard, GithubReadingContent, ToneKey } from '../content';
import { CanaryIcon, CompareIcon, SparkIcon, StableIcon } from '../icons';

type Props = { content: GithubReadingContent['compare'] };

const Card = ({
  card,
  tone,
  icon: Icon,
  cautionLabel,
}: {
  card: CompareCard;
  tone: ToneKey;
  icon: typeof StableIcon;
  cautionLabel: string;
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
      <div className="flex items-center justify-between gap-sm">
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
          <h3 className={cn('text-lg font-bold tracking-tight', t.text)}>{card.title}</h3>
        </div>
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold',
            t.chip,
          )}
        >
          {card.pill}
        </span>
      </div>

      <ul className="flex flex-col gap-1.5">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span className="text-xsm text-[var(--term-fg)] break-keep">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-0.5 pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {cautionLabel}
        </span>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {card.caution}
        </p>
      </div>
    </article>
  );
};

export const StableCanaryCompare = ({ content }: Props) => {
  return (
    <section id="section-compare" aria-labelledby="heading-compare" className="space-y-lg">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CompareIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        <Card
          card={content.stable}
          tone="blue"
          icon={StableIcon}
          cautionLabel={content.cautionLabel}
        />
        <Card
          card={content.canary}
          tone="cyan"
          icon={CanaryIcon}
          cautionLabel={content.cautionLabel}
        />
      </div>

      <div className="flex items-start gap-sm rounded-lg border border-cyan-200 bg-cyan-50 p-md sm:p-lg dark:border-cyan-800/60 dark:bg-cyan-950/30">
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900"
        >
          <SparkIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm font-medium leading-relaxed text-cyan-900 dark:text-cyan-100 break-keep">
          {content.banner}
        </p>
      </div>
    </section>
  );
};
