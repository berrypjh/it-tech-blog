import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ChangelogContent, TimelineItem } from '../content';
import { BookOpenIcon, StarIcon } from '../icons';
import { accentCycle } from '../tone-accent';

type Props = { content: ChangelogContent['timeline'] };

export const ChangelogTimeline = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-timeline" className="space-y-md">
      <SectionHeader
        id="timeline"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpenIcon className="h-5 w-5" />}
      />

      <ol className="relative flex flex-col gap-md">
        {/* 좌측 세로 timeline line (중립) */}
        <span
          aria-hidden="true"
          className="hidden sm:block absolute left-[18px] top-3 bottom-3 w-px bg-[var(--term-border)]"
        />
        {content.items.map((item, idx) => (
          <li key={item.id}>
            <TimelineCard item={item} index={idx} />
          </li>
        ))}
      </ol>

      <div
        className={cn(
          'flex items-start gap-sm rounded-2xl border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
          )}
        >
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md leading-snug font-bold break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

type CardProps = { item: TimelineItem; index: number };

const TimelineCard = ({ item, index }: CardProps) => {
  const tone = accentCycle[index % accentCycle.length];
  return (
    <article
      className={cn(
        'relative flex items-start gap-md rounded-lg border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'p-md transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      {/* 원형 dot */}
      <span
        aria-hidden="true"
        className={cn(
          'relative z-10 inline-flex items-center justify-center w-9 h-9 rounded-full',
          'border-2 font-bold text-sm shrink-0',
          tone.chip,
          tone.border,
        )}
      >
        <span className={cn('inline-block w-2 h-2 rounded-full', tone.dot)} />
      </span>

      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-bold tracking-tight break-keep', tone.text)}>
          {item.version}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {item.description}
        </p>
      </div>
    </article>
  );
};
