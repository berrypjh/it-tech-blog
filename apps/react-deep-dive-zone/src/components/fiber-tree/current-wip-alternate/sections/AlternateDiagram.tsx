import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CurrentWipAlternateContent } from '../content';
import { ArrowLeftRightIcon, LayersIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['alternate'] };

export const AlternateDiagram = ({ content }: Props) => (
  <section id="alternate" aria-labelledby="heading-alternate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="alternate"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.6fr)_minmax(0,_0.4fr)] gap-md lg:gap-lg items-stretch">
      {/* Pair diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${content.pairTitle}`}
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md items-stretch">
          <PairCard
            tone="sky"
            title={content.currentCard.title}
            subtitle={content.currentCard.subtitle}
            fields={content.currentCard.fields}
          />
          <ArrowConnector label={content.arrowLabel} subLabel={content.arrowSubLabel} />
          <PairCard
            tone="emerald"
            title={content.wipCard.title}
            subtitle={content.wipCard.subtitle}
            fields={content.wipCard.fields}
          />
        </div>
      </article>

      {/* Whole-tree connection */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-lg',
              'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
            )}
          >
            <LayersIcon className="h-4 w-4" />
          </span>
          <h3 className="text-xsm font-bold text-violet-900 dark:text-violet-100">
            {content.rightTitle}
          </h3>
        </header>

        <ul className="flex flex-col gap-1.5 mt-sm">
          {content.rightNodes.map((row, i) => (
            <li
              key={`${row.current}-${i}`}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"
            >
              <span
                className={cn(
                  'inline-flex items-center justify-center rounded-lg border px-2 py-1 font-mono text-[11.5px] font-bold',
                  'border-sky-200/80 bg-sky-50/60 text-sky-800',
                  'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
                )}
              >
                {row.current}
              </span>
              <span
                aria-hidden="true"
                className="block h-px w-full border-t-2 border-dashed border-violet-400/70 dark:border-violet-500/70"
              />
              <span
                className={cn(
                  'inline-flex items-center justify-center rounded-lg border px-2 py-1 font-mono text-[11.5px] font-bold',
                  'border-emerald-200/80 bg-emerald-50/60 text-emerald-800',
                  'dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-100',
                )}
              >
                {row.wip}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.rightBody}
        </p>
      </article>
    </div>
  </section>
);

const PairCard = ({
  tone,
  title,
  subtitle,
  fields,
}: {
  tone: 'sky' | 'emerald';
  title: string;
  subtitle: string;
  fields: string[];
}) => {
  const cls = {
    sky: {
      border:
        'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
      bg: 'bg-sky-50/40 dark:bg-sky-950/20',
      title: 'text-sky-900 dark:text-sky-100',
      sub: 'text-sky-700/80 dark:text-sky-300/80',
      fieldChip:
        'bg-sky-100/70 text-sky-800 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-100 dark:border-sky-800/60',
    },
    emerald: {
      border:
        'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
      bg: 'bg-emerald-50/40 dark:bg-emerald-950/20',
      title: 'text-emerald-900 dark:text-emerald-100',
      sub: 'text-emerald-700/80 dark:text-emerald-300/80',
      fieldChip:
        'bg-emerald-100/70 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-100 dark:border-emerald-800/60',
    },
  }[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cls.border,
        cls.bg,
      )}
    >
      <code className={cn('font-mono text-xsm font-bold tracking-tight break-keep', cls.title)}>
        {title}
      </code>
      <span className={cn('text-[10px] font-mono uppercase tracking-wider', cls.sub)}>
        {subtitle}
      </span>
      <ul className="flex flex-col gap-1 mt-1">
        {fields.map((f) => (
          <li key={f}>
            <code
              className={cn(
                'inline-flex w-full items-center rounded-md border px-2 py-1 font-mono text-[11.5px] font-bold',
                cls.fieldChip,
              )}
            >
              {f}
            </code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const ArrowConnector = ({ label, subLabel }: { label: string; subLabel: string }) => (
  <div className="flex flex-col items-center justify-center gap-1">
    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-violet-700 dark:text-violet-300">
      {label}
    </span>
    <div className="flex items-center w-full">
      <span aria-hidden="true" className="text-violet-600 dark:text-violet-300">
        ←
      </span>
      <span
        aria-hidden="true"
        className="flex-1 block h-px border-t-2 border-dashed border-violet-400/70 dark:border-violet-500/70 lg:min-w-[40px] min-w-[80px]"
      />
      <span aria-hidden="true" className="text-violet-600 dark:text-violet-300">
        →
      </span>
    </div>
    <span className="text-[9.5px] text-violet-700/80 dark:text-violet-300/80 break-keep text-center max-w-[110px]">
      {subLabel}
    </span>
  </div>
);
