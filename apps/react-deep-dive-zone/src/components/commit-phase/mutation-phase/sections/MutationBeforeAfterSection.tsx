import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { MutationPhaseContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, PlusIcon, ReplaceIcon } from '../icons';

type Props = { content: MutationPhaseContent['beforeAfter'] };

export const MutationBeforeAfterSection = ({ content }: Props) => (
  <section
    id="before-after"
    aria-labelledby="heading-before-after"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="before-after"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ReplaceIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <DomCard variant="before" card={content.beforeCard} />
      <CenterArrow centerLabel={content.centerLabel} />
      <DomCard variant="after" card={content.afterCard} />
    </div>
  </section>
);

const CenterArrow = ({
  centerLabel,
}: {
  centerLabel: MutationPhaseContent['beforeAfter']['centerLabel'];
}) => (
  <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
        'border-violet-300/80 bg-gradient-to-br from-violet-100 to-sky-100',
        'dark:border-violet-700/70 dark:from-violet-950/70 dark:to-sky-950/60',
        'text-violet-700 dark:text-violet-200',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span className="hidden md:inline-block">
        <ArrowRightIcon className="h-5 w-5" />
      </span>
      <span className="md:hidden">
        <ArrowDownIcon className="h-5 w-5" />
      </span>
    </span>
    <article
      className={cn(
        'flex flex-col items-center gap-0.5 rounded-xl border-2 px-sm py-1.5',
        'border-violet-300/80 bg-violet-50/70 text-center',
        'dark:border-violet-700/70 dark:bg-violet-950/30',
      )}
    >
      <span className="inline-flex items-center gap-1 text-xsm font-bold text-violet-800 dark:text-violet-100 break-keep">
        <PlusIcon aria-hidden="true" className="h-3.5 w-3.5" />
        {centerLabel.title}
      </span>
      <span className="text-[10px] font-mono text-violet-700 dark:text-violet-300 break-keep">
        {centerLabel.subtitle}
      </span>
    </article>
  </div>
);

const DomCard = ({
  variant,
  card,
}: {
  variant: 'before' | 'after';
  card: { title: string; code: string; preview: string[] };
}) => {
  const isBefore = variant === 'before';
  const accent = isBefore
    ? 'border-sky-300/70 dark:border-sky-700/60'
    : 'border-teal-300/80 dark:border-teal-700/70';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        accent,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isBefore ? 'text-sky-700 dark:text-sky-300' : 'text-teal-700 dark:text-teal-300',
          )}
        >
          {card.title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isBefore
              ? 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200'
              : 'border-teal-200/80 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200',
          )}
        >
          {isBefore ? 'before' : 'after'}
        </span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] gap-3">
        <pre
          className={cn(
            'overflow-x-auto rounded-lg border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
            isBefore
              ? 'border-sky-200/60 bg-sky-50/50 text-sky-900 dark:border-sky-800/50 dark:bg-sky-950/25 dark:text-sky-100'
              : 'border-teal-200/60 bg-teal-50/50 text-teal-900 dark:border-teal-800/50 dark:bg-teal-950/25 dark:text-teal-100',
          )}
        >
          <code>{card.code}</code>
        </pre>

        <ListPreview items={card.preview} variant={variant} />
      </div>
    </article>
  );
};

const ListPreview = ({ items, variant }: { items: string[]; variant: 'before' | 'after' }) => (
  <ul
    className={cn(
      'flex flex-col gap-1 rounded-lg border p-sm',
      'border-[var(--term-border)] bg-slate-50/40 dark:bg-slate-900/30',
    )}
  >
    <li className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1">
      preview
    </li>
    {items.map((item, idx) => {
      const isNew = variant === 'after' && idx === items.length - 1;
      return (
        <li
          key={item}
          className={cn(
            'flex items-center gap-2 rounded-md border px-2 py-1 text-xsm font-mono',
            isNew
              ? 'border-violet-300/80 bg-violet-50/80 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100'
              : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-block h-1.5 w-1.5 rounded-full',
              isNew ? 'bg-violet-500 dark:bg-violet-300' : 'bg-[var(--term-dim)]',
            )}
          />
          <span>{item}</span>
          {isNew && (
            <span className="ml-auto text-[9px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300">
              new
            </span>
          )}
        </li>
      );
    })}
  </ul>
);
