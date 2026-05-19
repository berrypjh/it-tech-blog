import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../../usage-vs-internals/components/StepSectionHeader';
import type { RoadmapContent } from '../content';
import { ChevronRightIcon, StarIcon, StarOutlineIcon } from '../icons';
import { tones } from '../tones';

type Props = { content: RoadmapContent['courses'] };

const StarRating = ({ count, max = 5 }: { count: number; max?: number }) => {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: max }).map((_, i) =>
        i < count ? (
          <StarIcon key={i} className="h-3 w-3 text-amber-500 dark:text-amber-400" />
        ) : (
          <StarOutlineIcon key={i} className="h-3 w-3 text-[var(--term-dim)]" />
        ),
      )}
    </span>
  );
};

export const RecommendedCourses = ({ content }: Props) => {
  return (
    <section id="section-courses" aria-labelledby="heading-courses" className="space-y-lg">
      <StepSectionHeader id="courses" num={content.sectionNum} title={content.title} />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = tones[card.tone];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group relative flex flex-col w-full h-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg pt-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  t.hoverBorder,
                )}
              >
                {/* 상단 컬러 ribbon */}
                <span
                  aria-hidden="true"
                  className={cn('absolute top-0 left-3 right-3 h-0.5 rounded-b-full', t.ribbon)}
                />

                {/* label */}
                <p className={cn('text-[10px] uppercase tracking-wider font-bold', t.text)}>
                  {card.label}
                </p>

                {/* title */}
                <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.title}
                </h3>

                {/* description */}
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {card.description}
                </p>

                {/* route flow pills */}
                <div className="mt-sm">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold mb-1.5">
                    route
                  </p>
                  <div className="flex flex-wrap items-center gap-1">
                    {card.route.map((label, i) => (
                      <Fragment key={label}>
                        <span
                          className={cn(
                            'inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold',
                            t.chip,
                          )}
                        >
                          {label}
                        </span>
                        {i < card.route.length - 1 && (
                          <ChevronRightIcon
                            aria-hidden="true"
                            className={cn('h-3 w-3 shrink-0', t.iconText)}
                          />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>

                {/* meta (duration + difficulty) */}
                <footer className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)] grid grid-cols-2 gap-sm">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                      {card.durationLabel}
                    </span>
                    <span className="text-xsm font-bold text-[var(--term-fg)]">
                      {card.duration}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                      {card.difficultyLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <StarRating count={card.difficultyStars} />
                      <span className="text-[10px] text-[var(--term-muted)] font-bold">
                        ({card.difficultyText})
                      </span>
                    </span>
                  </div>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
