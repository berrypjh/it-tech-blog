import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { TypeKeyReuseContent } from '../content';
import { ArrowRightIcon, ChevronDownIcon, KeyIcon, Link2OffIcon, ZapIcon } from '../icons';

import { NextCard, PreviousCard, ResultCardView } from './case-cards';

type Props = { content: TypeKeyReuseContent['differentKey'] };

export const DifferentKeyCase = ({ content }: Props) => {
  const items = [
    <PreviousCard key="prev" side={content.previous} />,
    <NextCard key="next" side={content.next} kind="replace" />,
    <ResultCardView key="result" result={content.result} />,
    <StateBreakCard key="break" data={content.stateBreak} />,
  ];

  return (
    <section
      id="different-key"
      aria-labelledby="heading-different-key"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="different-key"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<KeyIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.1fr)] items-stretch gap-3">
        {items.map((node, idx) => (
          <Fragment key={idx}>
            <div className="min-w-0">{node}</div>
            {idx < items.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'flex shrink-0 items-center justify-center',
                  'xl:px-0.5 py-1 xl:py-0',
                  idx === items.length - 2
                    ? 'text-rose-500/80 dark:text-rose-300/80'
                    : 'text-rose-400/70 dark:text-rose-300/70',
                )}
              >
                <ArrowRightIcon className="hidden xl:block h-5 w-5" />
                <ChevronDownIcon className="xl:hidden h-5 w-5" />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

const StateBreakCard = ({ data }: { data: TypeKeyReuseContent['differentKey']['stateBreak'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-3 rounded-2xl border-2 border-dashed p-md sm:p-lg',
      'border-rose-300/80 bg-rose-50/40',
      'dark:border-rose-700/70 dark:bg-rose-950/20',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-rose-100 text-rose-700 border-rose-200/80',
          'dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
        )}
      >
        <Link2OffIcon className="h-4 w-4" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-rose-800 dark:text-rose-100 break-keep">
        {data.title}
      </h3>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-center gap-2">
      <article
        className={cn(
          'flex flex-col items-center gap-0.5 rounded-xl border p-sm',
          'border-sky-300/80 bg-white text-sky-900',
          'dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-100',
        )}
      >
        <code className="font-mono text-xsm font-bold">{data.previous.key}</code>
        <code className="font-mono text-[10px] text-sky-700 dark:text-sky-300">
          {data.previous.count}
        </code>
      </article>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-full',
          'bg-rose-100 text-rose-700 border border-rose-200/80',
          'dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
          'mx-auto',
        )}
      >
        <ZapIcon className="h-4 w-4" />
      </span>
      <article
        className={cn(
          'flex flex-col items-center gap-0.5 rounded-xl border p-sm',
          'border-rose-300/80 bg-white text-rose-900',
          'dark:border-rose-700/70 dark:bg-slate-950/40 dark:text-rose-100',
        )}
      >
        <code className="font-mono text-xsm font-bold">{data.next.key}</code>
        <code className="font-mono text-[10px] text-rose-700 dark:text-rose-300">
          {data.next.count}
        </code>
        <span className="text-[10px] font-mono uppercase tracking-wider text-rose-700 dark:text-rose-300">
          {data.next.note}
        </span>
      </article>
    </div>
  </article>
);
