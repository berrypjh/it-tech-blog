import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { AxisCard, Next16Content } from '../content';
import { axisIconByName, LayersIcon, WarnIcon } from '../icons';

type Props = { content: Next16Content['axes'] };

const ChipRow = ({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: AxisCard['tone'];
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
        {label}
      </span>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item}>
            <code
              className={cn(
                'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                t.chip,
              )}
            >
              {item}
            </code>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Card = ({ card, labels }: { card: AxisCard; labels: Next16Content['axes']['labels'] }) => {
  const t = toneTokens[card.tone];
  const Icon = axisIconByName[card.id];

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
        <h3 className={cn('text-lg font-bold tracking-tight', t.text)}>{card.title}</h3>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.summary}</p>

      <ChipRow label={labels.surface} items={card.surfaceApi} tone={card.tone} />
      <ChipRow label={labels.internal} items={card.internalConcepts} tone={card.tone} />

      {/* 읽을 경로 */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.path}
        </span>
        <ul className="flex flex-col gap-1.5">
          {card.readingPaths.map((path) => (
            <li key={path}>
              <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
                {path}
              </code>
            </li>
          ))}
        </ul>
      </div>

      {/* 주의할 오래된 자료 */}
      <div className="mt-auto flex items-start gap-sm rounded-md border border-amber-200 bg-amber-50 p-sm dark:border-amber-800/60 dark:bg-amber-950/30">
        <span aria-hidden="true" className="mt-0.5 text-amber-600 dark:text-amber-300 shrink-0">
          <WarnIcon className="h-4 w-4" />
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 dark:text-amber-300">
            {labels.outdated}
          </span>
          <p className="text-[11px] leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
            {card.outdated}
          </p>
        </div>
      </div>
    </article>
  );
};

export const ReadingAxisCards = ({ content }: Props) => {
  return (
    <section id="section-axes" aria-labelledby="heading-axes" className="space-y-lg">
      <SectionHeader
        id="axes"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <Card card={card} labels={content.labels} />
          </li>
        ))}
      </ul>
    </section>
  );
};
