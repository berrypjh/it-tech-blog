import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { TypeKeyReuseContent } from '../content';
import { ArrowRightIcon, ChevronDownIcon, RecycleIcon } from '../icons';

import { NextCard, PreviousCard, ResultCardView } from './case-cards';

type Props = { content: TypeKeyReuseContent['sameKeyType'] };

export const SameKeySameTypeCase = ({ content }: Props) => {
  const items = [
    <PreviousCard key="prev" side={content.previous} />,
    <NextCard key="next" side={content.next} kind="reuse" />,
    <ResultCardView key="result" result={content.result} />,
  ];
  return (
    <section
      id="same-key-type"
      aria-labelledby="heading-same-key-type"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="same-key-type"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RecycleIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.1fr)] items-stretch gap-3">
        {items.map((node, idx) => (
          <Fragment key={idx}>
            <div className="min-w-0">{node}</div>
            {idx < items.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'flex shrink-0 items-center justify-center',
                  'lg:px-0.5 py-1 lg:py-0',
                  'text-teal-500/80 dark:text-teal-300/80',
                )}
              >
                <ArrowRightIcon className="hidden lg:block h-5 w-5" />
                <ChevronDownIcon className="lg:hidden h-5 w-5" />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
