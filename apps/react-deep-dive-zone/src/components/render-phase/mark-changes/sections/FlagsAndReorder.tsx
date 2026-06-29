import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlagsAndReorderContent, ReorderResultItem } from '../content';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ListChecksIcon,
  markIconByName,
  StarIcon,
  WorkflowIcon,
} from '../icons';
import { facetFor } from '../markFacet';

type Props = { content: FlagsAndReorderContent };

export const FlagsAndReorder = ({ content }: Props) => (
  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_0.6fr)] gap-md lg:gap-lg">
    <FlagsConnectionSection content={content.flags} />
    <ListReorderSection content={content.reorder} />
  </div>
);

const FlagsConnectionSection = ({ content }: { content: FlagsAndReorderContent['flags'] }) => (
  <section id="flags-connection" aria-labelledby="heading-flags-connection" className="space-y-md">
    <SectionHeader
      id="flags-connection"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <ol className="flex flex-col gap-2">
        {content.steps.map((step, idx) => {
          const t = toneTokens[step.tone];
          return (
            <li key={step.title} className="flex flex-col">
              <article
                className={cn(
                  'flex items-start gap-3 rounded-lg border p-md shadow-[0_1px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border font-mono font-bold text-xsm tabular-nums',
                    t.chip,
                  )}
                >
                  {idx + 1}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3
                    className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                    {step.description}
                  </p>
                </div>
              </article>
              {idx < content.steps.length - 1 && (
                <ChevronDownIcon
                  aria-hidden="true"
                  className="my-1 mx-auto h-5 w-5 text-[var(--term-accent)]"
                />
              )}
            </li>
          );
        })}
      </ol>
    </article>
  </section>
);

const ListReorderSection = ({ content }: { content: FlagsAndReorderContent['reorder'] }) => (
  <section id="list-reorder" aria-labelledby="heading-list-reorder" className="space-y-md">
    <SectionHeader
      id="list-reorder"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.2fr)] items-stretch gap-2">
        <TokenColumn label={content.beforeLabel} value={content.beforeValue} tone="sky" />
        <ArrowConnector />
        <TokenColumn label={content.afterLabel} value={content.afterValue} tone="teal" />
        <ArrowConnector />
        <ResultColumn title={content.resultTitle} items={content.resultItems} />
      </div>

      <SectionNote icon={<StarIcon className="h-4 w-4" />} className="mt-md">
        {content.bottomNote}
      </SectionNote>
    </article>
  </section>
);

const TokenColumn = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'sky' | 'teal';
}) => {
  const t = toneTokens[tone];
  const tokens = value.split(' ').filter(Boolean);
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-2 rounded-lg border p-md',
        t.border,
      )}
    >
      <span className={cn('text-xxsm font-mono uppercase tracking-wider', t.text)}>{label}</span>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {tokens.map((tok, idx) => (
          <span
            key={`${tok}-${idx}`}
            className={cn(
              'inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-md border font-mono text-sm font-bold',
              t.fill.bg,
              t.fill.border,
              t.fill.text,
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
    className="flex items-center justify-center text-[var(--term-accent)] py-1 sm:py-0"
  >
    <ArrowRightIcon className="hidden sm:block h-5 w-5" />
    <ChevronDownIcon className="sm:hidden h-5 w-5" />
  </span>
);

const ResultColumn = ({ title, items }: { title: string; items: ReorderResultItem[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-lg border border-dashed p-md',
      toneTokens.amber.border,
    )}
  >
    <span className={cn('text-xxsm font-mono uppercase tracking-wider', toneTokens.amber.text)}>
      {title}
    </span>
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => {
        const t = facetFor(item.tone);
        const Icon = markIconByName[item.icon];
        return (
          <li
            key={item.text}
            className={cn('flex items-center gap-2 rounded-md border px-2 py-1', t.border)}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-md border',
                t.chip,
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <code className={cn('font-mono text-xsm font-bold break-keep', t.text)}>
              {item.text}
            </code>
          </li>
        );
      })}
    </ul>
  </article>
);
