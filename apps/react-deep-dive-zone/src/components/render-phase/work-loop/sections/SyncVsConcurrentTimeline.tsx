import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { TimelineCard, TimelineNode, WorkLoopContent } from '../content';
import { ArrowRightIcon, SparklesIcon } from '../icons';

type Props = { content: WorkLoopContent['timelines'] };

export const SyncVsConcurrentTimeline = ({ content }: Props) => (
  <section
    id="push-vs-yield"
    aria-labelledby="heading-push-vs-yield"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="push-vs-yield"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      <Timeline card={content.cards.left} />
      <Timeline card={content.cards.right} />
    </div>
  </section>
);

const Timeline = ({ card }: { card: TimelineCard }) => {
  const palette = timelinePalette[card.kind];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        palette.cardBorder,
        palette.cardBg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', palette.title)}>
          {card.title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            palette.tag,
          )}
        >
          {card.kind === 'sync' ? 'push through' : 'yield-capable'}
        </span>
      </header>

      <ol className="flex flex-wrap items-stretch gap-2">
        {card.flow.map((node, idx) => (
          <Fragment key={`${node.label}-${idx}`}>
            <li className="flex flex-col items-center min-w-0">
              <TimelineNodeBox node={node} kind={card.kind} />
              <span
                className={cn(
                  'mt-1 text-[10px] sm:text-xsm leading-snug text-center break-keep max-w-[88px]',
                  node.yield ? palette.yieldCaption : 'text-[var(--term-muted)]',
                )}
              >
                {node.caption}
              </span>
            </li>
            {idx < card.flow.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'flex shrink-0 items-center justify-center pt-4 sm:pt-5',
                  palette.arrow,
                )}
              >
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            )}
          </Fragment>
        ))}
      </ol>

      <footer
        className={cn(
          'mt-auto flex items-start gap-sm rounded-xl border p-sm sm:p-md',
          palette.footerBorder,
          palette.footerBg,
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
            palette.footerIconBox,
          )}
        >
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className={cn('text-xsm sm:text-sm leading-snug font-bold break-keep', palette.title)}>
          {card.footer}
        </p>
      </footer>
    </article>
  );
};

const TimelineNodeBox = ({ node, kind }: { node: TimelineNode; kind: 'sync' | 'concurrent' }) => {
  const palette = timelinePalette[kind];
  if (node.yield) {
    return (
      <span
        className={cn(
          'inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-dashed',
          palette.yieldNodeBg,
          palette.yieldNodeText,
          palette.yieldNodeBorder,
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <span className="text-lg sm:text-xl leading-none">{node.label}</span>
      </span>
    );
  }
  if (node.finish) {
    return (
      <span
        className={cn(
          'inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2',
          'border-emerald-300/80 bg-emerald-50 text-emerald-700',
          'dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <span className="text-lg sm:text-xl leading-none">{node.label}</span>
      </span>
    );
  }
  return (
    <span
      className={cn(
        'inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2',
        palette.nodeBg,
        palette.nodeText,
        palette.nodeBorder,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span className="text-md sm:text-lg font-bold leading-none">{node.label}</span>
    </span>
  );
};

const timelinePalette = {
  sync: {
    title: 'text-sky-800 dark:text-sky-100',
    cardBorder: 'border-sky-300/80 dark:border-sky-700/70',
    cardBg: 'bg-sky-50/40 dark:bg-sky-950/20',
    tag: 'border-sky-300/70 bg-white/70 text-sky-700 dark:bg-slate-950/60 dark:text-sky-200 dark:border-sky-700/60',
    arrow: 'text-sky-500/80 dark:text-sky-300/80',
    nodeBg: 'bg-white dark:bg-slate-950/40',
    nodeText: 'text-sky-800 dark:text-sky-100',
    nodeBorder: 'border-sky-300/80 dark:border-sky-700/70',
    yieldNodeBg: '',
    yieldNodeText: '',
    yieldNodeBorder: '',
    yieldCaption: '',
    footerBorder: 'border-sky-200/70 dark:border-sky-800/60',
    footerBg: 'bg-white/70 dark:bg-slate-950/40',
    footerIconBox:
      'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  },
  concurrent: {
    title: 'text-teal-800 dark:text-teal-100',
    cardBorder: 'border-teal-300/80 dark:border-teal-700/70',
    cardBg: 'bg-teal-50/40 dark:bg-teal-950/20',
    tag: 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60',
    arrow: 'text-teal-500/80 dark:text-teal-300/80',
    nodeBg: 'bg-white dark:bg-slate-950/40',
    nodeText: 'text-teal-800 dark:text-teal-100',
    nodeBorder: 'border-teal-300/80 dark:border-teal-700/70',
    yieldNodeBg: 'bg-amber-50/80 dark:bg-amber-950/30',
    yieldNodeText: 'text-amber-700 dark:text-amber-200',
    yieldNodeBorder: 'border-amber-300/80 dark:border-amber-700/70',
    yieldCaption: 'text-amber-700 dark:text-amber-200 font-bold',
    footerBorder: 'border-teal-200/70 dark:border-teal-800/60',
    footerBg: 'bg-white/70 dark:bg-slate-950/40',
    footerIconBox:
      'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  },
} as const;
