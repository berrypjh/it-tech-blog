import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { TypeKeyReuseContent } from '../content';
import { facetFor } from '../facets';
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
    <section id="different-key" aria-labelledby="heading-different-key" className="space-y-md">
      <SectionHeader
        id="different-key"
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
                className="flex shrink-0 items-center justify-center xl:px-0.5 py-1 xl:py-0 text-[var(--term-accent)]"
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

const StateBreakCard = ({ data }: { data: TypeKeyReuseContent['differentKey']['stateBreak'] }) => {
  const rose = facetFor('rose');
  const sky = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border border-dashed p-md sm:p-lg shadow-[0_1px_0_var(--term-border)]',
        rose.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            rose.chip,
          )}
        >
          <Link2OffIcon className="h-4 w-4" />
        </span>
        <h3 className={cn('text-sm sm:text-md font-bold break-keep', rose.text)}>{data.title}</h3>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-center gap-2">
        <article
          className={cn(
            'flex flex-col items-center gap-0.5 rounded-md border bg-[var(--term-bg)] p-sm',
            sky.border,
          )}
        >
          <code className={cn('font-mono text-xsm font-bold', sky.text)}>{data.previous.key}</code>
          <code className={cn('font-mono text-xxsm', sky.text)}>{data.previous.count}</code>
        </article>
        <span
          aria-hidden="true"
          className={cn(
            'mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full border',
            rose.chip,
          )}
        >
          <ZapIcon className="h-4 w-4" />
        </span>
        <article
          className={cn(
            'flex flex-col items-center gap-0.5 rounded-md border bg-[var(--term-bg)] p-sm',
            rose.border,
          )}
        >
          <code className={cn('font-mono text-xsm font-bold', rose.text)}>{data.next.key}</code>
          <code className={cn('font-mono text-xxsm', rose.text)}>{data.next.count}</code>
          <span className={cn('text-xxsm font-mono uppercase tracking-wider', rose.text)}>
            {data.next.note}
          </span>
        </article>
      </div>
    </article>
  );
};
