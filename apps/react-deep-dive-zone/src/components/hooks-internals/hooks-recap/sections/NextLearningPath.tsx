import { cn } from '@it-tech-blog/utils';

import { Compass, Gauge, Network, Rocket, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { HooksRecapContent, LearningPathItem } from '../content';

import { toneCardBg, toneIconBox, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['nextPath'] };

const visualMap = {
  event: Zap,
  scheduler: Gauge,
  suspense: Rocket,
};

const Card = ({ item }: { item: LearningPathItem }) => {
  const Icon = visualMap[item.visual] ?? Network;
  return (
    <article
      className={cn(
        'h-full flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5',
        toneCardBg[item.tone],
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
            toneIconBox[item.tone],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-sm sm:text-md font-bold break-keep', toneText[item.tone])}>
          {item.title}
        </h3>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
        {item.description}
      </p>
    </article>
  );
};

export const NextLearningPath = ({ content }: Props) => (
  <section
    aria-labelledby="heading-next-path"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="next-path"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Compass className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.items.map((item) => (
        <li key={item.title}>
          <Card item={item} />
        </li>
      ))}
    </ul>
  </section>
);
