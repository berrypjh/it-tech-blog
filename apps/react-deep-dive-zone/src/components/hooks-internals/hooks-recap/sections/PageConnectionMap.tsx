import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { HooksRecapContent, PageMapItem } from '../content';
import { MapIcon, MapPinIcon } from '../icons';

import { toneCardBg, toneNumber, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['pageMap'] };

const PageCard = ({ item }: { item: PageMapItem }) => (
  <article
    className={cn(
      'h-full flex flex-col gap-2 rounded-2xl border-2 p-md',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5',
      toneCardBg[item.tone],
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-mono font-bold tabular-nums',
          toneNumber[item.tone],
        )}
      >
        {item.number}
      </span>
      <MapPinIcon aria-hidden="true" className={cn('h-4 w-4', toneText[item.tone])} />
    </header>
    <h3
      className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', toneText[item.tone])}
    >
      {item.title}
    </h3>
    <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
      {item.description}
    </p>
  </article>
);

export const PageConnectionMap = ({ content }: Props) => (
  <section
    aria-labelledby="heading-page-map"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="page-map"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.items.map((item) => (
        <li key={item.number}>
          <PageCard item={item} />
        </li>
      ))}
    </ul>
  </section>
);
