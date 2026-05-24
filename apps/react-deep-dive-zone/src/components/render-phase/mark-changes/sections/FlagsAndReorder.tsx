import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FlagsAndReorderContent, ReorderResultItem } from '../content';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  FlagIcon,
  ListChecksIcon,
  MoveIcon,
  StarIcon,
  Trash2Icon,
  WorkflowIcon,
} from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: FlagsAndReorderContent };

const resultIconMap = {
  flag: FlagIcon,
  trash: Trash2Icon,
  move: MoveIcon,
} as const;

export const FlagsAndReorder = ({ content }: Props) => (
  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_0.6fr)] gap-md lg:gap-lg">
    <FlagsConnectionSection content={content.flags} />
    <ListReorderSection content={content.reorder} />
  </div>
);

const FlagsConnectionSection = ({ content }: { content: FlagsAndReorderContent['flags'] }) => (
  <section
    id="flags-connection"
    aria-labelledby="heading-flags-connection"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="flags-connection"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-2">
        {content.steps.map((step, idx) => {
          const palette = tonePalette[step.tone];
          return (
            <li key={step.title} className="flex flex-col">
              <article
                className={cn(
                  'flex items-start gap-3 rounded-2xl border-2 p-md',
                  palette.border,
                  palette.bg,
                  'shadow-[0_1px_0_var(--term-border)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono font-bold text-xsm',
                    palette.chip,
                  )}
                >
                  {idx + 1}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3
                    className={cn(
                      'text-xsm sm:text-sm font-bold leading-tight break-keep',
                      palette.text,
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                    {step.description}
                  </p>
                </div>
              </article>
              {idx < content.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="my-1 flex justify-center text-[var(--term-dim)]"
                >
                  <ChevronDownIcon className="h-5 w-5" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </article>
  </section>
);

const ListReorderSection = ({ content }: { content: FlagsAndReorderContent['reorder'] }) => (
  <section
    id="list-reorder"
    aria-labelledby="heading-list-reorder"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="list-reorder"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.2fr)] items-stretch gap-2">
        <TokenColumn label={content.beforeLabel} value={content.beforeValue} kind="before" />
        <ArrowConnector />
        <TokenColumn label={content.afterLabel} value={content.afterValue} kind="after" />
        <ArrowConnector />
        <ResultColumn title={content.resultTitle} items={content.resultItems} />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);

const TokenColumn = ({
  label,
  value,
  kind,
}: {
  label: string;
  value: string;
  kind: 'before' | 'after';
}) => {
  const tokens = value.split(' ').filter(Boolean);
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 p-md',
        kind === 'before'
          ? 'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/70 dark:bg-sky-950/20'
          : 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20',
      )}
    >
      <span
        className={cn(
          'text-[10px] font-mono uppercase tracking-wider',
          kind === 'before' ? 'text-sky-700 dark:text-sky-300' : 'text-teal-700 dark:text-teal-300',
        )}
      >
        {label}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {tokens.map((tok, idx) => (
          <span
            key={`${tok}-${idx}`}
            className={cn(
              'inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-md border font-mono text-sm font-bold',
              kind === 'before'
                ? 'border-sky-300/80 bg-white text-sky-800 dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-100'
                : 'border-teal-300/80 bg-white text-teal-800 dark:border-teal-700/70 dark:bg-slate-950/40 dark:text-teal-100',
            )}
          >
            {tok}
          </span>
        ))}
      </div>
    </article>
  );
};

const ArrowConnector = () => (
  <span
    aria-hidden="true"
    className="flex items-center justify-center text-[var(--term-muted)] py-1 sm:py-0"
  >
    <ArrowRightIcon className="hidden sm:block h-5 w-5" />
    <ChevronDownIcon className="sm:hidden h-5 w-5" />
  </span>
);

const ResultColumn = ({ title, items }: { title: string; items: ReorderResultItem[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-2xl border-2 border-dashed p-md',
      'border-amber-300/80 bg-amber-50/40',
      'dark:border-amber-700/70 dark:bg-amber-950/20',
    )}
  >
    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-300">
      {title}
    </span>
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => {
        const palette = tonePalette[item.tone];
        const Icon = resultIconMap[item.iconName];
        return (
          <li
            key={item.text}
            className={cn(
              'flex items-center gap-2 rounded-md border px-2 py-1',
              palette.border,
              palette.bg,
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-md border',
                palette.chip,
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <code className={cn('font-mono text-xsm font-bold break-keep', palette.text)}>
              {item.text}
            </code>
          </li>
        );
      })}
    </ul>
  </article>
);
