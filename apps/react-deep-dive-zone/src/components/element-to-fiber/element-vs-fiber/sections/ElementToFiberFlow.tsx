import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../element-jsx/_shared/CodePanel';
import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ElementVsFiberContent, FlowCard, FlowCardKind } from '../content';
import { ArrowDownIcon, ArrowRightIcon, SproutIcon, WorkflowIcon } from '../icons';

type Props = { content: ElementVsFiberContent['flow'] };

const styleByKind: Record<
  FlowCardKind,
  { border: string; label: string; chip: string; accent: string }
> = {
  jsx: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    label: 'text-sky-700 dark:text-sky-300',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    accent: 'bg-sky-500 dark:bg-sky-400',
  },
  element: {
    border: 'border-blue-300/80 dark:border-blue-700/70',
    label: 'text-blue-700 dark:text-blue-300',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    accent: 'bg-blue-500 dark:bg-blue-400',
  },
  fiber: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    label: 'text-teal-700 dark:text-teal-300',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    accent: 'bg-teal-500 dark:bg-teal-400',
  },
};

export const ElementToFiberFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-sm lg:gap-md items-stretch">
        {content.cards.map((card, idx) => (
          <li key={card.id} className="contents">
            <div className="flex">
              <FlowCardView card={card} />
            </div>
            {idx < content.cards.length - 1 && <FlowConnector />}
          </li>
        ))}
      </ol>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl px-md py-md',
          'bg-gradient-to-r from-sky-50 via-violet-50 to-teal-50',
          'dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40',
          'border border-sky-200/70 dark:border-sky-800/60',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/15 text-violet-700 dark:text-violet-300 shrink-0"
        >
          <SproutIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.footnote}
        </p>
      </div>
    </div>
  </section>
);

const FlowConnector = () => (
  <div className="flex justify-center items-center py-1 lg:py-0" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-violet-600 dark:text-violet-300">
      <span className="contents">
        <ArrowDownIcon className="h-4 w-4 lg:hidden" />
        <ArrowRightIcon className="h-4 w-4 hidden lg:block" />
      </span>
    </span>
  </div>
);

const FlowCardView = ({ card }: { card: FlowCard }) => {
  const s = styleByKind[card.kind];
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md min-w-0',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        s.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span aria-hidden="true" className={cn('inline-block w-2 h-2 rounded-full', s.accent)} />
        <span className={cn('font-mono text-xsm font-bold tracking-tight', s.label)}>
          {card.label}
        </span>
      </header>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      {card.code && <CodePanel code={card.code} language="JSX" />}

      {card.items && (
        <ul className="flex flex-col gap-1.5 mt-1">
          {card.items.map((item) => (
            <li
              key={item.label}
              className={cn(
                'flex flex-col gap-0.5 rounded-lg border px-sm py-2',
                'border-[var(--term-border)] bg-[var(--term-surface)]',
              )}
            >
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 font-mono text-[11px] font-bold',
                  s.label,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('inline-block w-1 h-1 rounded-full', s.accent)}
                />
                {item.label}
              </span>
              <code className="font-mono text-xsm text-[var(--term-fg)] break-all">
                {item.value}
              </code>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
