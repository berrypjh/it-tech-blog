import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { MarkChangesContent, RenderCommitCard } from '../content';
import { ArrowRightIcon, CheckCircleIcon, ChevronDownIcon, WorkflowIcon } from '../icons';

type Props = { content: MarkChangesContent['renderCommit'] };

export const RenderVsCommit = ({ content }: Props) => (
  <section
    id="render-vs-commit"
    aria-labelledby="heading-render-vs-commit"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="render-vs-commit"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-md">
      <Card card={content.render} />
      <span aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
        <span
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white',
            'border-[var(--term-border)] dark:bg-slate-950',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ArrowRightIcon className="hidden lg:block h-5 w-5 text-[var(--term-muted)]" />
          <ChevronDownIcon className="lg:hidden h-5 w-5 text-[var(--term-muted)]" />
        </span>
      </span>
      <Card card={content.commit} />
    </div>
  </section>
);

const Card = ({ card }: { card: RenderCommitCard }) => {
  const isRender = card.kind === 'render';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        isRender
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
      aria-labelledby={`heading-${card.kind}-card`}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5 min-w-0">
          <h3
            id={`heading-${card.kind}-card`}
            className={cn(
              'text-md sm:text-lg font-bold leading-tight break-keep',
              isRender
                ? 'text-teal-800 dark:text-teal-100'
                : 'text-violet-800 dark:text-violet-100',
            )}
          >
            {card.title}
          </h3>
          <span
            className={cn(
              'text-xsm leading-snug break-keep',
              isRender
                ? 'text-teal-700 dark:text-teal-300'
                : 'text-violet-700 dark:text-violet-300',
            )}
          >
            {card.subtitle}
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-1.5">
        {card.items.map((item, idx) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 text-xsm sm:text-sm leading-snug break-keep',
              isRender
                ? 'text-teal-900 dark:text-teal-100'
                : 'text-violet-900 dark:text-violet-100',
              // Render's last item ("DOM 변경은 절대 하지 않음") needs extra emphasis
              isRender && idx === card.items.length - 1 && 'font-bold',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                isRender
                  ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
                  : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
              )}
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-auto inline-flex w-full items-center justify-center rounded-xl border-2 px-md py-2.5 text-xsm sm:text-sm font-bold tracking-tight break-keep',
          isRender
            ? 'border-teal-300/80 bg-teal-600 text-white dark:border-teal-700/70 dark:bg-teal-500 dark:text-slate-950'
            : 'border-violet-300/80 bg-violet-600 text-white dark:border-violet-700/70 dark:bg-violet-500 dark:text-slate-950',
        )}
      >
        {card.bottomLabel}
      </div>
    </article>
  );
};
