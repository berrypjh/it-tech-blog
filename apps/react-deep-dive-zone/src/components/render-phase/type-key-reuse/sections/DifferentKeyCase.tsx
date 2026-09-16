import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ArrowRight, ChevronDown, Key, Link2Off, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { TypeKeyReuseContent } from '../content';
import { facetFor } from '../facets';

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
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Key className="h-5 w-5" aria-hidden="true" />}
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
                <ArrowRight className="hidden xl:block h-5 w-5" aria-hidden="true" />
                <ChevronDown className="xl:hidden h-5 w-5" aria-hidden="true" />
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
      className={cx(
        'flex h-full flex-col gap-3 rounded-lg border border-dashed p-md sm:p-lg shadow-[0_1px_0_var(--term-border)]',
        rose.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            rose.chip,
          )}
        >
          <Link2Off className="h-4 w-4" aria-hidden="true" />
        </span>
        <h3 className={cx('text-sm sm:text-md font-bold break-keep', rose.text)}>{data.title}</h3>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-center gap-2">
        <article
          className={cx(
            'flex flex-col items-center gap-0.5 rounded-md border bg-[var(--term-bg)] p-sm',
            sky.border,
          )}
        >
          <code className={cx('font-mono text-xsm font-bold', sky.text)}>{data.previous.key}</code>
          <code className={cx('font-mono text-xxsm', sky.text)}>{data.previous.count}</code>
        </article>
        <span
          aria-hidden="true"
          className={cx(
            'mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full border',
            rose.chip,
          )}
        >
          <Zap className="h-4 w-4" aria-hidden="true" />
        </span>
        <article
          className={cx(
            'flex flex-col items-center gap-0.5 rounded-md border bg-[var(--term-bg)] p-sm',
            rose.border,
          )}
        >
          <code className={cx('font-mono text-xsm font-bold', rose.text)}>{data.next.key}</code>
          <code className={cx('font-mono text-xxsm', rose.text)}>{data.next.count}</code>
          <span className={cx('text-xxsm font-mono uppercase tracking-wider', rose.text)}>
            {data.next.note}
          </span>
        </article>
      </div>
    </article>
  );
};
