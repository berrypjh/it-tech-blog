import { Fragment } from 'react';

import { ArrowRight, ChevronDown, Recycle } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { TypeKeyReuseContent } from '../content';

import { NextCard, PreviousCard, ResultCardView } from './case-cards';

type Props = { content: TypeKeyReuseContent['sameKeyType'] };

export const SameKeySameTypeCase = ({ content }: Props) => {
  const items = [
    <PreviousCard key="prev" side={content.previous} />,
    <NextCard key="next" side={content.next} kind="reuse" />,
    <ResultCardView key="result" result={content.result} />,
  ];
  return (
    <section id="same-key-type" aria-labelledby="heading-same-key-type" className="space-y-md">
      <SectionHeader
        id="same-key-type"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Recycle className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.1fr)] items-stretch gap-3">
        {items.map((node, idx) => (
          <Fragment key={idx}>
            <div className="min-w-0">{node}</div>
            {idx < items.length - 1 && (
              <span
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center lg:px-0.5 py-1 lg:py-0 text-[var(--term-accent)]"
              >
                <ArrowRight className="hidden lg:block h-5 w-5" aria-hidden="true" />
                <ChevronDown className="lg:hidden h-5 w-5" aria-hidden="true" />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
